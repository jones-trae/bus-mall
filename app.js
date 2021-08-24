'use strict';

console.log ('test')

//-----Global Variables-------//
const leftImageElem = document.getElementById('leftImg');
const centerImageElem = document.getElementById('centerImg');
const rightImageElem = document.getElementById('rightImg');
const productsSectionElem = document.getElementById('products');
let leftProduct = null;
let rightProduct = null;
let CenterProduct = null;
let Rounds = 25;

//------Constructor Functions------//

function Product(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  timesClicked = 0;
}

//-----Prototype Method----//
Product.allProducts = []
Product.prototype.renderSingleProduct = function(imageElem) {
  imageElem.src = this.image;
  imageElem.setAttribute('src', this.image);
  this.timesShown++;
}
//--------Functions---------//
function makeAProduct(name, image) {
  Product.allProducts.push(new Product(name, image));
}

function chooseThreeProducts () {
  const leftIndex = Math.floor(Math.random() * Product.allProducts.length);

  leftProduct = Product.allProducts[leftIndex];

  while (!rightProduct || rightProduct === leftProduct)  {
    const rightIndex = Math.floor(Math.random() * Product.allProducts.length);
    rightProduct = Product.allProducts[rightIndex];
  }

  while (!CenterProduct || centerImageElem === leftProduct || centerProduct === rightProduct) {
    const centerIndex = Math.floor(Math.random() * Product.allProducts.length);
    centerProduct = Product.allProducts[rightIndex];
  }
  leftProduct.renderSingleProduct(leftImageElem);
centerProduct.renderSingleProduct(centerImageElem);
rightProduct.renderSingleProduct(rightImageElem);
}

function renderResults() {
  const resultsElem = document.getElementById('results');
  resultsElem.innerHTML = '';
  for (let product of Product.allProducts) {
    const liElem = document.createElement('li');
    liElem.textContent = `${product.name} was shown ${product.timesShown} times and was clicked ${product.timesClicked} times.`;
    resultsElem.appendChild(liElem);
  }
}






//Listeners----//
productsSectionElem.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
  constValidTargets = [leftImageElem, rightImageElem, centerImageElem];
  if (ValidTargets.includes(event.target)) {
    rounds--;
    if (event.target === validTargets[0]) {
      validTargets[0].timeClicked++
    } else if (event.target === validTargets[1]) {
      validTargets[1].timesClicked++;
    } else {
      validTargets[2].timesClicked++;
    }
    if (rounds === 0) {
    productsSectionElem.removeEventListener('click', handleClick);
    alert('we are outta votes');
    } else {
      chooseThreeProducts();
    }
  }
}

makeAProduct('R2-D2 Suitcase', './img/bag.jpg');
makeAProduct('Banana Slicer', './img/banana.jpg');
makeAProduct('TP Media Stand', './img/bathroom.jpg');
makeAProduct('Open Toe Boots', './img/boots.jpg');
makeAProduct('Breakfast Oven', './img/breakfast.jpg');
makeAProduct('Bubble gum Chair', './img/chair.jpg');
makeAProduct('Cthulhu Statue', './img/cthulhu.jpg');
makeAProduct('Dog Duck Bill', './img/dog-duck.jpg');
makeAProduct('Dragon Meat', './img/dragon.jpg');
makeAProduct('Pen-Utinsil', './img/pen.jpg');
makeAProduct('Pet Sweep', './img/pet-sweep.jpg');
makeAProduct('Pizza Scissors', './img/scissors.jpg');
makeAProduct('Shark Bag', './img/shark.jpg');
makeAProduct('Baby-Broomer', './img/sweep.jpg');
makeAProduct('Tauntaun Bag', './img/tauntaun.jpg');
makeAProduct('Unicorn Meat', './img/unicorn.jpg');
makeAProduct('Water Can', './img/water-can.jpg');
makeAProduct('Wine Glass', './img/wine-glass.jpg');



