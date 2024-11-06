//! 1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.v
// function dublicate(arr) {
//     let element = [];
//     let dublicatecount = 0;

//     for (let i = 0; i <arr.length; i++) {
//       if(!element.includes(arr[i])) {
//         element.push(arr[i]);
//       }
//       else {
//         dublicatecount++;
//       }
//     }

//     return {element, dublicatecount};
// }

// let numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];
// console.log(dublicate(numbers));

//! 2.Verilmis sozun polindrom olub olmayib yoxlayan alqoritm yazmaq.

// function palindrom (word) {
//     let letters =word.split('');
//     let reversedarr = letters.reverse();
//     let reverseword = reversedarr.join('');
//     return word === reverseword;
// }
// console.log(palindrom("enene"));
// console.log(palindrom("salam"));

//! 3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.
// let numbers = [18, 22, 39, 46, 38, 56];
// function smallnumber(arr, num) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < num) {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(smallnumber(numbers));


//! 4.customers array-in icindeki objectlerdeki hobbileri array-in reduction metodundan istifade edərək yazdirmaq.
// const müştərilər = [
//     {
//       ad: "Tyrone",
//       şəxsi: {
//         yaş: 33,
//         hobbi: ["Velosiped sürmə", "Kampinq"],
//       },
//     },
//     {
//       ad: "Elizabeth",
//       şəxsi: {
//         yaş: 25,
//         hobbi: ["Gitara", "Oxuma", "Bağçılıq"],
//       },
//     },
//     {
//       ad: "Penny",
//       şəxsi: {
//         yaş: 36,
//         hobbi: ["Komikslər", "Şahmat", "Leqolar"],
//       },
//     },
//   ];
//   function hobbies(müştərilər) {
//     return müştərilər.reduce((hobbie, müştəri) => {
//         return hobbie.concat(müştəri.şəxsi.hobbi);
//     }, []);
//   }
//   console.log(hobbies(müştərilər));
  

  //! 5.Random reqemlerden ibaret array dizayn,en boyuk ve en kicik eleman elemanlari,ortalamani,toplama ve elemanlarin kvadratini acma(Math metodlarindan istifade ederek)
// let numbers = [2, 4, 7, 9, 13, 19];

// function findmax(array) {
//     return Math.max(...array)
// }
// console.log(findmax(numbers));

// function findmin(array) {
//     return Math.min(...array)
// }
// console.log(findmin(numbers));

// function Sum(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(Sum(numbers));


// function average(array) {
   
//     return Sum(array) / array.length
// }
// console.log(average(numbers));

// function square (array) {
//     let square = [];
//     for ( let i = 0; i < array.length; i++) {
//         square.push(array[i] **2);
//     }
//     return square;
// }
// console.log(square(numbers));




  //! 6.Object Destructing istifade etmek  istifade   obyekti  adı ,  departamenti  ve  elaqe  ( e-poçt ,  telefon ,  təcili Əlaqə  vasitələri daxildir. bağlı ) məlumatlarını əldə edin. Həmçinin  təcili Əlaqə -də  ad  və  əlaqə  məlumatı əldə edin.
// const əməkdaşı = {
//     ad: "Fərid Əli",
//     şöbə: "Mühəndislik",
//     əlaqə: {
//       epoçt: " farid.ali@example.com ",
//       telefon: "555-1234",
//       təcilielaqə: {
//         ad: "Uzaq üçün",
//         münasibət: "Həyat yoldaşı"
//       }
//     }
//   };


//   const {
//     ad,
//     şöbə,
//     əlaqə: {
//         epoçt,
//         telefon,
//         təcilielaqə : {
//             ad : teciliyardim,
//             münasibət : yoldaşı
//         }
//     } 
    
//   }= əməkdaşı

//   console.log({
//     ad,
//     şöbə,
//     epoçt,
//     telefon,
//     teciliyardim,
//     yoldaşı

//   });
//   Çıxış:
//   ad: "Fərid Əli", şöbə: "Mühəndislik", e-poçt: " farid.ali@example.com ",
//   telefon: "555-1234", təcili Əlaqə Adı: "Uzaq üçün", təcili Əlaqə: "Həyat yoldaşı"