/* filter&find */
const students = [
    {nome: 'Ambrosio', grade:68},
    {nome: 'Fedain', grade:82},
    {nome: 'Lione', grade:57},
    {nome: 'Verti', grade:90},
];

const passedStudents = 
students.filter((item) => {
    return item.grade >= 60;
})

const failed = 
students.find((item) => {
    return item.grade < 60;
});
 console.log('Prommossi:', passedStudents);
 console.log('1° Bocciato:', failed);

/* reduce&sort */
const expenses = [25, 57, 12, 33, 9, 28];
const words = ["banana","apple","cherry","dates"];

 const totalexpense = expenses.reduce((acc, curr) => {
    return acc + curr
}, 0);

const alpha = words.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(totalexpense);
console.log(alpha);

/* counter */
function createCounter(array) {
let count = o ;
return{
    increment: function(){
        count += 1;
        return count;
    },
    decrement: function(){
        count -= 1;
        return count ;
    }
  }
}

/* automobile */
 class Automobile {
    marca = ""
    modello = ""
    anno = 0
    chilometraggio = 0;
    #contatoreChiamate = 0;
    constructor (marca, modello, anno) {
        this.marca = marca ;
        this.modello = modello ;
        this.anno = anno ;
        this.chilometraggio = chilometraggio;
        this.#contatoreChiamate = contatoreChiamate; 
    }
    descrizione(){
       return "Hai scelto : ${this.marca} ${this.modello} anno: ${this.anno} "
    }
    aggiungiChilometri(){
      this.chilometraggio += 1;  
    }
    mostraChilometraggio(){
      console.log(this.chilometraggio + "km");
    }
    #calcolaEtà(){
      const annoCorrente = new Date().getFullYear();
      return annoCorrente - this.anno;
    }
    mostraEtà(){
      const età = this.#calcolaEtà();
      console.log('Questa ${this.marca} ha ${età} anni')
    }
    _controllaChilometri(){
        if(chilometraggio > 100000){
            return console.log("Quest'auto supera i 100.000km !")
        }else{"quest'auto ha un chilometraggio nella norma !"}
    }
    verificaKm(){
        this.#contatoreChiamate++;
    }
    numeroChiamate(){
        console.log("Il metodo verificaKm è stato chiamato ${this.#contatoreChiamate} volte.")
        return this.#contatoreChiamate ;
    }
    #incrementaContatore(){
      this.#contatoreChiamate++;  
    }
}

class Electtrica extends Automobile {
    autonomia = 0;
    constructor (marca, modello, anno, autonomia){
        super(marca, modello, anno);
        this.autonomia = autonomia ;
    }
    descrizione(){
        return "Hai scelto : ${this.marca} ${this.modello} anno: ${this.anno} e puoi percorrere fino a ${this.autonomia}. "
    }
    ricarica(){
        this.autonomia += 1;
    }
}


Automobile.prototype.saluto = "Ciao, Salut , Hello, Servus."

/* metodo privato */

/* metodo porotetto */

/* Contatore Metodo */

/* Incrementa contatore */


