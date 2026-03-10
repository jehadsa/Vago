// دالة تغيير اللغة
window.changeLanguage = function(lang) {
    console.log('Changing language to:', lang); // للتأكد من عمل الدالة
    
    // تحديث الأزرار النشطة في الهيدر
    const langAr = document.getElementById('lang-ar');
    const langEn = document.getElementById('lang-en');
    
    if (langAr) langAr.classList.remove('active');
    if (langEn) langEn.classList.remove('active');
    
    const activeLang = document.getElementById('lang-' + lang);
    if (activeLang) activeLang.classList.add('active');
    
    // تحديث الأزرار النشطة في الموبايل إذا وجدت
    const langArMobile = document.getElementById('lang-ar-mobile');
    const langEnMobile = document.getElementById('lang-en-mobile');
    
    if (langArMobile) langArMobile.classList.remove('active');
    if (langEnMobile) langEnMobile.classList.remove('active');
    
    const activeLangMobile = document.getElementById('lang-' + lang + '-mobile');
    if (activeLangMobile) activeLangMobile.classList.add('active');
    
    if (lang === 'en') {
        // تغيير اتجاه الصفحة لليسار
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        
        // تغيير النصوص للإنجليزية
        changeTextsToEnglish();
    } else {
        // تغيير اتجاه الصفحة لليمين
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        
        // تغيير النصوص للعربية
        changeTextsToArabic();
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
    
    // تحديث روابط التنقل
    document.querySelectorAll('nav a').forEach(link => {
        const arabicText = link.textContent;
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
    
    const aboutDescFirst = document.querySelector('.about-description p:first-child');
    if (aboutDescFirst) aboutDescFirst.textContent = 'Vago is a leading platform in the field of tourism and travel in Syria, founded in 2020 with the aim of providing the best tourism services at competitive prices and high quality.';
    
    const aboutDescLast = document.querySelector('.about-description p:last-child');
    if (aboutDescLast) aboutDescLast.textContent = 'We believe that travel should be a fun and hassle-free experience, so we strive to provide everything a tourist needs in one place.';
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = 'Happy Clients';
    if (statLabels[1]) statLabels[1].textContent = 'Partner Hotels';
    if (statLabels[2]) statLabels[2].textContent = 'Cities';
    
    const aboutFeaturesTitle = document.querySelector('.about-features h3');
    if (aboutFeaturesTitle) aboutFeaturesTitle.textContent = 'Why Vago?';
    
    const features = document.querySelectorAll('.feature h4');
    if (features[0]) features[0].textContent = 'Best Prices';
    if (features[1]) features[1].textContent = 'Reliable Service';
    if (features[2]) features[2].textContent = '24/7 Support';
    if (features[3]) features[3].textContent = 'High Quality';
    
    const missionTitle = document.querySelector('.about-mission h3');
    if (missionTitle) missionTitle.textContent = 'Vago Company serves tourists with the best prices and the best comfort for the tourist';
    
    const missionText = document.querySelector('.about-mission p');
    if (missionText) missionText.textContent = 'We strive to make every trip with Vago an unforgettable experience, by providing integrated services that combine quality, affordable price and complete comfort. With Vago, your travel has become easier!';
    
    // تحديث قسم الخدمات
    const servicesHeader = document.querySelector('.services-header h2');
    if (servicesHeader) servicesHeader.textContent = '⚙️ Our Services';
    
    const servicesHeaderP = document.querySelector('.services-header p');
    if (servicesHeaderP) servicesHeaderP.textContent = 'We offer you an integrated set of tourism services to make your trip with Vago an unforgettable experience';
    
    const serviceTitles = document.querySelectorAll('.service-card h3');
    if (serviceTitles[0]) serviceTitles[0].textContent = 'Hotel Booking';
    if (serviceTitles[1]) serviceTitles[1].textContent = 'Car Rental';
    if (serviceTitles[2]) serviceTitles[2].textContent = 'Taxi Services';
    if (serviceTitles[3]) serviceTitles[3].textContent = 'Restaurants';
    if (serviceTitles[4]) serviceTitles[4].textContent = 'Tours';
    if (serviceTitles[5]) serviceTitles[5].textContent = 'Customer Support';
    if (serviceTitles[6]) serviceTitles[6].textContent = 'Travel Insurance';
    if (serviceTitles[7]) serviceTitles[7].textContent = 'Travel Consulting';
    
    const serviceLinks = document.querySelectorAll('.service-link');
    if (serviceLinks[0]) serviceLinks[0].textContent = 'View Hotels';
    if (serviceLinks[1]) serviceLinks[1].textContent = 'View Cars';
    if (serviceLinks[2]) serviceLinks[2].textContent = 'Book Taxi';
    if (serviceLinks[3]) serviceLinks[3].textContent = 'Discover';
    if (serviceLinks[4]) serviceLinks[4].textContent = 'View Tours';
    if (serviceLinks[5]) serviceLinks[5].textContent = 'Contact Us';
    if (serviceLinks[6]) serviceLinks[6].textContent = 'Get Insurance';
    if (serviceLinks[7]) serviceLinks[7].textContent = 'Consult Expert';
    
    // تحديث قسم اتصل بنا
    const contactHeader = document.querySelector('.contact-header h2');
    if (contactHeader) contactHeader.textContent = '📞 Contact Us';
    
    const contactHeaderP = document.querySelector('.contact-header p');
    if (contactHeaderP) contactHeaderP.textContent = 'We are here to serve you around the clock, contact us through any of the following means of communication';
    
    const contactInfoTitle = document.querySelector('.contact-info h3');
    if (contactInfoTitle) contactInfoTitle.textContent = 'Contact Information';
    
    const contactTitles = document.querySelectorAll('.contact-text h4');
    if (contactTitles[0]) contactTitles[0].textContent = 'Mobile Number';
    if (contactTitles[1]) contactTitles[1].textContent = 'WhatsApp';
    if (contactTitles[2]) contactTitles[2].textContent = 'Email';
    if (contactTitles[3]) contactTitles[3].textContent = 'Address';
    
    const socialTitle = document.querySelector('.social-media h4');
    if (socialTitle) socialTitle.textContent = 'Follow Us';
    
    const formTitle = document.querySelector('.contact-form h3');
    if (formTitle) formTitle.textContent = 'Send us a message';
    
    // تحديث placeholders في النموذج
    const nameInput = document.querySelector('.form-group input[type="text"]');
    if (nameInput) nameInput.placeholder = 'Full Name';
    
    const emailInput = document.querySelector('.form-group input[type="email"]');
    if (emailInput) emailInput.placeholder = 'Email';
    
    const phoneInput = document.querySelector('.form-group input[type="tel"]');
    if (phoneInput) phoneInput.placeholder = 'Mobile Number';
    
    const textarea = document.querySelector('.form-group textarea');
    if (textarea) textarea.placeholder = 'Your Message...';
    
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = 'Send Message';
    
    // تحديث الفوتر
    const footerText = document.querySelector('.footer-content p');
    if (footerText) footerText.textContent = 'All rights reserved to Vago © 2024';
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = 'Privacy Policy';
    if (footerLinks[1]) footerLinks[1].textContent = 'Terms & Conditions';
    if (footerLinks[2]) footerLinks[2].textContent = 'Sitemap';
}

// دالة تغيير النصوص للعربية
function changeTextsToArabic() {
    // إعادة تحميل الصفحة للنصوص العربية الأصلية
    location.reload();
}

// التحقق من اللغة المخزنة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // التأكد من أن اللغة الافتراضية هي العربية
    if (document.documentElement.lang !== 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    }
    
    // إضافة وظيفة القائمة الجانبية للموبايل
    setupMobileMenu();
    
    // إغلاق القائمة عند النقر على رابط
    setupNavLinks();
    
    // إضافة user actions للقائمة الجانبية فوراً
    addMobileUserActions();
});

// دالة إضافة user actions للقائمة الجانبية
function addMobileUserActions() {
    const mainNav = document.getElementById('mainNav');
    
    if (mainNav) {
        // إزالة الـ mobile user actions القديم إذا وجد
        const oldMobileActions = document.querySelector('.mobile-user-actions');
        if (oldMobileActions) {
            oldMobileActions.remove();
        }
        
        // إنشاء عناصر الموبايل
        const mobileUserActions = document.createElement('div');
        mobileUserActions.className = 'mobile-user-actions';
        
        // إضافة أيقونات المستخدم
        const icons = ['🔔', '👤', '❤️'];
        icons.forEach(icon => {
            const userIcon = document.createElement('div');
            userIcon.className = 'user-icon';
            userIcon.textContent = icon;
            mobileUserActions.appendChild(userIcon);
        });
        
        // إضافة زر اللغة
        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        langSwitcher.innerHTML = `
            <button class="lang-btn active" onclick="window.changeLanguage('ar')" id="lang-ar-mobile">
                <i class="fas fa-globe"></i> AR
            </button>
            <button class="lang-btn" onclick="window.changeLanguage('en')" id="lang-en-mobile">
                <i class="fas fa-globe"></i> EN
            </button>
        `;
        mobileUserActions.appendChild(langSwitcher);
        
        // إضافة للقائمة
        mainNav.appendChild(mobileUserActions);
        
        // تحديث حالة الأزرار حسب اللغة الحالية
        updateMobileLanguageButtons();
    }
}

// دالة تحديث أزرار اللغة في الموبايل
function updateMobileLanguageButtons() {
    const currentLang = document.documentElement.lang || 'ar';
    const langArMobile = document.getElementById('lang-ar-mobile');
    const langEnMobile = document.getElementById('lang-en-mobile');
    
    if (currentLang === 'ar') {
        if (langArMobile) langArMobile.classList.add('active');
        if (langEnMobile) langEnMobile.classList.remove('active');
    } else {
        if (langArMobile) langArMobile.classList.remove('active');
        if (langEnMobile) langEnMobile.classList.add('active');
    }
}

// دالة إعداد قائمة الموبايل
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // منع التمرير عند فتح القائمة
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
}

