let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
/* BARIS PHOTO*/
function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "250px";
  }
  
  function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "150px";
  }

//solar system images

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'main images/solar/order.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'main images/solar/milkway.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'main images/solar/pluton.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'main images/solar/sun.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'main images/solar/earth.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'main images/solar/saturn.jpg';


function nextImage(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[5].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}