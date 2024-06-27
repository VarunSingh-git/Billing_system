let productName = document.getElementById("productName")
let Price = document.getElementById("Price")
let Quantity = document.getElementById("Quantity")
let btn = document.getElementById("btn");
let form = document.getElementById("form")
let h3 = document.getElementById("h3");
let s = document.getElementById("s");
let menu = document.getElementById("menuImg");

btn.addEventListener("click", () => {
    if (productName.value == "" || Price.value == "" || Quantity.value == "") {
        btn.disabled = true;
        btn.style.cursor = "no-drop";
        productName.style.borderColor = "red";
        Price.style.borderColor = "red";
        Quantity.style.borderColor="red"
        s.style.color = "red";
        s.innerText = "Provide Some Info."
    }
    else if (productName.value !== "" && Price.value !== "" && Quantity.value !== "") {
        btn.style.cursor = "pointer";
        btn.disabled = false;
    }
})

let inputFun = () => {
    if (productName.value == "" || Price.value == "" || Quantity.value == "") {
        btn.disabled = true;
        btn.style.cursor = "no-drop";
    }
    else if (productName.value !== "" || Price.value !== "" || Quantity.value !== "") {
        btn.style.cursor = "pointer";
        s.innerText = ""
        productName.style.borderColor = "green";
        Price.style.borderColor = "green";
        Quantity.style.borderColor = "green";
        btn.disabled = false;
    }
}

menu.addEventListener("click",()=>{
    window.location.href = "menu.html"
})
productName.addEventListener("input", inputFun)
Price.addEventListener("input", inputFun)
Quantity.addEventListener("input", inputFun)

document.getElementById("form").addEventListener("submit", () => {
    localStorage.setItem("productName", productName.value)
    localStorage.setItem("Price", Price.value)
    localStorage.setItem("Quantity", Quantity.value)
    window.location.href = 'box.html';
})