// دالة إعداد روابط التنقل
function setupNavLinks() {
    const navLinks = document.querySelectorAll('nav a');
    const mainNav = document.getElementById('mainNav');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // إغلاق القائمة في الموبايل
            if (window.innerWidth <= 768) {
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (hamburgerBtn) {
                        hamburgerBtn.classList.remove('active');
                    }
                    document.body.style.overflow = '';
                }
            }
            
            // تمرير سلس للقسم المطلوب
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// إغلاق القائمة عند تغيير حجم النافذة
window.addEventListener('resize', function() {
    const mainNav = document.getElementById('mainNav');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    
    if (window.innerWidth > 768) {
        if (mainNav) {
            mainNav.classList.remove('active');
            mainNav.style.right = '';
            
            // إزالة mobile user actions في الشاشات الكبيرة
            const mobileActions = document.querySelector('.mobile-user-actions');
            if (mobileActions) {
                mobileActions.remove();
            }
        }
        if (hamburgerBtn) {
            hamburgerBtn.classList.remove('active');
        }
        document.body.style.overflow = '';
    } else {
        // إضافة user actions للقائمة الجانبية في الموبايل
        addMobileUserActions();
    }
});

// التأكد من ربط أزرار اللغة الموجودة مسبقاً
document.addEventListener('click', function(e) {
    // إذا تم النقر على زر لغة في الموبايل ولم يعمل
    if (e.target.closest('.lang-btn')) {
        const btn = e.target.closest('.lang-btn');
        const isArabic = btn.textContent.includes('AR') || btn.id.includes('ar');
        
        if (btn.id.includes('mobile')) {
            // منع الحدث الافتراضي
            e.preventDefault();
            // استدعاء دالة تغيير اللغة
            if (isArabic) {
                window.changeLanguage('ar');
            } else {
                window.changeLanguage('en');
            }
        }
    }
});
// التأكد من ظهور الأيقونات في الموبايل
window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        const userActions = document.querySelector('.user-actions');
        const langSwitcher = document.querySelector('.language-switcher');
        
        if (userActions) {
            userActions.style.display = 'flex';
            userActions.style.visibility = 'visible';
            userActions.style.opacity = '1';
        }
        
        if (langSwitcher) {
            langSwitcher.style.display = 'flex';
            langSwitcher.style.visibility = 'visible';
            langSwitcher.style.opacity = '1';
        }
    }
});

// مراقبة تغيير حجم الشاشة
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        const userActions = document.querySelector('.user-actions');
        const langSwitcher = document.querySelector('.language-switcher');
        
        if (userActions) {
            userActions.style.display = 'flex';
            userActions.style.visibility = 'visible';
            userActions.style.opacity = '1';
        }
        
        if (langSwitcher) {
            langSwitcher.style.display = 'flex';
            langSwitcher.style.visibility = 'visible';
            langSwitcher.style.opacity = '1';
        }
    }
});