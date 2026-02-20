// Smooth scrolling
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

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        this.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

// Notification System
function updateNotificationCount() {
    // Count total notifications (hardcoded based on actual notifications)
    const totalNotifications = 3; // Update this number when adding new notifications
    const readNotifications = JSON.parse(localStorage.getItem('readNotifications') || '[]');
    const unreadCount = totalNotifications - readNotifications.length;
    
    const badge = document.querySelector('.notification-badge-count');
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Mark notification as read
function markAsRead(notificationId) {
    const readNotifications = JSON.parse(localStorage.getItem('readNotifications') || '[]');
    if (!readNotifications.includes(notificationId)) {
        readNotifications.push(notificationId);
        localStorage.setItem('readNotifications', JSON.stringify(readNotifications));
    }
    updateNotificationCount();
    updateNotificationUI();
}

// Update notification UI
function updateNotificationUI() {
    const readNotifications = JSON.parse(localStorage.getItem('readNotifications') || '[]');
    const notificationItems = document.querySelectorAll('.notification-item');
    
    notificationItems.forEach((item, index) => {
        const notificationId = `notification-${index}`;
        const readButton = item.querySelector('.btn-mark-read');
        const readStatus = item.querySelector('.read-status');
        
        if (readNotifications.includes(notificationId)) {
            item.classList.add('read');
            if (readButton) readButton.style.display = 'none';
            if (readStatus) readStatus.style.display = 'inline-block';
        } else {
            item.classList.remove('read');
            if (readButton) readButton.style.display = 'inline-block';
            if (readStatus) readStatus.style.display = 'none';
        }
    });
}

// Initialize notification system on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNotificationCount();
    
    // Add event listeners to mark as read buttons
    const markReadButtons = document.querySelectorAll('.btn-mark-read');
    markReadButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            markAsRead(`notification-${index}`);
        });
    });
    
    // Update UI on notification page
    if (document.querySelector('.notification-list')) {
        updateNotificationUI();
    }
});
