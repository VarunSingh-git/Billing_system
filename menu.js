gsap.from("h4", {
    y: 30,
    opacity: 0,
    duration: 2,
    delay: .3,
})

let momos = document.getElementById("momosBtn");
let chowmin = document.getElementById("chowminBtn");
let fries = document.getElementById("friesBtn");
let burger = document.getElementById("burgerBtn");
let pizza = document.getElementById("pizzaBtn");
let thanda = document.getElementById("thandaBtn");
let h1 = document.getElementById("h1");
let list = document.getElementById("list");
let count = document.getElementById("count")
let box = document.getElementById("box")


let momosLi = document.createElement('li')
let momosTxtNode = document.createTextNode('Momos')

let chowminLi = document.createElement('li')
let chowminTxtNode = document.createTextNode('Chowmin')

let friesLi = document.createElement('li')
let friesTxtNode = document.createTextNode('Fries')

let burgerLi = document.createElement('li')
let burgerTxtNode = document.createTextNode('Burger')

let pizzaLi = document.createElement('li')
let pizzaTxtNode = document.createTextNode('Pizza')

let thandaLi = document.createElement('li')
let thandaTxtNode = document.createTextNode('Cold Drink')


const momosPrice = 20;
const chowminPrice = 20;
const friesPrice = 30;
const burgerPrice = 50;
const pizzaPrice = 149;
const thandaPrice = 100;



momos.addEventListener('click', () => {
    momosLi.id = "momosList"
    momosLi.className = "myProduct"
    momosLi.appendChild(momosTxtNode);
    list.appendChild(momosLi);


    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "momosRmvBtn";
    newBtn.appendChild(newBtnImg);

    let minusImg = document.createElement('img')
    minusImg.id = "momosMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "momosPlusId";
    plusImg.src = 'plus.png';

    momosLi.appendChild(newBtn)
    momosLi.appendChild(minusImg)
    momosLi.appendChild(plusImg)



    momos.disabled = true;

    let m = 0;

    let divForCount = document.createElement('div')
    divForCount.id = "momoCount"
    let divForTxt = document.createTextNode(`${m}`)
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("momosPlusId").addEventListener("click", () => {
        m++
        let momosFinalRate = m * momosPrice
        localStorage.setItem("momosPrice", momosFinalRate)
        let Count = document.getElementById("momoCount");
        Count.textContent = m;
    })
    document.getElementById("momosMinusId").addEventListener("click", () => {
        if (m > 0 || m !== 0) {
            m--
            let Count = document.getElementById("momoCount");
            let momosPriceFromLocalStore = localStorage.getItem("momosPrice")
            let momosFinalRate = momosPriceFromLocalStore - momosPrice
            localStorage.setItem("momosPrice", momosFinalRate)
            Count.textContent = m;
        }
    })
    document.getElementById("momosRmvBtn").addEventListener("click", () => {
        momosLi.removeChild(momosTxtNode)
        momosLi.removeChild(minusImg)
        momosLi.removeChild(plusImg)
        momosLi.removeChild(newBtn)
        count.removeChild(divForCount)
        momosLi.remove();
        localStorage.removeItem("momosPrice")
        momos.disabled = false;
    })
})


