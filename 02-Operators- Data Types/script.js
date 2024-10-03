// 1-dən 500-ə qədər tək ədədlərin cəmi ilə cüt ədədlərin cəminin fərqinin mənfi və ya müsbət olduğunu çap edən algotithm
// let oddSum = 0;  // Tək ədədlərin cəmi
// let evenSum = 0; // Cüt ədədlərin cəmi

//             // 1-dən 500-ə qədər olan ədədləri dövr vasitəsilə keç
//             for (let i = 1; i <= 500; i++) {
//                 if (i % 2 === 0) {
//                     evenSum += i;  // Cüt ədəd, cəminə əlavə et
//                 } else {
//                     oddSum += i;    // Tək ədəd, cəminə əlavə et
//                 }
//             }

//             let difference = oddSum - evenSum;  // Tək ədəd cəmi ilə cüt ədəd cəminin fərqi

//             // Fərqin mənfi və ya müsbət olduğunu çap et
//             if (difference > 0) {
//                 console.log("Tək ədədlərin cəmi cüt ədədlərin cəmindən daha böyüktür.");
//             } else if (difference < 0) {
//                 console.log("Cüt ədədlərin cəmi tək ədədlərin cəmindən daha böyüktür.");
//             } else {
//                 console.log("Tək və cüt ədədlərin cəmi bərabərdir.");
//             }

// ilk 10 fibonaci ededini yazan alqoritm
// let a = 0;
// let b = 1;
// console.log(a)
// console.log(b)


// for (let i = 2; i < 10; i++) {
//     let c = a+b
//     a = b
//     b = c
//     console.log (c)
// }

// Verilmish sozu tersine yazan algorithm;
let word = "Day";
let reverseword = "";
for (let i = word.length - 1; i >= 0; i--) {
    reverseword += word[i];
    console.log(reverseword);
}

 



