// "use strict";



// /* let number = 5;
// const leftBorderWith = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// console.log(names)
// var names = "Ivan";

// {
//     let result = 50;
// }
// console.log(result);

// //lesson 9

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth +' , длина: ' + vehicleBodyLength);

// ['fdfd', 'dsfg', 'dfgg'].map()

// //request

// data
// response

// //snake_case
// //UPPER_SNAKE_CASE
// //Kebab-case
// //PascalCase

// let COLOR_RED = '#F00';

// let userName = "John";
// let numbers = 25;
//  numbers = 24;
// console.log(numbers);
//  */
// //Lesson 10
// //number
// let numberu = 4.6;

// console.log(4/0);
// console.log('string'*9);

// //string

// const persone = `Alex`;

// //bool

// const bool = true;
//       false;

//     //null
    
//     console.log(something);

//     let und;
//     console.log(und);

//    // object
//    const obj ={
//     name: "John",
//     age: 25,
//     isMarried:false
//    };

//    console.log(obj.name);
//    console.log(obj ["age"]);

//    //masive array



//    let arr = ['plum.png', 'orange.jpg', 'apple.bmp', [],{}];
//    console.log(arr[1]);


//    const array = ['a', 'b', 'c'];

// array[10]= '3456';
// console.log(array);
// console.log(array[10]);
// const arrobj= {
//     0: 'a',
//     1:'b',
//     2: 'c'
//     abcd: {
//         df:[{},{}],
//         def{}
//     }
// };

// const b = 'b';
// //создание доп свойства
// //arrobj.b = '1234';
// arrobj[b] = '1234';
//    //console.log(array[1]);
//    console.log(arrobj['b']);
//    console.log(arrobj.b);
//    //const object= {a: 1, b: 2};

//    const obect = {
//     Anna: 500,
//     'Alice': 800
//    };

//Lesson 12

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);


const answers =[];

answers[0] = prompt("как ваше имя","");
answers[1] = prompt("как ваше фамилия","");
answers[2] = prompt("Сколько вам лет","");

//document.write(answers);

console.log(typeof(answers));

//lesson 13 интерполяция

const category = 'toys';
//console.log('https://someurl.com/' + category);
console.log(`https://someurl.com/${category}/5` );

const user = 'Denys';
alert(`Привет, ${user}`);

//14 lesson Операторы

//конкотинация сложение строк +

console.log('arr' + "- object");
// унарный + + который ставится перед чем то

let incr = 10,
decr =10;

//incr ++; //увеличение на единицу  постфиксная форма записи сначало возвращает старое значение
//decr --; //уменьшение на единицу

// ++incr;
// --decr; //префиксная форма записи

console.log(incr++);
console.log(decr--);

//  % возвращает  остаток от деления двух чисел

 console.log(5%2);

 // = если один раз используется это присваивание
//== сравнение
// строгое сравнение ===

console.log(2*4 == 8); //сравниваем по значению

console.log(2*4 === '8');

//&& оператор и (два или больше являются правдивыми выражениями тогда true)
//|| оператор или (один из вариантов будет правдивым тогда true) если два false то false

const isChecked = false,
//isClose = true;
isClose = false;

//console.log(isChecked && isClose);

//console.log(isChecked || isClose);

//! знак отрицания возвращает обратное значение

console.log(isChecked || !isClose);

// порядок выполнения операторов

console.log(2+2 * 2 === 8);
console.log(2+2 * 2 != 8); //не равен 8 тру
console.log(2+2 * 2 !== 8);
console.log(2+2 * 2 != '6'); //сравнение по типу, 6 равно 6 
console.log(2+2 * 2 !== '6'); 6 //является числовым типом данным а второе в виде строки
//git status\