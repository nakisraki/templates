let slide_data = [
{
'src': 'https://i.ibb.co/y8kCJwc/slide-1.jpg',
'title': 'Ship N drive',
'copy': 'FAST & EASY SHIPPING YOUR CAR TO ANY COUNTRY.' },

{
'src': 'https://i.ibb.co/q7gJzwf/slide-2.jpg',
'title': 'Slide 2',
'copy': 'FAST & EASY SHIPPING YOUR CAR TO ANY COUNTRY.' },

{
'src': 'https://i.ibb.co/NYmwXVm/slide-3.jpg',
'title': 'Slide 3',
'copy': 'FAST & EASY SHIPPING YOUR CAR TO ANY COUNTRY.' },

{
'src': 'https://i.ibb.co/NYmwXVm/slide-3.jpg',
'title': 'Slide 4',
'copy': 'FAST & EASY SHIPPING YOUR CAR TO ANY COUNTRY.' }];



let slides = [],
captions = [];

let autoplay = setInterval(function () {
nextSlide();
}, 5000);
let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
// console.log(leftSlider);
let down_button = document.getElementById('down_button');
// let caption = document.getElementById('slider-caption');
// let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click', function (e) {
e.preventDefault();
clearInterval(autoplay);
nextSlide();
autoplay;
});

for (let i = 0; i < slide_data.length; i++) {
let slide = document.createElement('div'),
caption = document.createElement('div'),
slide_title = document.createElement('div');

slide.classList.add('slide');
slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
caption.classList.add('caption');
slide_title.classList.add('caption-heading');
slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';

switch (i) {
case 0:
slide.classList.add('current');
caption.classList.add('current-caption');
break;
case 1:
slide.classList.add('next');
caption.classList.add('next-caption');
break;
case slide_data.length - 1:
slide.classList.add('previous');
caption.classList.add('previous-caption');
break;
default:
break;}

caption.appendChild(slide_title);
caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"><span>FAST & EASY SHIPPING YOUR CAR TO ANY COUNTRY. </span></div>');
slides.push(slide);
captions.push(caption);
leftSlider.appendChild(slide);
container.appendChild(caption);
}
// console.log(slides);

function nextSlide() {
// caption.classList.add('offscreen');

slides[0].classList.remove('current');
slides[0].classList.add('previous', 'change');
slides[1].classList.remove('next');
slides[1].classList.add('current');
slides[2].classList.add('next');
let last = slides.length - 1;
slides[last].classList.remove('previous');

captions[0].classList.remove('current-caption');
captions[0].classList.add('previous-caption', 'change');
captions[1].classList.remove('next-caption');
captions[1].classList.add('current-caption');
captions[2].classList.add('next-caption');
let last_caption = captions.length - 1;

// console.log(last);
captions[last].classList.remove('previous-caption');

let placeholder = slides.shift();
let captions_placeholder = captions.shift();
slides.push(placeholder);
captions.push(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');


function whichTransitionEvent() {
var t,
el = document.createElement("fakeelement");

var transitions = {
"transition": "transitionend",
"OTransition": "oTransitionEnd",
"MozTransition": "transitionend",
"WebkitTransition": "webkitTransitionEnd" };


for (t in transitions) {
if (el.style[t] !== undefined) {
return transitions[t];
}
}
}

var transitionEvent = whichTransitionEvent();
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
caption.removeEventListener(transitionEvent, customFunction);
console.log('animation ended');

// Do something when the transition ends
}





//TOP NAV
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-150px";
}
}







//LIGHT BOX
function openModal() {
document.getElementById("myModal").style.display = "block";
}

function closeModal() {
document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("lightboxSlides");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}