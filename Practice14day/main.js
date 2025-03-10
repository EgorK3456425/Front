// TASK1

// const weather = 10;
// if (weather < 0) {
//     console.log("Опасно холодно!");
// } else if (weather>=0 && weather<= 5) {
//     console.log("Очень холодно");
// } else if (weather>5 && weather<=20) {
//     console.log("Прохладно");
// } else {
//     console.log("Тепло")
// };

// TASK2

// const Buy = 3000;

// if (Buy>5000) {
//     let discont = Buy*0.1;
//     let finalPrice = Buy-discont;
//     console.log(`Цена со скидкой:${finalPrice}`);
// } else if (Buy>1000) {
//     let miniDiscont = Buy*0.05;
//     let finalMiniPrice = Buy-miniDiscont;
//     console.log(`Цена со скидкой ${finalMiniPrice}`);
// }

// TASK3

// const age = 6;

// if (age<18){
//     console.log('Подросток');
// } else if (age >= 18 && age<=65) {
//     console.log('Взрослый');
// } else{
//  console.log('Пенсионер');
// }

// TASK4

// const time =19;

// if (time>=9 &&time<=18){
//     console.log ('openMarket');
// } else {
//     console.log('Идите на хуй');
//  }

// TASK5

// const test = 89;

// if (test>=90 || test>=100) {
//     console.log('Отлично');
// } else if (test>=70 && test<=89){
//     console.log('Хорошо');
// } else if (test>=50 && test<=69) {
//     console.log('Удовлетворительно');
// }else
// {
//      console.log('Иди нахуй');
// }


// TASK 11 Function

// TASK 1

// function checkAge(age){

// if (age<18) {
//     console.log('you are not allowed');
// } else {
//     console.log('you are welcome!');
// }}
// checkAge(18);

// TASK2 CALCULATOR

// function calc(operation, a, b) {
//     if (operation === 'add') {
//         return a + b; 
//     } else if (operation === 'multi') {
//         return a * b; 
//     } else  (operation === 'subtract'); {
//         return a - b; 
//     }}
// console.log(calc('add', 1, 2));       
// console.log(calc('multi', 1, 2));    
// console.log(calc('subtract', 3, 2));  

// TASK 12 SWITCH

function calc (operation, a, b){
    switch(operation) {
        case `add`:
          return a + b;
           break;
        case `multi`:
          return a * b;
           break;
        case `subtract`:
            return a - b;
           break;
        default:
             "NoCulcelate";
    }
}
console.log(calc('add', 1, 2));       
console.log(calc('multi', 1, 2));    
console.log(calc('subtract', 3, 2));