chowmin.addEventListener('click', () => {
    chowminLi.id = "chowminList"
    chowminLi.className = "myProduct"
    chowminLi.appendChild(chowminTxtNode);
    list.appendChild(chowminLi);

    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "chowminRmvBtn";
    newBtn.appendChild(newBtnImg);


    let minusImg = document.createElement('img')
    minusImg.id = "chowminMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "chowminPlusId";
    plusImg.src = 'plus.png';

    chowminLi.appendChild(newBtn)
    chowminLi.appendChild(minusImg)
    chowminLi.appendChild(plusImg)

    chowmin.disabled = true;
    let c = 0;

    let divForCount = document.createElement('div')
    let divForTxt = document.createTextNode(`${c}`)
    divForCount.id = "chowminCount"
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("chowminPlusId").addEventListener("click", () => {
        c++
        let chowminFinalRate = c * chowminPrice
        localStorage.setItem("chowminPrice", chowminFinalRate)
        let Count = document.getElementById("chowminCount");
        Count.textContent = c;
    })
    document.getElementById("chowminMinusId").addEventListener("click", () => {
        if (c > 0 || c !== 0) {
            c--
            let chowminPriceFromLocalStore = localStorage.getItem("chowminPrice")
            let chowminFinalRate = chowminPriceFromLocalStore - chowminPrice
            localStorage.setItem("chowminPrice", chowminFinalRate)
            let Count = document.getElementById("chowminCount");
            Count.textContent = c;
        }
    })

    document.getElementById("chowminRmvBtn").addEventListener("click", () => {
        chowminLi.removeChild(chowminTxtNode)
        chowminLi.removeChild(minusImg)
        chowminLi.removeChild(plusImg)
        chowminLi.removeChild(newBtn)
        count.removeChild(divForCount)
        chowminLi.remove();
        localStorage.removeItem("chowminPrice")
        chowmin.disabled = false;

    })
})


fries.addEventListener('click', () => {
    friesLi.id = "friesList"
    friesLi.className = "myProduct"
    friesLi.appendChild(friesTxtNode);
    list.appendChild(friesLi);

    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "friesRmvBtn";
    newBtn.appendChild(newBtnImg);


    let minusImg = document.createElement('img')
    minusImg.id = "friesMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "friesPlusId";
    plusImg.src = 'plus.png';

    friesLi.appendChild(newBtn)
    friesLi.appendChild(minusImg)
    friesLi.appendChild(plusImg)

    fries.disabled = true;

    let f = 0;
    let divForCount = document.createElement('div')
    let divForTxt = document.createTextNode(`${f}`)
    divForCount.id = "friesCount"
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("friesPlusId").addEventListener("click", () => {
        f++
        let friesFinalRate = f * friesPrice
        localStorage.setItem("friesPrice", friesFinalRate)
        let Count = document.getElementById("friesCount");
        Count.textContent = f;
    })
    document.getElementById("friesMinusId").addEventListener("click", () => {
        if (f > 0 || f !== 0) {
            f--
            let friesPriceFromLocalStore = localStorage.getItem("friesPrice")
            let friesFinalRate = friesPriceFromLocalStore - friesPrice
            localStorage.setItem("friesPrice", friesFinalRate)
            let Count = document.getElementById("friesCount");
            Count.textContent = f;
        }
    })

    document.getElementById("friesRmvBtn").addEventListener("click", () => {
        friesLi.removeChild(friesTxtNode)
        friesLi.removeChild(minusImg)
        friesLi.removeChild(plusImg)
        friesLi.removeChild(newBtn)
        count.removeChild(divForCount)
        friesLi.remove();
        localStorage.removeItem("friesPrice")
        fries.disabled = false;
    })
})


