/* estrazione elementi base */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let [pos1, , pos3] = numbers;
console.log(pos1);
console.log(pos3);

/*-------------------------*/
/*saltare gli elementi durante il destructuring */

//modificato ex precedente

/*-------------------------*/
/* destructuring con valori predefiniti */

let numbers1 = [0, 1, 2];

let [val1, val2, val3, val4 = 3, val5 = 4] = numbers1;

console.log(val1, val2, val3, val4, val5);

/*-------------------------*/
/* estrazione propietà di base  */

const person = {
    nome: "mario",
    cognome: "rossi",
    età: 19,
    occupazione: "studente"
};
let { nome: name, cognome: surname } = person;
console.log(name, surname);

/*-------------------------*/
/* destructuring con nomi di variabili diverse */

//modificato ex precedente

/*-------------------------*/
/* destructuring con valori predefiniti 2 */

const person2 = {
    nome: "daniele",
    cognome: "grandi",
};
let { nome, cognome, età = "N.S.", occupazione = "N.S." } = person2;
console.log(nome, cognome, età, occupazione);

/*-------------------------*/
/* spread operator */

const numbers2 = [0, 1, 2, 3, 4, 5];

const newNumbers2 = [...numbers2];

newNumbers2.push(6, 7, 8, 9);
console.log(numbers2);
console.log(newNumbers2);

/*-------------------------*/
/* UNIONE DI DUE ARRAY */
const numbers3 = [0, 1, 2, 3, 4, 5];
const numbers4 = [6, 7, 8, 9, 10];
const fullKey = [...numbers3];

fullKey.push(numbers4);
console.log(fullKey);

/*-------------------------*/
/* COPIA DI UN OGGETTO CON PROPIETà AGGIUNTIVE */
const person3 = {
    nome: "franco",
    cognome: "alberto",
};
const città = { ...person3, città: "roma" };
console.log(person3);
console.log(città);
/*-------------------------*/

/* DESTRUCTURING ARRAY CON REST OPERATOR */
let [p1] = numbers4;
let [, p2] = numbers4;
let [, , ...restanti] = numbers4;

console.log(p1);
console.log(p2);
console.log(restanti);
/*-------------------------*/

/* DESTRUCTURING OGGETTO CON REST OPERATOR */
const person4 = {
    nome1: "mario",
    cognome1: "rossi",
    età1: 19,
    occupazione1: "studente"
};
let { nome1 } = person4;
let { cognome1 } = person4;
let { ...altriDati } = person4;
console.log(nome1);
console.log(cognome1);
console.log(altriDati);
/*-------------------------*/

/* CONVERSIONE DI UN OGGETTO IN UNA STRINGA JSON */
const object = {
    color: "blue",
    shape: "squared",
}
const objJson = JSON.stringify(object)
console.log("oggetto modifcato con Json:" + objJson);
/*-------------------------*/

/* COVNERSIONE DI UNA STRINGA JSON IN UN OGGETTO */
const oggettoJson = "{'color: red, shape: triangular'}"
const oggettoReale = JSON.parse(oggettoJson);

console.log(oggettoReale);
/*-------------------------*/
/*  */



/*-------------------------*/
/* spread operator */
const numb = [1, 2, 3, 4, 5];

const newNumbers = [...numb];

newnumbers.push(200);


/*-------------------------*/


