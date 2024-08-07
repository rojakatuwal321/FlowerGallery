document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainImage');
    const imageCaption = document.getElementById('imageCaption');
    const thumbnailList = document.getElementById('thumbnailList');
  
    const images = [
      {
        src: 'flowers-pink-large.jpg',
        thumbnail: 'flowers-pink-small.jpg',
        alt: 'Pink flowers',
        caption: 'Beautiful pink flowers.'
      },
      {
        src: 'flowers-purple-large.jpg',
        thumbnail: 'flowers-purple-small.jpg',
        alt: 'Purple flowers',
        caption: 'Vibrant purple flowers.'
      },
      {
        src: 'flowers-red-large.jpg',
        thumbnail: 'flowers-red-small.jpg',
        alt: 'Red flowers',
        caption: 'Bright red flowers.'
      },
      {
        src: 'flowers-white-large.jpg',
        thumbnail: 'flowers-white-small.jpg',
        alt: 'White flowers',
        caption: 'Elegant white flowers.'
      },
      {
        src: 'flowers-yellow-large.jpg',
        thumbnail: 'flowers-yellow-small.jpg',
        alt: 'Yellow flowers',
        caption: 'Cheerful yellow flowers.'
      }
    ];
  
    // Function to create thumbnail list
    function createThumbnailList(images) {
      images.forEach(image => {
        const listItem = document.createElement('li');
        const imgElement = document.createElement('img');
        imgElement.src = image.thumbnail;
        imgElement.alt = image.alt;
        imgElement.addEventListener('click', function() {
          // Update main image and caption
          mainImage.src = image.src;
          mainImage.alt = image.alt;
          imageCaption.textContent = image.caption;
  
          // Remove active class from all thumbnails
          const thumbnails = thumbnailList.querySelectorAll('li img');
          thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('active');
          });
  
          // Add active class to the clicked thumbnail
          imgElement.classList.add('active');
        });
        listItem.appendChild(imgElement);
        thumbnailList.appendChild(listItem);
      });
    }
  
    // Call the function to create the thumbnail list
    createThumbnailList(images);
  
    // Set initial main image and caption
    mainImage.src = images[0].src;
    mainImage.alt = images[0].alt;
    imageCaption.textContent = images[0].caption;
  });
  
