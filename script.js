// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close the menu if a link is clicked (optional)
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') { // Check if it's a link
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  }
});
const images = ["./project1.jpg", "./project2.jpg", "./project3.jpg", "./project4.jpg"];
let currentIndex = 0;

setInterval(() => {
    document.querySelector(".project-image").src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}, 2000);
/* JavaScript for Burger Menu and Scroll Effect */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav'); // Select the nav element

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Add event listener for scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close the burger menu on mobile after a link is clicked
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        }
    });
});
