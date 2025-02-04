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
  // Select the next-button element.
  const nextButton = document.querySelector('.next-button');
  // Select all images that have the class "image_gallery".
  const images = document.querySelectorAll('.image_gallery');
  // Variable to keep track of the currently active image index.
  let currentIndex = 0;

  //On click, show the previous image.
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      images[currentIndex].classList.remove('active');
      // Use modulo arithmetic to loop backwards; adding images.length avoids negative values.
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].classList.add('active');
    });
  }
  
  //On click, show the previous image.
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      // Remove the "active" class from the current image.
      images[currentIndex].classList.remove('active');
      // Increment the index (use modulus to wrap back to 0 after the last image).
      currentIndex = (currentIndex + 1) % images.length;
      // Add the "active" class to the new current image.
      images[currentIndex].classList.add('active');
    });
  }
});