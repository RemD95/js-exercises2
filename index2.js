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
const fullKey = [...numbers3, ...numbers4];

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

/* Funzione con parametri variabili */
function sum(...arr){
    console.log(arr);
    return arr.reduce((arr, curr) => acc + curr, 0)
}
sum(2, 4, 6, 8,);

/*-------------------------*/

/* DESTRUCTURING OGGETTO CON REST OPERATOR */
const person4 = {
  nome1: "mario",
  cognome1: "rossi",
  età1: 19,
  occupazione1: "studente"
};
let { nome1, cognome1, ...altriDati } = person4;
console.log(nome1);
console.log(cognome1);
console.log(altriDati);
/*-------------------------*/

/* CONVERSIONE DI UN OGGETTO IN UNA STRINGA JSON */
const object = {
  color: "blue",
  shape: "squared",
};
const objJson = JSON.stringify(object);
console.log("oggetto modifcato con Json:" + objJson);
/*-------------------------*/

/* COVNERSIONE DI UNA STRINGA JSON IN UN OGGETTO */
const oggettoJson = "{'color': 'red', 'shape': 'triangular'}"
const oggettoReale = JSON.parse(oggettoJson);

console.log(oggettoReale);
/*-------------------------*/
/* MANIPOLAZIONE DI DATI JSON */
const group1Json = [
  {
    "id": 1,
    "nome": "Giovanni",
    "email": "giovanni@example.com",
    "eta": 28,
    "attivo": true
  },
  {
    "id": 2,
    "nome": "Maria",
    "email": "maria@example.com",
    "eta": 34,
    "attivo": false
  },
  {
    "id": 3,
    "nome": "Luca",
    "email": "luca@example.com",
    "eta": 22,
    "attivo": true
  },
  {
    "id": 4,
    "nome": "Sara",
    "email": "sara@example.com",
    "eta": 25,
    "attivo": true
  }
];
const group1Reale = JSON.parse(group1Json);

console.log(group1Reale);

group1Reale.push({
  id: 5,
  nome: "remo",
  email: "remo@example.com",
  età: 29,
  attivo: false,
})
const group1Json2 = JSON.stringify(group1Reale);
/*-------------------------*/

/* STRINGA SEMPLICE CON TEMPLATE LITERALS */
const nome5 = "mario";
const cognome5 = "rossi";

const nomeCompleto = `${nome5} ${cognome5}`;
console.log(nomeCompleto);

/*-------------------------*/

/* STRINGA MULTILINEA CON TEMPLATE LITERALS */
const età5 = 52;
const città5 = "roma";

const infoGenerali = `Nome:${nome5} Cognome:${cognome5} Età:${età5} Città:${città5}`
/*-------------------------*/

/* funzione e template literals */
function person6(item) {
  return `Ciao, sono ${personEx.nome6} ${personEx.cognome6}, sono un ${personEx.professione6} ed ho ${personEx.età6} anni. `
};

const personEx = {
  nome6: "Hermes",
  cognome6: "Leandri",
  professione6: "cantautore",
  età6: 27,
};
const formatString = person6(personEx);
console.log(formatString);

/*-------------------------*/

/* utilizzare console.log */
const numero = 65;
const stringa = "V";
const array = ["#motorbike", "oldschool"];
const oggetto = {
  marca: "Moto-Guzzi",
  modello: "V65",
  anno: 1985
};

console.log(numero);
console.log(stringa);
console.log(array);
console.log(oggetto);

/*-------------------------*/
/* utilizzare console.log e console.warn */
const errorX = 5;
const errorY = 9;

  if (errorX === 5) {
    console.error("Errore:valore non valido")
  }if(errorX !== 5) {
    console.warn("everything is fine")
  }

/*-------------------------*/
/* utilizzare cnsole.table console.group */
console.table([
  {lunghezza: 12},
  {altezza: 12},
  {profondità:12}
]);
console.log("franco");
console.group();
console.log("alberto");
console.group();
console.log("giovanni");
console.group();
console.log("mario");
console.groupEnd;

/*-------------------------*/

/* spread operator */
/*const numb = [1, 2, 3, 4, 5];

const newNumbers = [...numb];

newnumbers.push(200);*/
/*-------------------------*/





