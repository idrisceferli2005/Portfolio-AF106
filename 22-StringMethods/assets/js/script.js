
//! 1.Date obyektindən istifadə elə bir şərtdir ki, istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın
// let date = new Date() .getHours();
// console.log(date);

// if (date < 12) {
//     console.log("Sabahin xeyir");
// }
// else if (date < 18) {
//     console.log("Gunortan xeyir");
// }
// else if (date < 22) {
//     console.log("axsamin xeyir");
// }

//!2.Verilmis sozde sait herflewrin tapilmasi
// let words = "avtomatlasdirma";
// let saitler = "aioueəiöü";
// let sait = [];
// for (const word of words) {
//     if(saitler.includes(word)) {
//         sait.push(word);
//     }
// }
// console.log(sait);

//! 3.Veril mish sozun bosluga gore sayi
// let sentence = "Bu gün hava yağışlı olacaq";
// let space = sentence.split(" ").length;   
// console.log(space);

//! 4.Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
// let words = ["sarikiz", "uludag", "beypazar", "camlica"];
// let longword = "";
// for (const word of words) {
//     if(word.length > longword.length) {
//         longword = word;
//     }
// }
// console.log(longword);

//!  5.Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let words = ["sarikiz", "ULUDAG", "beypazar", "camlica"];
// for  (let i = 0; i < words.length; i++) {
//     if(words[i] === words[i].toUpperCase()) {
//         console.log(words[i]);   
//     }
// }

//! 6. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let words = ["sarikiz", "uludag", "BeyPAzar", "camlica"];
// let UpperCasecount = 0;
// for  (const word of words) {
//     if( word === word.UpperCasecount()) {
//         UpperCasecount++;
//     }
   
// }
// if (UpperCasecount > 2) {
//     console.log(words[i]);
    
// }

//! 7. Hər hansı bir cümlədə istənilən baş hərflə olan simvolları birləşd irib qaytaran funksiya yazın. "My name is Gurban" - "MniG"

// let sentence = "My name is Gurban";
// let para = "";
// for  (const word of sentence.split(" ")) {
//     para += word[0];
// }
// console.log(para);

//! 8. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər yazılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. qurban-q4n, stəkan-s4n, javascript- j8t
// let sentence = "Bu gün hava yağışlı olacaq";
// let ixtisar = "";
// for (const word of sentence.split(" ")) {
//     if(word.length < 4) {
//         ixtisar += word;
//     }
//     else (

//     )
// }
