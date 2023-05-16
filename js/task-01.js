const listCategoryElement = document.querySelector('#categories');
console.log(`Number of categories:`, listCategoryElement.children.length);

const listItems = document.querySelectorAll('.item');
listItems.forEach(item => {
  const listItemName = item.querySelector('h2').textContent;
  const listItemsElement = item.querySelectorAll('li');
  console.log(`Category:`, listItemName);
  console.log(`Elements:`, listItemsElement.length);
});
