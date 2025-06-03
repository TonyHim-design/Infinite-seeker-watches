// Function to create and insert the footer
function createFooter() {
    // Footer HTML structure with your content
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <!-- Company Info Column -->
                <div class="footer-col">
                    <h4>Infinite Seeker Timepieces</h4>
                    <ul>
                        <li><i class="far fa-copyright"></i> 2025 All rights reserved</li>
                        <li><i class="fas fa-map-marker-alt"></i> 131 Kellner St, Brandwag, Bloemfontein, 9301</li>
                    </ul>
                </div>
                
                <!-- Contact Column -->
                <div class="footer-col">
                    <h4><i class="fas fa-headset"></i> Contact Us</h4>
                    <ul>
                        <li><i class="fas fa-phone-alt"></i> (058) 567-2345</li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:info@infiniteseeker205@gmail.com">info@infiniteseeker205@gmail.com</a></li>
                    </ul>
                </div>
                
                <!-- Follow Us Column -->
                <div class="footer-col">
                    <h4><i class="fas fa-share-alt"></i> Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.youtube.com/watch?v=cf9sxi4GnZY"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.instagram.com/infin.iteseeker/"><i class="fab fa-instagram"></i></a>
                    </div>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=cf9sxi4GnZY">YouTube</a></li>
                        <li><a href="https://www.instagram.com/infin.iteseeker/">Instagram</a></li>
                    </ul>
                </div>
                
                <!-- Quick Links Column -->
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/products">Our products</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="footer-copyright">
                <p><i class="far fa-copyright"></i> 2025 INFINITE SEEKER TIMEPIECES. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);






















































































































































 