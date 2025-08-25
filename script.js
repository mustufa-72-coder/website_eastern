// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'white';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language Selector Functionality
const languageSelector = document.querySelector('.language-selector');
const languageModal = document.getElementById('languageModal');
const closeModal = document.querySelector('.close-modal');
const languageOptions = document.querySelectorAll('.language-option');

// Open language modal
languageSelector.addEventListener('click', () => {
    languageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close language modal
closeModal.addEventListener('click', () => {
    languageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === languageModal) {
        languageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Language translations
const translations = {
    en: {
        // Navigation
        'HOME': 'HOME',
        'ABOUT': 'ABOUT',
        'MEMBERSHIPS': 'MEMBERSHIPS',
        'SERVICES': 'SERVICES',
        'MORE': 'MORE',
        'Pharma Logistics': 'Pharma Logistics',
        'Healthcare Logistics': 'Healthcare Logistics',
        'DGR Shipments': 'DGR Shipments',
        'Project Logistics': 'Project Logistics',
        'Key Personnel': 'Key Personnel',
        'Calculator': 'Calculator',
        'Our Offices': 'Our Offices',
        'Customer Reviews': 'Customer Reviews',
        'CONTACT': 'CONTACT',
        'Have any Questions?': 'Have any Questions?',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Premium Worldwide Logistics',
        'Worldwide Logistics': 'Worldwide Logistics',
        'International Air Freight': 'International Air Freight',
        'Contact Us': 'Contact Us',
        'Get your free quote today': 'Get your free quote today',
        'Your Name': 'Your Name',
        'Email*': 'Email*',
        'Phone': 'Phone',
        'Transport': 'Transport',
        'Your Message': 'Your Message',
        'Request A Quote': 'Request A Quote',
        'Reliable & Efficient': 'Reliable & Efficient',
        'Multimodal Transport Network': 'Multimodal Transport Network',
        'Our Services': 'Our Services',
        'Global Trade Solutions': 'Global Trade Solutions',
        'Ocean Freight Solutions': 'Ocean Freight Solutions',
        'Get a Quote': 'Get a Quote',

         // Quote Form
        'Name': 'Name',                                   
        'Email': 'Email',                                 
        'Phone': 'Phone',                               
        'Service Type': 'Service Type',                   
        'Air Freight': 'Air Freight',                     
        'Sea Freight': 'Sea Freight',                     
        'Land Transport': 'Land Transport',               
        'Warehousing': 'Warehousing',                     
        'Your Message': 'Your Message',                  
        'Enter CAPTCHA': 'Enter CAPTCHA',                 
        'Request A Quote': 'Request A Quote',

        
        //WHY CHOOSE US
        'WHY CHOOSE US': 'WHY CHOOSE US',
        'Delivering Comprehensive Global Logistics Solutions': 'Delivering Comprehensive Global Logistics Solutions',
        'Watch Video': 'Watch Video',
        'WHAT WE DO': 'WHAT WE DO',
        'OUR AWARD': 'OUR AWARD',
        'COMPANY HISTORY': 'COMPANY HISTORY',
        'Warehouse Facility': 'Warehouse Facility',
        'Air Freight Facility': 'Air Freight Facility',
        'Cost Effective Pricing': 'Cost Effective Pricing',
        'Timely Delivery': 'Timely Delivery',
        'Container delivery': 'Container delivery',
        'Best Team Member': 'Best Team Member',
        'Learn More': 'Learn More',
        'Global Network': 'Global Network',               
        'Real-time Tracking': 'Real-time Tracking',       
        'Customs Expertise': 'Customs Expertise',         
        'Multi-modal Transport': 'Multi-modal Transport', 
        'Risk Management': 'Risk Management', 
        
        // Memberships
        'Memberships & Certifications': 'Memberships & Certifications',
        'Proud members of leading global logistics organizations': 'Proud members of leading global logistics organizations',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'About EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Our Legacy & Commitment',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Ecc\'s Group Key Milestones in Aviation and Logistics',
        'Custom House Agent': 'Custom House Agent',
        'Established as a CHA': 'Established as a CHA',
        'IATA Agent': 'IATA Agent',
        'Leveraging accreditation': 'Leveraging accreditation',
        'Charter Operation': 'Charter Operation',
        'Initiated first charter': 'Initiated first charter',
        'Network Expansion': 'Network Expansion',
        'Achieved Pan-India presence': 'Achieved Pan-India presence',
        'GSAs & Consolidation': 'GSAs & Consolidation',
        'Key GSA partnerships': 'Key GSA partnerships',
        'Pharma Expertise': 'Pharma Expertise',
        'Specialized services': 'Specialized services',
        'Temp Warehouse': 'Temp Warehouse',
        'Pharma packaging': 'Pharma packaging',
        'Critical Response': 'Critical Response',
        'Imported life-saving drugs': 'Imported life-saving drugs',
        'Governor\'s Award': 'Governor\'s Award',
        'For Pharma Exports': 'For Pharma Exports',
        
        // Features
        'Export Logistics': 'Export Logistics',
        'Fast Delivery': 'Fast Delivery',
        '24/7 Support': '24/7 Support',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.',
        
        // Services
        'Our Services': 'Our Services',
        'Wide variety of logistics services': 'Wide variety of logistics services',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.',
        'Air Freight (Export & Import)': 'Air Freight (Export & Import)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.',
        'Ocean Freight (Import & Export)': 'Ocean Freight (Import & Export)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.',
        'Customs Brokerage': 'Customs Brokerage',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.',
        'Warehouse & Distribution': 'Warehouse & Distribution',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.',
        'Air Charter': 'Air Charter',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.',
        'Your Pet Pal': 'Your Pet Pal',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Specialized Pharma Logistics',
        'Delivering health with precision and care since 1987': 'Delivering health with precision and care since 1987',
        'A Passion for Time-Sensitive Shipments': 'A Passion for Time-Sensitive Shipments',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.',
        'Pharma-Focused Operations:': 'Pharma-Focused Operations:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'A dedicated team trained specifically in the nuances of handling all types of life science products.',
        'Quality & Compliance:': 'Quality & Compliance:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.',
        'Temperature-Controlled Solutions:': 'Temperature-Controlled Solutions:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.',
        'Established Carrier Relations:': 'Established Carrier Relations:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.',
        'Our Temperature-Controlled Solutions': 'Our Temperature-Controlled Solutions',
        'Envirotainers (Active)': 'Envirotainers (Active)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.',
        'Thermal Blankets (Passive)': 'Thermal Blankets (Passive)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.',
        'Cool Boxes (Passive)': 'Cool Boxes (Passive)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Dangerous Goods Shipment Handling',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land',
        'Our Comprehensive DGR Services': 'Our Comprehensive DGR Services',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.',
        'Expert Classification & Identification:': 'Expert Classification & Identification:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Accurate classification of hazardous materials according to their specific properties and risks.',
        'Compliant Packaging & Labelling:': 'Compliant Packaging & Labelling:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.',
        'Documentation & Compliance:': 'Documentation & Compliance:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).',
        'Certified Handling & Transport:': 'Certified Handling & Transport:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.',
        'End-to-End Logistics Support:': 'End-to-End Logistics Support:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.',
        
        // Project Logistics
        'Project Logistics': 'Project Logistics',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Specialized solutions for complex project cargo and heavy equipment transportation',
        'End-to-End Project Cargo Solutions': 'End-to-End Project Cargo Solutions',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.',
        'Our Project Logistics Services': 'Our Project Logistics Services',
        'Heavy Equipment Transport:': 'Heavy Equipment Transport:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.',
        'Oversized Cargo Solutions:': 'Oversized Cargo Solutions:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.',
        'Project Coordination:': 'Project Coordination:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.',
        'Multi-Modal Transport:': 'Multi-Modal Transport:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Seamless integration of air, sea, and land transport modes for complex project requirements.',
        'Site Delivery & Installation:': 'Site Delivery & Installation:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'On-site delivery coordination, equipment positioning, and installation support services.',
        'Industries We Serve': 'Industries We Serve',
        'Oil & Gas': 'Oil & Gas',
        'Pipeline equipment, drilling machinery, and refinery components': 'Pipeline equipment, drilling machinery, and refinery components',
        'Power Generation': 'Power Generation',
        'Turbines, generators, transformers, and power plant equipment': 'Turbines, generators, transformers, and power plant equipment',
        'Manufacturing': 'Manufacturing',
        'Production lines, industrial machinery, and manufacturing equipment': 'Production lines, industrial machinery, and manufacturing equipment',
        'Infrastructure': 'Infrastructure',
        'Construction equipment, bridge components, and infrastructure materials': 'Construction equipment, bridge components, and infrastructure materials',
        
        // Personnel
        'Key Personnel': 'Key Personnel',
        'Meet our experienced team across India': 'Meet our experienced team across India',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Smart Cargo Calculator',
        'Centimeters (CM)': 'Centimeters (CM)',
        'Inches (IN)': 'Inches (IN)',
        'Package Dimensions': 'Package Dimensions',
        '+ Add Package': '+ Add Package',
        'Reset': 'Reset',
        'Calculate': 'Calculate',
        
        // Locations
        'Our Nationwide Presence': 'Our Nationwide Presence',
        'Bengaluru': 'Bengaluru',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Premium Worldwide Logistics',
        'International Air Freight': 'International Air Freight',
        'Contact Us': 'Contact Us',
        'Get your free quote today': 'Get your free quote today',
        'Your Name': 'Your Name',
        'Email*': 'Email*',
        'Phone': 'Phone',
        'Transport': 'Transport',
        'Your Message': 'Your Message',
        'Request A Quote': 'Request A Quote',
        'Reliable & Efficient': 'Reliable & Efficient',
        'Multimodal Transport Network': 'Multimodal Transport Network',
        'Our Services': 'Our Services',
        'Global Trade Solutions': 'Global Trade Solutions',
        'Ocean Freight Solutions': 'Ocean Freight Solutions',
        'Get a Quote': 'Get a Quote',
        
        // Memberships
        'Memberships & Certifications': 'Memberships & Certifications',
        'Proud members of leading global logistics organizations': 'Proud members of leading global logistics organizations',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'About EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Our Legacy & Commitment',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Ecc\'s Group Key Milestones in Aviation and Logistics',
        'Custom House Agent': 'Custom House Agent',
        'Established as a CHA': 'Established as a CHA',
        'IATA Agent': 'IATA Agent',
        'Leveraging accreditation': 'Leveraging accreditation',
        'Charter Operation': 'Charter Operation',
        'Initiated first charter': 'Initiated first charter',
        'Network Expansion': 'Network Expansion',
        'Achieved Pan-India presence': 'Achieved Pan-India presence',
        'GSAs & Consolidation': 'GSAs & Consolidation',
        'Key GSA partnerships': 'Key GSA partnerships',
        'Pharma Expertise': 'Pharma Expertise',
        'Specialized services': 'Specialized services',
        'Temp Warehouse': 'Temp Warehouse',
        'Pharma packaging': 'Pharma packaging',
        'Critical Response': 'Critical Response',
        'Imported life-saving drugs': 'Imported life-saving drugs',
        'Governor\'s Award': 'Governor\'s Award',
        'For Pharma Exports': 'For Pharma Exports',
        
        // Features
        'Export Logistics': 'Export Logistics',
        'Fast Delivery': 'Fast Delivery',
        '24/7 Support': '24/7 Support',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.',
        
        // Services
        'Our Services': 'Our Services',
        'Wide variety of logistics services': 'Wide variety of logistics services',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.',
        'Air Freight (Export & Import)': 'Air Freight (Export & Import)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.',
        'Ocean Freight (Import & Export)': 'Ocean Freight (Import & Export)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.',
        'Customs Brokerage': 'Customs Brokerage',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.',
        'Warehouse & Distribution': 'Warehouse & Distribution',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.',
        'Air Charter': 'Air Charter',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.',
        'Your Pet Pal': 'Your Pet Pal',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Specialized Pharma Logistics',
        'Delivering health with precision and care since 1987': 'Delivering health with precision and care since 1987',
        'A Passion for Time-Sensitive Shipments': 'A Passion for Time-Sensitive Shipments',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.',
        'Pharma-Focused Operations:': 'Pharma-Focused Operations:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'A dedicated team trained specifically in the nuances of handling all types of life science products.',
        'Quality & Compliance:': 'Quality & Compliance:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.',
        'Temperature-Controlled Solutions:': 'Temperature-Controlled Solutions:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.',
        'Established Carrier Relations:': 'Established Carrier Relations:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.',
        'Our Temperature-Controlled Solutions': 'Our Temperature-Controlled Solutions',
        'Envirotainers (Active)': 'Envirotainers (Active)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.',
        'Thermal Blankets (Passive)': 'Thermal Blankets (Passive)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.',
        'Cool Boxes (Passive)': 'Cool Boxes (Passive)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Dangerous Goods Shipment Handling',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land',
        'Our Comprehensive DGR Services': 'Our Comprehensive DGR Services',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.',
        'Expert Classification & Identification:': 'Expert Classification & Identification:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Accurate classification of hazardous materials according to their specific properties and risks.',
        'Compliant Packaging & Labelling:': 'Compliant Packaging & Labelling:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.',
        'Documentation & Compliance:': 'Documentation & Compliance:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).',
        'Certified Handling & Transport:': 'Certified Handling & Transport:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.',
        'End-to-End Logistics Support:': 'End-to-End Logistics Support:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.',
        
        // Project Logistics
        'Project Logistics': 'Project Logistics',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Specialized solutions for complex project cargo and heavy equipment transportation',
        'End-to-End Project Cargo Solutions': 'End-to-End Project Cargo Solutions',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.',
        'Our Project Logistics Services': 'Our Project Logistics Services',
        'Heavy Equipment Transport:': 'Heavy Equipment Transport:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.',
        'Oversized Cargo Solutions:': 'Oversized Cargo Solutions:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.',
        'Project Coordination:': 'Project Coordination:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.',
        'Multi-Modal Transport:': 'Multi-Modal Transport:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Seamless integration of air, sea, and land transport modes for complex project requirements.',
        'Site Delivery & Installation:': 'Site Delivery & Installation:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'On-site delivery coordination, equipment positioning, and installation support services.',
        'Industries We Serve': 'Industries We Serve',
        'Oil & Gas': 'Oil & Gas',
        'Pipeline equipment, drilling machinery, and refinery components': 'Pipeline equipment, drilling machinery, and refinery components',
        'Power Generation': 'Power Generation',
        'Turbines, generators, transformers, and power plant equipment': 'Turbines, generators, transformers, and power plant equipment',
        'Manufacturing': 'Manufacturing',
        'Production lines, industrial machinery, and manufacturing equipment': 'Production lines, industrial machinery, and manufacturing equipment',
        'Infrastructure': 'Infrastructure',
        'Construction equipment, bridge components, and infrastructure materials': 'Construction equipment, bridge components, and infrastructure materials',
        
        // Personnel
        'Key Personnel': 'Key Personnel',
        'Meet our experienced team across India': 'Meet our experienced team across India',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Smart Cargo Calculator',
        'Centimeters (CM)': 'Centimeters (CM)',
        'Inches (IN)': 'Inches (IN)',
        'Package Dimensions': 'Package Dimensions',
        '+ Add Package': '+ Add Package',
        'Reset': 'Reset',
        'Calculate': 'Calculate',
        
        // Locations
        'Our Nationwide Presence': 'Our Nationwide Presence',
        'Bengaluru': 'Bengaluru',
        
        // Footer
        'Quick Links': 'Quick Links',
        'Company Profile': 'Company Profile',
        'Help Center': 'Help Center',
        'Career': 'Career',
        'Plans & Pricing': 'Plans & Pricing',
        'News & Blog': 'News & Blog',
        'Less Than Truckload': 'Less Than Truckload',
        'Rail Freight Shipping': 'Rail Freight Shipping',
        'Hot Shot Trucking': 'Hot Shot Trucking',
        'Freight forwarding': 'Freight forwarding',
        'Container Freight': 'Container Freight',
        'Newsletter': 'Newsletter',
        'Join our subscribers list to get the latest news and special offers.': 'Join our subscribers list to get the latest news and special offers.',
        'Subscribe': 'Subscribe'
    },
    fr: {
        // Navigation
        'HOME': 'ACCUEIL',
        'ABOUT': 'À PROPOS',
        'MEMBERSHIPS': 'ADHÉSIONS',
        'SERVICES': 'SERVICES',
        'MORE': 'PLUS',
        'Pharma Logistics': 'Logistique Pharmaceutique',
        'Healthcare Logistics': 'Logistique de Santé',
        'DGR Shipments': 'Expéditions DGR',
        'Project Logistics': 'Logistique de Projets',
        'Key Personnel': 'Personnel Clé',
        'Calculator': 'Calculateur',
        'Our Offices': 'Nos Bureaux',
        'Customer Reviews': 'Avis Clients',
        'CONTACT': 'CONTACT',
        'Have any Questions?': 'Avez-vous des questions?',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Logistique Mondiale Premium',
        'Worldwide Logistics': 'Logistique Mondiale',
        'International Air Freight': 'Fret Aérien International',
        'Contact Us': 'Contactez-nous',
        'Get your free quote today': 'Obtenez votre devis gratuit aujourd\'hui',
        'Your Name': 'Votre Nom',
        'Email*': 'Email*',
        'Phone': 'Téléphone',
        'Transport': 'Transport',
        'Your Message': 'Votre Message',
        'Request A Quote': 'Demander un Devis',
        'Reliable & Efficient': 'Fiable et Efficace',
        'Multimodal Transport Network': 'Réseau de Transport Multimodal',
        'Our Services': 'Nos Services',
        'Global Trade Solutions': 'Solutions de Commerce Mondial',
        'Ocean Freight Solutions': 'Solutions de Fret Maritime',
        'Get a Quote': 'Obtenir un Devis',

        // Quote Form
        'Name': 'Nom',                                 
        'Email': 'Email',                                 
        'Phone': 'Téléphone',                             
        'Service Type': 'Type de Service',                
        'Air Freight': 'Fret Aérien',                   
        'Sea Freight': 'Fret Maritime',                  
        'Land Transport': 'Transport Terrestre',          
        'Warehousing': 'Entrepôt',                        
        'Your Message': 'Votre Message',                  
        'Enter CAPTCHA': 'Entrez le CAPTCHA',             
        'Request A Quote': 'Demander un Devis',

        //WHY CHOOSE US
        'WHY CHOOSE US': 'POURQUOI NOUS CHOISIR',
        'Delivering Comprehensive Global Logistics Solutions': 'Offrir des solutions logistiques mondiales complètes',
        'Watch Video': 'Regarder la vidéo',
        'WHAT WE DO': 'CE QUE NOUS FAISONS',
        'OUR AWARD': 'NOTRE RÉCOMPENSE',
        'COMPANY HISTORY': 'HISTOIRE DE L’ENTREPRISE',
        'Warehouse Facility': 'Installation d’entrepôt',
        'Air Freight Facility': 'Installation de fret aérien',
        'Cost Effective Pricing': 'Tarification économique',
        'Timely Delivery': 'Livraison ponctuelle',
        'Container delivery': 'Livraison de conteneurs',
        'Best Team Member': 'Meilleur membre de l’équipe',
        'Learn More': 'En savoir plus',
        'Global Network': 'Réseau Mondial',               
        'Real-time Tracking': 'Suivi en Temps Réel',      
        'Customs Expertise': 'Expertise Douanière',      
        'Multi-modal Transport': 'Transport Multimodal',  
        'Risk Management': 'Gestion des Risques', 
        
        // Memberships
        'Memberships & Certifications': 'Adhésions et Certifications',
        'Proud members of leading global logistics organizations': 'Fiers membres des principales organisations logistiques mondiales',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'À propos d\'EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Notre Héritage et Engagement',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'En tant qu\'entreprise indienne fièrement indépendante et privée, Eastern Cargo Carriers (I) Pvt. Ltd. apporte plus de 45 ans d\'expérience dédiée à l\'industrie logistique. Nous nous spécialisons dans la fourniture d\'un service complet "De Bout en Bout" pour nos clients, couvrant tous les aspects des importations et exportations par transport aérien, maritime et terrestre, avec un dédouanement sans problème.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Notre présence mondiale est renforcée par notre enregistrement officiel en tant qu\'Opérateur de Transport Multimodal (MTO) auprès de la DG Shipping, Gouvernement de l\'Inde. Cela nous permet d\'offrir une expertise spécialisée dans un large éventail de secteurs, y compris la Cargaison de Projets, les Produits Chimiques, les Pharmaceutiques, les Vêtements, les Biens d\'Ingénierie, la Cargaison Liquide, la Cargaison Dangereuse (Haz), les expéditions à Température Contrôlée et la logistique E-Commerce.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'Nous nous engageons aux plus hauts standards de qualité, démontrés par notre certification ISO 9001, certification AEO pour un dédouanement optimisé, et notre entrepôt conforme GDP. En tant que membres enregistrés d\'IATA et FIATA, nous adhérons aux meilleures pratiques mondiales.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'Avec une présence robuste dans toute l\'Inde, nous fournissons des solutions flexibles et puissantes, du traitement de la cargaison à température contrôlée, dangereuse et liquide à l\'organisation de charters aériens et maritimes complets ou partiels. Nos capacités de fret maritime couvrent tout, des conteneurs FCL et LCL au vrac, RORO, levages lourds, équipements spéciaux et autres cargaisons anormales.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Jalons Clés du Groupe Ecc en Aviation et Logistique',
        'Custom House Agent': 'Agent en Douane',
        'Established as a CHA': 'Établi comme CHA',
        'IATA Agent': 'Agent IATA',
        'Leveraging accreditation': 'Exploiter l\'accréditation',
        'Charter Operation': 'Opération de Charter',
        'Initiated first charter': 'Premier charter initié',
        'Network Expansion': 'Expansion du Réseau',
        'Achieved Pan-India presence': 'Présence pan-indienne atteinte',
        'GSAs & Consolidation': 'GSAs et Consolidation',
        'Key GSA partnerships': 'Partenariats GSA clés',
        'Pharma Expertise': 'Expertise Pharmaceutique',
        'Specialized services': 'Services spécialisés',
        'Temp Warehouse': 'Entrepôt Temp',
        'Pharma packaging': 'Emballage pharmaceutique',
        'Critical Response': 'Réponse Critique',
        'Imported life-saving drugs': 'Médicaments salvateurs importés',
        'Governor\'s Award': 'Prix du Gouverneur',
        'For Pharma Exports': 'Pour les Exportations Pharmaceutiques',
        
        // Features
        'Export Logistics': 'Logistique d\'Exportation',
        'Fast Delivery': 'Livraison Rapide',
        '24/7 Support': 'Support 24/7',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Nos solutions logistiques d\'exportation optimisent le processus, assurant un transport fluide et ponctuel.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Les solutions logistiques régulières d\'exportation optimisent le processus, assurant un transport fluide et ponctuel.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Le support pour les solutions logistiques optimise le processus, assurant un transport fluide et ponctuel.',
        
        // Services
        'Our Services': 'Nos Services',
        'Wide variety of logistics services': 'Large gamme de services logistiques',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Notre entreprise logistique offre une large gamme de services adaptés pour répondre aux besoins uniques de chaque client. De l\'entreposage et la distribution à la gestion des transports et l\'approvisionnement.',
        'Air Freight (Export & Import)': 'Fret Aérien (Exportation et Importation)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'Avec plus de 25 ans sur le marché, nous avons une forte portée avec une large gamme de transporteurs aériens pour offrir des prix agressifs et des solutions sur mesure.',
        'Ocean Freight (Import & Export)': 'Fret Maritime (Importation et Exportation)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Services complets de fret maritime pour tous vos besoins d\'importation et d\'exportation, assurant une livraison fiable et ponctuelle dans le monde entier.',
        'Customs Brokerage': 'Transit en Douane',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'Nous offrons une gamme de services douaniers à valeur ajoutée pour faire passer vos expéditions en douane rapidement et efficacement.',
        'Warehouse & Distribution': 'Entrepôt et Distribution',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'Pour assurer le bon fonctionnement de votre chaîne d\'approvisionnement, nous offrons des services d\'entreposage et de distribution dédiés et partagés.',
        'Air Charter': 'Charter Aérien',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Depuis 1989, nous avons fourni des services urgents et complets de Charter de Cargaison Aérienne, gérant les demandes avec une formation approfondie.',
        'Your Pet Pal': 'Votre Compagnon Animal',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'Des chats et chiens aux chevaux, nous avons les connaissances pour gérer et transporter vos animaux de compagnie avec douceur et soin vers leur destination.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Logistique Pharmaceutique Spécialisée',
        'Delivering Comprehensive Global Logistics Solutions': 'Livraison de Solutions Logistiques Globales Complètes',
        'A Passion for Time-Sensitive Shipments': 'Une Passion pour les Expéditions Sensibles au Temps',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Avec un héritage dans la gestion des expéditions critiques de temps depuis 1987, nous apportons une expertise inégalée à la logistique pharmaceutique. Notre équipe est connue pour gérer avec succès des produits de sciences de la vie de haute valeur, y compris les expéditions d\'essais cliniques, les lancements de nouveaux produits et les livraisons vers des territoires spéciaux et difficiles.',
        'Pharma-Focused Operations:': 'Opérations Axées sur la Pharma:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Une équipe dédiée formée spécifiquement aux nuances de la gestion de tous types de produits de sciences de la vie.',
        'Quality & Compliance:': 'Qualité et Conformité:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Un engagement envers la Gestion de la Qualité, l\'Excellence Opérationnelle et des capacités douanières supérieures assure que vos expéditions répondent à tous les standards réglementaires.',
        'Temperature-Controlled Solutions:': 'Solutions à Température Contrôlée:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Nous fournissons à la fois des solutions pharma actives et passives pour maintenir l\'intégrité stricte de la température pour votre cargaison.',
        'Established Carrier Relations:': 'Relations Établies avec les Transporteurs:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Plus de 30 ans de partenariats solides avec des compagnies aériennes et maritimes, garantissant fiabilité, priorité et confort client.',
        'Our Temperature-Controlled Solutions': 'Nos Solutions à Température Contrôlée',
        'Envirotainers (Active)': 'Envirotainers (Actif)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'Nous fournissons des solutions de conteneurs actifs de pointe, comme l\'Envirotainer RKN e1 et RAP e2, qui utilisent le refroidissement à base de compresseur et le chauffage électrique pour maintenir des températures précises du produit entre +2°C à +8°C ou +15°C à +25°C, indépendamment des conditions ambiantes.',
        'Thermal Blankets (Passive)': 'Couvertures Thermiques (Passif)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'Pour prévenir les pics de température dus à la lumière solaire directe ou aux conditions ambiantes, nous enveloppons tous les palettes sensibles à la température dans des couvertures thermiques de haute qualité. Cela maintient la plage de température requise pendant le transport, assurant que les médicaments restent efficaces et sûrs à utiliser.',
        'Cool Boxes (Passive)': 'Boîtes Froides (Passif)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'Pour les produits nécessitant un contrôle de température plus strict, nous utilisons des boîtes froides spécialisées. Ce sont un composant important de l\'emballage pharmaceutique, spécifiquement conçu pour maintenir la température de produits sensibles comme les vaccins, l\'insuline et les produits sanguins pendant le transport et le stockage.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Gestion des Expéditions de Marchandises Dangereuses',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Assurer le transport sûr, conforme et efficace de matériaux dangereux par air, mer et terre',
        'Our Comprehensive DGR Services': 'Nos Services DGR Complets',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Naviguer dans les complexités de la logistique des marchandises dangereuses nécessite précision et expertise. Notre équipe certifiée fournit des solutions de bout en bout pour assurer que vos expéditions sont gérées en toute sécurité et en pleine conformité avec les lois internationales et locales.',
        'Expert Classification & Identification:': 'Classification et Identification Expertes:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Classification précise des matériaux dangereux selon leurs propriétés spécifiques et risques.',
        'Compliant Packaging & Labelling:': 'Emballage et Étiquetage Conformes:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Assurer que toutes les expéditions sont emballées, marquées et étiquetées selon les plus hauts standards de sécurité pour prévenir fuites, déversements et accidents.',
        'Documentation & Compliance:': 'Documentation et Conformité:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Préparation méticuleuse de tous les documents de transport requis et adhésion stricte aux réglementations internationales (y compris IATA pour l\'air, IMDG pour la mer et ADR pour la route).',
        'Certified Handling & Transport:': 'Manutention et Transport Certifiés:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Vos biens sont gérés par des professionnels formés et certifiés, utilisant les modes de transport appropriés pour une sécurité maximale.',
        'End-to-End Logistics Support:': 'Support Logistique de Bout en Bout:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'Nous offrons un support complet, de la consultance initiale et l\'évaluation des risques à la livraison finale et les solutions d\'entreposage.',
        
        // Project Logistics
        'Project Logistics': 'Logistique de Projets',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Solutions spécialisées pour le transport de cargaison de projets complexes et d\'équipements lourds',
        'End-to-End Project Cargo Solutions': 'Solutions de Cargaison de Projets de Bout en Bout',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Notre division de logistique de projets se spécialise dans la gestion d\'expéditions complexes, surdimensionnées et d\'équipements lourds pour des projets industriels, centrales électriques, installations pétrolières et gazières, et développement d\'infrastructure. Avec des décennies d\'expérience, nous assurons une coordination transparente de l\'usine à la destination finale.',
        'Our Project Logistics Services': 'Nos Services de Logistique de Projets',
        'Heavy Equipment Transport:': 'Transport d\'Équipements Lourds:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Manutention spécialisée de machinerie, turbines, générateurs et équipements industriels avec emballage personnalisé et transport sécurisé.',
        'Oversized Cargo Solutions:': 'Solutions de Cargaison Surdimensionnée:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Gestion experte d\'expéditions surdimensionnées nécessitant des permis spéciaux, études de route et équipements de transport spécialisés.',
        'Project Coordination:': 'Coordination de Projets:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Gestion complète de projets incluant documentation, dédouanement, assurance et suivi en temps réel.',
        'Multi-Modal Transport:': 'Transport Multimodal:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Intégration transparente des modes de transport aérien, maritime et terrestre pour des exigences de projets complexes.',
        'Site Delivery & Installation:': 'Livraison et Installation sur Site:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'Coordination de livraison sur site, positionnement d\'équipements et services de support d\'installation.',
        'Industries We Serve': 'Industries que Nous Servons',
        'Oil & Gas': 'Pétrole et Gaz',
        'Pipeline equipment, drilling machinery, and refinery components': 'Équipements de pipeline, machinerie de forage et composants de raffinerie',
        'Power Generation': 'Génération d\'Énergie',
        'Turbines, generators, transformers, and power plant equipment': 'Turbines, générateurs, transformateurs et équipements de centrale électrique',
        'Manufacturing': 'Fabrication',
        'Production lines, industrial machinery, and manufacturing equipment': 'Lignes de production, machinerie industrielle et équipements de fabrication',
        'Infrastructure': 'Infrastructure',
        'Construction equipment, bridge components, and infrastructure materials': 'Équipements de construction, composants de ponts et matériaux d\'infrastructure',
        
        // Personnel
        'Key Personnel': 'Personnel Clé',
        'Meet our experienced team across India': 'Rencontrez notre équipe expérimentée à travers l\'Inde',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Calculateur de Cargaison Intelligent',
        'Centimeters (CM)': 'Centimètres (CM)',
        'Inches (IN)': 'Pouces (IN)',
        'Package Dimensions': 'Dimensions du Colis',
        '+ Add Package': '+ Ajouter un Colis',
        'Reset': 'Réinitialiser',
        'Calculate': 'Calculer',
        
        // Locations
        'Our Nationwide Presence': 'Notre Présence Nationale',
        'Bengaluru': 'Bengaluru',
        
        // Footer
        'Quick Links': 'Liens Rapides',
        'Company Profile': 'Profil de l\'Entreprise',
        'Help Center': 'Centre d\'Aide',
        'Career': 'Carrière',
        'Plans & Pricing': 'Plans et Tarifs',
        'News & Blog': 'Actualités et Blog',
        'Less Than Truckload': 'Moins qu\'un Camion Complet',
        'Rail Freight Shipping': 'Expédition de Fret Ferroviaire',
        'Hot Shot Trucking': 'Transport de Fret Urgent',
        'Freight forwarding': 'Transit de fret',
        'Container Freight': 'Fret de Conteneurs',
        'Newsletter': 'Newsletter',
        'Join our subscribers list to get the latest news and special offers.': 'Rejoignez notre liste d\'abonnés pour recevoir les dernières nouvelles et offres spéciales.',
        'Subscribe': 'S\'abonner'
    },
    de: {
        // Navigation
        'HOME': 'STARTSEITE',
        'ABOUT': 'ÜBER UNS',
        'MEMBERSHIPS': 'MITGLIEDSCHAFTEN',
        'SERVICES': 'DIENSTLEISTUNGEN',
        'MORE': 'MEHR',
        'Pharma Logistics': 'Pharma-Logistik',
        'DGR Shipments': 'DGR-Sendungen',
        'Project Logistics': 'Projekt-Logistik',
        'Key Personnel': 'Schlüsselpersonal',
        'Calculator': 'Rechner',
        'Our Offices': 'Unsere Büros',
        'CONTACT': 'KONTAKT',
        'Have any Questions?': 'Haben Sie Fragen?',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Premium-Weltlogistik',
        'International Air Freight': 'Internationaler Luftfracht',
        'Contact Us': 'Kontaktieren Sie uns',
        'Get your free quote today': 'Holen Sie sich heute Ihr kostenloses Angebot',
        'Your Name': 'Ihr Name',
        'Email*': 'E-Mail*',
        'Phone': 'Telefon',
        'Transport': 'Transport',
        'Your Message': 'Ihre Nachricht',
        'Request A Quote': 'Angebot anfordern',
        'Reliable & Efficient': 'Zuverlässig und Effizient',
        'Multimodal Transport Network': 'Multimodales Transportnetzwerk',
        'Our Services': 'Unsere Dienstleistungen',
        'Global Trade Solutions': 'Globale Handelssysteme',
        'Ocean Freight Solutions': 'Seefracht-Lösungen',
        'Get a Quote': 'Angebot einholen',
        
        // Memberships
        'Memberships & Certifications': 'Mitgliedschaften und Zertifizierungen',
        'Proud members of leading global logistics organizations': 'Stolze Mitglieder führender globaler Logistikorganisationen',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'Über EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Unser Erbe und Engagement',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'Als stolz unabhängiges und privat geführtes indisches Unternehmen bringt Eastern Cargo Carriers (I) Pvt. Ltd. über 45 Jahre engagierte Erfahrung in die Logistikbranche ein. Wir sind darauf spezialisiert, umfassende "End-to-End"-Dienstleistungen für unsere Kunden zu erbringen, die alle Aspekte von Importen und Exporten über Luft-, See- und Landtransport abdecken, komplett mit nahtloser Zollabfertigung.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Unsere globale Präsenz wird durch unsere offizielle Registrierung als Multimodal Transport Operator (MTO) bei der DG Shipping, Regierung von Indien, gestärkt. Dies ermöglicht es uns, spezialisierte Expertise in einer breiten Palette von Bereichen anzubieten, einschließlich Projektfracht, Chemikalien, Pharmazeutika, Bekleidung, Ingenieurwaren, Flüssigfracht, Gefahrgut (Haz), temperaturkontrollierte Sendungen und E-Commerce-Logistik.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'Wir verpflichten uns zu den höchsten Qualitätsstandards, demonstriert durch unsere ISO 9001-Zertifizierung, AEO-Zertifizierung für optimierte Zollabfertigung und unser GDP-konformes Lager. Als registrierte Mitglieder von IATA und FIATA halten wir uns an globale Best Practices.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'Mit einer robusten Pan-Indien-Präsenz bieten wir flexible und leistungsstarke Lösungen, von der Handhabung temperaturkontrollierter, gefährlicher und flüssiger Fracht bis hin zur Organisation vollständiger oder teilweiser Luft- und Seecharter. Unsere Seefrachtkapazitäten decken alles ab, von FCL- und LCL-Containern bis hin zu Schüttgut, RORO, Schwertransporten, Spezialausrüstung und anderen abnormalen Frachten.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Ecc\'s Group Meilensteine in Luftfahrt und Logistik',
        'Custom House Agent': 'Zollagent',
        'Established as a CHA': 'Als CHA etabliert',
        'IATA Agent': 'IATA-Agent',
        'Leveraging accreditation': 'Akkreditierung nutzen',
        'Charter Operation': 'Charter-Betrieb',
        'Initiated first charter': 'Ersten Charter initiiert',
        'Network Expansion': 'Netzwerk-Expansion',
        'Achieved Pan-India presence': 'Pan-Indien-Präsenz erreicht',
        'GSAs & Consolidation': 'GSAs und Konsolidierung',
        'Key GSA partnerships': 'Wichtige GSA-Partnerschaften',
        'Pharma Expertise': 'Pharma-Expertise',
        'Specialized services': 'Spezialisierte Dienstleistungen',
        'Temp Warehouse': 'Temp-Lager',
        'Pharma packaging': 'Pharma-Verpackung',
        'Critical Response': 'Kritische Reaktion',
        'Imported life-saving drugs': 'Importierte lebensrettende Medikamente',
        'Governor\'s Award': 'Gouverneurs-Preis',
        'For Pharma Exports': 'Für Pharma-Exporte',
        
        // Features
        'Export Logistics': 'Export-Logistik',
        'Fast Delivery': 'Schnelle Lieferung',
        '24/7 Support': '24/7 Support',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Unsere Export-Logistiklösungen optimieren den Prozess und gewährleisten einen reibungslosen und pünktlichen Transport.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Regelmäßige Export-Logistiklösungen optimieren den Prozess und gewährleisten einen reibungslosen und pünktlichen Transport.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Support für Logistiklösungen optimiert den Prozess und gewährleisten einen reibungslosen und pünktlichen Transport.',
        
        // Services
        'Our Services': 'Unsere Dienstleistungen',
        'Wide variety of logistics services': 'Breite Palette an Logistikdienstleistungen',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Unser Logistikunternehmen bietet eine vielfältige Palette von Dienstleistungen, die auf die einzigartigen Bedürfnisse jedes Kunden zugeschnitten sind. Von Lagerung und Distribution bis hin zu Transportmanagement und Versorgung.',
        'Air Freight (Export & Import)': 'Luftfracht (Export und Import)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'Mit über 25 Jahren auf dem Markt haben wir eine starke Reichweite mit einer breiten Palette von Fluggesellschaften, um aggressive Preise und maßgeschneiderte Lösungen anzubieten.',
        'Ocean Freight (Import & Export)': 'Seefracht (Import und Export)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Umfassende Seefrachtdienstleistungen für alle Ihre Import- und Exportbedürfnisse, die eine zuverlässige und pünktliche Lieferung weltweit gewährleisten.',
        'Customs Brokerage': 'Zollabfertigung',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'Wir bieten eine Reihe von wertschöpfenden Zolldienstleistungen an, um Ihre Sendungen schnell und effizient durch den Zoll zu bringen.',
        'Warehouse & Distribution': 'Lagerung und Distribution',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'Um sicherzustellen, dass Ihre Lieferkette reibungslos läuft, bieten wir dedizierte und geteilte Lager- und Distributionsdienstleistungen an.',
        'Air Charter': 'Luftcharter',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Seit 1989 bieten wir dringende und umfassende Luftfracht-Charterdienstleistungen an und bearbeiten Anfragen mit gründlicher Schulung.',
        'Your Pet Pal': 'Ihr Haustier-Freund',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'Von Katzen und Hunden bis hin zu Pferden haben wir das Wissen, Ihre Haustiere sanft und mit Sorgfalt zu ihrem Ziel zu transportieren.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Spezialisierte Pharma-Logistik',
        'Delivering health with precision and care since 1987': 'Gesundheit mit Präzision und Sorgfalt seit 1987 liefern',
        'A Passion for Time-Sensitive Shipments': 'Eine Leidenschaft für zeitkritische Sendungen',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Mit einem Erbe in der Handhabung zeitkritischer Sendungen seit 1987 bringen wir unübertroffene Expertise in die pharmazeutische Logistik ein. Unser Team ist bekannt dafür, dass es erfolgreich hochwertige Life-Science-Produkte verwaltet, einschließlich klinischer Studien-Sendungen, neuer Produktlaunches und Lieferungen in besondere und herausfordernde Gebiete.',
        'Pharma-Focused Operations:': 'Pharma-fokussierte Operationen:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Ein engagiertes Team, das speziell in den Nuancen der Handhabung aller Arten von Life-Science-Produkten geschult ist.',
        'Quality & Compliance:': 'Qualität und Compliance:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Ein Engagement für Qualitätsmanagement, operative Exzellenz und überlegene Zollkapazitäten stellt sicher, dass Ihre Sendungen allen regulatorischen Standards entsprechen.',
        'Temperature-Controlled Solutions:': 'Temperaturkontrollierte Lösungen:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Wir bieten sowohl aktive als auch passive Pharma-Lösungen an, um die strikte Temperaturintegrität für Ihre Fracht aufrechtzuerhalten.',
        'Established Carrier Relations:': 'Etablierte Carrier-Beziehungen:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Über 30 Jahre starke Partnerschaften mit Fluggesellschaften und Reedereien, die Zuverlässigkeit, Priorität und Kundekomfort garantieren.',
        'Our Temperature-Controlled Solutions': 'Unsere temperaturkontrollierten Lösungen',
        'Envirotainers (Active)': 'Envirotainers (Aktiv)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'Wir bieten modernste aktive Container-Lösungen an, wie den Envirotainer RKN e1 und RAP e2, die kompressorbasierte Kühlung und elektrische Heizung verwenden, um präzise Produkttemperaturen zwischen +2°C bis +8°C oder +15°C bis +25°C aufrechtzuerhalten, unabhängig von den Umgebungsbedingungen.',
        'Thermal Blankets (Passive)': 'Thermaldecken (Passiv)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'Um Temperaturspitzen durch direktes Sonnenlicht oder Umgebungsbedingungen zu verhindern, wickeln wir alle temperatur empfindlichen Paletten in hochwertige Thermaldecken ein. Dies hält den erforderlichen Temperaturbereich während des Transports aufrecht und stellt sicher, dass Medikamente wirksam und sicher in der Anwendung bleiben.',
        'Cool Boxes (Passive)': 'Kühlboxen (Passiv)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'Für Produkte, die eine strengere Temperaturkontrolle erfordern, verwenden wir spezialisierte Kühlboxen. Diese sind eine wichtige Komponente der pharmazeutischen Verpackung, die speziell dafür entwickelt wurde, die Temperatur empfindlicher Produkte wie Impfstoffe, Insulin und Blutprodukte während des Transports und der Lagerung aufrechtzuerhalten.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Gefahrgut-Sendungshandhabung',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Sicherstellung des sicheren, konformen und effizienten Transports gefährlicher Materialien über Luft, See und Land',
        'Our Comprehensive DGR Services': 'Unsere umfassenden DGR-Dienstleistungen',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Die Navigation durch die Komplexitäten der Gefahrgutlogistik erfordert Präzision und Expertise. Unser zertifiziertes Team bietet End-to-End-Lösungen, um sicherzustellen, dass Ihre Sendungen sicher und in vollständiger Übereinstimmung mit internationalen und lokalen Gesetzen behandelt werden.',
        'Expert Classification & Identification:': 'Expertenklassifizierung und -identifikation:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Genaue Klassifizierung gefährlicher Materialien entsprechend ihrer spezifischen Eigenschaften und Risiken.',
        'Compliant Packaging & Labelling:': 'Konforme Verpackung und Kennzeichnung:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Sicherstellung, dass alle Sendungen entsprechend den höchsten Sicherheitsstandards verpackt, markiert und gekennzeichnet werden, um Lecks, Verschüttungen und Unfälle zu verhindern.',
        'Documentation & Compliance:': 'Dokumentation und Compliance:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Sorgfältige Vorbereitung aller erforderlichen Transportdokumente und strikte Einhaltung internationaler Vorschriften (einschließlich IATA für Luft, IMDG für See und ADR für Straße).',
        'Certified Handling & Transport:': 'Zertifizierte Handhabung und Transport:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Ihre Waren werden von geschulten und zertifizierten Fachleuten verwaltet, die die entsprechenden Transportmodi für maximale Sicherheit nutzen.',
        'End-to-End Logistics Support:': 'End-to-End-Logistik-Support:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'Wir bieten vollständige Unterstützung, von der ersten Beratung und Risikobewertung bis hin zur endgültigen Lieferung und Lagerlösungen.',
        
        // Project Logistics
        'Project Logistics': 'Projekt-Logistik',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Spezialisierte Lösungen für komplexe Projektfracht und Schwertransport',
        'End-to-End Project Cargo Solutions': 'End-to-End-Projektfrachtlösungen',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Unsere Projektlogistik-Abteilung ist spezialisiert auf die Handhabung komplexer, überdimensionierter und schwerer Ausrüstungssendungen für Industrieprojekte, Kraftwerke, Öl- und Gasanlagen und Infrastrukturentwicklung. Mit jahrzehntelanger Erfahrung gewährleisten wir eine nahtlose Koordination von der Fabrik bis zum endgültigen Ziel.',
        'Our Project Logistics Services': 'Unsere Projektlogistik-Dienstleistungen',
        'Heavy Equipment Transport:': 'Schwertransport:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Spezialisierte Handhabung von Maschinen, Turbinen, Generatoren und Industrieausrüstung mit maßgeschneiderter Verpackung und sicherem Transport.',
        'Oversized Cargo Solutions:': 'Überdimensionierte Frachtlösungen:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Expertenmanagement überdimensionierter Sendungen, die Sondergenehmigungen, Routenvermessungen und spezialisierte Transportausrüstung erfordern.',
        'Project Coordination:': 'Projektkoordination:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Umfassendes Projektmanagement einschließlich Dokumentation, Zollabfertigung, Versicherung und Echtzeitverfolgung.',
        'Multi-Modal Transport:': 'Multimodaler Transport:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Nahtlose Integration von Luft-, See- und Landtransportmodi für komplexe Projektanforderungen.',
        'Site Delivery & Installation:': 'Standortlieferung und -installation:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'Vor-Ort-Lieferkoordination, Ausrüstungspositionierung und Installationssupport-Dienstleistungen.',
        'Industries We Serve': 'Industrien, die wir bedienen',
        'Oil & Gas': 'Öl und Gas',
        'Pipeline equipment, drilling machinery, and refinery components': 'Pipeline-Ausrüstung, Bohrgeräte und Raffinerie-Komponenten',
        'Power Generation': 'Stromerzeugung',
        'Turbines, generators, transformers, and power plant equipment': 'Turbinen, Generatoren, Transformatoren und Kraftwerksausrüstung',
        'Manufacturing': 'Fertigung',
        'Production lines, industrial machinery, and manufacturing equipment': 'Produktionslinien, Industriemaschinen und Fertigungsausrüstung',
        'Infrastructure': 'Infrastruktur',
        'Construction equipment, bridge components, and infrastructure materials': 'Bauausrüstung, Brückenkomponenten und Infrastrukturmaterialien',
        
        // Personnel
        'Key Personnel': 'Schlüsselpersonal',
        'Meet our experienced team across India': 'Treffen Sie unser erfahrenes Team in ganz Indien',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Intelligenter Frachtrechner',
        'Centimeters (CM)': 'Zentimeter (CM)',
        'Inches (IN)': 'Zoll (IN)',
        'Package Dimensions': 'Paketabmessungen',
        '+ Add Package': '+ Paket hinzufügen',
        'Reset': 'Zurücksetzen',
        'Calculate': 'Berechnen',
        
        // Locations
        'Our Nationwide Presence': 'Unsere landesweite Präsenz',
        'Bengaluru': 'Bengaluru',
        
        // Footer
        'Quick Links': 'Schnelllinks',
        'Company Profile': 'Unternehmensprofil',
        'Help Center': 'Hilfecenter',
        'Career': 'Karriere',
        'Plans & Pricing': 'Pläne und Preise',
        'News & Blog': 'Nachrichten und Blog',
        'Less Than Truckload': 'Weniger als LKW-Ladung',
        'Rail Freight Shipping': 'Eisenbahnfracht-Versand',
        'Hot Shot Trucking': 'Express-LKW-Transport',
        'Freight forwarding': 'Spedition',
        'Container Freight': 'Container-Fracht',
        'Newsletter': 'Newsletter',
        'Join our subscribers list to get the latest news and special offers.': 'Treten Sie unserer Abonnentenliste bei, um die neuesten Nachrichten und Sonderangebote zu erhalten.',
        'Subscribe': 'Abonnieren'
    },
    zh: {
        // Navigation
        'HOME': '首页',
        'ABOUT': '关于我们',
        'MEMBERSHIPS': '会员资格',
        'SERVICES': '服务',
        'MORE': '更多',
        'Pharma Logistics': '医药物流',
        'DGR Shipments': '危险品运输',
        'Project Logistics': '项目物流',
        'Key Personnel': '关键人员',
        'Calculator': '计算器',
        'Our Offices': '我们的办公室',
        'CONTACT': '联系我们',
        'Have any Questions?': '有任何问题吗？',
        
        // Hero Section
        'Premium Worldwide Logistics': '全球优质物流',
        'International Air Freight': '国际空运',
        'Contact Us': '联系我们',
        'Get your free quote today': '今天获得免费报价',
        'Your Name': '您的姓名',
        'Email*': '邮箱*',
        'Phone': '电话',
        'Transport': '运输',
        'Your Message': '您的留言',
        'Request A Quote': '请求报价',
        'Reliable & Efficient': '可靠高效',
        'Multimodal Transport Network': '多式联运网络',
        'Our Services': '我们的服务',
        'Global Trade Solutions': '全球贸易解决方案',
        'Ocean Freight Solutions': '海运解决方案',
        'Get a Quote': '获取报价',
        
        // Memberships
        'Memberships & Certifications': '会员资格和认证',
        'Proud members of leading global logistics organizations': '全球领先物流组织的骄傲成员',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': '关于东方货运承运人（印度）私人有限公司',
        'Our Legacy & Commitment': '我们的传承和承诺',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': '作为一家自豪的独立私营印度公司，东方货运承运人（印度）私人有限公司为物流行业带来了超过45年的专注经验。我们专门为客户提供全面的"端到端"服务，涵盖空运、海运和陆运进出口的所有方面，并完成无缝清关。',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': '我们在印度政府航运总局正式注册为多式联运运营商（MTO），这加强了我们的全球影响力。这使我们能够在广泛的垂直领域提供专业专长，包括项目货物、化学品、药品、服装、工程货物、液体货物、危险货物、温控货物和电子商务物流。',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': '我们致力于最高质量标准，这体现在我们的ISO 9001认证、简化清关的AEO认证以及符合GDP标准的仓库。作为IATA和FIATA的注册成员，我们遵循全球最佳实践。',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': '凭借强大的全印度影响力，我们提供灵活而强大的解决方案，从处理温控、危险和液体货物到安排全部或部分空运和海运包机。我们的海运能力涵盖从FCL和LCL集装箱到散货、滚装船、重吊、特殊设备和其他异常货物的一切。',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Ecc集团在航空和物流领域的关键里程碑',
        'Custom House Agent': '报关代理',
        'Established as a CHA': '作为CHA成立',
        'IATA Agent': 'IATA代理',
        'Leveraging accreditation': '利用认证',
        'Charter Operation': '包机运营',
        'Initiated first charter': '启动首个包机',
        'Network Expansion': '网络扩展',
        'Achieved Pan-India presence': '实现全印度覆盖',
        'GSAs & Consolidation': 'GSA和整合',
        'Key GSA partnerships': '关键GSA合作伙伴关系',
        'Pharma Expertise': '医药专长',
        'Specialized services': '专业服务',
        'Temp Warehouse': '临时仓库',
        'Pharma packaging': '医药包装',
        'Critical Response': '紧急响应',
        'Imported life-saving drugs': '进口救命药物',
        'Governor\'s Award': '州长奖',
        'For Pharma Exports': '医药出口',
        
        // Features
        'Export Logistics': '出口物流',
        'Fast Delivery': '快速配送',
        '24/7 Support': '24/7支持',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': '我们的出口物流解决方案简化流程，确保顺畅及时的运输。',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': '常规出口物流解决方案简化流程，确保顺畅及时的运输。',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': '对物流解决方案的支持简化流程，确保顺畅及时的运输。',
        
        // Services
        'Our Services': '我们的服务',
        'Wide variety of logistics services': '广泛的物流服务',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': '我们的物流公司提供多样化的服务，以满足每个客户的独特需求。从仓储和配送到运输管理和供应。',
        'Air Freight (Export & Import)': '空运（进出口）',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': '在市场上超过25年，我们与广泛的航空公司有强大的联系，提供激进的定价和定制解决方案。',
        'Ocean Freight (Import & Export)': '海运（进出口）',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': '为您的所有进出口需求提供全面的海运服务，确保全球可靠及时的交付。',
        'Customs Brokerage': '报关代理',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': '我们提供一系列增值海关服务，快速高效地通过海关运送您的货物。',
        'Warehouse & Distribution': '仓储和配送',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': '为确保您的供应链顺畅运行，我们提供专用和共享的仓储和配送服务。',
        'Air Charter': '包机',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': '自1989年以来，我们提供紧急和全面的空运包机服务，通过全面培训处理请求。',
        'Your Pet Pal': '您的宠物伙伴',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': '从猫狗到马匹，我们拥有温和且细心地处理和运输您的宠物到目的地的知识。',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': '专业医药物流',
        'Delivering health with precision and care since 1987': '自1987年以来以精确和关怀提供健康',
        'A Passion for Time-Sensitive Shipments': '对时效性货物的热情',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': '自1987年以来在处理时效性关键货物方面有着悠久历史，我们为医药物流带来无与伦比的专业知识。我们的团队以成功管理高价值生命科学产品而闻名，包括临床试验货物、新产品发布和向特殊和具有挑战性的地区交付。',
        'Pharma-Focused Operations:': '医药重点运营：',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': '专门培训处理所有类型生命科学产品细微差别的专业团队。',
        'Quality & Compliance:': '质量和合规：',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': '对质量管理、运营卓越和卓越海关能力的承诺确保您的货物符合所有监管标准。',
        'Temperature-Controlled Solutions:': '温控解决方案：',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': '我们提供主动和被动医药解决方案，为您的货物保持严格的温度完整性。',
        'Established Carrier Relations:': '建立的承运人关系：',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': '与航空公司和航运公司超过30年的强大合作伙伴关系，保证可靠性、优先性和客户舒适度。',
        'Our Temperature-Controlled Solutions': '我们的温控解决方案',
        'Envirotainers (Active)': '环境容器（主动）',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': '我们提供最先进的主动容器解决方案，如Envirotainer RKN e1和RAP e2，使用基于压缩机的冷却和电加热，无论环境条件如何，都能保持+2°C至+8°C或+15°C至+25°C的精确产品温度。',
        'Thermal Blankets (Passive)': '保温毯（被动）',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': '为防止直接阳光或环境条件造成的温度峰值，我们用高质量保温毯包裹所有温度敏感托盘。这在运输过程中保持所需的温度范围，确保药物保持有效和安全使用。',
        'Cool Boxes (Passive)': '冷藏箱（被动）',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': '对于需要更严格温度控制的产品，我们使用专门的冷藏箱。这些是医药包装的重要组成部分，专门设计用于在运输和储存期间保持疫苗、胰岛素和血液产品等敏感产品的温度。',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': '危险品货物处理',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': '确保危险材料通过空运、海运和陆运的安全、合规和高效运输',
        'Our Comprehensive DGR Services': '我们的综合DGR服务',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': '驾驭危险品物流的复杂性需要精确性和专业知识。我们的认证团队提供端到端解决方案，确保您的货物安全处理并完全符合国际和地方法律。',
        'Expert Classification & Identification:': '专家分类和识别：',
        'Accurate classification of hazardous materials according to their specific properties and risks.': '根据危险材料的具体特性和风险进行准确分类。',
        'Compliant Packaging & Labelling:': '合规包装和标签：',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': '确保所有货物按照最高安全标准包装、标记和贴标签，防止泄漏、溢出和事故。',
        'Documentation & Compliance:': '文件和合规：',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': '精心准备所有必需的运输文件并严格遵守国际法规（包括空运IATA、海运IMDG和陆运ADR）。',
        'Certified Handling & Transport:': '认证处理和运输：',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': '您的货物由经过培训和认证的专业人员管理，使用适当的运输模式以确保最大安全性。',
        'End-to-End Logistics Support:': '端到端物流支持：',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': '我们提供完整支持，从初始咨询和风险评估到最终交付和仓储解决方案。',
        
        // Project Logistics
        'Project Logistics': '项目物流',
        'Specialized solutions for complex project cargo and heavy equipment transportation': '复杂项目货物和重型设备运输的专业解决方案',
        'End-to-End Project Cargo Solutions': '端到端项目货物解决方案',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': '我们的项目物流部门专门处理工业项目、发电厂、石油和天然气设施以及基础设施开发的复杂、超大和重型设备货物。凭借数十年的经验，我们确保从工厂到最终目的地的无缝协调。',
        'Our Project Logistics Services': '我们的项目物流服务',
        'Heavy Equipment Transport:': '重型设备运输：',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': '使用定制包装和安全运输专业处理机械、涡轮机、发电机和工业设备。',
        'Oversized Cargo Solutions:': '超大货物解决方案：',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': '需要特殊许可、路线调查和专门运输设备的超大货物的专家管理。',
        'Project Coordination:': '项目协调：',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': '综合项目管理，包括文件、清关、保险和实时跟踪。',
        'Multi-Modal Transport:': '多式联运：',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': '为复杂项目需求无缝集成空运、海运和陆运模式。',
        'Site Delivery & Installation:': '现场交付和安装：',
        'On-site delivery coordination, equipment positioning, and installation support services.': '现场交付协调、设备定位和安装支持服务。',
        'Industries We Serve': '我们服务的行业',
        'Oil & Gas': '石油和天然气',
        'Pipeline equipment, drilling machinery, and refinery components': '管道设备、钻井机械和炼油厂组件',
        'Power Generation': '发电',
        'Turbines, generators, transformers, and power plant equipment': '涡轮机、发电机、变压器和发电厂设备',
        'Manufacturing': '制造业',
        'Production lines, industrial machinery, and manufacturing equipment': '生产线、工业机械和制造设备',
        'Infrastructure': '基础设施',
        'Construction equipment, bridge components, and infrastructure materials': '建筑设备、桥梁组件和基础设施材料',
        
        // Personnel
        'Key Personnel': '关键人员',
        'Meet our experienced team across India': '认识我们在印度各地的经验丰富的团队',
        'Mumbai': '孟买',
        'Bangalore': '班加罗尔',
        'Chennai': '钦奈',
        'Delhi': '德里',
        'Indore': '印多尔',
        'Ahmedabad': '艾哈迈达巴德',
        'Hyderabad': '海得拉巴',
        'Kolkata': '加尔各答',
        
        // Calculator
        'Smart Cargo Calculator': '智能货物计算器',
        'Centimeters (CM)': '厘米（CM）',
        'Inches (IN)': '英寸（IN）',
        'Package Dimensions': '包装尺寸',
        '+ Add Package': '+ 添加包装',
        'Reset': '重置',
        'Calculate': '计算',
        
        // Locations
        'Our Nationwide Presence': '我们的全国影响力',
        'Bengaluru': '班加罗尔',
        
        // Footer
        'Quick Links': '快速链接',
        'Company Profile': '公司简介',
        'Help Center': '帮助中心',
        'Career': '职业',
        'Plans & Pricing': '计划和定价',
        'News & Blog': '新闻和博客',
        'Less Than Truckload': '少于整车',
        'Rail Freight Shipping': '铁路货运',
        'Hot Shot Trucking': '急件运输',
        'Freight forwarding': '货运代理',
        'Container Freight': '集装箱货运',
        'Newsletter': '通讯',
        'Join our subscribers list to get the latest news and special offers.': '加入我们的订阅者列表，获取最新新闻和特别优惠。',
        'Subscribe': '订阅'
    },
    ja: {
        // Navigation
        'HOME': 'ホーム',
        'ABOUT': '会社概要',
        'MEMBERSHIPS': '会員資格',
        'SERVICES': 'サービス',
        'MORE': 'その他',
        'Pharma Logistics': '医薬品物流',
        'DGR Shipments': '危険物輸送',
        'Project Logistics': 'プロジェクト物流',
        'Key Personnel': '主要スタッフ',
        'Calculator': '計算機',
        'Our Offices': 'オフィス',
        'CONTACT': 'お問い合わせ',
        'Have any Questions?': 'ご質問はありますか？',
        
        // Hero Section
        'Premium Worldwide Logistics': 'プレミアム世界物流',
        'International Air Freight': '国際航空貨物',
        'Contact Us': 'お問い合わせ',
        'Get your free quote today': '今日無料見積もりを取得',
        'Your Name': 'お名前',
        'Email*': 'メール*',
        'Phone': '電話',
        'Transport': '輸送',
        'Your Message': 'メッセージ',
        'Request A Quote': '見積もり依頼',
        'Reliable & Efficient': '信頼性と効率性',
        'Multimodal Transport Network': 'マルチモーダル輸送ネットワーク',
        'Our Services': '私たちのサービス',
        'Global Trade Solutions': 'グローバル貿易ソリューション',
        'Ocean Freight Solutions': '海上貨物ソリューション',
        'Get a Quote': '見積もり取得',
        
        // Memberships
        'Memberships & Certifications': '会員資格と認証',
        'Proud members of leading global logistics organizations': '世界の主要物流組織の誇り高きメンバー',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'イースタンカーゴキャリアーズ（インド）プライベートリミテッドについて',
        'Our Legacy & Commitment': '私たちの遺産とコミットメント',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': '誇り高き独立系民間インド企業として、イースタンカーゴキャリアーズ（インド）プライベートリミテッドは、物流業界に45年以上の専念した経験をもたらします。私たちは、空輸、海運、陸運を横断した輸出入のすべての側面をカバーし、シームレスな通関を完了する、包括的な「エンドツーエンド」サービスをクライアントに提供することに特化しています。',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': '私たちのグローバルな存在は、インド政府のDG Shippingによるマルチモーダル輸送オペレーター（MTO）としての公式登録によって強化されています。これにより、プロジェクト貨物、化学品、医薬品、衣類、エンジニアリング商品、液体貨物、危険物（Haz）貨物、温度制御貨物、Eコマース物流を含む幅広い垂直分野で専門知識を提供できます。',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': '私たちは、ISO 9001認証、効率的な通関のためのAEO認証、GDP準拠の倉庫によって実証される最高品質基準にコミットしています。IATAとFIATAの登録メンバーとして、グローバルベストプラクティスに従います。',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': '堅牢な全インドでの存在により、温度制御、危険物、液体貨物の取り扱いから完全または部分的な航空・海上チャーターの手配まで、柔軟で強力なソリューションを提供します。私たちの海上貨物能力は、FCLおよびLCLコンテナからバルク、RORO、重量物リフト、特殊機器、その他の異常貨物まですべてをカバーします。',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Eccグループの航空・物流における主要マイルストーン',
        'Custom House Agent': '通関代理人',
        'Established as a CHA': 'CHAとして設立',
        'IATA Agent': 'IATAエージェント',
        'Leveraging accreditation': '認証の活用',
        'Charter Operation': 'チャーター運航',
        'Initiated first charter': '最初のチャーター開始',
        'Network Expansion': 'ネットワーク拡張',
        'Achieved Pan-India presence': '全インドでの存在を達成',
        'GSAs & Consolidation': 'GSAと統合',
        'Key GSA partnerships': '主要GSAパートナーシップ',
        'Pharma Expertise': '医薬品専門知識',
        'Specialized services': '専門サービス',
        'Temp Warehouse': '一時倉庫',
        'Pharma packaging': '医薬品包装',
        'Critical Response': '緊急対応',
        'Imported life-saving drugs': '救命薬の輸入',
        'Governor\'s Award': '知事賞',
        'For Pharma Exports': '医薬品輸出',
        
        // Features
        'Export Logistics': '輸出物流',
        'Fast Delivery': '迅速配送',
        '24/7 Support': '24/7サポート',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': '私たちの輸出物流ソリューションはプロセスを効率化し、スムーズでタイムリーな輸送を保証します。',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': '定期的な輸出物流ソリューションはプロセスを効率化し、スムーズでタイムリーな輸送を保証します。',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': '物流ソリューションのサポートはプロセスを効率化し、スムーズでタイムリーな輸送を保証します。',
        
        // Services
        'Our Services': '私たちのサービス',
        'Wide variety of logistics services': '幅広い物流サービス',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': '私たちの物流会社は、各クライアントの独自のニーズに合わせて調整された多様なサービスを提供します。倉庫・配送から輸送管理・供給まで。',
        'Air Freight (Export & Import)': '航空貨物（輸出・輸入）',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': '市場で25年以上の経験を持つ私たちは、幅広い航空会社との強力なリーチを持ち、積極的な価格設定とカスタマイズされたソリューションを提供します。',
        'Ocean Freight (Import & Export)': '海上貨物（輸入・輸出）',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'すべての輸入・輸出ニーズに対応する包括的な海上貨物サービスで、世界中で信頼性とタイムリーな配送を保証します。',
        'Customs Brokerage': '通関代理',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': '貨物を迅速かつ効率的に通関するための価値ある通関サービスを提供します。',
        'Warehouse & Distribution': '倉庫・配送',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'サプライチェーンがスムーズに運行するよう、専用および共有の倉庫・配送サービスを提供します。',
        'Air Charter': '航空チャーター',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': '1989年以来、緊急かつ包括的な航空貨物チャーターサービスを提供し、徹底したトレーニングでリクエストを処理しています。',
        'Your Pet Pal': 'あなたのペットパル',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': '猫や犬から馬まで、ペットを優しく丁寧に目的地まで運ぶ知識を持っています。',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': '専門医薬品物流',
        'Delivering health with precision and care since 1987': '1987年以来、精密さとケアで健康を届ける',
        'A Passion for Time-Sensitive Shipments': '時間に敏感な貨物への情熱',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': '1987年以来の時間に重要な貨物の取り扱いの遺産により、医薬品物流に比類のない専門知識をもたらします。私たちのチームは、臨床試験貨物、新製品ローンチ、特別で挑戦的な地域への配送を含む高価値ライフサイエンス製品の成功的管理で知られています。',
        'Pharma-Focused Operations:': '医薬品重視の運営：',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'すべてのタイプのライフサイエンス製品の取り扱いの微妙な違いに特化して訓練された専用チーム。',
        'Quality & Compliance:': '品質とコンプライアンス：',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': '品質管理、運営卓越性、優れた通関能力へのコミットメントにより、貨物がすべての規制基準を満たすことが保証されます。',
        'Temperature-Controlled Solutions:': '温度制御ソリューション：',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': '貨物の厳格な温度整合性を維持するため、アクティブとパッシブの両方の医薬品ソリューションを提供します。',
        'Established Carrier Relations:': '確立されたキャリア関係：',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': '航空会社と海運会社との30年以上の強力なパートナーシップにより、信頼性、優先性、顧客の快適性を保証します。',
        'Our Temperature-Controlled Solutions': '私たちの温度制御ソリューション',
        'Envirotainers (Active)': 'エンビロテイナー（アクティブ）',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'Envirotainer RKN e1やRAP e2などの最先端のアクティブコンテナソリューションを提供し、圧縮機ベースの冷却と電気加熱を使用して、環境条件に関係なく+2°Cから+8°Cまたは+15°Cから+25°Cの正確な製品温度を維持します。',
        'Thermal Blankets (Passive)': '断熱ブランケット（パッシブ）',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': '直射日光や環境条件による温度スパイクを防ぐため、すべての温度に敏感なパレットを高品質の断熱ブランケットで包みます。これにより輸送中の必要な温度範囲が維持され、薬物が効果的で安全に使用できることが保証されます。',
        'Cool Boxes (Passive)': 'クールボックス（パッシブ）',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'より厳格な温度制御が必要な製品には、専門のクールボックスを利用します。これらは医薬品包装の重要なコンポーネントで、輸送・保管中のワクチン、インスリン、血液製品などの敏感な製品の温度を維持するように特別に設計されています。',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': '危険物貨物取り扱い',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': '空輸、海運、陸運を横断した危険物の安全、準拠、効率的な輸送を保証',
        'Our Comprehensive DGR Services': '私たちの包括的なDGRサービス',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': '危険物物流の複雑さをナビゲートするには、精密さと専門知識が必要です。私たちの認証チームは、貨物が安全に処理され、国際・地方法律に完全に準拠することを保証するエンドツーエンドソリューションを提供します。',
        'Expert Classification & Identification:': '専門分類と識別：',
        'Accurate classification of hazardous materials according to their specific properties and risks.': '特定の特性とリスクに応じた危険物の正確な分類。',
        'Compliant Packaging & Labelling:': '準拠包装とラベリング：',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': '漏れ、流出、事故を防ぐため、すべての貨物が最高の安全基準に従って包装、マーク、ラベル付けされることを保証。',
        'Documentation & Compliance:': '文書とコンプライアンス：',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': '必要なすべての輸送文書の細心の準備と国際規制（空輸のIATA、海運のIMDG、陸運のADRを含む）への厳格な準拠。',
        'Certified Handling & Transport:': '認証取り扱いと輸送：',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': '貨物は訓練され認証された専門家によって管理され、最大のセキュリティのために適切な輸送モードを利用します。',
        'End-to-End Logistics Support:': 'エンドツーエンド物流サポート：',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': '初期コンサルティングとリスク評価から最終配送と倉庫ソリューションまで、完全なサポートを提供します。',
        
        // Project Logistics
        'Project Logistics': 'プロジェクト物流',
        'Specialized solutions for complex project cargo and heavy equipment transportation': '複雑なプロジェクト貨物と重機輸送の専門ソリューション',
        'End-to-End Project Cargo Solutions': 'エンドツーエンドプロジェクト貨物ソリューション',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': '私たちのプロジェクト物流部門は、産業プロジェクト、発電所、石油・ガス施設、インフラ開発のための複雑、特大、重機貨物の取り扱いに特化しています。数十年の経験により、工場から最終目的地までのシームレスな調整を保証します。',
        'Our Project Logistics Services': '私たちのプロジェクト物流サービス',
        'Heavy Equipment Transport:': '重機輸送：',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'カスタム梱包と安全な輸送による機械、タービン、発電機、産業機器の専門取り扱い。',
        'Oversized Cargo Solutions:': '特大貨物ソリューション：',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': '特別許可、ルート調査、専門輸送機器を必要とする特大貨物の専門管理。',
        'Project Coordination:': 'プロジェクト調整：',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': '文書、通関、保険、リアルタイム追跡を含む包括的プロジェクト管理。',
        'Multi-Modal Transport:': 'マルチモーダル輸送：',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': '複雑なプロジェクト要件のための空輸、海運、陸運モードのシームレスな統合。',
        'Site Delivery & Installation:': '現場配送と設置：',
        'On-site delivery coordination, equipment positioning, and installation support services.': '現場配送調整、機器配置、設置サポートサービス。',
        'Industries We Serve': '私たちがサービスを提供する業界',
        'Oil & Gas': '石油・ガス',
        'Pipeline equipment, drilling machinery, and refinery components': 'パイプライン機器、掘削機械、製油所コンポーネント',
        'Power Generation': '発電',
        'Turbines, generators, transformers, and power plant equipment': 'タービン、発電機、変圧器、発電所機器',
        'Manufacturing': '製造',
        'Production lines, industrial machinery, and manufacturing equipment': '生産ライン、産業機械、製造機器',
        'Infrastructure': 'インフラ',
        'Construction equipment, bridge components, and infrastructure materials': '建設機器、橋梁コンポーネント、インフラ材料',
        
        // Personnel
        'Key Personnel': '主要スタッフ',
        'Meet our experienced team across India': 'インド各地の経験豊富なチームをご紹介',
        'Mumbai': 'ムンバイ',
        'Bangalore': 'バンガロール',
        'Chennai': 'チェンナイ',
        'Delhi': 'デリー',
        'Indore': 'インドール',
        'Ahmedabad': 'アーメダバード',
        'Hyderabad': 'ハイデラバード',
        'Kolkata': 'コルカタ',
        
        // Calculator
        'Smart Cargo Calculator': 'スマート貨物計算機',
        'Centimeters (CM)': 'センチメートル（CM）',
        'Inches (IN)': 'インチ（IN）',
        'Package Dimensions': 'パッケージ寸法',
        '+ Add Package': '+ パッケージ追加',
        'Reset': 'リセット',
        'Calculate': '計算',
        
        // Locations
        'Our Nationwide Presence': '私たちの全国的な存在',
        'Bengaluru': 'ベンガルール',
        
        // Footer
        'Quick Links': 'クイックリンク',
        'Company Profile': '会社概要',
        'Help Center': 'ヘルプセンター',
        'Career': 'キャリア',
        'Plans & Pricing': 'プランと価格',
        'News & Blog': 'ニュースとブログ',
        'Less Than Truckload': 'トラックロード未満',
        'Rail Freight Shipping': '鉄道貨物輸送',
        'Hot Shot Trucking': 'ホットショットトラッキング',
        'Freight forwarding': '貨物代理',
        'Container Freight': 'コンテナ貨物',
        'Newsletter': 'ニュースレター',
        'Join our subscribers list to get the latest news and special offers.': '最新ニュースと特別オファーを取得するために購読者リストに参加してください。',
        'Subscribe': '購読'
    },
    es: {
        // Navigation
        'HOME': 'INICIO',
        'ABOUT': 'ACERCA DE',
        'MEMBERSHIPS': 'MEMBRESÍAS',
        'SERVICES': 'SERVICIOS',
        'MORE': 'MÁS',
        'Pharma Logistics': 'Logística Farmacéutica',
        'DGR Shipments': 'Envíos DGR',
        'Project Logistics': 'Logística de Proyectos',
        'Key Personnel': 'Personal Clave',
        'Calculator': 'Calculadora',
        'Our Offices': 'Nuestras Oficinas',
        'CONTACT': 'CONTACTO',
        'Have any Questions?': '¿Tiene alguna pregunta?',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Logística Mundial Premium',
        'International Air Freight': 'Flete Aéreo Internacional',
        'Contact Us': 'Contáctenos',
        'Get your free quote today': 'Obtenga su cotización gratuita hoy',
        'Your Name': 'Su Nombre',
        'Email*': 'Correo Electrónico*',
        'Phone': 'Teléfono',
        'Transport': 'Transporte',
        'Your Message': 'Su Mensaje',
        'Request A Quote': 'Solicitar Cotización',
        'Reliable & Efficient': 'Confiable y Eficiente',
        'Multimodal Transport Network': 'Red de Transporte Multimodal',
        'Our Services': 'Nuestros Servicios',
        'Global Trade Solutions': 'Soluciones de Comercio Global',
        'Ocean Freight Solutions': 'Soluciones de Flete Marítimo',
        'Get a Quote': 'Obtener Cotización',
        
        // Memberships
        'Memberships & Certifications': 'Membresías y Certificaciones',
        'Proud members of leading global logistics organizations': 'Orgullosos miembros de las principales organizaciones logísticas globales',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'Acerca de EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Nuestro Legado y Compromiso',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'Como una empresa india orgullosamente independiente y de propiedad privada, Eastern Cargo Carriers (I) Pvt. Ltd. aporta más de 45 años de experiencia dedicada a la industria logística. Nos especializamos en proporcionar un servicio integral "De Extremo a Extremo" para nuestros clientes, cubriendo todos los aspectos de importaciones y exportaciones a través de transporte aéreo, marítimo y terrestre, completo con despacho de aduanas sin problemas.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Nuestra presencia global se fortalece con nuestro registro oficial como Operador de Transporte Multimodal (MTO) con la DG Shipping, Gobierno de la India. Esto nos permite ofrecer experiencia especializada en una amplia gama de verticales, incluyendo Carga de Proyectos, Productos Químicos, Farmacéuticos, Prendas de Vestir, Bienes de Ingeniería, Carga Líquida, Carga Peligrosa (Haz), envíos con Control de Temperatura y logística de Comercio Electrónico.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'Estamos comprometidos con los más altos estándares de calidad, demostrados por nuestra certificación ISO 9001, certificación AEO para despacho de aduanas optimizado, y nuestro almacén compatible con GDP. Como miembros registrados de IATA y FIATA, nos adherimos a las mejores prácticas globales.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'Con una sólida presencia en toda la India, proporcionamos soluciones flexibles y potentes, desde el manejo de carga con control de temperatura, peligrosa y líquida hasta la organización de charters aéreos y marítimos completos o parciales. Nuestras capacidades de flete marítimo cubren todo, desde contenedores FCL y LCL hasta carga a granel, RORO, elevaciones pesadas, equipos especiales y otra carga anormal.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Hitos Clave del Grupo Ecc en Aviación y Logística',
        'Custom House Agent': 'Agente de Aduanas',
        'Established as a CHA': 'Establecido como CHA',
        'IATA Agent': 'Agente IATA',
        'Leveraging accreditation': 'Aprovechando la acreditación',
        'Charter Operation': 'Operación de Charter',
        'Initiated first charter': 'Iniciado primer charter',
        'Network Expansion': 'Expansión de Red',
        'Achieved Pan-India presence': 'Lograda presencia en toda la India',
        'GSAs & Consolidation': 'GSAs y Consolidación',
        'Key GSA partnerships': 'Asociaciones clave de GSA',
        'Pharma Expertise': 'Experiencia Farmacéutica',
        'Specialized services': 'Servicios especializados',
        'Temp Warehouse': 'Almacén Temporal',
        'Pharma packaging': 'Embalaje farmacéutico',
        'Critical Response': 'Respuesta Crítica',
        'Imported life-saving drugs': 'Medicamentos que salvan vidas importados',
        'Governor\'s Award': 'Premio del Gobernador',
        'For Pharma Exports': 'Para Exportaciones Farmacéuticas',
        
        // Features
        'Export Logistics': 'Logística de Exportación',
        'Fast Delivery': 'Entrega Rápida',
        '24/7 Support': 'Soporte 24/7',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Nuestras soluciones logísticas de exportación optimizan el proceso, asegurando transporte suave y oportuno.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Las soluciones logísticas regulares de exportación optimizan el proceso, asegurando transporte suave y oportuno.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'El soporte para soluciones logísticas optimiza el proceso, asegurando transporte suave y oportuno.',
        
        // Services
        'Our Services': 'Nuestros Servicios',
        'Wide variety of logistics services': 'Amplia variedad de servicios logísticos',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Nuestra empresa logística ofrece una amplia gama de servicios adaptados para satisfacer las necesidades únicas de cada cliente. Desde almacenamiento y distribución hasta gestión de transporte y suministro.',
        'Air Freight (Export & Import)': 'Flete Aéreo (Exportación e Importación)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'Con más de 25 años en el mercado, tenemos un alcance sólido con una amplia gama de transportistas aéreos para ofrecer precios agresivos y soluciones a medida.',
        'Ocean Freight (Import & Export)': 'Flete Marítimo (Importación y Exportación)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Servicios integrales de flete marítimo para todas sus necesidades de importación y exportación, asegurando entrega confiable y oportuna en todo el mundo.',
        'Customs Brokerage': 'Agente de Aduanas',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'Ofrecemos una gama de servicios aduaneros con valor agregado para mover sus envíos a través de aduanas de manera rápida y eficiente.',
        'Warehouse & Distribution': 'Almacenamiento y Distribución',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'Para asegurar que su cadena de suministro funcione sin problemas, ofrecemos servicios dedicados y compartidos de almacenamiento y distribución.',
        'Air Charter': 'Charter Aéreo',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Desde 1989, hemos proporcionado servicios urgentes e integrales de Charter de Carga Aérea, manejando solicitudes con entrenamiento exhaustivo.',
        'Your Pet Pal': 'Su Compañero Mascota',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'Desde gatos y perros hasta caballos, tenemos el conocimiento para manejar y transportar sus mascotas con gentileza y cuidado a su destino.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Logística Farmacéutica Especializada',
        'Delivering health with precision and care since 1987': 'Entregando salud con precisión y cuidado desde 1987',
        'A Passion for Time-Sensitive Shipments': 'Una Pasión por Envíos Sensibles al Tiempo',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Con un legado en el manejo de envíos críticos de tiempo desde 1987, aportamos experiencia inigualable a la logística farmacéutica. Nuestro equipo es conocido por gestionar exitosamente productos de ciencias de la vida de alto valor, incluyendo envíos de ensayos clínicos, lanzamientos de nuevos productos y entregas a territorios especiales y desafiantes.',
        'Pharma-Focused Operations:': 'Operaciones Enfocadas en Farmacéuticos:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Un equipo dedicado entrenado específicamente en los matices del manejo de todos los tipos de productos de ciencias de la vida.',
        'Quality & Compliance:': 'Calidad y Cumplimiento:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Un compromiso con la Gestión de Calidad, la Excelencia Operacional y capacidades aduaneras superiores asegura que sus envíos cumplan con todos los estándares regulatorios.',
        'Temperature-Controlled Solutions:': 'Soluciones con Control de Temperatura:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Proporcionamos tanto soluciones farmacéuticas Activas como Pasivas para mantener la integridad estricta de temperatura para su carga.',
        'Established Carrier Relations:': 'Relaciones Establecidas con Transportistas:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Más de 30 años de sólidas asociaciones con aerolíneas y empresas navieras, garantizando confiabilidad, prioridad y comodidad del cliente.',
        'Our Temperature-Controlled Solutions': 'Nuestras Soluciones con Control de Temperatura',
        'Envirotainers (Active)': 'Envirotainers (Activo)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'Proporcionamos soluciones de contenedores activos de última generación, como el Envirotainer RKN e1 y RAP e2, que utilizan refrigeración basada en compresor y calefacción eléctrica para mantener temperaturas precisas del producto entre +2°C a +8°C o +15°C a +25°C, independientemente de las condiciones ambientales.',
        'Thermal Blankets (Passive)': 'Mantas Térmicas (Pasivo)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'Para prevenir picos de temperatura por luz solar directa o condiciones ambientales, envolvemos todos los pallets sensibles a la temperatura en mantas térmicas de alta calidad. Esto mantiene el rango de temperatura requerido durante el transporte, asegurando que los medicamentos permanezcan efectivos y seguros de usar.',
        'Cool Boxes (Passive)': 'Cajas Frías (Pasivo)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'Para productos que requieren control de temperatura más estricto, utilizamos cajas frías especializadas. Estos son un componente importante del embalaje farmacéutico, específicamente diseñado para mantener la temperatura de productos sensibles como vacunas, insulina y productos sanguíneos durante el transporte y almacenamiento.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Manejo de Envíos de Mercancías Peligrosas',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Asegurando el transporte seguro, conforme y eficiente de materiales peligrosos a través de aire, mar y tierra',
        'Our Comprehensive DGR Services': 'Nuestros Servicios Integrales DGR',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Navegar las complejidades de la logística de mercancías peligrosas requiere precisión y experiencia. Nuestro equipo certificado proporciona soluciones integrales para asegurar que sus envíos sean manejados de manera segura y en pleno cumplimiento con las leyes internacionales y locales.',
        'Expert Classification & Identification:': 'Clasificación e Identificación Experta:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Clasificación precisa de materiales peligrosos según sus propiedades específicas y riesgos.',
        'Compliant Packaging & Labelling:': 'Embalaje y Etiquetado Conforme:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Asegurando que todos los envíos sean empacados, marcados y etiquetados según los más altos estándares de seguridad para prevenir fugas, derrames y accidentes.',
        'Documentation & Compliance:': 'Documentación y Cumplimiento:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Preparación meticulosa de todos los documentos de transporte requeridos y estricta adherencia a las regulaciones internacionales (incluyendo IATA para aire, IMDG para mar y ADR para carretera).',
        'Certified Handling & Transport:': 'Manejo y Transporte Certificado:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Sus bienes son manejados por profesionales entrenados y certificados, utilizando los modos de transporte apropiados para máxima seguridad.',
        'End-to-End Logistics Support:': 'Soporte Logístico Integral:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'Ofrecemos soporte completo, desde consultoría inicial y evaluación de riesgos hasta entrega final y soluciones de almacenamiento.',
        
        // Project Logistics
        'Project Logistics': 'Logística de Proyectos',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Soluciones especializadas para transporte de carga de proyectos complejos y equipos pesados',
        'End-to-End Project Cargo Solutions': 'Soluciones Integrales de Carga de Proyectos',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Nuestra división de logística de proyectos se especializa en el manejo de envíos complejos, de gran tamaño y equipos pesados para proyectos industriales, plantas de energía, instalaciones de petróleo y gas, y desarrollo de infraestructura. Con décadas de experiencia, aseguramos coordinación perfecta desde la fábrica hasta el destino final.',
        'Our Project Logistics Services': 'Nuestros Servicios de Logística de Proyectos',
        'Heavy Equipment Transport:': 'Transporte de Equipos Pesados:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Manejo especializado de maquinaria, turbinas, generadores y equipos industriales con embalaje personalizado y transporte seguro.',
        'Oversized Cargo Solutions:': 'Soluciones de Carga de Gran Tamaño:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Gestión experta de envíos de gran tamaño que requieren permisos especiales, estudios de ruta y equipos de transporte especializados.',
        'Project Coordination:': 'Coordinación de Proyectos:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Gestión integral de proyectos incluyendo documentación, despacho de aduanas, seguro y seguimiento en tiempo real.',
        'Multi-Modal Transport:': 'Transporte Multimodal:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Integración perfecta de modos de transporte aéreo, marítimo y terrestre para requisitos de proyectos complejos.',
        'Site Delivery & Installation:': 'Entrega e Instalación en Sitio:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'Coordinación de entrega en sitio, posicionamiento de equipos y servicios de soporte de instalación.',
        'Industries We Serve': 'Industrias que Servimos',
        'Oil & Gas': 'Petróleo y Gas',
        'Pipeline equipment, drilling machinery, and refinery components': 'Equipos de oleoductos, maquinaria de perforación y componentes de refinería',
        'Power Generation': 'Generación de Energía',
        'Turbines, generators, transformers, and power plant equipment': 'Turbinas, generadores, transformadores y equipos de plantas de energía',
        'Manufacturing': 'Manufactura',
        'Production lines, industrial machinery, and manufacturing equipment': 'Líneas de producción, maquinaria industrial y equipos de manufactura',
        'Infrastructure': 'Infraestructura',
        'Construction equipment, bridge components, and infrastructure materials': 'Equipos de construcción, componentes de puentes y materiales de infraestructura',
        
        // Personnel
        'Key Personnel': 'Personal Clave',
        'Meet our experienced team across India': 'Conozca a nuestro equipo experimentado en toda la India',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Calculadora Inteligente de Carga',
        'Centimeters (CM)': 'Centímetros (CM)',
        'Inches (IN)': 'Pulgadas (IN)',
        'Package Dimensions': 'Dimensiones del Paquete',
        '+ Add Package': '+ Agregar Paquete',
        'Reset': 'Reiniciar',
        'Calculate': 'Calcular',
        
        // Locations
        'Our Nationwide Presence': 'Nuestra Presencia Nacional',
        'Bengaluru': 'Bengaluru',
        
        // Hero Section
        'Premium Worldwide Logistics': 'Logística Mundial Premium',
        'International Air Freight': 'Flete Aéreo Internacional',
        'Contact Us': 'Contáctenos',
        'Get your free quote today': 'Obtenga su cotización gratuita hoy',
        'Your Name': 'Su Nombre',
        'Email*': 'Correo Electrónico*',
        'Phone': 'Teléfono',
        'Transport': 'Transporte',
        'Your Message': 'Su Mensaje',
        'Request A Quote': 'Solicitar Cotización',
        'Reliable & Efficient': 'Confiable y Eficiente',
        'Multimodal Transport Network': 'Red de Transporte Multimodal',
        'Our Services': 'Nuestros Servicios',
        'Global Trade Solutions': 'Soluciones de Comercio Global',
        'Ocean Freight Solutions': 'Soluciones de Flete Marítimo',
        'Get a Quote': 'Obtener Cotización',
        
        // Memberships
        'Memberships & Certifications': 'Membresías y Certificaciones',
        'Proud members of leading global logistics organizations': 'Orgullosos miembros de las principales organizaciones logísticas globales',
        
        // About Section
        'About EASTERN CARGO CARRIERS (I) PVT.LTD': 'Acerca de EASTERN CARGO CARRIERS (I) PVT.LTD',
        'Our Legacy & Commitment': 'Nuestro Legado y Compromiso',
        'As a proudly independent and privately-owned Indian company, Eastern Cargo Carriers (I) Pvt. Ltd. brings over 45 years of dedicated experience to the logistics industry. We specialize in providing comprehensive, "End to End" service for our clients, covering all aspects of imports and exports across air, sea, and land transport, complete with seamless customs clearance.': 'Como una empresa india orgullosamente independiente y de propiedad privada, Eastern Cargo Carriers (I) Pvt. Ltd. aporta más de 45 años de experiencia dedicada a la industria logística. Nos especializamos en proporcionar un servicio integral "De Extremo a Extremo" para nuestros clientes, cubriendo todos los aspectos de importaciones y exportaciones a través de transporte aéreo, marítimo y terrestre, completo con despacho de aduanas sin problemas.',
        'Our global presence is bolstered by our official registration as a Multimodal Transport Operator (MTO) with the DG Shipping, Government of India. This allows us to offer specialized expertise across a wide range of verticals, including Project Cargo, Chemicals, Pharmaceuticals, Garments, Engineering Goods, Liquid Cargo, Hazardous (Haz) Cargo, Temperature-Controlled shipments, and E-Commerce logistics.': 'Nuestra presencia global se fortalece con nuestro registro oficial como Operador de Transporte Multimodal (MTO) con la DG Shipping, Gobierno de la India. Esto nos permite ofrecer experiencia especializada en una amplia gama de verticales, incluyendo Carga de Proyectos, Productos Químicos, Farmacéuticos, Prendas de Vestir, Bienes de Ingeniería, Carga Líquida, Carga Peligrosa (Haz), envíos con Control de Temperatura y logística de Comercio Electrónico.',
        'We are committed to the highest standards of quality, demonstrated by our ISO 9001 certification, AEO certification for streamlined customs clearance, and our GDP-compliant warehouse. As registered members of IATA and FIATA, we adhere to global best practices.': 'Estamos comprometidos con los más altos estándares de calidad, demostrados por nuestra certificación ISO 9001, certificación AEO para despacho de aduanas optimizado, y nuestro almacén compatible con GDP. Como miembros registrados de IATA y FIATA, nos adherimos a las mejores prácticas globales.',
        'With a robust Pan-India presence, we provide flexible and powerful solutions, from handling temperature-controlled, hazardous, and liquid cargo to arranging full or partial air and sea charters. Our ocean freight capabilities cover everything from FCL and LCL containers to break bulk, RORO, heavy lifts, special equipment, and other abnormal cargo.': 'Con una sólida presencia en toda la India, proporcionamos soluciones flexibles y potentes, desde el manejo de carga con control de temperatura, peligrosa y líquida hasta la organización de charters aéreos y marítimos completos o parciales. Nuestras capacidades de flete marítimo cubren todo, desde contenedores FCL y LCL hasta carga a granel, RORO, elevaciones pesadas, equipos especiales y otra carga anormal.',
        
        // Timeline
        'Ecc\'s Group Key Milestones in Aviation and Logistics': 'Hitos Clave del Grupo Ecc en Aviación y Logística',
        'Custom House Agent': 'Agente de Aduanas',
        'Established as a CHA': 'Establecido como CHA',
        'IATA Agent': 'Agente IATA',
        'Leveraging accreditation': 'Aprovechando la acreditación',
        'Charter Operation': 'Operación de Charter',
        'Initiated first charter': 'Iniciado primer charter',
        'Network Expansion': 'Expansión de Red',
        'Achieved Pan-India presence': 'Lograda presencia en toda la India',
        'GSAs & Consolidation': 'GSAs y Consolidación',
        'Key GSA partnerships': 'Asociaciones clave de GSA',
        'Pharma Expertise': 'Experiencia Farmacéutica',
        'Specialized services': 'Servicios especializados',
        'Temp Warehouse': 'Almacén Temporal',
        'Pharma packaging': 'Embalaje farmacéutico',
        'Critical Response': 'Respuesta Crítica',
        'Imported life-saving drugs': 'Medicamentos que salvan vidas importados',
        'Governor\'s Award': 'Premio del Gobernador',
        'For Pharma Exports': 'Para Exportaciones Farmacéuticas',
        
        // Features
        'Export Logistics': 'Logística de Exportación',
        'Fast Delivery': 'Entrega Rápida',
        '24/7 Support': 'Soporte 24/7',
        'Our export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Nuestras soluciones logísticas de exportación optimizan el proceso, asegurando transporte suave y oportuno.',
        'Regular export logistics solutions streamline the process, ensuring smooth & timely transportation.': 'Las soluciones logísticas regulares de exportación optimizan el proceso, asegurando transporte suave y oportuno.',
        'Support for logistics solutions streamline the process, ensuring smooth & timely transportation.': 'El soporte para soluciones logísticas optimiza el proceso, asegurando transporte suave y oportuno.',
        
        // Services
        'Our Services': 'Nuestros Servicios',
        'Wide variety of logistics services': 'Amplia variedad de servicios logísticos',
        'Our logistics company offers a diverse range of services tailored to meet the unique needs of each client. From warehousing and distribution to transportation management and supply.': 'Nuestra empresa logística ofrece una amplia gama de servicios adaptados para satisfacer las necesidades únicas de cada cliente. Desde almacenamiento y distribución hasta gestión de transporte y suministro.',
        'Air Freight (Export & Import)': 'Flete Aéreo (Exportación e Importación)',
        'With over 25 years in the market, we have a strong reach with a wide range of airline carriers to offer aggressive pricing and tailor-made solutions.': 'Con más de 25 años en el mercado, tenemos un alcance sólido con una amplia gama de transportistas aéreos para ofrecer precios agresivos y soluciones a medida.',
        'Ocean Freight (Import & Export)': 'Flete Marítimo (Importación y Exportación)',
        'Comprehensive ocean freight services for all your import and export needs, ensuring reliable and timely delivery across the globe.': 'Servicios integrales de flete marítimo para todas sus necesidades de importación y exportación, asegurando entrega confiable y oportuna en todo el mundo.',
        'Customs Brokerage': 'Agente de Aduanas',
        'We offer a range of value-added customs services to move your shipments through customs quickly and efficiently.': 'Ofrecemos una gama de servicios aduaneros con valor agregado para mover sus envíos a través de aduanas de manera rápida y eficiente.',
        'Warehouse & Distribution': 'Almacenamiento y Distribución',
        'To ensure your supply chain runs smoothly, we offer dedicated and shared warehousing and distribution services.': 'Para asegurar que su cadena de suministro funcione sin problemas, ofrecemos servicios dedicados y compartidos de almacenamiento y distribución.',
        'Air Charter': 'Charter Aéreo',
        'Since 1989, we have provided urgent and comprehensive Air Cargo Chartering services, handling requests with thorough training.': 'Desde 1989, hemos proporcionado servicios urgentes e integrales de Charter de Carga Aérea, manejando solicitudes con entrenamiento exhaustivo.',
        'Your Pet Pal': 'Su Compañero Mascota',
        'From cats and dogs to horses, we have the knowledge to handle and transport your pets gently and with care to their destination.': 'Desde gatos y perros hasta caballos, tenemos el conocimiento para manejar y transportar sus mascotas con gentileza y cuidado a su destino.',
        
        // Pharma Logistics
        'Specialized Pharma Logistics': 'Logística Farmacéutica Especializada',
        'Delivering health with precision and care since 1987': 'Entregando salud con precisión y cuidado desde 1987',
        'A Passion for Time-Sensitive Shipments': 'Una Pasión por Envíos Sensibles al Tiempo',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Con un legado en el manejo de envíos críticos de tiempo desde 1987, aportamos experiencia inigualable a la logística farmacéutica. Nuestro equipo es conocido por gestionar exitosamente productos de ciencias de la vida de alto valor, incluyendo envíos de ensayos clínicos, lanzamientos de nuevos productos y entregas a territorios especiales y desafiantes.',
        'Pharma-Focused Operations:': 'Operaciones Enfocadas en Farmacéuticos:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Un equipo dedicado entrenado específicamente en los matices del manejo de todos los tipos de productos de ciencias de la vida.',
        'Quality & Compliance:': 'Calidad y Cumplimiento:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Un compromiso con la Gestión de Calidad, la Excelencia Operacional y capacidades aduaneras superiores asegura que sus envíos cumplan con todos los estándares regulatorios.',
        'Temperature-Controlled Solutions:': 'Soluciones con Control de Temperatura:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Proporcionamos tanto soluciones farmacéuticas Activas como Pasivas para mantener la integridad estricta de temperatura para su carga.',
        'Established Carrier Relations:': 'Relaciones Establecidas con Transportistas:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Más de 30 años de sólidas asociaciones con aerolíneas y empresas navieras, garantizando confiabilidad, prioridad y comodidad del cliente.',
        'Our Temperature-Controlled Solutions': 'Nuestras Soluciones con Control de Temperatura',
        'Envirotainers (Active)': 'Envirotainers (Activo)',
        'We provide state-of-the-art active container solutions, such as the Envirotainer RKN e1 and RAP e2, which use compressor-based cooling and electric heating to maintain precise product temperatures between +2°C to +8°C or +15°C to +25°C, regardless of ambient conditions.': 'Proporcionamos soluciones de contenedores activos de última generación, como el Envirotainer RKN e1 y RAP e2, que utilizan refrigeración basada en compresor y calefacción eléctrica para mantener temperaturas precisas del producto entre +2°C a +8°C o +15°C a +25°C, independientemente de las condiciones ambientales.',
        'Thermal Blankets (Passive)': 'Mantas Térmicas (Pasivo)',
        'To prevent temperature spikes from direct sunlight or ambient conditions, we wrap all temperature-sensitive pallets in high-quality thermal blankets. This maintains the required temperature range during transportation, ensuring that drugs remain effective and safe to use.': 'Para prevenir picos de temperatura por luz solar directa o condiciones ambientales, envolvemos todos los pallets sensibles a la temperatura en mantas térmicas de alta calidad. Esto mantiene el rango de temperatura requerido durante el transporte, asegurando que los medicamentos permanezcan efectivos y seguros de usar.',
        'Cool Boxes (Passive)': 'Cajas Frías (Pasivo)',
        'For products requiring stricter temperature control, we utilize specialized cool boxes. These are an important component of pharmaceutical packaging, specifically designed to maintain the temperature of sensitive products like vaccines, insulin, and blood products during transportation and storage.': 'Para productos que requieren control de temperatura más estricto, utilizamos cajas frías especializadas. Estos son un componente importante del embalaje farmacéutico, específicamente diseñado para mantener la temperatura de productos sensibles como vacunas, insulina y productos sanguíneos durante el transporte y almacenamiento.',
        
        // DGR Shipments
        'Dangerous Goods Shipment Handling': 'Manejo de Envíos de Mercancías Peligrosas',
        'Ensuring the safe, compliant, and efficient transport of hazardous materials across air, sea, and land': 'Asegurando el transporte seguro, conforme y eficiente de materiales peligrosos a través de aire, mar y tierra',
        'Our Comprehensive DGR Services': 'Nuestros Servicios Integrales DGR',
        'Navigating the complexities of dangerous goods logistics requires precision and expertise. Our certified team provides end-to-end solutions to ensure your shipments are handled safely and in full compliance with international and local laws.': 'Navegar las complejidades de la logística de mercancías peligrosas requiere precisión y experiencia. Nuestro equipo certificado proporciona soluciones integrales para asegurar que sus envíos sean manejados de manera segura y en pleno cumplimiento con las leyes internacionales y locales.',
        'Expert Classification & Identification:': 'Clasificación e Identificación Experta:',
        'Accurate classification of hazardous materials according to their specific properties and risks.': 'Clasificación precisa de materiales peligrosos según sus propiedades específicas y riesgos.',
        'Compliant Packaging & Labelling:': 'Embalaje y Etiquetado Conforme:',
        'Ensuring all shipments are packed, marked, and labelled according to the highest safety standards to prevent leaks, spills, and accidents.': 'Asegurando que todos los envíos sean empacados, marcados y etiquetados según los más altos estándares de seguridad para prevenir fugas, derrames y accidentes.',
        'Documentation & Compliance:': 'Documentación y Cumplimiento:',
        'Meticulous preparation of all required transport documents and strict adherence to international regulations (including IATA for air, IMDG for sea, and ADR for road).': 'Preparación meticulosa de todos los documentos de transporte requeridos y estricta adherencia a las regulaciones internacionales (incluyendo IATA para aire, IMDG para mar y ADR para carretera).',
        'Certified Handling & Transport:': 'Manejo y Transporte Certificado:',
        'Your goods are managed by trained and certified professionals, utilizing the appropriate transport modes for maximum security.': 'Sus bienes son manejados por profesionales entrenados y certificados, utilizando los modos de transporte apropiados para máxima seguridad.',
        'End-to-End Logistics Support:': 'Soporte Logístico Integral:',
        'We offer complete support, from initial consultancy and risk assessment to final delivery and warehousing solutions.': 'Ofrecemos soporte completo, desde consultoría inicial y evaluación de riesgos hasta entrega final y soluciones de almacenamiento.',
        
        // Project Logistics
        'Project Logistics': 'Logística de Proyectos',
        'Specialized solutions for complex project cargo and heavy equipment transportation': 'Soluciones especializadas para transporte de carga de proyectos complejos y equipos pesados',
        'End-to-End Project Cargo Solutions': 'Soluciones Integrales de Carga de Proyectos',
        'Our project logistics division specializes in handling complex, oversized, and heavy equipment shipments for industrial projects, power plants, oil & gas facilities, and infrastructure development. With decades of experience, we ensure seamless coordination from factory to final destination.': 'Nuestra división de logística de proyectos se especializa en el manejo de envíos complejos, de gran tamaño y equipos pesados para proyectos industriales, plantas de energía, instalaciones de petróleo y gas, y desarrollo de infraestructura. Con décadas de experiencia, aseguramos coordinación perfecta desde la fábrica hasta el destino final.',
        'Our Project Logistics Services': 'Nuestros Servicios de Logística de Proyectos',
        'Heavy Equipment Transport:': 'Transporte de Equipos Pesados:',
        'Specialized handling of machinery, turbines, generators, and industrial equipment with custom crating and secure transportation.': 'Manejo especializado de maquinaria, turbinas, generadores y equipos industriales con embalaje personalizado y transporte seguro.',
        'Oversized Cargo Solutions:': 'Soluciones de Carga de Gran Tamaño:',
        'Expert management of oversized shipments requiring special permits, route surveys, and specialized transport equipment.': 'Gestión experta de envíos de gran tamaño que requieren permisos especiales, estudios de ruta y equipos de transporte especializados.',
        'Project Coordination:': 'Coordinación de Proyectos:',
        'Comprehensive project management including documentation, customs clearance, insurance, and real-time tracking.': 'Gestión integral de proyectos incluyendo documentación, despacho de aduanas, seguro y seguimiento en tiempo real.',
        'Multi-Modal Transport:': 'Transporte Multimodal:',
        'Seamless integration of air, sea, and land transport modes for complex project requirements.': 'Integración perfecta de modos de transporte aéreo, marítimo y terrestre para requisitos de proyectos complejos.',
        'Site Delivery & Installation:': 'Entrega e Instalación en Sitio:',
        'On-site delivery coordination, equipment positioning, and installation support services.': 'Coordinación de entrega en sitio, posicionamiento de equipos y servicios de soporte de instalación.',
        'Industries We Serve': 'Industrias que Servimos',
        'Oil & Gas': 'Petróleo y Gas',
        'Pipeline equipment, drilling machinery, and refinery components': 'Equipos de oleoductos, maquinaria de perforación y componentes de refinería',
        'Power Generation': 'Generación de Energía',
        'Turbines, generators, transformers, and power plant equipment': 'Turbinas, generadores, transformadores y equipos de plantas de energía',
        'Manufacturing': 'Manufactura',
        'Production lines, industrial machinery, and manufacturing equipment': 'Líneas de producción, maquinaria industrial y equipos de manufactura',
        'Infrastructure': 'Infraestructura',
        'Construction equipment, bridge components, and infrastructure materials': 'Equipos de construcción, componentes de puentes y materiales de infraestructura',
        
        // Personnel
        'Key Personnel': 'Personal Clave',
        'Meet our experienced team across India': 'Conozca a nuestro equipo experimentado en toda la India',
        'Mumbai': 'Mumbai',
        'Bangalore': 'Bangalore',
        'Chennai': 'Chennai',
        'Delhi': 'Delhi',
        'Indore': 'Indore',
        'Ahmedabad': 'Ahmedabad',
        'Hyderabad': 'Hyderabad',
        'Kolkata': 'Kolkata',
        
        // Calculator
        'Smart Cargo Calculator': 'Calculadora Inteligente de Carga',
        'Centimeters (CM)': 'Centímetros (CM)',
        'Inches (IN)': 'Pulgadas (IN)',
        'Package Dimensions': 'Dimensiones del Paquete',
        '+ Add Package': '+ Agregar Paquete',
        'Reset': 'Reiniciar',
        'Calculate': 'Calcular',
        
        // Locations
        'Our Nationwide Presence': 'Nuestra Presencia Nacional',
        'Bengaluru': 'Bengaluru',
        
        // Footer
        'Quick Links': 'Enlaces Rápidos',
        'Company Profile': 'Perfil de la Empresa',
        'Help Center': 'Centro de Ayuda',
        'Career': 'Carrera',
        'Plans & Pricing': 'Planes y Precios',
        'News & Blog': 'Noticias y Blog',
        'Less Than Truckload': 'Menos que Carga Completa',
        'Rail Freight Shipping': 'Envío de Carga por Ferrocarril',
        'Hot Shot Trucking': 'Transporte de Carga Urgente',
        'Freight forwarding': 'Agente de carga',
        'Container Freight': 'Carga de Contenedores',
        'Newsletter': 'Boletín',
        'Join our subscribers list to get the latest news and special offers.': 'Únase a nuestra lista de suscriptores para recibir las últimas noticias y ofertas especiales.',
        'Subscribe': 'Suscribirse',
        
        // New Why Choose Us Section
        'WHY CHOOSE US': 'POR QUÉ ELEGIRNOS',
        'Delivering Comprehensive Global Logistics Solutions': 'Entregando Soluciones Logísticas Globales Integrales',
        'WHAT WE DO': 'QUÉ HACEMOS',
        'OUR AWARD': 'NUESTRO PREMIO',
        'COMPANY HISTORY': 'HISTORIA DE LA EMPRESA',
        'Eastern Cargo is an independent, privately owned Indian company with over 45 years of experience providing end-to-end import and export services—covering air, sea, and land transport, along with expert customs clearance. We deliver solutions across multiple verticals such as projects, chemicals, pharma, garments, engineering goods, liquid cargo, hazardous cargo, temperature-controlled logistics, and e-commerce, all supported by a strong Pan India reach.': 'Eastern Cargo es una empresa india independiente y de propiedad privada con más de 45 años de experiencia proporcionando servicios integrales de importación y exportación, cubriendo transporte aéreo, marítimo y terrestre, junto con despacho de aduanas experto. Entregamos soluciones en múltiples verticales como proyectos, productos químicos, farmacéuticos, prendas de vestir, bienes de ingeniería, carga líquida, carga peligrosa, logística con control de temperatura y comercio electrónico, todo respaldado por una fuerte presencia en toda la India.',
        'Warehouse Facility': 'Instalación de Almacén',
        'Air Freight Facility': 'Instalación de Carga Aérea',
        'Cost Effective Pricing': 'Precios Rentables',
        'Timely Delivery': 'Entrega a Tiempo',
        'Container delivery': 'Entrega de Contenedores',
        'Best Team Member': 'Mejor Miembro del Equipo',
        'Our company specializes in delivering tailored air and ocean transportation solutions to meet the unique needs of each client. Whether it\'s international freight forwarding or time-sensitive cargo, we ensure reliable, efficient, and cost-effective services across global supply chains. We deliver solutions across multiple verticals such as projects, chemicals, pharma, garments, engineering goods, liquid cargo, hazardous cargo, temperature-controlled logistics, and e-commerce, all supported by a strong Pan India reach.': 'Nuestra empresa se especializa en entregar soluciones de transporte aéreo y marítimo personalizadas para satisfacer las necesidades únicas de cada cliente. Ya sea flete internacional o carga sensible al tiempo, aseguramos servicios confiables, eficientes y rentables en cadenas de suministro globales. Entregamos soluciones en múltiples verticales como proyectos, productos químicos, farmacéuticos, prendas de vestir, bienes de ingeniería, carga líquida, carga peligrosa, logística con control de temperatura y comercio electrónico, todo respaldado por una fuerte presencia en toda la India.',
        'Global Network': 'Red Global',
        'Real-time Tracking': 'Seguimiento en Tiempo Real',
        'Customs Expertise': 'Experiencia en Aduanas',
        'Multi-modal Transport': 'Transporte Multimodal',
        'Risk Management': 'Gestión de Riesgos',
        'Eastern Cargo has received numerous prestigious industry awards for excellence in freight forwarding and logistics. Our consistent performance and dedication to quality have earned recognition from leading airlines, global shippers, and trusted logistics agents—solidifying our reputation as a reliable partner in international cargo solutions.': 'Eastern Cargo ha recibido numerosos premios prestigiosos de la industria por la excelencia en flete y logística. Nuestro rendimiento consistente y dedicación a la calidad han ganado reconocimiento de aerolíneas líderes, transportistas globales y agentes logísticos de confianza, solidificando nuestra reputación como un socio confiable en soluciones de carga internacional.',
        'ISO Certified': 'Certificado ISO',
        'Industry Awards': 'Premios de la Industria',
        'Quality Standards': 'Estándares de Calidad',
        'Customer Recognition': 'Reconocimiento del Cliente',
        'AEO certified': 'Certificado AEO',
        'Excellence Certificates': 'Certificados de Excelencia',
        'Learn More': 'Saber Más',
        'Address': 'Dirección',
        'Unit #25/26/27, Adarsh Industrial Estate, Sahar Road, Chakala, Andheri (East), Mumbai – 400 099': 'Unidad #25/26/27, Adarsh Industrial Estate, Sahar Road, Chakala, Andheri (Este), Mumbai – 400 099',
        'Phone No': 'Número de Teléfono'
    },
    
    // French translations
    fr: {
        // Navigation
        'HOME': 'ACCUEIL',
        'ABOUT': 'À PROPOS',
        'MEMBERSHIPS': 'ADHÉSIONS',
        'SERVICES': 'SERVICES',
        'MORE': 'PLUS',
        'Healthcare Logistics': 'Logistique de Santé',
        'DGR Shipments': 'Expéditions DGR',
        'Project Logistics': 'Logistique de Projet',
        'Key Personnel': 'Personnel Clé',
        'Calculator': 'Calculateur',
        'Our Offices': 'Nos Bureaux',
        'CONTACT': 'CONTACT',
        'Have any Questions?': 'Avez-vous des questions?',
        
        // Hero Section
        'Worldwide Logistics': 'Logistique Mondiale',
        'International Air Freight': 'Fret Aérien International',
        'Contact Us': 'Contactez-nous',
        'Get your free quote today': 'Obtenez votre devis gratuit aujourd\'hui',
        'Your Name': 'Votre Nom',
        'Email*': 'Email*',
        'Phone': 'Téléphone',
        'Transport': 'Transport',
        'Your Message': 'Votre Message',
        'Request A Quote': 'Demander un Devis',
        'Reliable & Efficient': 'Fiable et Efficace',
        'Multimodal Transport Network': 'Réseau de Transport Multimodal',
        'Our Services': 'Nos Services',
        'Global Trade Solutions': 'Solutions de Commerce Mondial',
        'Ocean Freight Solutions': 'Solutions de Fret Maritime',
        'Get a Quote': 'Obtenir un Devis',
        
        // New Why Choose Us Section
        'WHY CHOOSE US': 'POURQUOI NOUS CHOISIR',
        'Delivering Comprehensive Global Logistics Solutions': 'Livraison de Solutions Logistiques Globales Complètes',
        'WHAT WE DO': 'CE QUE NOUS FAISONS',
        'OUR AWARD': 'NOTRE RÉCOMPENSE',
        'COMPANY HISTORY': 'HISTOIRE DE L\'ENTREPRISE',
        'Learn More': 'En Savoir Plus',
        'Address': 'Adresse',
        'Phone No': 'Numéro de Téléphone',
        'Email Address': 'Adresse Email',
        
        // Healthcare Logistics
        'Healthcare Logistics You Can Trust': 'Logistique de Santé en Qui Vous Pouvez Avoir Confiance',
        'When it comes to healthcare, every shipment is critical. At Eastern Cargo, we understand that lives can depend on the safe, fast, and precise delivery of your medical products. That\'s why we provide specialized logistics solutions designed for the unique needs of the healthcare and life sciences industry.': 'Quand il s\'agit de santé, chaque expédition est critique. Chez Eastern Cargo, nous comprenons que des vies peuvent dépendre de la livraison sûre, rapide et précise de vos produits médicaux. C\'est pourquoi nous fournissons des solutions logistiques spécialisées conçues pour les besoins uniques de l\'industrie de la santé et des sciences de la vie.',
        'Temperature-Controlled Transport:': 'Transport à Température Contrôlée:',
        'Validated packaging and cold chain solutions for frozen, chilled, and controlled room temperature shipments.': 'Emballage validé et solutions de chaîne du froid pour les expéditions congelées, réfrigérées et à température ambiante contrôlée.',
        'Time-Critical Deliveries:': 'Livraisons Critiques en Temps:',
        'Priority handling for urgent shipments, with same-day and next-flight-out options.': 'Traitement prioritaire pour les expéditions urgentes, avec options le jour même et prochain vol.',
        'Regulatory Compliance:': 'Conformité Réglementaire:',
        'Assistance with trade, customs, and industry regulations.': 'Assistance avec les réglementations commerciales, douanières et industrielles.',
        'Sample & Equipment Handling:': 'Manutention d\'Échantillons et d\'Équipements:',
        'From diagnostic samples and clinical trial kits to surgical instruments and pharmaceuticals.': 'Des échantillons de diagnostic et kits d\'essais cliniques aux instruments chirurgicaux et produits pharmaceutiques.',
        'Why Healthcare Leaders Choose Eastern Cargo:': 'Pourquoi les Leaders de la Santé Choisissent Eastern Cargo:',
        'Dedicated healthcare logistics specialists. Nationwide and international reach with multimodal solutions. 24/7 operational support and contingency planning. Secure chain-of-custody protocols for sensitive shipments. When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': 'Spécialistes logistiques dédiés à la santé. Portée nationale et internationale avec des solutions multimodales. Support opérationnel 24/7 et planification d\'urgence. Protocoles sécurisés de chaîne de garde pour les expéditions sensibles. Quand la précision et la fiabilité comptent le plus — choisissez Eastern Cargo. Contactez notre équipe logistique santé aujourd\'hui pour discuter de vos besoins.',
        'When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': 'Quand la précision et la fiabilité comptent le plus — choisissez Eastern Cargo. Contactez notre équipe logistique santé aujourd\'hui pour discuter de vos besoins.',
        
        // Second Healthcare Card
        'A Passion for Time-Sensitive Shipments': 'Une Passion pour les Expéditions Sensibles au Temps',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Avec un héritage dans la gestion des expéditions critiques de temps depuis 1987, nous apportons une expertise inégalée à la logistique pharmaceutique. Notre équipe est connue pour gérer avec succès des produits de sciences de la vie de haute valeur, y compris les expéditions d\'essais cliniques, les lancements de nouveaux produits et les livraisons vers des territoires spéciaux et difficiles.',
        'Pharma-Focused Operations:': 'Opérations Axées sur la Pharma:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Une équipe dédiée formée spécifiquement aux nuances de la gestion de tous les types de produits de sciences de la vie.',
        'Quality & Compliance:': 'Qualité et Conformité:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Un engagement envers la gestion de la qualité, l\'excellence opérationnelle et des capacités douanières supérieures garantit que vos expéditions respectent toutes les normes réglementaires.',
        'Temperature-Controlled Solutions:': 'Solutions à Température Contrôlée:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Nous fournissons à la fois des solutions pharma actives et passives pour maintenir l\'intégrité stricte de la température pour votre cargaison.',
        'Established Carrier Relations:': 'Relations Établies avec les Transporteurs:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Plus de 30 ans de partenariats solides avec des compagnies aériennes et maritimes, garantissant fiabilité, priorité et confort client.',
        
        // DG Shipments
        'DG Shipments': 'Expéditions DG',
        'Dangerous Goods, Chemical & Hazardous Shipments – Expert Logistics Solutions': 'Expéditions de Marchandises Dangereuses, Chimiques et Dangereuses – Solutions Logistiques Expertes',
        'Transporting dangerous goods (DG), chemicals, and hazardous materials is a specialized domain, demanding utmost precision, expertise, and strict compliance with international safety standards. At Eastern Cargo we offer comprehensive DG logistics solutions for your shipments to move securely by air, sea, and road.': 'Le transport de marchandises dangereuses (DG), de produits chimiques et de matières dangereuses est un domaine spécialisé, exigeant une précision maximale, une expertise et une conformité stricte aux normes de sécurité internationales. Chez Eastern Cargo, nous offrons des solutions logistiques DG complètes pour que vos expéditions se déplacent en toute sécurité par air, mer et route.',
        'Classification & Identification:': 'Classification et Identification:',
        'Accurate classification of chemicals and hazardous cargo as per IATA and local regulations. We assign correct UN numbers, hazard classes, and packing groups to every shipment.': 'Classification précise des produits chimiques et des cargaisons dangereuses selon les réglementations IATA et locales. Nous attribuons les numéros ONU, classes de danger et groupes d\'emballage corrects à chaque expédition.',
        'Certified Packaging & Labelling:': 'Emballage et Étiquetage Certifiés:',
        'All items are packed, marked, and labelled with DG-compliant materials by trained personnel to prevent leaks, spills, and accidents. Compliance with international standards is our priority for every mode of transport.': 'Tous les articles sont emballés, marqués et étiquetés avec des matériaux conformes DG par du personnel formé pour prévenir les fuites, déversements et accidents. La conformité aux normes internationales est notre priorité pour chaque mode de transport.',
        'Regulatory Documentation & Compliance:': 'Documentation Réglementaire et Conformité:',
        'We manage full documentation—DG declarations, Safety Data Sheets (SDS/MSDS), permits, and insurance—ensuring flawless regulatory adherence with IATA.': 'Nous gérons la documentation complète — déclarations DG, fiches de données de sécurité (SDS/MSDS), permis et assurance — assurant une adhésion réglementaire parfaite avec l\'IATA.',
        'Trained Handling & Secure Transport:': 'Manutention Formée et Transport Sécurisé:',
        'Your hazardous cargo is managed by certified professionals using DG-approved containers.': 'Votre cargaison dangereuse est gérée par des professionnels certifiés utilisant des conteneurs approuvés DG.',
        'End-to-End DG Logistics Support:': 'Support Logistique DG de Bout en Bout:',
        'Full-spectrum services from risk assessment and regulatory consultancy to shipment scheduling, delivery, and secure warehousing.': 'Services complets de l\'évaluation des risques et de la consultation réglementaire à la planification des expéditions, la livraison et l\'entreposage sécurisé.',
        'Ready to ship your dangerous goods, chemicals, or hazardous materials? Contact our certified DG logistics team today for a personalized quote and expert guidance on global DG shipment compliance.': 'Prêt à expédier vos marchandises dangereuses, produits chimiques ou matières dangereuses? Contactez notre équipe logistique DG certifiée aujourd\'hui pour un devis personnalisé et des conseils d\'experts sur la conformité mondiale des expéditions DG.'
    },
    
    // Chinese translations
    zh: {
        // Navigation
        'HOME': '首页',
        'ABOUT': '关于我们',
        'MEMBERSHIPS': '会员资格',
        'SERVICES': '服务',
        'MORE': '更多',
        'Healthcare Logistics': '医疗物流',
        'DGR Shipments': '危险品运输',
        'Project Logistics': '项目物流',
        'Key Personnel': '关键人员',
        'Calculator': '计算器',
        'Our Offices': '我们的办事处',
        'CONTACT': '联系我们',
        'Have any Questions?': '有任何问题吗？',
        
        // Hero Section
        'Worldwide Logistics': '全球物流',
        'International Air Freight': '国际空运',
        'Contact Us': '联系我们',
        'Get your free quote today': '立即获取免费报价',
        'Your Name': '您的姓名',
        'Email*': '邮箱*',
        'Phone': '电话',
        'Transport': '运输',
        'Your Message': '您的留言',
        'Request A Quote': '请求报价',
        'Reliable & Efficient': '可靠高效',
        'Multimodal Transport Network': '多式联运网络',
        'Our Services': '我们的服务',
        'Global Trade Solutions': '全球贸易解决方案',
        'Ocean Freight Solutions': '海运解决方案',
        'Get a Quote': '获取报价',
        
        // New Why Choose Us Section
        'WHY CHOOSE US': '为什么选择我们',
        'Delivering Comprehensive Global Logistics Solutions': '提供全面的全球物流解决方案',
        'WHAT WE DO': '我们做什么',
        'OUR AWARD': '我们的奖项',
        'COMPANY HISTORY': '公司历史',
        'Learn More': '了解更多',
        'Address': '地址',
        'Phone No': '电话号码',
        'Email Address': '邮箱地址',
        
        // Healthcare Logistics
        'Healthcare Logistics You Can Trust': '值得信赖的医疗物流',
        'When it comes to healthcare, every shipment is critical. At Eastern Cargo, we understand that lives can depend on the safe, fast, and precise delivery of your medical products. That\'s why we provide specialized logistics solutions designed for the unique needs of the healthcare and life sciences industry.': '在医疗保健方面，每一次运输都至关重要。在东方货运，我们理解生命可能取决于您的医疗产品安全、快速和精确的交付。这就是为什么我们提供专门为医疗保健和生命科学行业的独特需求而设计的专业物流解决方案。',
        'Temperature-Controlled Transport:': '温控运输：',
        'Validated packaging and cold chain solutions for frozen, chilled, and controlled room temperature shipments.': '经过验证的包装和冷链解决方案，适用于冷冻、冷藏和室温控制的运输。',
        'Time-Critical Deliveries:': '时效性交付：',
        'Priority handling for urgent shipments, with same-day and next-flight-out options.': '紧急货物的优先处理，提供当日和下一航班选项。',
        'Regulatory Compliance:': '法规合规：',
        'Assistance with trade, customs, and industry regulations.': '协助处理贸易、海关和行业法规。',
        'Sample & Equipment Handling:': '样品和设备处理：',
        'From diagnostic samples and clinical trial kits to surgical instruments and pharmaceuticals.': '从诊断样本和临床试验套件到手术器械和药品。',
        'Why Healthcare Leaders Choose Eastern Cargo:': '为什么医疗保健领导者选择东方货运：',
        'Dedicated healthcare logistics specialists. Nationwide and international reach with multimodal solutions. 24/7 operational support and contingency planning. Secure chain-of-custody protocols for sensitive shipments. When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': '专门的医疗保健物流专家。全国和国际覆盖，提供多式联运解决方案。24/7运营支持和应急规划。敏感货物的安全监管链协议。当精度和可靠性最重要时——选择东方货运。今天就联系我们的医疗保健物流团队讨论您的需求。',
        'When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': '当精度和可靠性最重要时——选择东方货运。今天就联系我们的医疗保健物流团队讨论您的需求。',
        
        // Second Healthcare Card
        'A Passion for Time-Sensitive Shipments': '对时效性运输的热情',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': '自1987年以来，我们在处理时效性关键货物方面拥有丰富经验，为制药物流带来无与伦比的专业知识。我们的团队以成功管理高价值生命科学产品而闻名，包括临床试验货物、新产品发布以及向特殊和具有挑战性的地区交付。',
        'Pharma-Focused Operations:': '以制药为重点的运营：',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': '专门培训的团队，专门处理各种生命科学产品的细微差别。',
        'Quality & Compliance:': '质量和合规：',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': '对质量管理、运营卓越和卓越海关能力的承诺确保您的货物符合所有监管标准。',
        'Temperature-Controlled Solutions:': '温控解决方案：',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': '我们提供主动和被动制药解决方案，为您的货物保持严格的温度完整性。',
        'Established Carrier Relations:': '已建立的承运人关系：',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': '与航空公司和航运公司超过30年的强大合作伙伴关系，保证可靠性、优先性和客户舒适度。',
        
        // DG Shipments
        'DG Shipments': '危险品运输',
        'Dangerous Goods, Chemical & Hazardous Shipments – Expert Logistics Solutions': '危险品、化学品和危险货物运输 – 专业物流解决方案',
        'Transporting dangerous goods (DG), chemicals, and hazardous materials is a specialized domain, demanding utmost precision, expertise, and strict compliance with international safety standards. At Eastern Cargo we offer comprehensive DG logistics solutions for your shipments to move securely by air, sea, and road.': '运输危险品(DG)、化学品和危险材料是一个专业领域，需要极高的精度、专业知识和严格遵守国际安全标准。在东方货运，我们为您的货物提供全面的DG物流解决方案，确保通过空运、海运和陆路安全运输。',
        'Classification & Identification:': '分类和识别：',
        'Accurate classification of chemicals and hazardous cargo as per IATA and local regulations. We assign correct UN numbers, hazard classes, and packing groups to every shipment.': '根据IATA和当地法规对化学品和危险货物进行准确分类。我们为每批货物分配正确的联合国编号、危险类别和包装组。',
        'Certified Packaging & Labelling:': '认证包装和标签：',
        'All items are packed, marked, and labelled with DG-compliant materials by trained personnel to prevent leaks, spills, and accidents. Compliance with international standards is our priority for every mode of transport.': '所有物品均由经过培训的人员使用符合DG标准的材料进行包装、标记和标签，以防止泄漏、溢出和事故。遵守国际标准是我们每种运输方式的首要任务。',
        'Regulatory Documentation & Compliance:': '监管文件和合规：',
        'We manage full documentation—DG declarations, Safety Data Sheets (SDS/MSDS), permits, and insurance—ensuring flawless regulatory adherence with IATA.': '我们管理完整的文件——DG声明、安全数据表(SDS/MSDS)、许可证和保险——确保与IATA的无缝监管合规。',
        'Trained Handling & Secure Transport:': '培训处理和安全运输：',
        'Your hazardous cargo is managed by certified professionals using DG-approved containers.': '您的危险货物由经过认证的专业人员使用DG批准的容器进行管理。',
        'End-to-End DG Logistics Support:': '端到端DG物流支持：',
        'Full-spectrum services from risk assessment and regulatory consultancy to shipment scheduling, delivery, and secure warehousing.': '从风险评估和监管咨询到货物调度、交付和安全仓储的全方位服务。',
        'Ready to ship your dangerous goods, chemicals, or hazardous materials? Contact our certified DG logistics team today for a personalized quote and expert guidance on global DG shipment compliance.': '准备运输您的危险品、化学品或危险材料？今天就联系我们的认证DG物流团队，获取个性化报价和全球DG运输合规的专业指导。'
    },
    
    // German translations
    de: {
        // Navigation
        'HOME': 'STARTSEITE',
        'ABOUT': 'ÜBER UNS',
        'MEMBERSHIPS': 'MITGLIEDSCHAFTEN',
        'SERVICES': 'DIENSTLEISTUNGEN',
        'MORE': 'MEHR',
        'Healthcare Logistics': 'Gesundheitslogistik',
        'DGR Shipments': 'DGR-Sendungen',
        'Project Logistics': 'Projektlogistik',
        'Key Personnel': 'Schlüsselpersonal',
        'Calculator': 'Rechner',
        'Our Offices': 'Unsere Büros',
        'CONTACT': 'KONTAKT',
        'Have any Questions?': 'Haben Sie Fragen?',
        
        // Hero Section
        'Worldwide Logistics': 'Weltweite Logistik',
        'International Air Freight': 'Internationaler Luftfracht',
        'Contact Us': 'Kontaktieren Sie uns',
        'Get your free quote today': 'Erhalten Sie heute Ihr kostenloses Angebot',
        'Your Name': 'Ihr Name',
        'Email*': 'E-Mail*',
        'Phone': 'Telefon',
        'Transport': 'Transport',
        'Your Message': 'Ihre Nachricht',
        'Request A Quote': 'Angebot anfordern',
        'Reliable & Efficient': 'Zuverlässig und Effizient',
        'Multimodal Transport Network': 'Multimodales Transportnetzwerk',
        'Our Services': 'Unsere Dienstleistungen',
        'Global Trade Solutions': 'Globale Handelssysteme',
        'Ocean Freight Solutions': 'Seefrachtlösungen',
        'Get a Quote': 'Angebot erhalten',
        
        // New Why Choose Us Section
        'WHY CHOOSE US': 'WARUM UNS WÄHLEN',
        'Delivering Comprehensive Global Logistics Solutions': 'Umfassende globale Logistiklösungen liefern',
        'WHAT WE DO': 'WAS WIR TUN',
        'OUR AWARD': 'UNSER PREIS',
        'COMPANY HISTORY': 'UNTERNEHMENSGESCHICHTE',
        'Learn More': 'Mehr erfahren',
        'Address': 'Adresse',
        'Phone No': 'Telefonnummer',
        'Email Address': 'E-Mail-Adresse',
        
        // Healthcare Logistics
        'Healthcare Logistics You Can Trust': 'Gesundheitslogistik, der Sie Vertrauen Können',
        'When it comes to healthcare, every shipment is critical. At Eastern Cargo, we understand that lives can depend on the safe, fast, and precise delivery of your medical products. That\'s why we provide specialized logistics solutions designed for the unique needs of the healthcare and life sciences industry.': 'Wenn es um die Gesundheitsversorgung geht, ist jede Sendung kritisch. Bei Eastern Cargo verstehen wir, dass Leben von der sicheren, schnellen und präzisen Lieferung Ihrer medizinischen Produkte abhängen können. Deshalb bieten wir spezialisierte Logistiklösungen, die für die einzigartigen Bedürfnisse der Gesundheits- und Biowissenschaftsindustrie entwickelt wurden.',
        'Temperature-Controlled Transport:': 'Temperaturkontrollierter Transport:',
        'Validated packaging and cold chain solutions for frozen, chilled, and controlled room temperature shipments.': 'Validierte Verpackung und Kühlkettenlösungen für gefrorene, gekühlte und raumtemperaturkontrollierte Sendungen.',
        'Time-Critical Deliveries:': 'Zeitkritische Lieferungen:',
        'Priority handling for urgent shipments, with same-day and next-flight-out options.': 'Prioritätsbehandlung für dringende Sendungen mit Optionen am selben Tag und nächsten Flug.',
        'Regulatory Compliance:': 'Regulatorische Compliance:',
        'Assistance with trade, customs, and industry regulations.': 'Unterstützung bei Handels-, Zoll- und Branchenvorschriften.',
        'Sample & Equipment Handling:': 'Proben- und Gerätehandling:',
        'From diagnostic samples and clinical trial kits to surgical instruments and pharmaceuticals.': 'Von Diagnoseproben und klinischen Studienkits bis hin zu chirurgischen Instrumenten und Pharmazeutika.',
        'Why Healthcare Leaders Choose Eastern Cargo:': 'Warum Gesundheitsführer Eastern Cargo Wählen:',
        'Dedicated healthcare logistics specialists. Nationwide and international reach with multimodal solutions. 24/7 operational support and contingency planning. Secure chain-of-custody protocols for sensitive shipments. When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': 'Dedizierte Gesundheitslogistik-Spezialisten. Landesweite und internationale Reichweite mit multimodalen Lösungen. 24/7 Betriebsunterstützung und Notfallplanung. Sichere Chain-of-Custody-Protokolle für sensible Sendungen. Wenn Präzision und Zuverlässigkeit am wichtigsten sind — wählen Sie Eastern Cargo. Kontaktieren Sie noch heute unser Gesundheitslogistik-Team, um Ihre Bedürfnisse zu besprechen.',
        'When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': 'Wenn Präzision und Zuverlässigkeit am wichtigsten sind — wählen Sie Eastern Cargo. Kontaktieren Sie noch heute unser Gesundheitslogistik-Team, um Ihre Bedürfnisse zu besprechen.',
        
        // Second Healthcare Card
        'A Passion for Time-Sensitive Shipments': 'Eine Leidenschaft für Zeitkritische Sendungen',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': 'Mit einem Erbe in der Handhabung zeitkritischer Sendungen seit 1987 bringen wir unvergleichliche Expertise in die pharmazeutische Logistik. Unser Team ist bekannt dafür, hochwertige Life-Science-Produkte erfolgreich zu verwalten, einschließlich klinischer Studien-Sendungen, neuer Produkteinführungen und Lieferungen in besondere und herausfordernde Gebiete.',
        'Pharma-Focused Operations:': 'Pharma-Fokussierte Operationen:',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'Ein dediziertes Team, das speziell in den Nuancen der Handhabung aller Arten von Life-Science-Produkten geschult ist.',
        'Quality & Compliance:': 'Qualität und Compliance:',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': 'Ein Engagement für Qualitätsmanagement, operative Exzellenz und überlegene Zollfähigkeiten stellt sicher, dass Ihre Sendungen alle regulatorischen Standards erfüllen.',
        'Temperature-Controlled Solutions:': 'Temperaturkontrollierte Lösungen:',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'Wir bieten sowohl aktive als auch passive Pharma-Lösungen, um die strenge Temperaturintegrität für Ihre Fracht aufrechtzuerhalten.',
        'Established Carrier Relations:': 'Etablierte Carrier-Beziehungen:',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': 'Über 30 Jahre starke Partnerschaften mit Fluggesellschaften und Reedereien, die Zuverlässigkeit, Priorität und Kundekomfort garantieren.',
        
        // DG Shipments
        'DG Shipments': 'DG-Sendungen',
        'Dangerous Goods, Chemical & Hazardous Shipments – Expert Logistics Solutions': 'Gefährliche Güter, Chemische und Gefährliche Sendungen – Experten-Logistiklösungen',
        'Transporting dangerous goods (DG), chemicals, and hazardous materials is a specialized domain, demanding utmost precision, expertise, and strict compliance with international safety standards. At Eastern Cargo we offer comprehensive DG logistics solutions for your shipments to move securely by air, sea, and road.': 'Der Transport gefährlicher Güter (DG), Chemikalien und gefährlicher Materialien ist ein spezialisiertes Gebiet, das höchste Präzision, Expertise und strikte Einhaltung internationaler Sicherheitsstandards erfordert. Bei Eastern Cargo bieten wir umfassende DG-Logistiklösungen für Ihre Sendungen, um sicher per Luft, See und Straße zu transportieren.',
        'Classification & Identification:': 'Klassifizierung und Identifikation:',
        'Accurate classification of chemicals and hazardous cargo as per IATA and local regulations. We assign correct UN numbers, hazard classes, and packing groups to every shipment.': 'Genaue Klassifizierung von Chemikalien und gefährlichen Gütern gemäß IATA- und lokalen Vorschriften. Wir weisen jeder Sendung korrekte UN-Nummern, Gefahrenklassen und Verpackungsgruppen zu.',
        'Certified Packaging & Labelling:': 'Zertifizierte Verpackung und Kennzeichnung:',
        'All items are packed, marked, and labelled with DG-compliant materials by trained personnel to prevent leaks, spills, and accidents. Compliance with international standards is our priority for every mode of transport.': 'Alle Artikel werden von geschultem Personal mit DG-konformen Materialien verpackt, markiert und gekennzeichnet, um Lecks, Verschüttungen und Unfälle zu verhindern. Die Einhaltung internationaler Standards ist unsere Priorität für jeden Transportmodus.',
        'Regulatory Documentation & Compliance:': 'Regulatorische Dokumentation und Compliance:',
        'We manage full documentation—DG declarations, Safety Data Sheets (SDS/MSDS), permits, and insurance—ensuring flawless regulatory adherence with IATA.': 'Wir verwalten vollständige Dokumentation — DG-Erklärungen, Sicherheitsdatenblätter (SDS/MSDS), Genehmigungen und Versicherungen — und gewährleisten eine fehlerlose regulatorische Einhaltung mit IATA.',
        'Trained Handling & Secure Transport:': 'Geschultes Handling und Sicherer Transport:',
        'Your hazardous cargo is managed by certified professionals using DG-approved containers.': 'Ihre gefährliche Fracht wird von zertifizierten Fachleuten mit DG-genehmigten Containern verwaltet.',
        'End-to-End DG Logistics Support:': 'End-to-End DG-Logistikunterstützung:',
        'Full-spectrum services from risk assessment and regulatory consultancy to shipment scheduling, delivery, and secure warehousing.': 'Vollspektrum-Services von Risikobewertung und regulatorischer Beratung bis hin zu Sendungsplanung, Lieferung und sicherer Lagerung.',
        'Ready to ship your dangerous goods, chemicals, or hazardous materials? Contact our certified DG logistics team today for a personalized quote and expert guidance on global DG shipment compliance.': 'Bereit, Ihre gefährlichen Güter, Chemikalien oder gefährlichen Materialien zu versenden? Kontaktieren Sie noch heute unser zertifiziertes DG-Logistik-Team für ein personalisiertes Angebot und Expertenberatung zur globalen DG-Sendungscompliance.'
    },
    
    // Japanese translations
    ja: {
        // Navigation
        'HOME': 'ホーム',
        'ABOUT': '会社概要',
        'MEMBERSHIPS': '会員資格',
        'SERVICES': 'サービス',
        'MORE': 'その他',
        'Healthcare Logistics': '医療物流',
        'DGR Shipments': '危険物輸送',
        'Project Logistics': 'プロジェクト物流',
        'Key Personnel': '主要スタッフ',
        'Calculator': '計算機',
        'Our Offices': 'オフィス',
        'CONTACT': 'お問い合わせ',
        'Have any Questions?': 'ご質問はありますか？',
        
        // Hero Section
        'Worldwide Logistics': 'グローバル物流',
        'International Air Freight': '国際航空貨物',
        'Contact Us': 'お問い合わせ',
        'Get your free quote today': '今日無料見積もりを取得',
        'Your Name': 'お名前',
        'Email*': 'メール*',
        'Phone': '電話',
        'Transport': '輸送',
        'Your Message': 'メッセージ',
        'Request A Quote': '見積もりを依頼',
        'Reliable & Efficient': '信頼性と効率性',
        'Multimodal Transport Network': 'マルチモーダル輸送ネットワーク',
        'Our Services': '私たちのサービス',
        'Global Trade Solutions': 'グローバル貿易ソリューション',
        'Ocean Freight Solutions': '海上貨物ソリューション',
        'Get a Quote': '見積もりを取得',
        
        // New Why Choose Us Section
        'WHY CHOOSE US': 'なぜ私たちを選ぶのか',
        'Delivering Comprehensive Global Logistics Solutions': '包括的なグローバル物流ソリューションの提供',
        'WHAT WE DO': '私たちがすること',
        'OUR AWARD': '私たちの受賞',
        'COMPANY HISTORY': '会社の歴史',
        'Learn More': '詳細を見る',
        'Address': '住所',
        'Phone No': '電話番号',
        'Email Address': 'メールアドレス',
        
        // Healthcare Logistics
        'Healthcare Logistics You Can Trust': '信頼できる医療物流',
        'When it comes to healthcare, every shipment is critical. At Eastern Cargo, we understand that lives can depend on the safe, fast, and precise delivery of your medical products. That\'s why we provide specialized logistics solutions designed for the unique needs of the healthcare and life sciences industry.': '医療において、すべての配送が重要です。イースタンカーゴでは、生命が医療製品の安全で迅速かつ正確な配送に依存する可能性があることを理解しています。そのため、医療・生命科学業界の独自のニーズに合わせて設計された専門的な物流ソリューションを提供しています。',
        'Temperature-Controlled Transport:': '温度管理輸送：',
        'Validated packaging and cold chain solutions for frozen, chilled, and controlled room temperature shipments.': '冷凍、冷蔵、室温管理配送のための検証済み包装とコールドチェーンソリューション。',
        'Time-Critical Deliveries:': '時間厳守配送：',
        'Priority handling for urgent shipments, with same-day and next-flight-out options.': '緊急配送の優先処理、当日および次便オプション付き。',
        'Regulatory Compliance:': '規制遵守：',
        'Assistance with trade, customs, and industry regulations.': '貿易、税関、業界規制への支援。',
        'Sample & Equipment Handling:': 'サンプル・機器取り扱い：',
        'From diagnostic samples and clinical trial kits to surgical instruments and pharmaceuticals.': '診断サンプルや臨床試験キットから手術器具、医薬品まで。',
        'Why Healthcare Leaders Choose Eastern Cargo:': '医療リーダーがイースタンカーゴを選ぶ理由：',
        'Dedicated healthcare logistics specialists. Nationwide and international reach with multimodal solutions. 24/7 operational support and contingency planning. Secure chain-of-custody protocols for sensitive shipments. When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': '専用の医療物流専門家。マルチモーダルソリューションによる全国・国際展開。24時間365日の運営サポートと緊急時計画。機密配送の安全な保管チェーンプロトコル。精度と信頼性が最も重要である場合—イースタンカーゴを選択してください。今日、医療物流チームにご連絡いただき、ご要望についてご相談ください。',
        'When precision and reliability matter most — choose Eastern Cargo. Contact our healthcare logistics team today to discuss your needs.': '精度と信頼性が最も重要である場合—イースタンカーゴを選択してください。今日、医療物流チームにご連絡いただき、ご要望についてご相談ください。',
        
        // Second Healthcare Card
        'A Passion for Time-Sensitive Shipments': '時間厳守配送への情熱',
        'With a legacy in handling time-critical shipments since 1987, we bring unparalleled expertise to pharmaceutical logistics. Our team is known for successfully managing high-value life science products, including clinical trial shipments, new product launches, and deliveries to special and challenging territories.': '1987年以来の時間厳守配送の取り扱いにおける伝統により、制藥物流に比類のない専門知識をもたらします。当チームは、臨床試験配送、新製品ローンチ、特別で困難な地域への配送を含む高価値ライフサイエンス製品の成功的管理で知られています。',
        'Pharma-Focused Operations:': '製薬特化オペレーション：',
        'A dedicated team trained specifically in the nuances of handling all types of life science products.': 'すべてのタイプのライフサイエンス製品の取り扱いの微妙な違いに特化して訓練された専用チーム。',
        'Quality & Compliance:': '品質・コンプライアンス：',
        'A commitment to Quality Management, Operational Excellence, and superior customs capabilities ensures your shipments meet all regulatory standards.': '品質管理、運営卓越性、優れた税関能力への取り組みにより、お客様の配送がすべての規制基準を満たすことが保証されます。',
        'Temperature-Controlled Solutions:': '温度管理ソリューション：',
        'We provide both Active and Passive pharma solutions to maintain strict temperature integrity for your cargo.': 'お客様の貨物の厳格な温度整合性を維持するため、アクティブおよびパッシブ製薬ソリューションの両方を提供します。',
        'Established Carrier Relations:': '確立されたキャリアー関係：',
        'Over 30 years of strong partnerships with airlines and shipping companies, guaranteeing reliability, priority, and customer comfort.': '航空会社や海運会社との30年以上の強力なパートナーシップにより、信頼性、優先性、顧客の快適性を保証します。',
        
        // DG Shipments
        'DG Shipments': '危険物輸送',
        'Dangerous Goods, Chemical & Hazardous Shipments – Expert Logistics Solutions': '危険物、化学品、有害物輸送 – 専門物流ソリューション',
        'Transporting dangerous goods (DG), chemicals, and hazardous materials is a specialized domain, demanding utmost precision, expertise, and strict compliance with international safety standards. At Eastern Cargo we offer comprehensive DG logistics solutions for your shipments to move securely by air, sea, and road.': '危険物（DG）、化学品、有害物質の輸送は専門分野であり、最高の精度、専門知識、国際安全基準への厳格な遵守が求められます。イースタンカーゴでは、お客様の貨物が空路、海路、陸路で安全に移動できるよう、包括的なDG物流ソリューションを提供しています。',
        'Classification & Identification:': '分類・識別：',
        'Accurate classification of chemicals and hazardous cargo as per IATA and local regulations. We assign correct UN numbers, hazard classes, and packing groups to every shipment.': 'IATAおよび地域規制に基づく化学品および危険物の正確な分類。すべての配送に正しい国連番号、危険等級、包装等級を割り当てます。',
        'Certified Packaging & Labelling:': '認証包装・ラベリング：',
        'All items are packed, marked, and labelled with DG-compliant materials by trained personnel to prevent leaks, spills, and accidents. Compliance with international standards is our priority for every mode of transport.': 'すべての物品は、訓練を受けた担当者がDG準拠材料で包装、マーキング、ラベリングを行い、漏れ、流出、事故を防ぎます。国際基準への遵守は、すべての輸送モードにおいて最優先事項です。',
        'Regulatory Documentation & Compliance:': '規制文書・遵守：',
        'We manage full documentation—DG declarations, Safety Data Sheets (SDS/MSDS), permits, and insurance—ensuring flawless regulatory adherence with IATA.': '完全な文書管理—DG宣言、安全データシート（SDS/MSDS）、許可証、保険—IATAとの完璧な規制遵守を確保します。',
        'Trained Handling & Secure Transport:': '訓練された取り扱い・安全輸送：',
        'Your hazardous cargo is managed by certified professionals using DG-approved containers.': 'お客様の危険物は、DG承認コンテナを使用する認定専門家によって管理されます。',
        'End-to-End DG Logistics Support:': 'エンドツーエンドDG物流サポート：',
        'Full-spectrum services from risk assessment and regulatory consultancy to shipment scheduling, delivery, and secure warehousing.': 'リスク評価と規制コンサルティングから配送スケジューリング、配送、安全な倉庫保管まで、フルスペクトラムサービス。',
        'Ready to ship your dangerous goods, chemicals, or hazardous materials? Contact our certified DG logistics team today for a personalized quote and expert guidance on global DG shipment compliance.': '危険物、化学品、有害物質の配送準備はできていますか？今日、認定DG物流チームにご連絡いただき、グローバルDG配送コンプライアンスに関する個別見積もりと専門ガイダンスをご提供ください。'
    }
    // ... existing code ...
};

// Function to change language
function changeLanguage(lang) {
    let translatedCount = 0;
    let totalElements = 0;
    
    // Handle regular text elements
    const elements = document.querySelectorAll('[data-translate]');
    totalElements += elements.length;
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            translatedCount++;
        } else {
            console.warn(`Missing translation for key: ${key} in language: ${lang}`);
        }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    totalElements += placeholderElements.length;
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
            translatedCount++;
        } else {
            console.warn(`Missing placeholder translation for key: ${key} in language: ${lang}`);
        }
    });
    
    // Handle select options
    const selectOptions = document.querySelectorAll('option[data-translate]');
    totalElements += selectOptions.length;
    selectOptions.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            translatedCount++;
        }
    });
    
    // Update language selector
    const langText = document.querySelector('.language-selector span');
    if (langText) {
        langText.innerHTML = `<i class="fas fa-flag"></i> ${lang.toUpperCase()} <i class="fas fa-chevron-down"></i>`;
    }
    
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);

    document.documentElement.lang = lang;
    
    // Close modal
    if (languageModal) {
        languageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Show notification with translation statistics
    const successRate = totalElements > 0 ? Math.round((translatedCount / totalElements) * 100) : 0;
    showNotification(`Language changed to ${lang.toUpperCase()}. ${translatedCount}/${totalElements} elements translated (${successRate}% complete)`, 'success');
    
    // Log translation statistics
    console.log(`Language change to ${lang}: ${translatedCount}/${totalElements} elements translated (${successRate}% complete)`);
}

