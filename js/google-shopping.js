var data = require('../products.json');

// Write your solutions below

// console.log(data.items);

var first = data.items.filter(function(e) {
  return (e.kind === "shopping#product");
});
console.log("Question 1");
console.log(first.length);
console.log("--------------------");

console.log("Question 2");
var second = data.items.filter(function(e) {
  if (e.product.inventories[0].availability === "backorder") {
    var secondTitle = e.product.title;
    console.log(secondTitle);
  }
});
console.log("--------------------");

console.log("Question 3");
var thirdCount;
var third = data.items.filter(function(e) {
  if (e.product.images.length > 1) {
    var thirdTitle = e.product.title;
    console.log(thirdTitle);
  }
});
console.log("--------------------");

console.log("Question 4");
var fourth = data.items.filter(function(e) {
  if (e.product.brand.toLowerCase() === "canon") {
    var fourthTitle = e.product.title;
    console.log(fourthTitle);
  }
});
console.log("--------------------");

console.log("Question 5");
var fifth = data.items.filter(function(e) {
  if (e.product.brand.toLowerCase() === "canon" && e.product.author.name.includes("eBay") === true) {
    var fifthTitle = e.product.title;
    console.log(fifthTitle);
  }
});
console.log("--------------------");

console.log("Question 6");
var sixth = data.items.forEach(function(e) {
  var brand = e.product.brand;
  var price = e.product.inventories[0].price;
  var image = e.product.images[0].link;
  console.log("Brand: " + brand + ", Price: $" + price + ", Image link: " + image);
});
