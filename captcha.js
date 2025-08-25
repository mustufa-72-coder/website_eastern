// ==========  UNIVERSAL CAPTCHA + AJAX SUBMIT (3 FORMS)  ==========
(function () {
    /* 1. CAPTCHA generator */
    function generateCaptcha(id) {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        document.getElementById(id).textContent =
            [...Array(6)].map(() => chars[~~(Math.random() * chars.length)]).join('');
    }

    /* 2. CAPTCHA validator + AJAX submit  – ONLY CAPTCHA CHECK */
    function validateCaptcha(form) {
        const MAP = {
            quoteForm:  { span: 'captcha1', input: 'captcha-input1', error: 'captcha-error1', success: 'captcha-success1' },
            contactForm:{ span: 'captcha3', input: 'captcha-input3', error: 'captcha-error3', success: 'captcha-success3' },
            careerForm: { span: 'captcha2', input: 'captcha-input2', error: 'captcha-error2', success: 'captcha-success2' }
        };
        const cfg = MAP[form.id];
        if (!cfg) return false;

        const entered = document.getElementById(cfg.input).value.trim().toUpperCase();
        const actual  = document.getElementById(cfg.span).textContent.trim().toUpperCase();

        [cfg.error, cfg.success].forEach(id => document.getElementById(id).style.display = 'none');

        if (entered !== actual) {
            document.getElementById(cfg.error).style.display = 'block';
            document.getElementById(cfg.input).value = '';
            generateCaptcha(cfg.span);
            return false;
        }

        /* CAPTCHA ok → AJAX submit */
        const fd = new FormData(form);
        fd.append('form_type', form.querySelector('input[name="form_type"]').value);

        const btn = form.querySelector('button[type="submit"]');
        const txt = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;

        fetch('process_form1.php', { method: 'POST', body: fd })
            .then(r => r.json())
            .then(d => {
                if (d.success) {
                    showNotification('Submitted successfully!', 'success');
                    form.reset();
                    generateCaptcha(cfg.span);
                } else {
                    showNotification(d.message || 'CAPTCHA failed', 'error');
                    generateCaptcha(cfg.span);
                }
            })
            .catch(() => showNotification('❌ Network error. Try again.', 'error'))
            .finally(() => { btn.textContent = txt; btn.disabled = false; });
        return false;
    }

    /* 3. Notification helper (same as before) */
    function showNotification(msg, type = 'success') {
        const n = document.createElement('div');
        n.textContent = msg;
        n.style.cssText =
            `position:fixed;top:20px;right:20px;padding:12px 18px;border-radius:4px;color:#fff;font-weight:600;z-index:10000;${type === 'success' ? 'background:#28a745' : 'background:#dc3545'}`;
        document.body.appendChild(n);
        setTimeout(() => n.remove(), 4000);
    }

    /* 4. Initialise */
    document.addEventListener('DOMContentLoaded', () => {
        ['captcha1', 'captcha2', 'captcha3'].forEach(generateCaptcha);
        [1, 2, 3].forEach(i => {
            const btn = document.getElementById(`refresh-captcha${i}`);
            if (btn) btn.onclick = () => generateCaptcha(`captcha${i}`);
        });
        ['quoteForm', 'contactForm', 'careerForm'].forEach(id => {
            const f = document.getElementById(id);
            if (f) f.onsubmit = () => validateCaptcha(f);
        });
    });
})();