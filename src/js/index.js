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


// let numberOfFilms = prompt('Скільки фільмів ви вже подивилися?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// let a = prompt('Один з останніх переглянутих фільмів?', '');
// let b = prompt('На скільки оціните його?', '');
// let c = prompt('Один з останніх переглянутих фільмів?', '');
// let d = prompt('На скільки оціните його?', '');

// personalMovieDB.movies[a]= b;  ЗАПАМЯТАТИ
// personalMovieDB.movies[c] = d; ЗАПАМЯТАТИ
// console.log(personalMovieDB);

// if (0) {
//     console.log('ok!');
// } else {
//     console.log('Goodbye!');
// }

// const num = 50;

// if (num < 50) {
//     console.log('error!');
// } else if (num > 100) {
//     console.log('Багато!');
// } else {
//     console.log('Ok!');
// }

// /// тернарний оператор

// /// умова ? дія якщо true : дія якщо false

// (num === 50) ? console.log('okey') : console.log('error!');


// const num = 101;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('not enought!');
//         break;
//     case 101:
//         console.log('great!');
//         break;
//     default:
//         console.log('Not at this time!')
//         break;
// }

// const burger = true;
// const cola = false;

// if (burger && cola) {
//     console.log('Lets have a break');
// };

// console.log(burger && cola)

// const people = true;
// const monster = false;

// if (people || monster) {
//     console.log(true);
// } else {
//     console.log('false')
// };

// let num = +prompt('Введіть число -', '');

// if (num%2 === 0) {
//     console.log('Парне число отримано');
// } else {
//     console.log('Отримано не парне число');
// }

// let a = 2;
// let b = 3;
// console.log(b > a);

// let num = +prompt('Введіть свій вік', '');

// if (num >= 18) {
//     console.log('Вітаю 18 років є!');
// } else {
//     console.log('Щенок!');
// }

// let a = +prompt('Порівнюємо числа', '');
// let b = +prompt('Порівнюємо числа', '');

// if (a >= b) {
//     console.log('Error');
// } else if (a < b) {
//     console.log(b);
// }

// const correctLogin = prompt('Перевіряємо ваш логін!', '');
// const correctPassword = prompt('Перевіряємо ваш пароль!', '');

// if (correctLogin === 'user123' ) {
//     console.log('Логін перевірено успішно!');
// } else {
//     console.log('Логін введено не вірно!');
// }

// if (correctPassword === 'qwerty') {
//     console.log('Правильний пароль!')
// } else {     console.log('Вспоминай пароль!');
// }

// let dayNumber = +prompt('Enter a number from 1-7 to know the day of the week', '');

// if (dayNumber === 1) {
//     console.log('Monday');
// } else if (dayNumber === 2) {
//     console.log('Tuesday');
// } else if (dayNumber === 3) {
//     console.log('Wednesday');
// } else if (dayNumber === 4) {
//     console.log('Thursday');
// } else if (dayNumber === 5) {
//     console.log('Friday');
// } else if (dayNumber === 6) {
//     console.log('Saturday');
// } else if (dayNumber === 7) {
//     console.log('Sunday');
// } else (dayNumber > 7) {
//     console.log('Error');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Поїли');
// } else {
//     console.log('Пішли додому!');
// }

// console.log(1 && 0);
// console.log(1 && 8);
// console.log(null && 5);
// console.log(0 && 'safasfafsafasf')

// const hamburger = 34;
// const fries = '';
// const cola = NaN;

// console.log(hamburger || cola || fries);

// const hamburger = 0;
// const fries = undefined;
// const cola = 2;
// const nuggets = 5;


// if (hamburger === 3 && nuggets === 7 || nuggets  && cola === 1 && fries)  {
//     console.log('Поїли!');
// } else {
//     console.log('Пішли додому!');
// }

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined ||5);
// console.log(NaN || null && !3 && undefined ||5);
// console.log(5 === 5 && 3 > 1 || 5);

// first loop
// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++
// }


// second loop
// let num = 50;
// do {
//     console.log(num);
//     num++
// }
// while(num < 55);


// for(let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;
//     };
//     console.log(`На цьому тижні ми ходили в кіно ${i} разів`);
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`'і' спрацювало ${i} разів`);
//     for(let j = 1; j <= 3; j++){
//         console.log(`'j' спрацювало ${j} разів`);
//     }
// }


// ялинка
// let result = '';
// const length = 115;

// for(let i = 1; i < length; i++) {
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// задачка
// for(let i =20; i >= 10; i--) {
//     if (i===13) {
//         break;
//     }
//     console.log(i);
// }

