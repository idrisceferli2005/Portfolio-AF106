
//! 1   .Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetirmək funksiyası yazin.
// let sum = (x, y) => x + y; 
// let sub = (x, y) => x - y; 
// let mul = (x, y) => x * y; 
// let div = (x, y) => x / y; 

// let calculate = (a, b, callback) => {
//     return callback(a, b);
// };
// console.log(calculate(50, 5, sum));
// console.log(calculate(50, 5, sub));
// console.log(calculate(50, 5, mul));
// console.log(calculate(50, 5, div));






//!  2 Verilən parametrlərdə tək və cutlerin tapılmaması.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100)
// function tekcutadd(...numbers) {
//     let tek = [];
//     let cut = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             cut.push(numbers[i]);
//         } else {
//             tek.push(numbers[i]);
//         }
//     }
    
//     return { tek, cut };
// }



// let cuttekResult = tekcutadd(14, 20, 35, 40, 57, 60, 100);
// console.log(cuttekResult);


//! 3 Verilmis arreyde elementin həm 4-ə, həm də 5-ə bölününən elementlərin cemini tapin. [14, 20, 35, 40, 57, 60, 100]
// function number(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 4 === 0 && numbers[i] % 5 === 0) {
//             sum += numbers[i];
//         }
//     }

//     return sum;
// }

// let sumResult = number([14, 20, 35, 40, 57, 60, 100]);
// console.log(sumResult);


//! 4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.
// function text (character, sentence) {
//     let count = 0;
//     for(let i = 0; i< sentence.length; i++) {
//         if(sentence[i] === character) {
//             count++;
//         }
//     }
//     return count;
// }

// let sentence = prompt("cumleni yaz");
// let character = prompt("simvolu daxil ele");

// let result = text(character, sentence);
// console.log(`simvolun sayi: ${result}`);




//! 5.Daxil edilən ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm ks halda Deficient eded olur 12-Aboundant, 13- Deficient)



//!6.Array- in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.

// function number(numbers) {
//     let squared = [];

//     for (let i = 0; i < numbers.length; i++) {
//         squared.push(numbers[i] ** 2);
//     }

//     return squared;
// }       

// let squared = number([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(squared);  

//! 7.İçərisində ad və yaş açarları olan obyektlərdən təşkil edilmiş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array fərdi qaytaran funksiya yazın. Məsələ - [13,67,54]

// function value(people) {
//     let minAge = people[0].age;
//     let maxAge = people[0].age;
//     for (let i = 1; i < people.length; i++) {
//         if( people[i].age < minAge) {
//             minAge = people[i].age
//         }
//         if( people[i].age > maxAge) {
//             maxAge = people[i].age
//         }
//     }
//     let difference = maxAge - minAge;
//     return {minAge, maxAge, difference
//     }
//  }

//  let people = [
//     { name: "Idris", age: 19},
//     { name: "Mehemmed", age: 23},
//     { name: "Ramil", age: 37}
// ];

// let result = value(people);
// console.log(result);
