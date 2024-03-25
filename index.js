document.addEventListener("DOMContentLoaded", function() {
    // Example JavaScript to toggle a class on click
    const introSection = document.getElementById("introduction");
    introSection.addEventListener("click", function() {
        this.classList.toggle("highlight");
    });
});
