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
let count =countSpecialItems('count_')
let itemPrice =showItem('Price_')
console.log(count);
console.log(itemPrice);


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
  if(showItem('sales_') && showItem('count_')){
    
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



// function countSpecialItems(prefix) {
  //   let count = 0;
  //   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     if (key.startsWith(prefix)) {
  //       count++;
  //     }
  //   }
  
  //   return count;
// }

// function showItem(prefix) {
//   let result = []
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     const keyValue = key.startsWith(prefix)
//     if (keyValue) {
//       const value = localStorage.getItem(key);
//       result.push({ value: value });
//     }
//   }
//   return result
// }
// const showCountSalesItems = showItem('sales_')
// const showCountFoodItems = showItem('count_')

// showCountSalesItems.forEach(i => {
//   console.log(i.value);
// })

// showCountFoodItems.forEach(i => {
//   console.log(i.value);
// })


// let count = countSpecialItems('count_')
// console.log(count);


// const table = document.createElement('table')
// table.setAttribute('border', '1');
// table.style.borderCollapse = 'collapse';

// const h = showCountFoodItems.forEach(i => i.value)
// const tbody = document.createElement('tbody');

// if (localStorage.length !== 0 || null || undefined) {
//   if (showCountFoodItems === 0 || null || undefined) {
//   }
//   else if (showCountFoodItems !== null || undefined) {
//     for (let i = 0; i < showCountFoodItems.length; i++) {
//       console.log('hi');

//       let tr = document.createElement('tr')

//       let item = document.createElement('td')
//       showCountSalesItems.forEach(i => {
//         item.textContent = i.value
        
//       })
//       tr.appendChild(item)

//       let quantity = document.createElement('td')
//       showCountFoodItems.forEach(i => {
//         quantity.textContent = i.value
//       })
//       tr.appendChild(quantity)
//       tbody.appendChild(tr)
//     }
//     table.appendChild(tbody)
//     div.appendChild(table)

//   }
// }
// }


//   else {
//     for (let i = 0; i < localStorage.getItem(value); i++) {


//       div.innerHTML = `
// <table style='border:1px solid black;'>
// <tr>
// <th>Items</th>
// <th>Quantity</th>
// <th>Price</th>
// </tr>

// <tr>
//     <td style='border:1px solid black;'>${localStorage.getItem(value)}</td>
//     <td style='border:1px solid black;'>* ${localStorage.getItem(value)}</td>
//     <td style='border:1px solid black;'> ${total}</td>
//     </tr>
//     `
//     }


// <tr>
// <td style='border:1px solid black;'>Chowmin</td>
// <td style='border:1px solid black;'>* ${localStorage.getItem('chowminCount')}</td>
// <td style='border:1px solid black;'>${chowmin}</td>
// </tr>

// <tr>
// <td style='border:1px solid black;'>French Fries </td>
// <td style='border:1px solid black;'>* ${localStorage.getItem('friesCount')}</td>
// <td style='border:1px solid black;'> ${fries}</td>
// </tr>

// <tr>
// <td style='border:1px solid black;'>Pizza</td>
// <td style='border:1px solid black;'>* ${localStorage.getItem('pizzaCount')}</td>
// <td style='border:1px solid black;'> ${pizza}</td>
// </tr>

// <tr>
// <td style='border:1px solid black;'>Burger</td>
// <td style='border:1px solid black;'>* ${localStorage.getItem('burgerCount')}</td>
// <td style='border:1px solid black;'> ${burger}</td>
// </tr>

// <tr>
// <td style='border:1px solid black;'>Cold Drink</td>
// <td style='border:1px solid black;'>* ${localStorage.getItem('coldDrinkCount')}</td>
// <td style='border:1px solid black;'>${thanda}</td>
// </tr>

// <tr>
// <td colspan='2' style='border:1px solid black;'>Total${total}</td>
// </tr>
// </table>
// `
//   }
// })

// let totalAmount = momos + chowmin + fries + pizza + burger + thanda;
// if (totalAmount == 0) {
//     let sadTxtNode = document.createTextNode('Please Buy Somthing🥺🙂....!!');
//     final.appendChild(sadTxtNode);
//     document.getElementById("body").appendChild(final);
//     return;
// }

// let bilTxtNode = document.createTextNode('You have to pay ₹' + totalAmount + '.');
// let br = document.createElement('br');
// let happyTxtNode = document.createTextNode('Thanks for coming!😊❤️');
// final.appendChild(bilTxtNode);
// final.appendChild(br);
// final.appendChild(happyTxtNode);

// document.getElementById("body").appendChild(final);

// gsap.to(final, { duration: 1, opacity: 1, y: -20 });

// if (!document.getElementById("alert")) {
//     let alert = document.createElement('h3');
//     alert.id = "alert";
//     let alertTxtNode = document.createTextNode('You Should clear your storage before use this app :)');
//     alert.appendChild(alertTxtNode);
//     document.getElementById("body").appendChild(alert);
//     gsap.from('#alert', {
//         y: 20,
//         duration: 1,
//         delay: 1,
//         opacity: 0,
//         color: "#dbdbdb"
//     })
// }
// return;
