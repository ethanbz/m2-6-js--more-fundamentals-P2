// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
const createRecommendations = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let arr = [];
  for (i=0;i<keys.length;i++) {
    arr.push(`With ${keys[i]}, it is best to have ${values[i]}`);
  }
  return arr;
}

// printRecommendations function
const printRecommendations = (arr) => {
  console.log(arr);
}
// function call (done)
printRecommendations(createRecommendations(foodPairings));
