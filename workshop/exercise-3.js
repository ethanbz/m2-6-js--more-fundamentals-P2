// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

console.log(mostPopularFood = mostPopularFood.map(food => {
  return food + ` (${mostPopularFood.indexOf(food)+1})`;
}).sort());



let orderedFood = [];
while (orderedFood.length < mostPopularFood.length) {
  let food = mostPopularFood[0];
  mostPopularFood.forEach(item => {
    if (food > item) food=item;
  });
  orderedFood.push(mostPopularFood.splice(mostPopularFood.indexOf(food)));
}
console.log(orderedFood);