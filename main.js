const images = [ 
    'img/img1.jpg', 
    'img/img3.jpg', 
    'img/img2.jpg' 
]; 
 
let currentIndex = 0;
    
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length; 
      document.getElementById('myImage').src = images[currentIndex]; 
    }

    setInterval(changeImage, 5000);