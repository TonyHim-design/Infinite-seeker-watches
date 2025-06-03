// Function to create and insert the navigation bar
function createNavbar() {
    // Navbar HTML structure with your content
    const navbarHTML = `
    <nav class="navbar">
        <div class="navbar-container">
            <!-- Logo and Header -->
            <div class="navbar-header">
                <a href="home.html" class="navbar-logo">
                    <img src="images/LOGO.jpg" alt="INFINITE SEEKER TIMEPIECES Logo" width="300">
                </a>
                <h1 class="navbar-title"><i class="fas fa-clock"></i> WELCOME TO INFINITE SEEKER TIMEPIECES</h1>
            </div>
           
            <!-- Hamburger menu for mobile -->
            <button class="hamburger" id="hamburger">☰</button>
            <div class="navbar-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
           
            <!-- Navigation links with your icons -->
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <a href="index.html" class="navbar-links"><i class="fas fa-home"></i> Home</a>
                </li>
                <li class="navbar-item">
                    <a href="about.html" class="navbar-links"><i class="fas fa-info-circle"></i> About Us</a>
                </li>
                <li class="navbar-item">
                    <a href="products.html" class="navbar-links"><i class="fas fa-shopping-bag"></i> Products</a>
                </li>
                <li class="navbar-item">
                    <a href="gallery.html" class="navbar-links"><i class="fas fa-images"></i> Gallery</a>
                </li>
                <li class="navbar-item">
                    <a href="contact.html" class="navbar-links"><i class="fas fa-envelope"></i> Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    `;
 
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
 
    // Add event listeners for mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
 
    mobileMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('is-active');
        navbarMenu.classList.toggle('active');
    });
 
    // Close mobile menu when clicking on a nav item
    const navLinks = document.querySelectorAll('.navbar-links');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('is-active');
            navbarMenu.classList.remove('active');
        });
    });
}
 
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createNavbar);

document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});
