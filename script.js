// Static Username and Password
const VALID_USERNAME = "admin"; // सही Username
const VALID_PASSWORD = "12345"; // सही Password

// Form Submit Event Listener
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form को सबमिट होने से रोकें

    // Input Values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validation Logic
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login Successful! Redirecting...";

        // 2 सेकंड के बाद अगले पेज पर रीडायरेक्ट करें
        setTimeout(() => {
            window.location.href = "dashboard.html"; // रीडायरेक्शन के लिए
        }, 2000); // 2000ms = 2 सेकंड
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Invalid Username or Password!";
    }
});