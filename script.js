// Get the modal, the image inside it, and the caption text
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");

// Get all images in the gallery
const images = document.querySelectorAll(".gallery img");

// Add click event listener to each image
images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the full image source
        captionText.innerHTML = this.alt; // Set the caption from the alt text
    }
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}