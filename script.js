// دالة تغيير اللغة
    function changeLanguage(lang) {
        // تحديث الأزرار النشطة
        document.getElementById('lang-ar').classList.remove('active');
        document.getElementById('lang-en').classList.remove('active');
        document.getElementById('lang-' + lang).classList.add('active');
        
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
        document.querySelector('.hero-content-alt h2').textContent = 'Discover Syria with Vago';
        document.querySelector('.hero-content-alt p').textContent = 'The best platform for booking hotels, trips and cars in Syria';
        
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
        document.querySelector('#about h3').textContent = 'About Us';
        document.querySelector('.about-description p:first-child').textContent = 'Vago is a leading platform in the field of tourism and travel in Syria, founded in 2020 with the aim of providing the best tourism services at competitive prices and high quality.';
        document.querySelector('.about-description p:last-child').textContent = 'We believe that travel should be a fun and hassle-free experience, so we strive to provide everything a tourist needs in one place.';
        
        document.querySelectorAll('.stat-label')[0].textContent = 'Happy Clients';
        document.querySelectorAll('.stat-label')[1].textContent = 'Partner Hotels';
        document.querySelectorAll('.stat-label')[2].textContent = 'Cities';
        
        document.querySelector('.about-features h3').textContent = 'Why Vago?';
        
        const features = document.querySelectorAll('.feature h4');
        features[0].textContent = 'Best Prices';
        features[1].textContent = 'Reliable Service';
        features[2].textContent = '24/7 Support';
        features[3].textContent = 'High Quality';
        
        document.querySelector('.about-mission h3').textContent = 'Vago Company serves tourists with the best prices and the best comfort for the tourist';
        document.querySelector('.about-mission p').textContent = 'We strive to make every trip with Vago an unforgettable experience, by providing integrated services that combine quality, affordable price and complete comfort. With Vago, your travel has become easier!';
        
        // تحديث قسم الخدمات
        document.querySelector('.services-header h2').textContent = '⚙️ Our Services';
        document.querySelector('.services-header p').textContent = 'We offer you an integrated set of tourism services to make your trip with Vago an unforgettable experience';
        
        const serviceTitles = document.querySelectorAll('.service-card h3');
        serviceTitles[0].textContent = 'Hotel Booking';
        serviceTitles[1].textContent = 'Car Rental';
        serviceTitles[2].textContent = 'Taxi Services';
        serviceTitles[3].textContent = 'Restaurants';
        serviceTitles[4].textContent = 'Tours';
        serviceTitles[5].textContent = 'Customer Support';
        
        const serviceLinks = document.querySelectorAll('.service-link');
        serviceLinks[0].textContent = 'View Hotels';
        serviceLinks[1].textContent = 'View Cars';
        serviceLinks[2].textContent = 'Book Taxi';
        serviceLinks[3].textContent = 'Discover';
        serviceLinks[4].textContent = 'View Tours';
        serviceLinks[5].textContent = 'Contact Us';
        
        // تحديث قسم اتصل بنا
        document.querySelector('.contact-header h2').textContent = '📞 Contact Us';
        document.querySelector('.contact-header p').textContent = 'We are here to serve you around the clock, contact us through any of the following means of communication';
        
        document.querySelector('.contact-info h3').textContent = 'Contact Information';
        
        const contactTitles = document.querySelectorAll('.contact-text h4');
        contactTitles[0].textContent = 'Mobile Number';
        contactTitles[1].textContent = 'WhatsApp';
        contactTitles[2].textContent = 'Email';
        contactTitles[3].textContent = 'Address';
        
        document.querySelector('.social-media h4').textContent = 'Follow Us';
        document.querySelector('.contact-form h3').textContent = 'Send us a message';
        
        // تحديث placeholders في النموذج
        document.querySelector('.form-group input[type="text"]').placeholder = 'Full Name';
        document.querySelector('.form-group input[type="email"]').placeholder = 'Email';
        document.querySelector('.form-group input[type="tel"]').placeholder = 'Mobile Number';
        document.querySelector('.form-group textarea').placeholder = 'Your Message...';
        document.querySelector('.submit-btn').textContent = 'Send Message';
        
        // تحديث الفوتر
        document.querySelector('.footer-content p').textContent = 'All rights reserved to Vago © 2024';
        document.querySelectorAll('.footer-links a')[0].textContent = 'Privacy Policy';
        document.querySelectorAll('.footer-links a')[1].textContent = 'Terms & Conditions';
        document.querySelectorAll('.footer-links a')[2].textContent = 'Sitemap';
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
    });