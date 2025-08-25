<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/mailer_config.php';   // SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT
session_start();
header('Content-Type: application/json');

/* ---- 0. Security Layer ---- */
session_start();

/* --- CSRF token check --- */
/*if (!isset($_POST['_token']) || $_POST['_token'] !== ($_SESSION['_token'] ?? '')) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}*/
$clientToken = $_POST['_token'] ?? '';
$serverToken = $_SESSION['_token'] ?? '';

/* If you prefer server-side tokens, generate here and store in session */
if (empty($serverToken)) {
    $serverToken = bin2hex(random_bytes(32));
    $_SESSION['_token'] = $serverToken;
}

if ($clientToken !== $serverToken) {
    http_response_code(403);
    echo json_encode(['success'=>false,'message'=>'Invalid request']);
    exit;
}

/* --- Rate-limit 60 s per IP (simple) --- */
$limiterKey = 'ip_' . $_SERVER['REMOTE_ADDR'];
if (isset($_SESSION[$limiterKey]) && (time() - $_SESSION[$limiterKey]) < 60) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests']);
    exit;
}
$_SESSION[$limiterKey] = time();

/* 1. CAPTCHA */
$userCaptcha = strtoupper(trim($_POST['captcha'] ?? ''));
$expected    = strtoupper(trim($_SESSION['captcha'] ?? ''));
if ($userCaptcha !== $expected) {
    $_SESSION['captcha'] = '';
    echo json_encode(['success' => false, 'message' => 'Wrong CAPTCHA']);
    exit;
}

/* 2. Sanitize & validate (field-by-field) */
function sanitize($x) {
    return htmlspecialchars(strip_tags(trim($x)), ENT_QUOTES, 'UTF-8');
}

$name    = sanitize($_POST['name']    ?? '');
$email   = sanitize($_POST['email']   ?? '');
$phone   = sanitize($_POST['phone']   ?? '');
$service = sanitize($_POST['service'] ?? $_POST['transport'] ?? '');
$message = sanitize($_POST['message'] ?? '');
$formType= sanitize($_POST['form_type'] ?? 'unknown');

/* --- per-form required-field lists --- */
$required = ['name', 'email'];              // default
if ($formType === 'quote') {
    $required = ['name', 'email', 'phone', 'service'];
} elseif ($formType === 'contact') {
    $required = ['name', 'email', 'message'];
} elseif ($formType === 'career') {
    $required = ['name', 'email'];          // message optional, résumé checked below
}

/* --- individual checks so we can say exactly what’s missing --- */
foreach ($required as $field) {
    if (empty($$field)) {
        echo json_encode(['success' => false, 'message' => ucfirst($field) . ' is required.']);
        exit;
    }
}

/* 3. Send e-mail */
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // or ENCRYPTION_STARTTLS
    $mail->Port       = SMTP_PORT;

    //
    $mail->setFrom(SMTP_USER, 'Website');
    $mail->addAddress('info@easterncargo.co.in');
    $mail->addReplyTo($email, $name);
    
    //
    $mail->isHTML(true);
    $mail->Subject = "New {$formType} request – Eastern Cargo";
    $mail->Body    = "
        <h2>New {$formType} request</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Service:</strong> {$service}</p>
        <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
    ";

    /* --- résumé attachment (career form) --- */
    if ($formType === 'career' && isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $allowed = ['pdf', 'doc', 'docx'];
        $ext = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));
        if (!in_array($ext, $allowed)) {
            throw new Exception('Invalid file type. Only PDF, DOC, DOCX allowed.');
        }
        if ($_FILES['resume']['size'] > 2 * 1024 * 1024) {
            throw new Exception('File too large. Maximum 2 MB.');
        }
        $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
    }

    $mail->send();
    $_SESSION['captcha'] = '';
    echo json_encode(['success' => true, 'message' => 'Thank you! We will get back to you soon.']);
} catch (Exception $e) {
    $_SESSION['captcha'] = '';
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}