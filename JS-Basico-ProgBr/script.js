/* Para rodar o script com o Node.js, executar o comando no terminal:
    node script.js
    
*/

//alert("Hello World");

console.log("Olá Mundo");

//Estudo de Array, Multidimensional Array
let studentsData = [['Jack', 24], ['Sara', 23], ['Ali', 25]];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}

//For-in loop The for...in loop is used to iterate through the keys of an object.
//You can use for...in to iterate over an iterable such arrays and strings but you should avoid using for...in for iterables.
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

//For-of loop The for...of loop is used to iterate through the values of an iterable.
//The for...of loop cannot be used to iterate over an object.
// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}