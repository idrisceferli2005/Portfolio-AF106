Multiplication Table(1-10 vurma cedveli)
// for ( let i = 1; i <= 10; i++) {
//     for ( let j = 1; j<= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log()
// }



Verilmis userlerden ibaret arreyde yasi 30-dan boyuk ve kicikdirmaq olanları consB. -İstifadə edərək davam edin.
// let users = [
//     { name: "idris", age: 19},
//     { name: "babek", age: 28},
//     { name: "ramil", age: 26},
//     { name: "cefer", age: 34},
//     { name: "elvin", age: 38},
//     { name: "raul", age: 98}

// ];
// console.log("30-boyuk"); 
// for ( let i = 0; i < users.length; i++) {
//     if (users[i].age <= 30)
//         continue;
//     console.log(users[i].age);
// }
// console.log("30-kicik");
// for ( let i = 0; i < users.length; i++) {
//     if(users[i].age >= 30)
//         continue;
//     console.log(users[i].age);
// }
  




Arraye daxil edilmiş 10 ədədin ededi ortasını tapan proqramın alqoritmi yazmaq.(While loop ile)
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let sum = 0;
// let i = 0;
// while (i < arr.length) {
//     sum += arr[i];
//     i++;
// }

// let average = sum / arr.length;
// console.log(average); 

Girilen ededin istenilen edede göre modunu(%) tapan alqoritm yazmaq.
// let a = 29;
// let b = 7;
// let mod = a % b;
// console.log(mod)




.Verilmis array-de en boyuk ededin tapilmasi.
// let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// let max = arr[0];
// for ( let i = 1; i< arr.length; i++) {
//     if ( arr[i] > max) 
//      arr[i] = max;
//     }

// console.log(max)



Verilmiş massiv-də min və max elementi əldə edilən yerdə qalan bütün elementlərin cəmini tapın.
// let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// let min = arr[0];
// let max = arr[0];
// let sum = 0;

// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] < min)
//         min = arr[i];
//     if(arr[i] > max)
//         max = arr[i]; 
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== min && arr[i] !== max) {
//         sum += arr[i]
//     } 
// }
// console.log(sum)


yerini deyisen proqram
// let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// let min = arr[0];
// let max = arr[0];
// let minindex = 0;
// let maxindex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         minindex = i;
//     }
//     if(arr[i] > max) {
//         max = arr[i];
//         maxindex = i;
//     }
// }
// [arr[minindex], arr[maxindex]] = [arr[maxindex], arr[minindex]];
// console.log(arr);



Verilmiş array-e daxil edilən ədədin arreyde olub olmadığını təyin edən proqram tərtib edin.
// let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// let num = 20;
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if( arr[i] === num) {
//         found = true;  
//         break;
//     }
// }

// if (found){
// console.log(num, "true");
// } else{
//     console.log(num, "false")
// }


Verilmiş array-in elementlərindən neçəsinin bir rəqəmi, neçəsinin iki rəqəmi, ve necesinin uc reqemi oldugunu tapan algrithm yazmaq
// let arr = [203, 19, 2, 13, 196, 86, 35, 77,];
// let onenumber = 0;
// let twonumber = 0;
// let threenumber = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0 && arr[i] < 10) {
//         onenumber++;
//     }
//         else if (arr[i] >= 10 && arr[i] < 100) {
//             twonumber++;-*`-```
//         } 
//     else if (arr[i] >= 100 && arr[i] <1000) {
//         threenumber++;
//     }
// }
// console.log(onenumber);
// console.log(twonumber);
// console.log(threenumber);










