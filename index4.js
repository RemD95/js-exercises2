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

/*  */



/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/
/*  */
/*-----------------------------------------------------*/