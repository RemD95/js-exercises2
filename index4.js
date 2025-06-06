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
elemCar.innerText = carName;

elemButton.addEventListener("click", function () {
    const carName = prompt("type here your dream car model:")
    localStorage.setItem("my_dream_car", carName)
    elemCar.innerText = carName
})
console.log(carName);

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
/*  */
/*-----------------------------------------------------*/