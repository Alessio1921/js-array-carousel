const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let carouselContent="";
// loop to insert images into array
for (let i = 0; i < items.length; i++) {
  carouselContent+=`
  <div class="my-cards d-none">
    <img src=" ${items[i]}" alt="${title[i]} img">
  </div>`
}
// I take the wrapper of the img
let wrapper=document.querySelector(".col-10");
// I put the images in the wrapper
wrapper.innerHTML += carouselContent;
// i take the button
const btnUp=document.querySelector(".up");
const btnDown=document.querySelector(".down");
// i take the img container
const carouselItems=document.getElementsByClassName("my-cards")
// I remove the class d-none from the first image
carouselItems[0].classList.remove("d-none");
console.log(carouselItems);

let indexImg=0;
btnDown.addEventListener('click', function () {
  carouselItems[indexImg].classList.add("d-none");
  indexImg++;
  carouselItems[indexImg].classList.remove("d-none");

})
btnUp.addEventListener('click', function () {
  carouselItems[indexImg].classList.add("d-none");
  indexImg--;
  carouselItems[indexImg].classList.remove("d-none");

})