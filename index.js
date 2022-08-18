// variables
// task1
let admin;
let name = "Джон";
admin = name;
alert(admin);

// task2
let namePlanet;
let currentUserName;

// Task3
const BIRTHDAY = '18.04.1982';  //нужны заглавные буквы
const age = someCode(birthday); //заглавные не нужны

// types
let name = "Ilya";
lert( `hello ${1}` ); // выведете hello 1

alert( `hello ${"name"}` ); // выведете hello name

alert( `hello ${name}` ); // выведете hello Ilya

// alert,prompt
let message = prompt("Имя пользователя:");
alert(message);

// operators
// task1
let a = 1;
let b = 1;

let c = ++a;
let d = b++;
// a = 2, b =1 , c = 2, d =1

// task2
let a = 2;
let x = 1 + (a *= 2);
// a = 4, x = 5

// task3
   1. 10 
   2. -1 
   3. 1 
   4. 2
   5. 6
   6. 9px
   7. $45
   8. 2
   9. NaN
   10. -95
   11. -14
   12. 1
   13. NaN
   14. -2


// task4
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12

alert (+a + +b); //3

// comparison
  1. true
  2. false
  3. true
  4. false
  5. false
  6. false
  

  // if else
  // Task1
let = prompt('Число:');

if (let == 10) {
  alert ('Верно!');
} else {
  alert ('Неверно!');
}

// Task2
let min = prompt('Число:');

if (min >= 0 && min <= 15) {
  alert ('Первая');
} else if (min >= 16 && min <= 30){
  alert ('Вторая');
} else if (min >= 31 && min <= 45){
  alert ('Третья'); 
} else if (min >= 46 && min <= 60){
  alert ('Четвертая');
}

// Task3
let a = prompt('Число');

if (a == 0) {
  alert ('Верно!');
} else {
  alert ('Неверно!');
}

// Task4
let a = prompt('Число');

if (a > 0) {
  alert ('Верно!');
} else {
  alert ('Неверно!');
}

// logical-operators
let age;

// Task1
if (age >= 14 && age <= 90);

// Task2
if (age < 14 || age > 90)

if (!(age < 14 || age > 90))

// Task3
if (-1 || 0) alert('first'); // не выполнится
if (-1 && 0) alert( 'second' ); // выполнится, результат -1
if (null || -1 && 1) alert( 'third' ); //выполнится, результат 1

// Task4
let login = prompt('Password:');

if (login == "Админ") {
  let password = prompt('Пароль:');{
    if (password == "Я главный") {
      alert('Здравствуйте!');
    } else if (password == "" || password == null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }
  }
} else if (login == '' || login = null){
  alert('Отменено');
} else {
  alert('Неверный пароль');
}

// Task5
let a = prompt("Число:");

if (a > 0 && a < 5) {
  alert('Верно!');
} else {
  alert('Неверно!');
}

// Task6
let a = prompt("Число:");

if (a == 0 || a == 2) {
  alert(Number(a += 7));
} else {
  alert(a /= 10);
}

// Task7
let a = 3;
let b = 5;

if (a == 0 || a <1 && b >= 3) {
  alert(a + b);
} else {
  alert(a - b);
}

// Task8
let a = 13;
let b = 12;

if (a > 2 && a < 11 || b >= 6 && b < 14) {
  alert('Верно!');
} else {
  alert('Неверно!');
}

// ЦИКЛЫ

// Task1
for (let n = 1; n <= 50; n++){
  console.log(n);
}

let n = 1;
while (n <= 50){
  console.log(n);
  n++;
}

// Task2
let n = 1;
while (n <= 100) {
  console.log(n);
  n++;
}

// Task3
let n = 11;
while (n >= 11 && n <= 33) {
  console.log(n);
  n++;
} 

// Task4
for (let n = 0;n <= 100; n++) {
  if(n % 2 == 0) {
    console.log(n);
  }
}

// Task5
let sum = 0;
for(let n = 1; n <= 100; n++){
  sum = sum + n;
alert(`Сумма: ${sum}`);
}

// Task6
let num = 0;
for (let n = 1000; n >= 50 ;num++) {
  if (n = n/2);
  alert (`Количество итераций: ${num}`);
  alert (`Число: ${n}`);
} 
