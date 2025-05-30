/* interrompere setInterval con clearInterval */
const id = setInterval(() => {
    console.log("ciao");
}, 1000)

setTimeout(() => {
    clearInterval(id);
    console.log("fine intervallo");
}, 5000)
/*-----------------------------------------------------*/

/* gestione di un errore semplice  */
function divisone(num, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Divisone per zero impossibile");
        }
        const risultato = num / num2;
        console.log("risultato:", risultato)
    } catch (error) {
        console.log("errore:", error.message);
    }
}
/*-----------------------------------------------------*/

/* gestione di più tipi di errori */
function gestioneErrori(input) {
    try {
        if (typeof input !== "string") {
            throw new Error("possono essere inserite solo dati di tipo stringa");
        }
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("errore di tipo:", error.message);
        } else {
            console.error("errore generico:", error.message);
        }
    }
}
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