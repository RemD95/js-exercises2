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
gestioneErrori();
/*-----------------------------------------------------*/

/* uso di finally per eseguire codice indipendentemente dal risultato */
function eseguiOperazione() {
    try {
        let risultato = operazioneNonDefinita()
        console.log("Risultato:", risultato);

    } catch (errore) {
        console.error("Si è verificato un errore:", errore.message);

    } finally {
        console.log("Operazione completata, indipendentemente dal risultato.");
    }
}

eseguiOperazione();

/*-----------------------------------------------------*/
/* funzione di base con callback */
function baseCallback(a, b, callback) {
    const somma = a + b;
    console.log("risultato:", somma);
    callback();
}

/*-----------------------------------------------------*/

/* funzione con callback e passaggio di parametri */
function baseCallback2(a, b, callback) {
    const somma = a + b;
    console.log("risultato:", somma);
    callback(somma);
}
/*-----------------------------------------------------*/

/* callback annidati */
function somma(a, b, callback) {
    const somma = a + b;
    console.log("risultato:", somma);
    callback(somma);
}
function moltiplicazione(numb) {
    const moltiplicazione = numb * 2;
    console.log(moltiplicazione);
}
somma(2, 4, moltiplicazione);
/*-----------------------------------------------------*/

/* creare una promessa semplice */
function secondsWait() {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("qualcosa è andato storto!")
            } else {
                resolve("OK");
            }
        }, 2000);
    })
}

secondsWait().then(message => {
    console.log(message);
})
    .catch(error => {
        console.error("ERRORE:", error)
    }).finally(() => {
        console.log("oprezione conclusa ");
    })

/*-----------------------------------------------------*/

/* gestione di una promessa con catch */
// modificato ex precedente
/*-----------------------------------------------------*/
/* promessa con finally */
// modificato ex precedente
/*-----------------------------------------------------*/

/* catena di promesse semplici */
function chainProm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
}

chainProm()
    .then(perDue => {
        const risultato1 = perDue * 2
        console.log("numero moltiplicato per due:" + risultato1);
        return risultato1; s
    }).then(piùTre => {
        const risultato2 = piùTre + 3
        console.log("risultato finale:" + risultato2);
    });
/*-----------------------------------------------------*/
/* catena di promesse con condizioni */
function chainProm2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        }, 1000)
    })
}

chainProm2()
    .then(numm => {
        if (numm / 2 === 0) {
            console.log("numero pari");
            return numm
        }
    }).then(numm => {
        if (numm / 2 !== 0)
            console.log("numero dispari");
    })
/*-----------------------------------------------------*/

/* catena di promesse con gestione di errori */
function errorProm() {
    return new Promise((resolve, reject) => {
        let valoreCasuale = Math.random() * 10;
        if (valoreCasuale >= 5) {
            resolve(valoreCasuale)
        } else {
            reject("valore troppo basso")
        }
    })
}

errorProm()
    .then(value => {
        console.log("il valore è:", value);
    })
    .catch(errore => {
        console.error("Errore:", errore);
    });
/*-----------------------------------------------------*/

/* gestione degli errori con catch */
function catchErr() {
    return new Promise((reject) => {
        reject("ERRORE")
    })
}
catchErr()
    .catch(errore => {
        console.error("Riprovare:", errore);
    })
/*-----------------------------------------------------*/

/* gestione degli errori con catch */
function thenCatchErr() {
    return new Promise((resolve, reject, booleano) => {
        let booleano
        if (booleano = true) {
            resolve("ON")
        } else {
            reject("OFF")
        }
    })
}
thenCatchErr()
    .then(bool => {
        console.log(bool);
    })
    .catch(errore => {
        console.error(errore);
    });
/*-----------------------------------------------------*/
