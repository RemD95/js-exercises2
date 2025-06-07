/* gestire i cookies */

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + 48 * 60 * 60 * 1000);
    let expiration = "expires" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expiration + "; path =/";
}
setCookie("My-Data", "lorem");
console.log("Cookies:", document.cookie);

/*-----------------------------------------------------*/

/* utilizzare il localStorage */

const elemButton = document.getElementById("set-button")
const elemCar = document.getElementById("Car")

const carName = localStorage.getItem("my_dream_car") || "";
console.log("valore recuperato :", carName);
elemCar.innerText = carName;
const carNameRemoved = localStorage.removeItem("my_dream_car")
console.log("valore rimosso :", carNameRemoved);


elemButton.addEventListener("click", function () {
    const carName = prompt("type here your dream car model:")
    localStorage.setItem("my_dream_car", carName)
    console.log("Valore salvato:", carName);
    elemCar.innerText = carName
})

/*-----------------------------------------------------*/

/* utilizzare il sessionStorage */
/*
const carName = sessionStorage.getItem("my_dream_car") || "";
console.log("valore recuperato :", carName);
elemCar.innerText = carName;
const carNameRemoved = sessionStorage.removeItem("my_dream_car")
console.log("valore rimosso :", carNameRemoved);


elemButton.addEventListener("click", function () {
    const carName = prompt("type here your dream car model:")
    sessionStorage.setItem("my_dream_car", carName)
    console.log("Valore salvato:", carName);
    elemCar.innerText = carName
})
                                                        */
/*-----------------------------------------------------*/

/* utilizzare  localStorage e sessionStorage insieme */

const localSet = localStorage.setItem("User L", "giovanni");
const sessionSet = sessionStorage.setItem("User S", "giacomo");
console.log("Valore salvato in local:", localSet);
console.log("Valore salvato in session:", sessionSet);

const localGet = localStorage.getItem("User L", "giovanni");
const sessionGet = sessionStorage.getItem("User S", "giacomo");
console.log("Valore recuperato in local:", localGet);
console.log("Valore recuperato in session:", sessionGet);

const localRemove = localStorage.removeItem("User L", "giovanni");
const sessionRemove = sessionStorage.removeItem("User S", "giacomo");
console.log("Valore rimosso in local:", localRemove);
console.log("Valore rimosso in session:", sessionRemove);

/*-----------------------------------------------------*/

/* oggetto document */
console.log("Questo è il mio DOM:", document);

/*-----------------------------------------------------*/

/* getElementById */
const elementById = document.getElementById("button")
/*-----------------------------------------------------*/

/* querySelector */
const querySelector = document.querySelector("#Lorem");
/*-----------------------------------------------------*/

/* modificare il testo di una pragrafo */

const idkP = document.querySelector("#idk")
idkP.innerText = "THIS IS THE TEXT TYPED THROUGH JS!!!"

/*-----------------------------------------------------*/

/* cambia lo stile */

idkP.style.cssText = `
background-color: red;
font-size: 22px;
`;

/*-----------------------------------------------------*/

/*  */
/*-----------------------------------------------------*/

/*  */
/*-----------------------------------------------------*/

/*  */
/*-----------------------------------------------------*/

/*  */
/*-----------------------------------------------------*/