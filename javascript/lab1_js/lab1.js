"use strict";

function ex1() {
    let age = Number(prompt('Введите возраст'));
    let gender = prompt('Введите пол (Мужской/Женский)');

    if (age >= 0 && age <= 17) {
        alert('Вам работать ещё рано - учитесь');
    } else if (((18 <= age && age <= 59) && gender == 'Мужской') || ((18 <= age && age <= 54) && gender == 'Женский')) {
        alert('Вам еще работать и работать');
    } else if (((60 <= age && age <= 64) && gender == 'Мужской') || ((55 <= age && age <= 59) && gender == 'Женский')) {
        alert('Скоро пенсия!');
    } else if (((age > 65 && age < 150) && gender == 'Мужской') || ((age > 60 && age < 150) && gender == 'Женский')) {
        alert('Вам пора на пенсию');
    } else {
        alert('Да кто ты такой?');
    }
}

function ex2() {
    let num = prompt("Введите целое число:"); 
    num = parseInt(num); 
       
    let endStr = ""; 
       
    if (isNaN(num) || num < 1) { 
        alert("Некорректное значение"); 
    } 
          
    else { 
       
        switch (num % 10) { 
        case 1: 
            endStr = 'a'; 
            break; 
        case 2: 
        case 3: 
        case 4: 
            endStr = 'ы'; 
            break; 
        default: 
            endStr = ''; 
        } 
    } 
       
    if (num % 100 >= 11 && num % 100 <= 14) { 
        endStr = ''; 
    } 
    alert(`На ветке сидит ${num} ворон${endStr}`) 
}

function ex3() {
    let userInput = prompt('Введите число больше 100');
    let digit = Number(userInput);

    while (digit <= 100 && userInput !== null) {
        userInput = prompt('Введите число больше 100');
        digit = Number(userInput);
    }
}

function ex4() {

    let n = Number(prompt("Введите число (начиная с 2)"));

    nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }

}

function ex5() {
    
      const animals = ['dog', 'dog', 'dog', 'cat', 'cat']; 
      const rows = prompt('Введите количество строк таблицы:'); 
      const table = []; 
 
      for (let i = 0; i < rows; i++) { 
        const row = []; 
 
        for (let j = 0; j < 6; j++) { 
          const index = (i * 6 + j) % animals.length; 
          row.push(animals[index]); 
        } 
 
        table.push(row); 
      } 
 
      console.table(table); 
    } 
