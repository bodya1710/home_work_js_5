//Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a, b) => a * b;
// console.log(s(2, 4));
// (function (a, b){
//    let s =  a * b;
//     console.log(s)
// }(2, 4));
//- створити функцію яка обчислює та повертає площу кола
// let p = 3.14;
// let sc = (r) => p * Math.pow( r, 2);
// console.log(sc(3));
// (function (r){
//   let s = p * Math.pow( r, 2);
//     console.log(s);
// }(3));
//- створити функцію яка обчислює та повертає площу циліндру
// const p = 3.14;
// let cylinderS = (r, h) => 2 * p * r * h;
// console.log(cylinderS(4, 6))
// let x = (function (r, h){
//   return 2 * p * r * h
// }(4, 6));
// console.log(x);
//- створити функцію яка приймає масив та виводить кожен його елемент
// let arr1 = [1, 12, 45];
// arr1.filter((n) => console.log(n));
//
// (function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }(arr1));

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// (function(text) {
//     document.write(`<p>${text}</p>`);
// }('wow1'));
//
// let writeS = (text) => document.write(`<p>${text}</p>`);
// writeS('wow');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listWrite = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// };
// listWrite('hello');
// (function(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }('hello'));
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let = listWrite2 = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
// }
// listWrite2('world', 2);
// (function (text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</ul>`);
// }('world', 2));
// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let sortV = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arr[i]}</li>`);
//         document.write(`</ul>`);
//     }
// }
// let arr1 = ['asd', 12, true, 'sdccsdc', 121 ];
// sortV(arr1);
// (function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${arr[i]}</li>`);
//         document.write(`</ul>`);
//     }
// }(arr1));
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr1 = [{
//     id: 1,
//     name: 'pitro',
//     age: 23
//
// }, {
//     id: 2,
//     name: 'fitro',
//     age: 53
//
// }, {
//     id: 3,
//     name: 'Vadil',
//     age: 43
//
// }];
// let postUser = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let user = arr[i];
//         document.write(`<div>`);
//         document.write(`${user.id}`);
//         document.write(`${user.name}`);
//         document.write(`${user.age}`);
//         document.write(`</div>`);
//     }
// }
// postUser(arr1);
// (function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let user = arr[i];
//         document.write(`<div>`);
//         document.write(`${user.id}`);
//         document.write(`${user.name}`);
//         document.write(`${user.age}`);
//         document.write(`</div>`);
//     }
// }(arr1));

