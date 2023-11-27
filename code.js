document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById("navbar_top").classList.add('fixed-top');
            var nav_height = document.querySelector(".navbar").offsetHeight;
            console.log(nav_height);
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
        }
    });
});

