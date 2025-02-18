document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded successfully.");

    // Function to redirect for "Reserve Clinics in Hospitals" option
    document.getElementById("reserve-clinic").addEventListener("click", function () {
        document.getElementById("select-case-section").style.display = "block";
    });

    // Function to redirect for "Upload Image" and "Select Type of Emergency"
    document.getElementById("upload-image").addEventListener("click", function () {
        window.location.href = "nearest_hospitals.html";
    });

    document.getElementById("select-emergency").addEventListener("click", function () {
        window.location.href = "nearest_hospitals.html";
    });

    // Function to redirect after selecting case
    document.getElementById("select-case").addEventListener("click", function () {
        window.location.href = "nearest_hospitals.html";
    });
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Test login credentials
    const testEmail = "admin@tameny.com";
    const testPassword = "Islam1234";

    if (email === testEmail && password === testPassword) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html"; // Redirect after login
    } else {
        errorMessage.textContent = "Invalid email or password. Try again!";
    }
});
