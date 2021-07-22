/*const slideShowImages= document.querySelectorAll(".hero_image .dezyimage");
const nextImageDelay=3000;
let currentImageCounter=0;
slideShowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage,nextImageDelay);
function nextImage(){
    slideShowImages[currentImageCounter].style.zindex = -2;
    const tempCounter = currentImageCounter;

    setTimeout(() => {
        slideShowImages[tempCounter].style.opacity = 0;
    }, 1000);

    currentImageCounter =(currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.opacity = 1;
    slideShowImages[currentImageCounter].style.zindex= -1;   
}
*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("hero_image");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}