// Language option click handlers
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .service-card, .project-card, .testimonial-card');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
});

// Form handling
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.phone || !data.transport) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! Your quote request has been submitted. We will contact you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.phone || !data.service) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you! Your contact request has been submitted. We will contact you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            showNotification('Please enter your email address.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#ffa500'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4, .partner-stat h4');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('K') ? 'K' : '') + (counter.textContent.includes('B') ? 'B' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('K') ? 'K' : '') + (counter.textContent.includes('B') ? 'B' : '');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Video placeholder click handler
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        showNotification('Video player would open here in a real implementation.', 'info');
    });
}

// Service cards hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards click handler
document.querySelectorAll('.project-card .btn-outline').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('Project details would open here in a real implementation.', 'info');
    });
});

// Newsletter form enhancement
const newsletterInput = document.querySelector('.newsletter-form input');
if (newsletterInput) {
    newsletterInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    newsletterInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}

// Contact form enhancement
document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading animation to elements
    const elements = document.querySelectorAll('.feature-card, .service-card, .project-card');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('loaded');
        }, index * 100);
    });
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-angle-double-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #ffa500;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
`;

document.body.appendChild(backToTopBtn);

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to back to top button
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'scale(1.1)';
    backToTopBtn.style.background = '#e69500';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'scale(1)';
    backToTopBtn.style.background = '#ffa500';
});


// Back to bottom button
const backToBottomBtn = document.createElement('button');
backToBottomBtn.innerHTML = '<i class="fas fa-angle-double-down"></i>';
backToBottomBtn.className = 'back-to-bottom';
backToBottomBtn.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #ffa500;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
`;

