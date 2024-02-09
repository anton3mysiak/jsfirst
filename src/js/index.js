"use strict";

// let num = 3;
// let element;
// element = 'Body'
// alert(num);
// window.alert(element);
// var 

// const a = 3000;
// const b = 5000;
// console.log()

// let userName = 'John';
// let userNumber = 25;
// userNumber = 24;
// console.log(userName);
// console.log(userNumber);

// let firstNum = 4.4;
// // console.log(number + 5);

// typeof(number);
// console.log(typeof(firstNum));
// console.log(typeof("Hello"));

// let und;
// console.log(typeof(und));

// const man = { //object
//     name: 'Anton',
//     age: 26,
//     isMarried: false
// };
// console.log(man.age);

// let arr = ['Valeria', 1.5, false]
// console.log(arr[1]);

// let storeName = 'Rozetka';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Anton', 'Valeria', 'Alex'],
//     products: {
//         laptop: 100,
//         mouse: 30
//     },
//     isOpen: true
// }

// console.log(storeDescription.employees[1])


// const stockholm = {
//     budget: 1500000,
//     mainStreet: 'Vasagatan',
//     isBiggestCity: true,
//     bestHotels: {
//         scandic: 100,
//         blueLaguna: 150,
//         elite: 250,
//     }
// };

// let name1;
// let data = [1,'black', true, null, name1];

// alert('good!');
// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Скільки вам років?', '18')
// console.log(answer);

// const answers = [];
// answers[0] = prompt('Your Name?', '');
// answers[1] = prompt('Your age', '');
// answers[3] = prompt('Your weight?', '');

// console.log(answers);

// const user = 'Nataliia';
// alert(`Hello ${user}`);

// n = n+1 / n = n++  nt

// let numberOfFilms = prompt('Скільки фільмів ви вже подивилися?', '10');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const firstPerson = [];
//     firstPerson[0] = prompt('Один з останніх переглянутих фільмів?', '');
//     firstPerson[1] = prompt('На скільки оціните його?', '');


// const secondPerson [];
//     secondPerson[0] = prompt('Один з останніх переглянутих фільмів?', '');
//     secondPerson[1] = prompt('На скільки оціните його?', '');


// const movies = {
//     'Noone will save you': '9.2'
// };


let numberOfFilms = prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt('Один з останніх переглянутих фільмів?', '');
let b = prompt('На скільки оціните його?', '');
let c = prompt('Один з останніх переглянутих фільмів?', '');
let d = prompt('На скільки оціните його?', '');

personalMovieDB.movies[a]= b;  ЗАПАМЯТАТИ
personalMovieDB.movies[c] = d; ЗАПАМЯТАТИ
console.log(personalMovieDB);




