//! 2. Aşağıdakı massivin bütün elementlərini sətirdə birləşdirmək üçün sadə JavaScript funksiyasını yazın.console.log(qoşulmaq([1, 73, 99, 20], "*")) -> 1*73*99*20 console.log(qoşulmaq([1, 73, 99, 20], "/") ) -> 1/73/99/20
// function joinded(arr, seperator) {
//   return arr.join(seperator);
// }

// console.log(joinded([1, 73, 99, 20],"*"));
// console.log(joinded([1, 73, 99, 20], "/"));

//! 3  Sətiri giriş kimi qəbul edən və hər simvolun hərfini dəyişdirən JavaScript proqramını (funksiyasını) yazın. Məsələn, 'Tez Qəhvəyi Tülkü' daxil etsəniz, nəticə 'QUICK BROWN FOX' olmalıdır

// function convert (str) {
//   let result = [];
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase()) {
//       result += str[i].toLowerCase();
//     }
//     else {
//       result += str[i].toUpperCase();
//     }
//   }
//   return result;
// }
// console.log(convert('saLamNecesen')); 

//! 4 Massivi bütün lazımsız elementlərdən təmizləyən metod yazın. , yalan, qeyri-müəyyən, boş sətirlər, sıfır, null kimi. console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]


// function clear(arr) {
//   return arr.filter(Boolean);
// }
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]));

//!  5  Dublikatsız massivi qaytaran metod yazın.
// function clearDuplicate(arr) {
//   return Array.from(new Set(arr));
// }
// console. log(clearDuplicate([1, 2, 1, 2, 3]));
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));

//! 6  İki massivi müqayisə edən və doğru qaytaran funksiya yazın. əgər onlar eynidirsə
// function isEqual (arr1, arr2) {
// if(arr1.length !== arr2.length)
//   return false;
// for (let i = 0; i < arr1.length; i++) {
//  if( arr1[i] !== arr2[i])
//   return false;
// }
// return true;
// }
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]));
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]));


//! 7 Bir string ve bir char qebul edən bir function yazın.Əgər daxil edilmiş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. 8. Bir funksiya yazın parametr olaraq bir massiv, bir indeks və bir

// function indexSum(str, char) {
//   let sum = 0;
//   let found = false;
//   for ( let i = 0; i < str.length; i++) {
//     if(str[i] === char) {
//       sum += i;
//       found = true;
//     }
//   }
//   return found;
// }

// console.log(indexSum);
//! 8  Bir funksiya yazın parametr olaraq bir massiv, bir indeks və bir string qəbul edir. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu index elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.
// function insertAtIndex(arr, index, str) {
//   if (index >= arr.length) {
//     arr.push(str); 
//   } else {
//     arr.splice(index, 0, str); 
//   }
//   return arr;
// }


// console.log(insertAtIndex(['a','salam','b','world'], 3, "dev")); // ['a','salam','b','dev','world']


//! 9. Bir funksiya yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq qaytarılmalıdır. Meselen -> [1,2] [3,4] '*' gonderilse cıxış -> 1*2*3*4 string-i olmalidir.


// function withseperator (arr1, arr2, separator) {
// return arr1.concat(arr2).join(separator);
// }
// console.log(withseperator([1, 2], [3, 4], '*'));


//! 10 tələbələrin ortalama ball'nu yeni bir arrayda yığın
// function averageall (students) {
//   let result = [];
//   for ( let i = 0; i <students.length; i++) {
//     let sum = 0;
//     let scores = students[i].ballar;
//     for (let j = 0; j < scores.length; j++) {
//       sum += scores[j];
//     }
//     let average = sum / scores.length;
//     result.push(students[i].ad, average);
//   } 
//   return result;
// }

// let students = [
//   { ad: "Əli", ballar: [90, 85, 92] },
//   { ad: "Davud", ballar: [100, 100, 100] },
//   { ad: "Məməli", ballar: [75, 80, 85] },
//   { ad: "Camil", ballar: [90, 95, 85] }
// ];
// console.log(averageall(students));

//! 11  webTechs arrayında olan elementlərin uzunluğu 4-dən böyük olanları yeni bir arraya yığın
// function newArr  (arr) {
//   let result = [];
//   for ( let i = 0; i < arr.length; i++) {
//     if(arr[i].length > 4) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

//  const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "Reaksiya",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];
// console.log(newArr(webTechs));

//! 12 product arrayındakı producların qiymətləri cəmini və ortalamasını tapın
//  function price (products) {
//   let total = 0;
//   for (let i = 0; i <products.length; i++) {
//     total += products[i].qiymət;
//   }

//   let average = total / products.length;
//   return  { total: total, average: average };
//  }
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     təsvir: "A high-end smartphone with the latest features.",
//     qiymət: 799.99 ,
//   },
//   {
//     id: 2,
//     başlıq: "Noutbuk",
//     təsvir: "Böyük ekranlı və sürətli prosessorlu güclü noutbuk.",
//     qiymət: 1299.99,
//   },
//   {
//     id: 3,
//     başlıq: "Qəhvəqayıran",
//     təsvir: " Quraşdırılmış dəyirmanı olan avtomatik qəhvə dəmləyən." ,     qiymət: 99.99 ,   }, 
//       {
//      id: 4, başlıq: "Qulaqlıqlar",təsvir: "Səs-küydən qoruyan simsiz qulaqüstü qulaqlıqlar.", qiymət: 199.99,   } ,  
//      {
//       id: 5,başlıq: "Smart TV",təsvir:"Axınma proqramları quraşdırılmış 55 düymlük 4K Smart TV.",qiymət: 699.99
//     }
//   ];
// console.log(price(products));


//! 13.Ölkələr arrayı ilə bağlı bir il ərzində bitən birləşmə tapın
// let states = ["Azerbaijan", "Albania", "Germany", "America", "Russian"]; 
// function countries (states) {
//   let result = [];
//   for(let i = 0; i < states.length; i++) {
//     if(states[i].startsWith("A") && states[i].endsWith("a")) {
//       result.push(states[i]);
//     }
//   }
//   return result;
// }
// console.log(countries(states));
