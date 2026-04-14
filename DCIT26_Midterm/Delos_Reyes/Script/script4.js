// Get elements
const modal = document.getElementById("contact-form");
const openBtn = document.querySelector(".contact-form button");
const closeBtn = document.querySelector(".close-btn");

// Open modal
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal when clicking (x)
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}