const div = document.getElementById('container')

let momosPrice = Number(localStorage.getItem("Price_momos")) || 0;
let chowminPrice = Number(localStorage.getItem("Price_chowmin")) || 0;
let friesPrice = Number(localStorage.getItem("Price_fries")) || 0;
let pizzaPrice = Number(localStorage.getItem("Price_pizza")) || 0;
let burgerPrice = Number(localStorage.getItem("Price_burger")) || 0;
let thandaPrice = Number(localStorage.getItem("Price_thanda")) || 0;

let momosCount = Number(localStorage.getItem('momosCount'))
let chowminCount = Number(localStorage.getItem('chowminCount'))
let friesCount = Number(localStorage.getItem('friesCount'))
let pizzaCount = Number(localStorage.getItem('pizzaCount'))
let burgerCount = Number(localStorage.getItem('burgerCount'))
let coldDrinkCount = Number(localStorage.getItem('coldDrinkCount'))
document.getElementById('img').addEventListener('click',()=>localStorage.clear())

let total = momosPrice + chowminPrice + friesPrice + pizzaPrice + burgerPrice + thandaPrice

// Function to count special items based on prefix in localStorage
function countSpecialItems(prefix) {
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      count++;
    }
  }
  return count;
}

// Function to get items from localStorage based on prefix
function showItem(prefix) {
  let result = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith(prefix)) {
      const value = localStorage.getItem(key);
      result.push({ key: key, value: value });
    }
  }
  return result;
}

const showCountSalesItems = showItem('sales_'); // Items (names)
const showCountFoodItems = showItem('count_');  // Quantities
const itemPrice =showItem('Price_') 
const count =countSpecialItems('count_')
console.log(count);
console.log(itemPrice[1]);


// Displaying items and their quantities in the console
showCountSalesItems.forEach(i => {
  console.log(i.value);
});

showCountFoodItems.forEach(i => {
  console.log(i.value);
});

itemPrice.forEach(i=>{
  console.log(i.value);
  
})

// Create a table element
const table = document.createElement('table');
table.setAttribute('border', '1');
table.style.borderCollapse = 'collapse';

// Create a tbody for the table
const tbody = document.createElement('tbody');
const row = document.createElement('tr')

let quantity = document.createElement('th')
quantity.textContent= 'Quantity'
let item = document.createElement('th')
item.textContent='Items'
let price = document.createElement('th')
price.textContent='Price'

tbody.appendChild(quantity)
tbody.appendChild(item)
tbody.appendChild(price)

table.appendChild(tbody)
div.appendChild(table)

// Ensure localStorage has data and food items exist
if (localStorage.length !== 0 && showCountFoodItems.length !== 0 && count!==0) {
  if(showItem('sales_') && showItem('count_') && showItem('Price_')){
    
    for (let i = 0; i < showCountFoodItems.length; i++) {
      // Create a new row (tr)
      let tr = document.createElement('tr');
      
      // Create and append 'Item' cell (td)
      let item = document.createElement('td');
      item.textContent = showCountSalesItems[i] ? showCountSalesItems[i].value : exit();
    tr.appendChild(item);
    
    // Create and append 'Quantity' cell (td)
    let quantity = document.createElement('td');
    quantity.textContent = showCountFoodItems[i] ? showCountFoodItems[i].value : '0';
    tr.appendChild(quantity);

    let price = document.createElement('td');
    price.textContent = itemPrice[i] ? itemPrice[i].value : '0';
    tr.appendChild(price);


    
    // Append the row to the tbody
    tbody.appendChild(tr);
  }

  // Append the tbody to the table
  table.appendChild(tbody);

  // Append the table to a div in your HTML
  
  div.appendChild(table);
} else {
  div.innerHTML='<h3 style="color:red; ">No items found or localStorage is empty</h3>'
}
}

