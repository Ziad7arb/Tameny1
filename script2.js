document.addEventListener("DOMContentLoaded", function() {
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;

    // Check if dark mode is enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleDarkMode.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Store user preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
