onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


document.addEventListener("DOMContentLoaded", function() {
    const galleryButtons = document.querySelectorAll(".gallery-btn");
    const galleries = document.querySelectorAll(".gallery");
    const photos = document.querySelectorAll(".photo img");
    const flowersContainer = document.querySelector(".flowers");

    // Initially hide all galleries and photos
    galleries.forEach(gallery => {
        gallery.style.display = "none";
    });

    photos.forEach(photo => {
        photo.style.display = "none"; 
    });

    // Add click event listeners to gallery buttons
    galleryButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Hide flowers container
            flowersContainer.style.display = "none";

            // Hide all galleries and photos
            galleries.forEach(gallery => {
                gallery.style.display = "none";
            });

            photos.forEach(photo => {
                photo.style.display = "none";
            });

            // Show the selected gallery
            const targetGalleryId = this.getAttribute("data-gallery");
            document.getElementById(targetGalleryId).style.display = "grid";

            // Display the photos in the selected gallery
            const galleryIndex = parseInt(targetGalleryId.replace("gallery", "")) - 1;
            const startPhotoIndex = galleryIndex * 17;
            const endPhotoIndex = (galleryIndex + 1) * 17;
            for (let i = startPhotoIndex; i < endPhotoIndex; i++) {
                if (photos[i]) {
                    photos[i].style.display = "block";
                }
            }
        });
    });
});
