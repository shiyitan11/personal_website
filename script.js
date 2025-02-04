/* ========= Navigation Function =========
   This function hides all content sections (elements with class "content")
   and then displays the section whose id is passed as an argument.
*/
function showContent(id) {
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}

/* ========= Photo Slider Functionality =========*/
// Make sure the DOM is fully loaded before running the slider code.
document.addEventListener("DOMContentLoaded", function() {
  // Select both the prev-button and next-button element.
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  // Select all images that have the class "image_gallery".
  const images = document.querySelectorAll('.image_gallery');
  // Variable to keep track of the currently active image index.
  let currentIndex = 0;

  // Function to update which image is visible
  function updateGallery() {
    // Hide all images
    images.forEach((image) => image.classList.remove('active'));
    // Show only the current image
    images[currentIndex].classList.add('active');
  }

  // Event listener for the "next" button
  nextButton.addEventListener('click', function () {
    // Move to the next image, looping back to the start if needed
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });

  // Event listener for the "previous" button
  prevButton.addEventListener('click', function () {
    // Move to the previous image, looping to the end if needed
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });
  updateGallery();
  
});