var change = document.getElementById('one');
var counter = 0;
var myPictures = [
    "main images/solar/milkway.jpg",
    "main images/solar/order.jpg",
    "main images/solar/sun.jpg",
    "main images/solar/pluton.jpg",
];

function nextPic() {
  counter += 1;
  if (counter > myPictures.length -1) {
    counter = 0;
  }
  change.style.backgroundImage = "url(" + myPictures[counter] + ")";
}

// Here's how you can hookup the click event
change.addEventListener('click', nextPic);

// Load the first image
counter -= 1; // Do this so it starts at the first, not the second
nextPic();