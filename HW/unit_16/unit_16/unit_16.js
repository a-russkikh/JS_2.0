// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5, 7, 9, 11, 13, 15];

function f1() {
  let collect = '';
  for (let i = 0; i < a1.length; i++) {
    collect += `${a2[i]} `;
  }
  document.querySelector('.out-1').textContent = collect;
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5, 7, 9, 11, 13, 15];

function f2() {
  let collect = '';
  for (let i = 0; i < a2.length; i++) {
    collect += `${i} ${a2[i]} `;
  }
  document.querySelector('.out-2').textContent = collect;
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

function f3() {
  let dv = document.getElementsByClassName('out-3');

  for (let item of dv) {
    // console.log(item.innerHTML);
    item.innerHTML = 3;
  }
}

document.querySelector('.b-3').addEventListener('click', f3);

// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
  let dv = document.querySelectorAll('div.out-4');
  //   console.log(dv);

  for (let item of dv) {
    item.textContent = 4;
  }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
  b5 = [];

  for (let i = 0; i < a5.length; i++) {
    if (a5[i] > 7) {
      b5.push(a5[i]);
    }
  }
  return b5;
}

document.querySelector('.b-5').addEventListener('click', () => {
  document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function f6() {
  let b6 = [];
  let out = '';

  for (let i = 0; i < a6.length; i++) {
    // console.log(a6[i], a6[i].length);

    for (let k = 0; k < a6[i].length; k++) {
      //   console.log(a6[i][k]);
      b6.push(a6[i][k]);
    }
  }
  //   console.log(b6);
  for (let i = 0; i < b6.length; i++) {
    out += `${b6[i]} `;
  }
  document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [
  { id: 23, name: 'Ivan' },
  { id: 45, name: 'Petr' },
];
let b7 = {};

function f7() {
  for (let item of a7) {
    b7[item.id] = item.name;
  }
  return b7;
}

document.querySelector('.b-7').addEventListener('click', () => {
  console.log(f7());
});

// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [
  { id: 23, name: 'Ivan' },
  { id: 45, name: 'Petr' },
];
let b8 = [];

function f8() {
  for (let item of a8) {
    b8.push(item.id);
  }
  return b8;
}

document.querySelector('.b-8').addEventListener('click', () => {
  console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [
  [4, 3, 2],
  [2, 5],
  [0, 0, 0, 0, 0],
];

function f9() {
  let ind = 0;
  for (i = 0; i < a9.length; i++) {
    // console.log(i);
    for (let key in a9[i]) {
      //   console.log(key);
      if (key > ind) {
        ind = key;
        console.log(ind);
      }
    }
  }
  return ind;
}

document.querySelector('.b-9').addEventListener('click', () => {
  document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];
let b10 = {};
function f10() {
  for (let key in a10) {
    b10[a10[key]] = a10[key];
  }

  return b10;
}

document.querySelector('.b-10').addEventListener('click', () => {
  console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
  one: 11,
  two: 7,
  three: 13,
  four: 0,
};
let b11 = '';

function f11() {
  for (let key in a11) {
    if (a11[key] > 10) {
      b11 += a11[key] + ' ';
    }
  }
  document.querySelector('.out-11').textContent = b11;
}
document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4, 5, 6, 7];
let b12 = '';
function f12() {
  for (let item of a12) {
    b12 += `${item} `;
  }
  document.querySelector('.out-12').textContent = b12;
}

document.querySelector('.b-12').addEventListener('click', f12);

// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';

function f13() {
  let b13 = '';

  for (let item of a13) {
    b13 += `${item} `;
  }
  document.querySelector('.out-13').textContent = b13;
}

document.querySelector('.b-13').addEventListener('click', f13);

// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4, 5, 6]);

function f14() {
  let b14 = '';

  for (let item of a14) {
    b14 += `${item} `;
    // console.log(item);
  }
  document.querySelector('.out-14').textContent = b14;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).
let a15 = document.querySelectorAll('.out-15');

function f15() {
  let b15 = '';

  for (let item of a15) {
    item.textContent = 15;
    // console.log(item);
  }
}

document.querySelector('.b-15').addEventListener('click', f15);
