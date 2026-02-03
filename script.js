// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Login/Signup form switching
    const switchLinks = document.querySelectorAll('.switch-link');
    const forms = document.querySelectorAll('.form-container');

    switchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');

            forms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${target}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Password visibility toggle
    const toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Form validation and submission
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Store login state in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);

            showNotification('Login successful! Redirecting to dashboard...', 'success');

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;

            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            if (!terms) {
                showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            if (password !== confirmPassword) {
                showNotification('Passwords do not match!', 'error');
                return;
            }

            if (password.length < 8) {
                showNotification('Password must be at least 8 characters long', 'error');
                return;
            }

            // Store user data in localStorage
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: new Date().toISOString()
            };

            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true');

            showNotification('Account created successfully!', 'success');

            // Switch back to login form
            setTimeout(() => {
                forms.forEach(form => {
                    form.classList.remove('active');
                    if (form.id === 'loginForm') {
                        form.classList.add('active');
                    }
                });
                signupForm.reset();
            }, 2000);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = document.querySelector('.mobile-menu i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.classList.contains('google') ? 'Google' : 'Facebook';
            showNotification(`This would normally redirect to ${type} authentication. For this demo, please use the form below.`, 'info');
        });
    });

    // Forgot password
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
        forgotPassword.addEventListener('click', function(e) {
            e.preventDefault();
            const email = prompt('Please enter your email address to reset your password:');
            if (email && validateEmail(email)) {
                showNotification(`Password reset link sent to ${email}. For this demo, try "password123"`, 'success');
            }
        });
    }

    // Load user trips on dashboard
    if (window.location.pathname.includes('dashboard.html')) {
        loadUserTrips();
        updateUserInfo();
    }

    // Check login status
    checkLoginStatus();
});

// Helper Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    document.body.appendChild(notification);

    // Add styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 1rem;
                z-index: 3000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            .notification.success {
                border-left: 4px solid #4CAF50;
            }
            .notification.error {
                border-left: 4px solid #f44336;
            }
            .notification.info {
                border-left: 4px solid #2196F3;
            }
            .notification i {
                font-size: 1.2rem;
            }
            .notification.success i {
                color: #4CAF50;
            }
            .notification.error i {
                color: #f44336;
            }
            .notification.info i {
                color: #2196F3;
            }
            .notification-close {
                background: none;
                border: none;
                cursor: pointer;
                color: #666;
                margin-left: auto;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    if (isLoggedIn && loginBtn && signupBtn) {
        const userEmail = localStorage.getItem('userEmail') || 'User';
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${userEmail.split('@')[0]}`;
        signupBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;

        // Change logout functionality
        signupBtn.href = '#';
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            showNotification('Logged out successfully!', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
}

function loadUserTrips() {
    const trips = JSON.parse(localStorage.getItem('userTrips') || '[]');
    const tripsContainer = document.getElementById('user-trips');

    if (!tripsContainer) return;

    if (trips.length === 0) {
        tripsContainer.innerHTML = `
            <div class="no-trips">
                <i class="fas fa-suitcase fa-3x"></i>
                <h3>No trips planned yet</h3>
                <p>Start by searching for destinations and adding them to your trip!</p>
                <a href="index.html#search-section" class="btn-primary">
                    <i class="fas fa-search"></i> Explore Destinations
                </a>
            </div>
        `;
        return;
    }

    let tripsHTML = '<div class="trip-cards">';

    trips.forEach(trip => {
        const country = getCountryById(trip.countryId);
        if (country) {
            tripsHTML += `
                <div class="trip-card">
                    <div class="trip-card-header">
                        <h3>${country.flag} ${country.name}</h3>
                        <span class="trip-status">Planning</span>
                    </div>
                    <div class="trip-dates">
                        <i class="fas fa-calendar"></i>
                        <span>Added: ${new Date(trip.addedAt).toLocaleDateString()}</span>
                    </div>
                    <p><i class="fas fa-map-marker-alt"></i> Popular Cities: ${country.popularCities.slice(0, 2).join(', ')}</p>
                    <div class="trip-progress">
                        <div class="progress-bar">
                            <div class="progress" style="width: 30%"></div>
                        </div>
                        <span>30% planned</span>
                    </div>
                    <div class="trip-actions">
                        <button class="btn-small" onclick="continuePlanning(${country.id})">
                            <i class="fas fa-edit"></i> Continue Planning
                        </button>
                    </div>
                </div>
            `;
        }
    });

    tripsHTML += '</div>';
    tripsContainer.innerHTML = tripsHTML;
}

function updateUserInfo() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');

    if (userName && userData.firstName) {
        userName.textContent = `${userData.firstName} ${userData.lastName}`;
    }

    if (userEmail && userData.email) {
        userEmail.textContent = userData.email;
    }
}

function continuePlanning(countryId) {
    const country = getCountryById(countryId);
    if (country) {
        showNotification(`Continuing trip planning for ${country.name}`, 'info');
        // In a real app, this would open a trip planner interface
        setTimeout(() => {
            alert(`Trip Planner Interface for ${country.name}\n\nThis would open a detailed planning interface with:\n• Date selection\n• Hotel booking\n• Activity planning\n• Budget management\n• Itinerary creation`);
        }, 500);
    }
}

// Make functions available globally
window.validateEmail = validateEmail;
window.showNotification = showNotification;
window.checkLoginStatus = checkLoginStatus;
window.loadUserTrips = loadUserTrips;
window.updateUserInfo = updateUserInfo;
window.continuePlanning = continuePlanning;