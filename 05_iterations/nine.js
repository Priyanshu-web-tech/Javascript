// reduce
// used in concepts like shopping cart,finds sum of element of array
const myNums = [1, 2, 3, 100];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currval:${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 9999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay)