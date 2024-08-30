// gallery-modal.js

document.addEventListener('DOMContentLoaded', function() {
    var modal = new bootstrap.Modal(document.getElementById('photoModal'));
    var modalImage = document.getElementById('modalImage');
    var saveImageLink = document.getElementById('saveImage');
    var images = document.querySelectorAll('[data-bs-image]');
    var currentIndex;

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            modalImage.src = image.src;
            saveImageLink.href = image.src;  // Устанавливаем ссылку на изображение для загрузки
            currentIndex = index;
            modal.show();
        });
    });

    document.getElementById('prevImage').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            modalImage.src = images[currentIndex].src;
            saveImageLink.href = images[currentIndex].src;  // Обновляем ссылку при смене изображения
        }
    });

    document.getElementById('nextImage').addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            modalImage.src = images[currentIndex].src;
            saveImageLink.href = images[currentIndex].src;  // Обновляем ссылку при смене изображения
        }
    });
});



  document.addEventListener('keydown', function(event) {
    if (document.querySelector('#photoModal').classList.contains('show')) {
      if (event.key === 'ArrowLeft') {
        document.getElementById('prevImage').click();
      } else if (event.key === 'ArrowRight') {
        document.getElementById('nextImage').click();
      }
    }
  });