document.body.appendChild(backToBottomBtn);

// Show/hide back to bottom button
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition < pageHeight - 300) {
        backToBottomBtn.style.opacity = '1';
        backToBottomBtn.style.visibility = 'visible';
    } else {
        backToBottomBtn.style.opacity = '0';
        backToBottomBtn.style.visibility = 'hidden';
    }
});

// Scroll to bottom functionality
backToBottomBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});

// Hover effects
backToBottomBtn.addEventListener('mouseenter', () => {
    backToBottomBtn.style.transform = 'scale(1.1)';
    backToBottomBtn.style.background = '#e69500';
});

backToBottomBtn.addEventListener('mouseleave', () => {
    backToBottomBtn.style.transform = 'scale(1)';
    backToBottomBtn.style.background = '#ffa500';
});



/* //Section-by-section scroll down button
const sections = [
    "#about",
    "#services",
    "#career-contact"
];

let currentSectionIndex = -1;

const backToNextBtn = document.createElement('button');
backToNextBtn.innerHTML = '<i class="fas fa-angle-double-down"></i>';
backToNextBtn.className = 'back-to-next';
backToNextBtn.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #ffa500;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(255, 165, 0, 0.3);
`;
document.body.appendChild(backToNextBtn);

// Show/hide
window.addEventListener('scroll', () => {
    const pageHeight = document.documentElement.scrollHeight;
    const scrollPos = window.pageYOffset + window.innerHeight;
    backToNextBtn.style.opacity = scrollPos < pageHeight - 300 ? '1' : '0';
    backToNextBtn.style.visibility = scrollPos < pageHeight - 300 ? 'visible' : 'hidden';
});

// Scroll on click
backToNextBtn.addEventListener('click', () => {
    currentSectionIndex++;
    if (currentSectionIndex >= sections.length) {
        currentSectionIndex = -1;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const target = document.querySelector(sections[currentSectionIndex]);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
});

// Hover effects
backToNextBtn.addEventListener('mouseenter', () => {
    backToNextBtn.style.transform = 'scale(1.1)';
    backToNextBtn.style.background = '#e69500';
});
backToNextBtn.addEventListener('mouseleave', () => {
    backToNextBtn.style.transform = 'scale(1)';
    backToNextBtn.style.background = '#ffa500';
});*/



