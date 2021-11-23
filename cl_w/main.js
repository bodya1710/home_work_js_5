//Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum = (a, b, c) => {
//     if (a < b && a < c ){
//         console.log(a);
//     }else if (b < a && b < c ){
//          console.log(b);
//     }else if (c < a && c < b ){
//          console.log(c);
//     }
// }
// console.log(minNum( 3, 2, 32));

// (function (a, b, c){
//     if (a < b && a < c ){
//         console.log(a);
//     }else if (b < a && b < c ){
//         console.log(b);
//     }else if (c < a && c < b ){
//         console.log(c);
//     }
// }(12, 2, 5));

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNum = (a, b, c) => {
//     if (a > b && a > c ){
//         console.log(a);
//     }else if (b > a && b > c ){
//         console.log(b);
//     }else if (c > a && c > b ){
//         console.log(c);
//     }
// }
// console.log(maxNum( 312, 2, 32));
// (function (a, b, c) {
//     if (a > b && a > c ){
//         console.log(a);
//     }else if (b > a && b > c ){
//         console.log(b);
//     }else if (c > a && c > b ){
//         console.log(c);
//     }
// }(12, 345, 11));

//- створити функцію яка повертає найбільше число з масиву
// let numArrMax = (arr) => {
//     let newArr = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > newArr){
//             newArr = arr[i];
//         }
//     }
//     return newArr;
// }
//
// let arr1 = [234, 121, 23];
// console.log(numArrMax(arr1));
//
// let x1 = (function (arr) {
//     let newArr = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > newArr){
//             newArr = arr[i];
//         }
//     }
//     return newArr;
// }(arr1));
// console.log(x1);

//- створити функцію яка повертає найменьше число з масиву
// let numArrMin = (arr) => {
//     let newArr = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < newArr){
//             newArr = arr[i];
//         }
//     }
//     return newArr;
// }
//
// let arr1 = [1, 2, 3];
// console.log(numArrMin(arr1));
//
// let x1 = (function (arr) {
//     let newArr = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < newArr){
//             newArr = arr[i];
//         }
//     }
//     return newArr;
// }(arr1));
// console.log(x1);

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumArr = (arr) =>{
//     let sum = null;
//     for (let i = 0; i <arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr1 = [1, 22, 3];
// console.log(sumArr(arr1));
// let sumArr1 = (function (arr){
//     let sum = null;
//     for (let i = 0; i <arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }(arr1));
// console.log(sumArr1);
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (arr) => {
//         let sum = null;
//     for (let i = 0; i <arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length
// }
// let arr1 = [12, 10, 4];
// console.log(average(arr1));
// let average1 = (function (arr){
//         let sum = null;
//         for (let i = 0; i <arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum / arr.length
//     }(arr1));
// console.log(average1);

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let x1 = ()=>{
//     let newNum = -Infinity;
//     let MinNum = Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > newNum){
//             newNum = arguments[i];
//         }
//         if (arguments[i] < MinNum){
//             MinNum = arguments[i];
//         }
//     }
//         console.log(newNum);
//         return MinNum;
// }

// let x1 =(function () {
//         let newNum = -Infinity;
//     let MinNum = Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > newNum){
//             newNum = arguments[i];
//         }
//         if (arguments[i] < MinNum){
//             MinNum = arguments[i];
//         }
//     }
//         console.log(newNum);
//         return MinNum;
// }(1, 121, 12))
// console.log(x1);
//
//- створити функцію яка заповнює масив рандомними числами
// let r = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     return arr;
// };
// let arr1 = [];
// console.log(r(arr1, 10));
//
// let r1 = (function (arr, n) {
//         for (let i = 0; i < n; i++) {
//             arr.push(Math.floor(Math.random() * 100));
//         }
//         return arr;
//     }(arr1, 10));
// console.log(r1);

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let r = (arr, n, limited) => {
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * limited));
//     }
//     return arr;
// };
// let arr1 = [];
// console.log(r(arr1, 10, 100));
//
// let r1 = (function (arr, n, limited) {
//         for (let i = 0; i < n; i++) {
//             arr.push(Math.floor(Math.random() * limited));
//         }
//         return arr;
//     }(arr1, 10, 100));
// console.log(r1);

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr1 = [1,2,3];
// let rev = (arr) =>{
//     let arrNew = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrNew.push(arr[i]);
//     }
//     return arrNew;
// }
// console.log(rev(arr1));