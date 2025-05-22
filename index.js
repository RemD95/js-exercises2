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
    aggiungiKm(km){
        this.#incrementaContatore;
    }
    mostraContatoreChiamate(){
        console.log("Il metodo verificaKm è stato chiamato ${this.#contatoreChiamate} volte.")
        return this.#contatoreChiamate ;
    }
    #incrementaContatore(){
      this.#contatoreChiamate++;  
    }
    get chilometraggio(){
        return this.mostraChilometraggio;
    }
    set chilometraggio(newKm){
        if(newKm >= this.chilometraggio){
            this.chilometraggio = newKm;
        }
    }
    static verificaIstanza(obj, classe){
        if(obj instanceof Automobile){
            document.write("true")
        }else{
            document.write("false")
        }
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

/* Camion */

class Camion extends Automobile{
    caricoMassimo = 0 ;
    constructor(marca, modello, anno, caricoMassimo){
        super(marca, modello, anno)
        this.caricoMassimo = caricoMassimo;
    }
    descrizione(){
       return "Hai scelto : ${this.marca} ${this.modello} anno: ${this.anno} portata masssima: ${thid.caricoMassimo} "
        return ""
    }
}

/* instance of */

let auto1 = new Automobile("Fiat", "punto", 1000);
let camion1 = new Camion("iveco", "iveco", 0, 5000);

if(auto1 instanceof Automobile){
    document.write("true")
}else{document.write("false")

}

if( camion1 instanceof Camion){
    document.write("true")
}else{
    document.write("false")
}