// Initialize tooltips for better UX
function initTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Initialize tooltips when DOM is loaded
document.addEventListener('DOMContentLoaded', initTooltips);

// Key Personnel Filter
const personnelSection = document.getElementById('personnel');
if (personnelSection) {
    const personnelData = [
        { name: "Mr Lalit Seth", title: "Director", tel: "91-22-67539906", email: "lseth@easterncargo.co.in", location: "mumbai" },
        { name: "Mr Alok Seth", title: "Director", tel: "91-22-67539924", email: "aseth@easterncargo.co.in", location: "mumbai" },
        { name: "Mr Dinyar Nadirshaw", title: "President - Projects & General Freight", tel: "91-22-67539991", email: "dinyar@easterncargo.co.in", location: "mumbai" },
        { name: "Mr Suraj lal", title: "Head-Projects", tel: "91-22-67539992", email: "suraj@easterncargo.co.in", location: "mumbai" },
        { name: "Mrs Vidya Joshi", title: "Sr Manager Finance & Accounts", tel: "91-22-67539915", email: "vjoshi@easterncargo.co.in", location: "mumbai" },
        { name: "Ms Rita D'silva", title: "Sr Manager Freight", tel: "91-22-67539934", email: "rdsilva@easterncargo.co.in", location: "mumbai" },
        { name: "Mrs Henrika Dsouza", title: "Manager Air Freight", tel: "91-22-67539904", email: "hdsouza@easterncargo.co.in", location: "mumbai" },
        { name: "Mr Tarique Khan", title: "Associate Vice President", tel: "91-22-67539948", email: "tarique@easterncargo.co.in", location: "mumbai" },
        { name: "Kiran K", title: "Asst Manager Operations", tel: "080-41258518", email: "customercare.blr@easterncargo.co.in", location: "bangalore" },
        { name: "Mr Ramesh Kannan", title: "Branch In Charge", tel: "044-42617077", email: "rkannan@easterncargo.co.in", location: "chennai" },
        { name: "Mr Rudra Singh", title: "Branch In-charge", tel: "91-11-32908070", email: "ops.del@easterncargo.co.in", location: "delhi" },
        { name: "Mr Shubham Sharma", title: "Sales", tel: "91-0731-407666", email: "eccindoresales@easterncargo.co.in", location: "indore" },
        { name: "Mr Mukesh Mordani", title: "Sales Manager", tel: "91-79-26564417", email: "sales.amd@easterncargo.co.in", location: "ahmedabad" },
        { name: "Mr Jagadishwar.G", title: "Branch In-Charge", tel: "91-40-29550638", email: "cs.hyd@easterncargo.co.in", location: "hyderabad" },
        { name: "Mr Sanjib Bose", title: "Branch In Charge", tel: "+913340617182", email: "salesccu@easterncargo.co.in", location: "kolkata" }
    ];
    const filterContainer = personnelSection.querySelector('.personnel-filter-container');
    const grid = personnelSection.querySelector('.personnel-grid');

    function renderPersonnel(location) {
        if (!grid) return;
        grid.innerHTML = '';
        personnelData.filter(p => p.location === location).forEach(p => {
            const card = document.createElement('div');
            card.className = 'personnel-card';
            card.innerHTML = `
                <div class="card-body">
                    <h4>${p.name}</h4>
                    <p>${p.title}</p>
                </div>
                <div class="card-footer">
                    <a href="tel:${p.tel.replace(/\s/g, '')}">${p.tel}</a>
                    <a href="mailto:${p.email}">${p.email}</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    if (filterContainer) {
        filterContainer.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') {
                if (filterContainer.querySelector('.active')) {
                    filterContainer.querySelector('.active').classList.remove('active');
                }
                e.target.classList.add('active');
                renderPersonnel(e.target.dataset.filter);
            }
        });
    }
    renderPersonnel('mumbai');
}

// Smart Cargo Calculator
const calculator = document.getElementById('calculator');
if (calculator) {
    const unitToggleButtons = calculator.querySelectorAll('.unit-toggle-btn');
    const packageList = calculator.querySelector('#package-list');
    const addPackageBtn = calculator.querySelector('#add-package-btn');
    const calculateBtn = calculator.querySelector('#calculate-btn');
    const resultDisplay = calculator.querySelector('#result-display');
    const resetBtn = calculator.querySelector('#reset-btn');
    let currentUnit = 'IN';
    let packageCount = 0;
    const VOLUMETRIC_DIVISOR_IN = 366;
    const VOLUMETRIC_DIVISOR_CM = 6000;

    const updatePlaceholders = () => {
        const unitName = currentUnit === 'IN' ? 'inches' : 'cm';
        packageList.querySelectorAll('input[data-type="length"]').forEach(i => i.placeholder = `Length (${unitName})`);
        packageList.querySelectorAll('input[data-type="width"]').forEach(i => i.placeholder = `Width (${unitName})`);
        packageList.querySelectorAll('input[data-type="height"]').forEach(i => i.placeholder = `Height (${unitName})`);
    };

    const createPackageElement = () => {
        packageCount++;
        const div = document.createElement('div');
        div.className = 'package-group';
        div.innerHTML = `
            <div class="package-title">
                <span>Package ${packageCount}</span>
                ${packageCount > 1 ? '<button class="btn-delete" title="Remove Package">&times;</button>' : ''}
            </div>
            <div class="package-inputs">
                <input type="number" data-type="length" min="0">
                <input type="number" data-type="width" min="0">
                <input type="number" data-type="height" min="0">
                <input type="number" data-type="quantity" value="1" min="1">
            </div>
        `;
        packageList.appendChild(div);
        updatePlaceholders();
    };

    const resetCalculator = () => {
        packageList.innerHTML = '';
        packageCount = 0;
        resultDisplay.innerHTML = '';
        resultDisplay.style.display = 'none';
        createPackageElement();
    };

    const handleUnitToggle = e => {
        if (currentUnit === e.target.dataset.unit) return;
        currentUnit = e.target.dataset.unit;
        unitToggleButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        updatePlaceholders();
        resultDisplay.innerHTML = '';
        resultDisplay.style.display = 'none';
    };

    const handleCalculation = () => {
        let totalVolume = 0;
        packageList.querySelectorAll('.package-group').forEach(g => {
            const l = parseFloat(g.querySelector('input[data-type="length"]').value) || 0;
            const w = parseFloat(g.querySelector('input[data-type="width"]').value) || 0;
            const h = parseFloat(g.querySelector('input[data-type="height"]').value) || 0;
            const q = parseInt(g.querySelector('input[data-type="quantity"]').value) || 0;
            if (l > 0 && w > 0 && h > 0 && q > 0) totalVolume += (l * w * h) * q;
        });
        if (totalVolume > 0) {
            const divisor = currentUnit === 'IN' ? VOLUMETRIC_DIVISOR_IN : VOLUMETRIC_DIVISOR_CM;
            const unitLabel = currentUnit === 'IN' ? 'lbs' : 'kg';
            const totalWeight = totalVolume / divisor;
            resultDisplay.innerHTML = `
                <h3>Calculation Result</h3>
                <p>Total Volumetric Weight: <strong>${totalWeight.toFixed(2)} ${unitLabel}</strong></p>
            `;
            resultDisplay.style.display = 'block';
        } else {
            resultDisplay.innerHTML = '<p style="color: red;">Please enter valid dimensions.</p>';
            resultDisplay.style.display = 'block';
        }
    };

    unitToggleButtons.forEach(b => b.addEventListener('click', handleUnitToggle));
    addPackageBtn.addEventListener('click', createPackageElement);
    calculateBtn.addEventListener('click', handleCalculation);
    resetBtn.addEventListener('click', resetCalculator);
    packageList.addEventListener('click', e => {
        if (e.target.classList.contains('btn-delete')) {
            e.target.closest('.package-group').remove();
        }
    });

    createPackageElement();
}

// Timeline Animation and Interactive Popouts
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, observerOptions);

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        timelineObserver.observe(item);
        
            // Add click event for mobile popout toggle
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            const popup = this.querySelector('.timeline-popup');
            const allPopups = document.querySelectorAll('.timeline-popup');
            
            // Close all other popups
            allPopups.forEach(p => {
                if (p !== popup) {
                    p.style.display = 'none';
                }
            });
            
            // Toggle current popup
            if (popup.style.display === 'none' || popup.style.display === '') {
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        }
    });
    
    // Simple popup show/hide for desktop
    item.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) {
            const popup = this.querySelector('.timeline-popup');
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) {
            const popup = this.querySelector('.timeline-popup');
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
        }
    });
    });
    
    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.timeline-item')) {
            const allPopups = document.querySelectorAll('.timeline-popup');
            allPopups.forEach(popup => {
                popup.style.display = 'none';
            });
        }
    });
}

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
if (featureCards.length > 0) {
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.3 });

    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        featureObserver.observe(card);
    });
}

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');
if (serviceCards.length > 0) {
    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });

    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        serviceObserver.observe(card);
    });
}

// Hero Slider
const heroSection = document.getElementById('home');
if (heroSection) {
    const slides = heroSection.querySelectorAll('.slide');
    const dotsContainer = heroSection.querySelector('.slider-dots');
    
    if (slides.length > 1) {
        let currentSlide = 0;
        let slideInterval = setInterval(nextSlide, 5000);

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(index);
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');
        
        function goToSlide(slideNumber) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = slideNumber;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }
        
        // Initialize first slide
        goToSlide(0);
    }
}

// Location Tabs Functionality
function initializeLocationTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    console.log('Initializing location tabs...');
    console.log('Found tab buttons:', tabButtons.length);
    console.log('Found tab panes:', tabPanes.length);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
                console.log('Activated tab:', targetTab);
            } else {
                console.error('Target pane not found:', targetTab);
            }
        });
    });
}

// Initialize location tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing location tabs...');
    initializeLocationTabs();
    
    // Test: Show first tab content immediately
    setTimeout(() => {
        const firstTab = document.querySelector('.tab-pane.active');
        if (firstTab) {
            console.log('First tab content:', firstTab.innerHTML);
        }
    }, 1000);
    
    // Initialize CAPTCHA and form handling
    //initializeCaptchaAndForms();
}); 


function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        fetch("process.php", {
            method: "POST",
            body: new FormData(form)
        })
        .then(res => res.json())
        .then(data => {
            form.querySelectorAll(".error-msg").forEach(el => el.innerText = "");

            if (!data.success) {
                for (let field in data.errors) {
                    let errorEl = form.querySelector("#error-" + field);
                    if (errorEl) errorEl.innerText = data.errors[field];
                }
            } else {
                alert(data.message);
                form.reset();
            }
        });
    });
}

handleFormSubmit("quoteForm");
handleFormSubmit("contactForm");
handleFormSubmit("careerForm");


// New Why Choose Us Section Functionality
function initializeWhyChooseNew() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const planeContainer = document.querySelector('.plane-container');
    
    // Tab switching functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Change plane animation based on active tab
            if (planeContainer) {
                planeContainer.style.animation = 'none';
                setTimeout(() => {
                    planeContainer.style.animation = 'planeMove 8s infinite ease-in-out';
                }, 10);
            }
        });
    });
    
    // Watch Video button functionality
    const watchVideoBtn = document.querySelector('.watch-video-btn');
    if (watchVideoBtn) {
        watchVideoBtn.addEventListener('click', () => {
            // You can add video modal or redirect to video here
            showNotification('Video feature coming soon!', 'info');
        });
    }
    
    // Learn More buttons functionality
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // You can add navigation or modal functionality here
            document.querySelector('#learnMoreModal').classList.add('open');
            //showNotification('Learn more feature coming soon!', 'info');
        });
    });
}

// Initialize new Why Choose Us section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    initializeWhyChooseNew();
});

/* ---------------------------------------------
   CSRF + Auto-inject hidden _token
   --------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Create client token once */
  if (!sessionStorage.getItem('_token')) {
    const token = Array.from(crypto.getRandomValues(new Uint8Array(32)))
                       .map(b => b.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem('_token', token);
  }

  /* 2. Inject hidden _token into every POST form */
  document.querySelectorAll('form[method="POST"]').forEach(form => {
    if (!form.querySelector('input[name="_token"]')) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = '_token';
      input.value = sessionStorage.getItem('_token');
      form.prepend(input);
    }
  });
});

/* ---------- Universal client-side validation ---------- */
function validateForm(form) {
  const data = new FormData(form);
  const errors = [];

  // Common required fields
  if (!data.get('name')?.trim()) errors.push('Name');
  if (!data.get('email')?.trim()) errors.push('Email');

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.get('email') && !emailRegex.test(data.get('email'))) {
    errors.push('Valid email');
  }

  // Quote form extras
  if (form.id === 'quoteForm' && !data.get('phone')?.trim()) errors.push('Phone');
  if (form.id === 'quoteForm' && !data.get('transport'))   errors.push('Service type');

  // Contact form extras
  if (form.id === 'contactForm' && !data.get('message')?.trim()) errors.push('Message');

  // Career form extras
  if (form.id === 'careerForm' && !data.get('resume')?.name) errors.push('Resume');

  if (errors.length) {
    showNotification('Please fill: ' + errors.join(', '), 'error');
    return false;
  }
  return true;
}

/* Attach to all three forms */
['quoteForm', 'contactForm', 'careerForm'].forEach(id => {
  const form = document.getElementById(id);
  if (form) {
    form.addEventListener('submit', e => {
      if (!validateForm(e.target)) e.preventDefault();
    });
  }
});