burger.addEventListener('click', () => {
    burgerLi.id = "burgerList"
    burgerLi.className = "myProduct"
    burgerLi.appendChild(burgerTxtNode);
    list.appendChild(burgerLi);

    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "burgerRmvBtn";
    newBtn.appendChild(newBtnImg);


    let newImgDiv = document.createElement('div');
    newImgDiv.id = "imgDiv"

    let minusImg = document.createElement('img')
    minusImg.id = "burgerMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "burgerPlusId";
    plusImg.src = 'plus.png';

    burgerLi.appendChild(newBtn)
    burgerLi.appendChild(minusImg)
    burgerLi.appendChild(plusImg)

    burger.disabled = true;

    let b = 0;
    let divForCount = document.createElement('div')
    let divForTxt = document.createTextNode(`${b}`)
    divForCount.id = "burgerCount"
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("burgerPlusId").addEventListener("click", () => {
        b++
        let burgerFinalRate = b * burgerPrice
        localStorage.setItem("burgerPrice", burgerFinalRate)
        let Count = document.getElementById("burgerCount");
        Count.textContent = b;
    })
    document.getElementById("burgerMinusId").addEventListener("click", () => {
        if (b > 0 || b !== 0) {
            b--
            let burgerPriceFromLocalStore = localStorage.getItem("burgerPrice")
            let burgerFinalRate = burgerPriceFromLocalStore - burgerPrice
            localStorage.setItem("burgerPrice", burgerFinalRate)
            let Count = document.getElementById("burgerCount");
            Count.textContent = b;
        }
    })
    document.getElementById("burgerRmvBtn").addEventListener("click", () => {
        burgerLi.removeChild(burgerTxtNode)
        burgerLi.removeChild(minusImg)
        burgerLi.removeChild(plusImg)
        burgerLi.removeChild(newBtn)
        count.removeChild(divForCount)
        burgerLi.remove();
        localStorage.removeItem("burgerPrice")
        burger.disabled = false;
    })
})


pizza.addEventListener('click', () => {
    pizzaLi.id = "pizzaList"
    pizzaLi.className = "myProduct"
    pizzaLi.appendChild(pizzaTxtNode);
    list.appendChild(pizzaLi);

    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "pizzaRmvBtn";
    newBtn.appendChild(newBtnImg);


    let newImgDiv = document.createElement('div');
    newImgDiv.id = "imgDiv"

    let minusImg = document.createElement('img')
    minusImg.id = "pizzaMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "pizzaPlusId";
    plusImg.src = 'plus.png';

    pizzaLi.appendChild(newBtn)
    pizzaLi.appendChild(minusImg)
    pizzaLi.appendChild(plusImg)

    pizza.disabled = true;

    let p = 0;
    let divForCount = document.createElement('div')
    let divForTxt = document.createTextNode(`${p}`)
    divForCount.id = "pizzaCount"
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("pizzaPlusId").addEventListener("click", () => {
        p++
        let pizzaFinalRate = p * pizzaPrice
        localStorage.setItem("pizzaPrice", pizzaFinalRate)
        let Count = document.getElementById("pizzaCount");
        Count.textContent = p;
    })
    document.getElementById("pizzaMinusId").addEventListener("click", () => {
        if (p > 0 || p !== 0) {
            p--
            let pizzaPriceFromLocalStore = localStorage.getItem("pizzaPrice")
            let pizzaFinalRate = pizzaPriceFromLocalStore - pizzaPrice
            localStorage.setItem("pizzaPrice", pizzaFinalRate)
            let Count = document.getElementById("pizzaCount");
            Count.innerText = p;
        }
    })

    document.getElementById("pizzaRmvBtn").addEventListener("click", () => {
        pizzaLi.removeChild(pizzaTxtNode)
        pizzaLi.removeChild(minusImg)
        pizzaLi.removeChild(plusImg)
        pizzaLi.removeChild(newBtn)
        count.removeChild(divForCount)
        pizzaLi.remove();
        localStorage.removeItem("pizzaPrice")
        pizza.disabled = false;
    })
})


