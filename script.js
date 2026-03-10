// دالة تغيير اللغة
function changeLanguage(lang) {
    // تحديث الأزرار النشطة
    const langAr = document.getElementById('lang-ar');
    const langEn = document.getElementById('lang-en');
    
    if (langAr && langEn) {
        langAr.classList.remove('active');
        langEn.classList.remove('active');
        document.getElementById('lang-' + lang).classList.add('active');
    }
    
    if (lang === 'en') {
        // تغيير اتجاه الصفحة لليسار
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        
        // ترتيب عناصر user-actions للإنجليزية
        arrangeElementsForEnglish();
        
        // تغيير النصوص للإنجليزية
        changeTextsToEnglish();
    } else {
        // تغيير اتجاه الصفحة لليمين
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        
        // ترتيب عناصر user-actions للعربية
        arrangeElementsForArabic();
        
        // تغيير النصوص للعربية
        changeTextsToArabic();
    }
}

// دالة ترتيب العناصر للعربية (اللوغو يمين، القائمة أقصى اليسار)
function arrangeElementsForArabic() {
    const userActions = document.getElementById('userActions');
    if (!userActions) return;
    
    const menuToggle = document.querySelector('.menu-toggle');
    const langSwitcher = document.querySelector('.language-switcher');
    const icons = document.querySelectorAll('.user-icon');
    
    if (menuToggle && langSwitcher && icons.length >= 3) {
        userActions.innerHTML = '';
        // الترتيب المنطقي: الأيقونات ثم اللغة ثم القائمة (ستظهر القائمة أقصى اليسار بسبب RTL)
        userActions.appendChild(icons[0]); // 🔔
        userActions.appendChild(icons[1]); // 👤
        userActions.appendChild(icons[2]); // ❤️
        userActions.appendChild(langSwitcher); 
        userActions.appendChild(menuToggle); // القائمة ستكون بالآخر (أقصى اليسار)
    }
}

// دالة ترتيب العناصر للإنجليزية (اللوغو يسار، القائمة أقصى اليمين)
function arrangeElementsForEnglish() {
    const userActions = document.getElementById('userActions');
    if (!userActions) return;
    
    const menuToggle = document.querySelector('.menu-toggle');
    const langSwitcher = document.querySelector('.language-switcher');
    const icons = document.querySelectorAll('.user-icon');
    
    if (menuToggle && langSwitcher && icons.length >= 3) {
        userActions.innerHTML = '';
        // في LTR: الترتيب المنطقي سيجعل آخر عنصر (القائمة) يظهر في أقصى اليمين
        userActions.appendChild(icons[2]); // ❤️
        userActions.appendChild(icons[1]); // 👤
        userActions.appendChild(icons[0]); // 🔔
        userActions.appendChild(langSwitcher);
        userActions.appendChild(menuToggle); // القائمة ستكون بالآخر (أقصى اليمين)
    }
}

// دالة إنشاء جميع العناصر
function createAllElements() {
    const userActions = document.getElementById('userActions');
    if (!userActions) return;
    
    // مسح المحتوى الحالي
    userActions.innerHTML = '';
    
    // إنشاء زر القائمة
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.id = 'menuToggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    // إنشاء أزرار اللغة
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'language-switcher';
    langSwitcher.innerHTML = `
        <button class="lang-btn active" onclick="changeLanguage('ar')" id="lang-ar">
            <i class="fas fa-globe"></i> AR
        </button>
        <button class="lang-btn" onclick="changeLanguage('en')" id="lang-en">
            <i class="fas fa-globe"></i> EN
        </button>
    `;
    
    // إنشاء أيقونات المستخدم
    const icon1 = document.createElement('div');
    icon1.className = 'user-icon';
    icon1.textContent = '🔔';
    
    const icon2 = document.createElement('div');
    icon2.className = 'user-icon';
    icon2.textContent = '👤';
    
    const icon3 = document.createElement('div');
    icon3.className = 'user-icon';
    icon3.textContent = '❤️';
    
    // إضافة جميع العناصر (الترتيب المؤقت)
    userActions.appendChild(menuToggle);
    userActions.appendChild(langSwitcher);
    userActions.appendChild(icon1);
    userActions.appendChild(icon2);
    userActions.appendChild(icon3);
    
    // إعادة الترتيب حسب اللغة الحالية
    if (document.documentElement.lang === 'en') {
        arrangeElementsForEnglish();
    } else {
        arrangeElementsForArabic();
    }
}

