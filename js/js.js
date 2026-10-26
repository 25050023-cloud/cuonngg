// 1. Chức năng tương tác 1: Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Đổi icon nút bấm
    if (body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️';
    } else {
        darkModeBtn.textContent = '🌙';
    }
});

// 2. Chức năng tương tác 2: Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Xử lý Form Liên hệ & Validate bằng JavaScript
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn tải lại trang
    
    // Lấy giá trị các ô input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    // Validate Tên
    const nameError = document.getElementById('name-error');
    if (name === '') {
        nameError.textContent = 'Vui lòng nhập họ và tên.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Email
    const emailError = document.getElementById('email-error');
    if (email === '' || !email.includes('@')) {
        emailError.textContent = 'Vui lòng nhập email hợp lệ.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate Lời nhắn
    const messageError = document.getElementById('message-error');
    if (message === '') {
        messageError.textContent = 'Vui lòng nhập lời nhắn.';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    // Xử lý khi Form hợp lệ
    if (isValid) {
        alert('Cảm ơn bạn! Lời nhắn của bạn đã được gửi thành công.');
        contactForm.reset(); // Xóa trắng form sau khi gửi
    }
});