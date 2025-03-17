// script.js - JavaScript for Login API Verification & Signup Page

document.addEventListener("DOMContentLoaded", function () {
    /* =====================
       Login Page - API Verification
    ===================== */
    document.getElementById("login-btn")?.addEventListener("click", async function () {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const user = users.find(user => user.username === username && user.email === password);
        
        const msgBox = document.getElementById("login-msg");
        if (user) {
            msgBox.textContent = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "course_view.html", 2000);
        } else {
            msgBox.textContent = "Invalid credentials!";
        }
    });

    /* =====================
       Signup Page - Form Validation
    ===================== */
    document.getElementById("signup-btn")?.addEventListener("click", function () {
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const email = document.getElementById("signup-email").value;
        
        const errors = [];
        if (!/^[A-Za-z][A-Za-z0-9_-]{2,19}$/.test(username)) errors.push("Invalid username format.");
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) errors.push("Weak password.");
        if (password !== confirmPassword) errors.push("Passwords do not match.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email format.");
        
        const msgBox = document.getElementById("signup-msg");
        if (errors.length) {
            msgBox.innerHTML = errors.join("<br>");
        } else {
            msgBox.textContent = "Signup successful! Redirecting...";
            setTimeout(() => window.location.href = "login.html", 2000);
        }
    });
});
