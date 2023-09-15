window.addEventListener("scroll", function() {
    var element = document.querySelector(".contactButton");
    var element = document.querySelector(".contactButton");
    var element = document.querySelector(".contactButton");
    var element = document.querySelector(".contactButton");
    
    

    var bounding = element.getBoundingClientRect();

    // Adjust this value as needed for when you want the text to enlarge
    if (bounding.top <= 100 && bounding.bottom >= 100) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});