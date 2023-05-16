const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIng = document.querySelector('#ingredients');

let listIngItem = ingredients
  .map(ingredient => `<li class = "item">${ingredient}</li>`)
  .join('\n');

listIng.innerHTML = listIngItem;

console.log(listIng);
