let spanProductName = document.getElementById("productName")
let spanProductPrice = document.getElementById("productPrice")
let spanQuantity = document.getElementById("Quantity")

let raseedNo = document.getElementById("raseedNo")
let course = document.getElementById("course")


let fun = () => {
    let productName = localStorage.getItem('productName');
    let Price = localStorage.getItem('Price');
    let Quantity = localStorage.getItem('Quantity');

    if (productName && Price && Quantity) {
        spanProductName.textContent = productName;
        spanProductPrice.textContent = Price;
        spanQuantity.textContent = Quantity;
    }
}

let clrBtn = document.getElementById("clrBtn").addEventListener("click", () => {
    localStorage.clear();

    spanProductName.textContent = "No Data Found";
    spanProductPrice.textContent = "No Data Found";
    Quantity.textContent = "No Data Found";
})

document.getElementById("img").addEventListener("click", () => {
    window.location.href = "index.html"
})

window.addEventListener('DOMContentLoaded', fun)
window.onload = () => {
    fun()
}