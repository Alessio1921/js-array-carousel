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
let bookmark="";
// loop to insert images into array
for (let i = 0; i < items.length; i++) {
  carouselContent+=`
  <div class="my-cards d-none">
    <img src=" ${items[i]}" alt="${title[i]} img">
    <div class="description position-absolute text-white fw-bold pe-2">
      <h3>${title[i]}</h3>
      <p>${text[i]}</p>
    </div>
  </div>
  `
// loop to insert images into array

  bookmark+=`
    <div class="container-card opacity">
      <img src="${items[i]}"  alt="${title[i]} img"> 
    </div>  
  `
}
// I take the wrapper of the img
let wrapper=document.querySelector(".col-8");
// I put the images in the wrapper
wrapper.innerHTML += carouselContent;
// i take the img container
const carouselItems=document.getElementsByClassName("my-cards");
// I remove the class d-none from the first image
carouselItems[0].classList.remove("d-none");
console.log(carouselItems);
// I take the wrapper of the img bookmark
let wrapperBookmark=document.querySelector(".container-bookmark");
wrapperBookmark.innerHTML+=bookmark;
// i take the container of single item
const bookmarkItem=document.getElementsByClassName("container-card");
// I remove the class opacity from the first image
bookmarkItem[0].classList.remove("opacity")
// i take the button
const btnUp=document.querySelector(".up");
const btnDown=document.querySelector(".down");

let indexImg=0;
// function of the button up 
btnUp.addEventListener('click', function () {
  if(indexImg == 0){
    indexImg=items.length-1;
    bookmarkItem[0].classList.add('opacity');
    carouselItems[0].classList.add("d-none");
    bookmarkItem[indexImg].classList.remove('opacity');
    carouselItems[indexImg].classList.remove("d-none");
  }
  else{
    bookmarkItem[indexImg].classList.add('opacity');
    carouselItems[indexImg].classList.add("d-none");
    indexImg--;
    bookmarkItem[indexImg].classList.remove('opacity');
    carouselItems[indexImg].classList.remove("d-none");
  }
})
// function of the button down
btnDown.addEventListener('click', function () {
  if (indexImg==items.length-1) {
    indexImg=0;
    bookmarkItem[4].classList.add('opacity');
    carouselItems[4].classList.add("d-none");
    carouselItems[indexImg].classList.remove("d-none");
    bookmarkItem[indexImg].classList.remove('opacity');
  }
  else{
    carouselItems[indexImg].classList.add("d-none");
    bookmarkItem[indexImg].classList.add('opacity');
    indexImg++;
    carouselItems[indexImg].classList.remove("d-none");
    bookmarkItem[indexImg].classList.remove('opacity');
  }
})