thanda.addEventListener('click', () => {
    thandaLi.id = "thandaList"
    thandaLi.className = "myProduct"
    thandaLi.appendChild(thandaTxtNode);
    list.appendChild(thandaLi);

    let newBtnImg = document.createElement("img")
    newBtnImg.id = "newBtnImg"
    newBtnImg.src = "cross.png";

    let newBtn = document.createElement('button')
    newBtn.id = "thandaRmvBtn";
    newBtn.appendChild(newBtnImg);


    let newImgDiv = document.createElement('div');
    newImgDiv.id = "imgDiv"

    let minusImg = document.createElement('img')
    minusImg.id = "thandaMinusId";
    minusImg.src = 'minus.png'

    let plusImg = document.createElement('img')
    plusImg.id = "thandaPlusId";
    plusImg.src = 'plus.png';

    thandaLi.appendChild(newBtn)
    thandaLi.appendChild(minusImg)
    thandaLi.appendChild(plusImg)

    thanda.disabled = true;

    let t = 0;

    let divForCount = document.createElement('div')
    let divForTxt = document.createTextNode(`${t}`)
    divForCount.id = "thandaCount"
    divForCount.appendChild(divForTxt);
    count.appendChild(divForCount)

    document.getElementById("thandaPlusId").addEventListener("click", () => {
        t++
        let thandaFinalRate = t * thandaPrice
        localStorage.setItem("thandaPrice", thandaFinalRate)
        let Count = document.getElementById("thandaCount");
        Count.textContent = t;
    })
    document.getElementById("thandaMinusId").addEventListener("click", () => {
        if (t > 0 || t !== 0) {
            t--
            let thandaPriceFromLocalStore = localStorage.getItem("thandaPrice")
            let thandaFinalRate = thandaPriceFromLocalStore - thandaPrice
            localStorage.setItem("thandaPrice", thandaFinalRate)
            let Count = document.getElementById("thandaCount");
            Count.innerText = t;
        }
    })

    document.getElementById("thandaRmvBtn").addEventListener("click", () => {
        thandaLi.removeChild(thandaTxtNode)
        thandaLi.removeChild(minusImg)
        thandaLi.removeChild(plusImg)
        thandaLi.removeChild(newBtn)
        count.removeChild(divForCount)
        thandaLi.remove();
        thanda.disabled = false;
        localStorage.removeItem("thandaPrice")

    })
})

let storageClrBtn = document.getElementById("btnForClearStorage")
storageClrBtn.addEventListener("click", () => {
    document.getElementById("doneBtn").disabled = false;
    document.getElementById("doneBtn").style.cursor = "pointer";
    location.reload();
    localStorage.clear()
})
document.getElementById("doneBtn").addEventListener("click", () => {
    let final = document.createElement('p');
    final.id = 'finalBill';


    let existingAlert = document.getElementById("alert");
    if (existingAlert) {
        existingAlert.remove();
    }

    let existingBill = document.getElementById("finalBill");
    if (existingBill) {
        existingBill.remove();
    }

    let momos = Number(localStorage.getItem("momosPrice")) || 0;
    let chowmin = Number(localStorage.getItem("chowminPrice")) || 0;
    let fries = Number(localStorage.getItem("friesPrice")) || 0;
    let pizza = Number(localStorage.getItem("pizzaPrice")) || 0;
    let burger = Number(localStorage.getItem("burgerPrice")) || 0;
    let thanda = Number(localStorage.getItem("thandaPrice")) || 0;

    let totalAmount = momos + chowmin + fries + pizza + burger + thanda;
    if (totalAmount == 0) {
        let sadTxtNode = document.createTextNode('Please Buy Somthing🥺🙂....!!');
        final.appendChild(sadTxtNode);
        document.getElementById("body").appendChild(final);
        return;
    }

    let bilTxtNode = document.createTextNode('You have to pay ₹' + totalAmount + '.');
    let br = document.createElement('br');
    let happyTxtNode = document.createTextNode('Thanks for coming!😊❤️');
    final.appendChild(bilTxtNode);
    final.appendChild(br);
    final.appendChild(happyTxtNode);

    document.getElementById("body").appendChild(final);

    gsap.to(final, { duration: 1, opacity: 1, y: -20 });

    if (!document.getElementById("alert")) {
        let alert = document.createElement('h3');
        alert.id = "alert";
        let alertTxtNode = document.createTextNode('You Should clear your storage before use this app :)');
        alert.appendChild(alertTxtNode);
        document.getElementById("body").appendChild(alert);
        gsap.from('#alert', {
            y: 20,
            duration: 1,
            delay: 1,
            opacity: 0,
            color: "#dbdbdb"
        })
    }
    return;
});
