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