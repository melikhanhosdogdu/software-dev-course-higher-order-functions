const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

function filterProducts(arr, callback) {
  return arr.filter(callback);
}

const uppercasedNames = products.map(p => p.name.toUpperCase());

function applyDiscount(discountPercent) {
  return function(product) {
    return { ...product, price: product.price - (product.price * discountPercent / 100) };
  };
}

const discountedProducts = products.map(applyDiscount(10));

const totalValueInStock = products.reduce((total, p) => {
  return p.inStock ? total + p.price : total;
}, 0);

console.log("Filtered products:", filterProducts(products, p => p.inStock));
console.log("Uppercased names:", uppercasedNames);
console.log("Discounted products:", discountedProducts);
console.log("Total value in stock:", totalValueInStock);
