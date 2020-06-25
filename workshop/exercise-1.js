// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  arr.splice(arr.indexOf(undefined));
  arr.unshift(first);
  arr.push(last);
  return arr;
};


const printList = (arr) => {
  arr.forEach(item => {
    console.log(`${arr.indexOf(item)+1}. ${item}`)
  });
}

printList(fixList(mostPopularFood, 'bean burritos', 'wings'));