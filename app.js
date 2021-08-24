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
}

leftProduct.renderSingleProduct(leftImageElem);
centerProduct.renderSingleProduct(centerImageElem);
rightProduct.renderSingleProduct(rightImageElem);


//Listeners----//


//

