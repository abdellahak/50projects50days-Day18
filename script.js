let btnNext = document.getElementById('next');
let btnPrevious = document.getElementById('previous');
let slider = document.querySelector('.slider');
let main = document.querySelector('main')

let images = [];
images[0]= "img/agadir.jpg";
images[1]= "img/cansablanca.jpg";
images[2]= "img/marrakech.jpg";
images[3]= "img/rabat.jpg";

btnNext.addEventListener('click', function(){
    let currentImage = slider.style.backgroundImage;
    if(currentImage){
        currentImage = currentImage.slice(5,-2);
        let imageId = images.indexOf(currentImage);
        console.log(currentImage)
        slider.style.backgroundImage = `url(${images[imageId+1] ? images[imageId+1]:images[0]})`
        main.style.backgroundImage = `url(${images[imageId+1] ? images[imageId+1]:images[0]})`
    }else{
        slider.style.backgroundImage = `url(${images[1]})`
        main.style.backgroundImage = `url(${images[1]})`
    }
})
btnPrevious.addEventListener('click', function(){
    let currentImage = slider.style.backgroundImage;
    if(currentImage){
        currentImage = currentImage.slice(5,-2);
        let imageId = images.indexOf(currentImage);
        console.log(currentImage)
        slider.style.backgroundImage = `url(${images[imageId-1] ? images[imageId-1]:images[3]})`
        main.style.backgroundImage = `url(${images[imageId-1] ? images[imageId-1]:images[3]})`
    }else{
        slider.style.backgroundImage = `url(${images[3]})`
        main.style.backgroundImage = `url(${images[3]})`
    }
})