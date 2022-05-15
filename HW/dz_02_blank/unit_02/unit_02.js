// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);
// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
document.querySelector(".out-2").textContent = c / d;
// document.querySelector('.out-2').textContent =

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 7;
let f = 9;
document.querySelector(".out-3").textContent = e + f;
// document.querySelector('.out-3').textContent =e+f

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = "3";
let f1 = 5;
document.querySelector(".out-4").textContent = e1 + f1;
// document.querySelector('.out-4').textContent =

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

// document.querySelector('.out-5').textContent =
let e2 = 3;
let f2 = 0;
document.querySelector(".out-5").textContent = e2 / f2;
// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = "Hello";
document.querySelector(".out-6").textContent = e3 + f3;

// document.querySelector('.out-6').textContent =

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = "Hello";
document.querySelector(".out-7").textContent = e4 * f4;
// document.querySelector('.out-7').textContent =

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let b8 = document.querySelector(".input-b8");
let t8 = document.querySelector("button.b-8");

t8.onclick = function () {
  // console.log("Works!!");
  // console.log(b8.value);
  let result8 = b8.value;
  console.log(result8);
};

// document.querySelector(".b-8").onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let i9 = document.querySelector(".i-9");
let b9 = document.querySelector(".b-9");
b9.onclick = function () {
  document.querySelector(".out-9").textContent = i9.value;
  i9.value = "";
};

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let i10 = document.querySelector(".i-10");
let b10 = document.querySelector(".b-10");
b10.onclick = function () {
  res10 = document.querySelector(".out-10").textContent = i10.value * 10;
  i10.value = "";
};

// document.querySelector(".b-10").onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let i11 = document.querySelector(".i-11");
let b11 = document.querySelector("button.b-11");

b11.onclick = function () {
  res11 = document.querySelector(".out-11").textContent = i11.value + 10;
  i11.value = "";
};

// document.querySelector(".b-11").onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let i12_1 = document.querySelector(".i-12_1");
let i12_2 = document.querySelector(".i-12_2");
let b12 = document.querySelector(".b-12");

b12.onclick = function () {
  res12 = document.querySelector(".out-12").textContent =
    "Hello" + " " + i12_1.value + " " + i12_2.value;
  i12_1.value = "";
  i12_2.value = "";
};

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let i13_1 = document.querySelector(".i-13_1");
let i13_2 = document.querySelector(".i-132");
let b13 = document.querySelector(".b-13");

b13.onclick = function () {
  res13 = document.querySelector(".out-13").textContent =
    i13_1.value + i13_2.value;
  i13_1.value = "";
  i13_2.value = "";
  // document.querySelector(".b-13").onclick = t13;
};

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let i14 = (document.querySelector(".i-14").value = 77);
console.log(i14);
i14.value = document.querySelector(".i-14").value = "Hello";

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = document.querySelector(".i-15");

y.style.border = "2px solid red";

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
let i16_1 = document.querySelector(".i-16-1");
let i16_2 = document.querySelector(".i-16-2");
let b16 = document.querySelector(".b-16");

b16.onclick = function () {
  i161 = +i16_1.value;
  i162 = +i16_2.value;

  res16 = document.querySelector(".out-16").textContent = i161 + i162;
  i16_1.value = "";
  i16_2.value = "";
};

// document.querySelector(".b-16").onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let i17 = document.querySelector(".i-17");
let b17 = document.querySelector(".b-17");

b17.onclick = function () {
  t = i17.value;
  t = parseInt(t);
  document.querySelector(".out-17").textContent = t;

  i17.value = "";
};

// document.querySelector(".b-17").onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let i18 = document.querySelector(".i-18");
let b18 = document.querySelector(".b-18");

b18.onclick = function () {
  t = i18.value;
  t = parseFloat(t);
  console.log(t);
};

// document.querySelector(".b-18").onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let i19_1 = document.querySelector(".i-19-1");
let i19_2 = document.querySelector(".i-19-2");
let b19 = document.querySelector(".b-19");

b19.onclick = function () {
  let t191 = +i19_1.value;
  // console.log(i19_1.value);
  // console.log(t191);
  let t192 = +i19_2.value;

  document.querySelector(".out-19").textContent = t191 + t192;
};

// document.querySelector(".b-19").onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let i20_1 = document.querySelector(".i-20-1");
let i20_2 = document.querySelector(".i-20-2");
let i20_3 = document.querySelector(".i-20-3");
let i20_4 = document.querySelector(".i-20-4");

let b20 = document.querySelector(".b-20");

b20.onclick = function () {
  t20 = document.querySelector(".out-20").textContent =
    "Dear " +
    i20_1.value +
    ", " +
    i20_2.value +
    ", " +
    i20_3.value +
    " year, " +
    "you`re " +
    i20_4.value;
};

// document.querySelector(".b-20").onclick = t20;
