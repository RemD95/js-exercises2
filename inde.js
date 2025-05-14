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

