document.addEventListener("DOMContentLoaded", function () {
  // Select the buttons and images
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const images = document.querySelectorAll('.image_gallery');

  // Keep track of the current image index
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

  // Initialize the gallery (show the first image)
  updateGallery();
});
