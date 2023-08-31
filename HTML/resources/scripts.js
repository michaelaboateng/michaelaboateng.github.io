document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var txt = 'Michaela Boateng'; // The text you want to display
var speed = 100; // The speed/duration of the effect in milliseconds
var i = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

var breadcrumb = document.getElementById("breadcrumb");
var sticky = breadcrumb.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
       breadcrumb.classList.add("sticky")
    } else {
        breadcrumb.classList.remove("sticky");
    }
};