// دالة تغيير النصوص للإنجليزية
function changeTextsToEnglish() {
    // قائمة التنقل
    const navLinks = {
        'الرئيسية': 'Home',
        'حجز فندق': 'Hotels',
        'حجز سيارة': 'Cars',
        'تكسي': 'Taxi',
        'مطاعم': 'Restaurants',
        'رحلات سياحية': 'Tours',
        'من نحن': 'About',
        'خدماتنا': 'Services',
        'اتصل بنا': 'Contact'
    };
    
    // تحديث روابط التنقل في القائمة العادية
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        const arabicText = link.textContent.trim();
        if (navLinks[arabicText]) {
            link.textContent = navLinks[arabicText];
        }
    });
    
    // تحديث روابط التنقل في القائمة الجانبية
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        const arabicText = link.textContent.trim();
        if (navLinks[arabicText]) {
            link.textContent = navLinks[arabicText];
        }
    });
    
    // تحديث hero section
    const heroTitle = document.querySelector('.hero-content-alt h2');
    const heroText = document.querySelector('.hero-content-alt p');
    if (heroTitle) heroTitle.textContent = 'Discover Syria with Vago';
    if (heroText) heroText.textContent = 'The best platform for booking hotels, trips and cars in Syria';
    
    // تحديث عناوين الأقسام
    document.querySelectorAll('.section-title').forEach(title => {
        if (title.textContent.includes('عروض الفنادق')) {
            title.textContent = '🏨 Hotel Offers';
        } else if (title.textContent.includes('تأجير السيارات')) {
            title.textContent = '🚗 Car Rental';
        } else if (title.textContent.includes('التكسي')) {
            title.textContent = '🚕 Taxi Services';
        } else if (title.textContent.includes('المطاعم')) {
            title.textContent = '🍽️ Restaurants';
        } else if (title.textContent.includes('رحلات')) {
            title.textContent = '✈️ Tours';
        }
    });
    
    // تحديث قسم من نحن
    const aboutTitle = document.querySelector('#about h3');
    if (aboutTitle) aboutTitle.textContent = 'About Us';
    
    const aboutDesc = document.querySelectorAll('.about-description p');
    if (aboutDesc.length >= 2) {
        aboutDesc[0].textContent = 'Vago is a leading platform in the field of tourism and travel in Syria, founded in 2020 with the aim of providing the best tourism services at competitive prices and high quality.';
        aboutDesc[1].textContent = 'We believe that travel should be a fun and hassle-free experience, so we strive to provide everything a tourist needs in one place.';
    }
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = 'Happy Clients';
        statLabels[1].textContent = 'Partner Hotels';
        statLabels[2].textContent = 'Cities';
    }
    
    const featuresTitle = document.querySelector('.about-features h3');
    if (featuresTitle) featuresTitle.textContent = 'Why Vago?';
    
    const features = document.querySelectorAll('.feature h4');
    if (features.length >= 4) {
        features[0].textContent = 'Best Prices';
        features[1].textContent = 'Reliable Service';
        features[2].textContent = '24/7 Support';
        features[3].textContent = 'High Quality';
    }
    
    const missionTitle = document.querySelector('.about-mission h3');
    if (missionTitle) missionTitle.textContent = 'Vago Company serves tourists with the best prices and the best comfort for the tourist';
    
    const missionText = document.querySelector('.about-mission p');
    if (missionText) missionText.textContent = 'We strive to make every trip with Vago an unforgettable experience, by providing integrated services that combine quality, affordable price and complete comfort. With Vago, your travel has become easier!';
    
    // تحديث قسم الخدمات
    const servicesHeader = document.querySelector('.services-header h2');
    if (servicesHeader) servicesHeader.textContent = '⚙️ Our Services';
    
    const servicesDesc = document.querySelector('.services-header p');
    if (servicesDesc) servicesDesc.textContent = 'We offer you an integrated set of tourism services to make your trip with Vago an unforgettable experience';
    
    const serviceTitles = document.querySelectorAll('.service-card h3');
    if (serviceTitles.length >= 6) {
        serviceTitles[0].textContent = 'Hotel Booking';
        serviceTitles[1].textContent = 'Car Rental';
        serviceTitles[2].textContent = 'Taxi Services';
        serviceTitles[3].textContent = 'Restaurants';
        serviceTitles[4].textContent = 'Tours';
        serviceTitles[5].textContent = 'Customer Support';
    }
    
    const serviceLinks = document.querySelectorAll('.service-link');
    if (serviceLinks.length >= 6) {
        serviceLinks[0].textContent = 'View Hotels';
        serviceLinks[1].textContent = 'View Cars';
        serviceLinks[2].textContent = 'Book Taxi';
        serviceLinks[3].textContent = 'Discover';
        serviceLinks[4].textContent = 'View Tours';
        serviceLinks[5].textContent = 'Contact Us';
    }
    
    // تحديث قسم اتصل بنا
    const contactTitle = document.querySelector('.contact-header h2');
    if (contactTitle) contactTitle.textContent = '📞 Contact Us';
    
    const contactDesc = document.querySelector('.contact-header p');
    if (contactDesc) contactDesc.textContent = 'We are here to serve you around the clock, contact us through any of the following means of communication';
    
    const infoTitle = document.querySelector('.contact-info h3');
    if (infoTitle) infoTitle.textContent = 'Contact Information';
    
    const contactTitles = document.querySelectorAll('.contact-text h4');
    if (contactTitles.length >= 4) {
        contactTitles[0].textContent = 'Mobile Number';
        contactTitles[1].textContent = 'WhatsApp';
        contactTitles[2].textContent = 'Email';
        contactTitles[3].textContent = 'Address';
    }
    
    const socialTitle = document.querySelector('.social-media h4');
    if (socialTitle) socialTitle.textContent = 'Follow Us';
    
    const formTitle = document.querySelector('.contact-form h3');
    if (formTitle) formTitle.textContent = 'Send us a message';
    
    // تحديث placeholders في النموذج
    const nameInput = document.querySelector('.form-group input[type="text"]');
    if (nameInput) nameInput.placeholder = 'Full Name';
    
    const emailInput = document.querySelector('.form-group input[type="email"]');
    if (emailInput) emailInput.placeholder = 'Email';
    
    const telInput = document.querySelector('.form-group input[type="tel"]');
    if (telInput) telInput.placeholder = 'Mobile Number';
    
    const textarea = document.querySelector('.form-group textarea');
    if (textarea) textarea.placeholder = 'Your Message...';
    
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = 'Send Message';
    
    // تحديث الفوتر
    const footerText = document.querySelector('.footer-content p');
    if (footerText) footerText.textContent = 'All rights reserved to Vago © 2024';
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks.length >= 3) {
        footerLinks[0].textContent = 'Privacy Policy';
        footerLinks[1].textContent = 'Terms & Conditions';
        footerLinks[2].textContent = 'Sitemap';
    }
}

// دالة تغيير النصوص للعربية
function changeTextsToArabic() {
    // إعادة تحميل الصفحة للنصوص العربية الأصلية
    location.reload();
}

// إعداد القائمة الجانبية
function setupSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebar = document.getElementById('closeSidebar');

    if (!menuToggle || !sidebarMenu || !sidebarOverlay || !closeSidebar) {
        return;
    }

    function openSidebar() {
        sidebarMenu.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebarFunc() {
        sidebarMenu.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuToggle.removeEventListener('click', openSidebar);
    closeSidebar.removeEventListener('click', closeSidebarFunc);
    sidebarOverlay.removeEventListener('click', closeSidebarFunc);

    menuToggle.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSidebarFunc);
    sidebarOverlay.addEventListener('click', closeSidebarFunc);

    window.closeSidebar = closeSidebarFunc;
}

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    createAllElements();
    setTimeout(setupSidebar, 100);
});

window.addEventListener('load', function() {
    setupSidebar();
});