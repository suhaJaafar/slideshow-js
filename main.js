let myImage = document.getElementById("slideshow");
let images = ["images/img1.jpg" , "images/img2.png" , "images/img3.jpg" , "images/img4.jpg"];
let i = 0;

function slideshow () {
    myImage.setAttribute('src' , images[i]);
    if (i == images.length-1) {
        i = 0;
    }else {
        i++ ;
    }
    setTimeout(function(){
        slideshow ();

    }, 2000)
}

slideshow ();