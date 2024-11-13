let student = [
  {
    id: 1,
    ad: "Anar",
    soyad: "Zülfüqarov",
    yaş: 21,
    hobbi: ["musiqi", "gəzinti", "film izləmək"],
    tələbə: true,
    müəllim: [
      { id : 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "cavid" },
      { id: 4, ad: "alisa" },
    ],
    loginDetail: { istifadəçiadı: "anar21", parol: "anar123" },
    cins: "kişi",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    maaşAZN: 144 ,
  },
  {
    id: 2,
    ad: "Arzu",
    soyad: "Məmmədova",
    yaş: 20,
    hobbi: ["kitab", "yazı kodu"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "həcər" },
      { id: 3, ad : "babaxan" },
      { id: 4, ad: "gulshen" },
    ],
    loginDetail: { username: "arzu1", parol: "salam123" },
    cins: "fermale",
    boyfriendQızyoldaşı: true,
    uğursuz: false,
    avgPoint: 70,
    maaşAZN: 100,
  },
  {
    id: 3,
    ad: "Aytac",
    soyad: "İsayeva",
    yaş: 23,
    hobbi: ["kitab ", "music"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "hikmət" },
      { id: 4, ad: "gulsen" },
    ],
    loginDetail: { istifadəçiadı: "aytac123", parol: "salamBaku" },
    cinsi: " fermale",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    maaşAZN: 145,
  },
  {
    id: 4,
    ad: "Cavid",
    soyad: "Həsənov",
    yaş: 22,
    hobbi: ["kitab", "oyun", "film", "musiqi"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "anar" },
    ],
    loginDetail: { istifadəçiadı: "hesenov", parol: "hello123" },
    cinsi:"kişi",
    boyfriendQızyoldaşı: false,
    uğursuz: false,
    avgPoint: 90,
    maaşAZN: 142,
  },
  {
    id: 5,
    ad: "Elnur",
    soyad: "Ələkbərov",
    yaş: 19,
    hobbi: ["alış-veriş", "musiqi dinləmək"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "Mirvari" },
    ],
    loginDetail: { istifadəçiadı: "elnur123", parol: "salam123" },
    cins: "kişi",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    maaşAZN: 146,
  },

  {
    id: 6,
    ad: "Əkbər",
    soyad: "Zeynallı ",
    yaş: 20,
    hobbilər: [
      "filmlərə baxmaq",
      "kitab oxumaq",
      "rəsm çəkmək",
      "gəzmək",
      "musiqi dinləmək",
    ],
    tələbə: true,
    müəllim: [
      { id: 1, ad: " seid" },
      { id: 2, ad: "hajar" },
    ],
    loginDetail: { username: "zeynalli", parol: "salamBaku" },
    gender: "kişi",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    əməkhaqqıAZN: 145,
  },
  {
    id: 7,
    ad: "Fatimə",
    soyad: "Əliyeva",
    yaş: 23,
    hobbi: ["kitab", "oyun", "rəsm", "gəzinti"],
    tələbə : true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "fidan" },
      { id: 4, ad: " İradə" },
    ],
    loginDetail: {
      username: "fatime0",
      parol: "fatime01",
    },
    gender: "fermale",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    maaşAZN: 196,
  },

  {
    id: 8,
    ad: "Gülər",
    soyad: "Bayramova",
    yaş: 22,
    hobbi: ["rəsm", "yatmaq"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "Valida" },
    ],
    loginDetail: { username: "guler123", parol: "salamBaku" },
    gender: "fermale",
    boyfriendGirlfriend: true ,
    uğursuz: true,
    avgPoint: 76,
    maaşAZN: 100,
  },
  {
    id: 9,
    ad: "İdris",
    soyad: "Cəfərli",
    yaş: 20,
    hobbi: ["kitab", "buz konkisi", "Tennis", "Kartinq"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "Həcər" },
      { id: 3, ad: "Morad" },
      { id: 4, ad: "Fikrət" },
    ],
    loginDetail: { istifadəçiadı: "ceferliidriss", parol: " maxverstappen" },
    cins: "kişi",
    boyfriendQızyoldaşı: false,
    uğursuz: false,
    avgPoint: 76,
    maaşAZN: 120,
  },
  {
    id: 10,
    ad: "Məhəmməd",
    soyad: "Qurbanov",
    yaş: 21,
    hobbi: ["kitab", "oyun"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: " seid" },
      { id: 2, ad: "hajar" },
      { id: 3, ad: "Turan" },
    ],
    loginDetail: { istifadəçiadı: "mehemmed123", parol: "mehemmedqurban" },
    cins: "kişi",
    boyfriendQızyoldaşı: true,
    uğursuz: true,
    avgPoint: 75,
    maaşAZN: 98,
  },
  {
    id: 11,
    ad: "Nərgiz",
    soyad : "Abdullayeva",
    yaş: 20,
    hobbiləri: ["kitab", "oyun"],
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "hajar" },
    ],
    loginDetail: { istifadəçiadı: "nergiz123", parol: "salamBaku" },
    cins: "fermale",
    boyfriendQızyoldaşı: true ,
    uğursuz: false,
    avgPoint: 81,
    maaşAZN: 120,
  },
  {
    id: 12,
    ad: "Nihat",
    soyad: "Rəşidli",
    yaş: 19,
    hobbiləri: [
      "kitab",
      "oyun",
      "sking",
      "güləş",
      "üzgüçülük",
      "fəlsəfə mübahisəsi",
      "sudoku həlli",
      "piyada gəzinti",
      "gəzinti"
    ],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "həcər" },
      { id: 3, ad: "jale" },
      { id: 4, ad: "akhmed" },
    ],
    loginDetail: { username: "nihat17", parol: "nihat12345" },
    gender: "kişi",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint : 76,
    əməkhaqqıAZN: 100,
  },
  {
    id: 13,
    ad: "Ruhid",
    soyad: "Novruzov",
    yaş: 18,
    hobbi: ["kitab", "oyun", "sking"],
    tələbə: true,
    müəllim: [
      { id: 1, ad : "seid" },
      { id: 2, ad: "həcər" },
    ],
    loginDetail: { istifadəçiadı: "ruhid22", parol: "ruhidnovruz" },
    cins: "kişi",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    maaşAZN: 250,
  },
  {
    id: 14,
    ad: "Səda" ,
    soyad: "Novruz",
    yaş: 18,
    hobbiləri: [
      "kitab",
      "oyun",
      "sking",
      "güləş",
    ],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" } ,
      { id: 2, ad
      : "hajar" }, { id: 4, ad: "ahmed" },
    ],
    loginDetail: { istifadəçiadı: "sedanovruz", parol: "seda002" },
    cinsi: "fermale",
    boyfriendGirlfriend : false,
    fail: false,
    avgPoint: 76,
    maaşAZN: 100,
  },
  {
    id: 15,
    ad: "Sərvan",
    soyad: "Səlimov",
    yaş: 23,
    hobbi: ["kitab", "gəzinti"],
    tələbə: true,
    müəllim: [{ id: 1, ad: "seid" }],
    loginDetail: { istifadəçiadı: "sərvan99", parol: "sərvan001" },
    cins: "kişi",
    boyfriendQızyoldaşı: false,
    uğursuz: false,
    avgPoint: 88,
    maaşAZN: 410,
  },
  {
    id: 16,
    ad: "Vüsal",
    soyad: "Vəliyev",
    yaş: 21,
    hobbiləri: ["kitab", "oyun", "sking", "piyada gəzinti", "walking"],
    tələbə: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 3, ad: "jale" },
    ],
    loginDetail: { istifadəçiadı: "vusu21", parol: " vuskavali" },
    cinsi: "kişi",
    boyfriendQızyoldaşı: true,
    uğursuz: true,
    avgPoint: 68,
    maaşAZN: 200,
  },
  {
    id: 17,
    ad: "Zaur",
    soyad: "Şıxıyev",
    yaş: 24,
    hobbi : ["kitab", "sking", "güləş", "üzgüçülük"],
    şagird: true,
    müəllim: [
      { id: 1, ad: "seid" },
      { id: 2, ad: "həcər" },
      { id: 4, ad: "ahmed" },
    ],
    loginDetail: { istifadəçiadı: "zz77",parol: "zaur77777" },
    cins: "kişi",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    maaşAZN: 560,
  },
];



//! 1. Bütün elementləri konsola yazın
// function logAllProperties() {
//   for (let i = 0; i < student.length; i++) {
//     let name = student[i];
//     console.log(name.ad);
//     console.log(name.soyad);
//     console.log(name.yaş);
//     console.log(name.hobbi);
//     console.log(name.tələbə);
//     console.log(name.müəllim); 
//     console.log(name.loginDetail);
//     console.log(name.cins);
//     console.log(name.boyfriendGirlfriend);
//     console.log(name.avgPoint);
//     console.log(name.maaşAZN);
    
//   }
//   }
//   logAllProperties();

  //! 2 - Bütün xüsusiyyətlərin adlarını konsola yazın - ad:
// function printPropertyNames() {
//   for (let i = 0; i < student.length; i++) {
//     let name = student[i];
//         console.log(`ad: ${name.ad}`); 
//   }
// }

// printPropertyNames();

  //! 3 - Bütün xüsusiyyətlərin adlarını və soyadlarını konsola yazın - ad: Seid, soyad: Nurəliyev

// function nameandsurname() {
//   for (let i = 0; i < student.length; i++) {
//     let name = student[i];
//     console.log(`ad: ${name.ad} soyad: ${name.soyad}`);
    
//   }
// }
// nameandsurname();

//! 4 Kəsri olan çox böyük ad və soyadını çapa verin

// function longestname () {
//   let longname = "";
//   let longsurname = "";
//   for ( let i = 0; i < student.length; i++) {
//     let name = student[i];
//     if (name.ad.length > longname.length) {
//       longname = name.ad;
//     }
//     if(name.soyad.length > longsurname.length) {
//       longsurname = name.soyad
//     }
//   }
//   console.log(longname + " " + longsurname);
  
// }
// longestname();

//! 5 Ən hobbisi olan tələbənin ad və hobbilərini çapa verin

// function veryhobby() {
//   let maxhobbies = 0;
//   let mosthobby = null;
//   for ( let i = 0; i < student.length; i++) {
//     let name = student[i];
//     if (name.hobbi?.length >maxhobbies) {
// maxhobbies = name.hobbi.length
// mosthobby = name;
//     }
// }

// console.log(mosthobby?.ad);
// console.log(mosthobby?.hobbi);


// }
// veryhobby();

//! 6 Ortalaması ən böyük olan tələbənin reklamı və belə yadını çapa verin
// function highestavg () {
//   let point = 0;
//   let studentavg = null;
//   for ( let i = 0; i < student.length; i++) {
//          let name = student[i];
//          if( name.avgPoint > point) {
//           point = name.avgPoint;
//           studentavg = name;
//          }
// }
// console.log(studentavg.ad);
// console.log(studentavg.avgPoint);
// }
// highestavg();



//! 7 Parolu ən uzun olan tələbənin istifadəçi adı və adını çapa verin.
// function highestparol () {
//   let highest = student[0];
  
//   for ( let i = 1; i < student.length; i++) {
//   if(student[i].loginDetail.parol.length > highest.loginDetail.parol.length){
//     highest = student[i];
//   }
//   }
  
//   console.log(highest.ad);
//   console.log(highest.loginDetail);
  
  
//   }
//   highestparol();   


//! 8 boyfriend-i olan ölçüsün adlarını və username-lərini çapa
// function  boyfriendsstudent () {
//   for (let i = 0; i < student.length; i++) {
//     if(student[i]?.boyfriendQızyoldaşı) {
//       console.log(student[i].ad + " " + student[i].soyad + " " + student[i].loginDetail);
      
//     }
//   }
// }
// boyfriendsstudent();
//! 9 yaşı 20 olan ölçüsün adlarını və müəllim adlarını çapa verin
// function studentsage20() {
//   for (let i = 0; i < student.length; i++) {
//     if(student[i].yaş === 20) {
//       let teachers = [];
//       for (let j = 0; j < student[i].müəllim.length; j++) {
//         teachers.push(student[i].müəllim[j].ad);
//       }
//       console.log(student[i].ad + " " + student[i].soyad + " " + teachers);
      
//     }
//   }
// }
// studentsage20();

//! 10 Bütün bu təqaüdlərin dollarla görünməsini təmin edin
// function usd () {
//   let mezenne  = 0.59;
//   for (var i = 0; i < student.length; i++) {
//     let salaryUSD = (student[i].maaşAZN * mezenne);
//     console.log(student[i].ad + " " + student[i].soyad + " " + salaryUSD +"USD");
    
//   }
// }
// usd();

//! 11 Müəllimlərin baş hərflərini böyük hərflə yazın
// function capitalizeteacher () {
//   for (let i = 0; i < student.length; i++) {
//     for (let j = 0; j < student[i].müəllim.length; j++) {
//      console.log(student[i].müəllim[j].ad = student[i].müəllim[j].ad.charAt(0).toUpperCase() + student[i].müəllim[j].ad.slice(1));
      
//     }
//   }
// }
// capitalizeteacher();

//! 12 Studenlerin arasında id-si 3 olanin müəllimlərin adını capa verin
// function nonumber () {
//   for (let i = 0; i < student.length; i++) {
//     if (student[i].id === 3) {
//       for (let j = 0; j < student[i].müəllim.length; j++) {
//         console.log(student[i].müəllim[j].ad);
        
//       }
//     }
//   }
// }
// nonumber();

//! 13 Tələbələrin adlarını və müəllim saylarını çapa verin
// function count () {
//   for (let i = 0; i < student.length; i++) {
//     console.log(student[i].ad + " " + student[i].müəllim.length);
    
//   }
// }
// count();
//! - 14 Tələbələrin adları, istifadəçi adı və qurğularından yeni array yaradın [{name:Seid,username:seid123,password:qqq123}]
// function createarray () {
//   let newArray = [];
//   for (let i = 0; i < student.length; i++) {
//     newArray.push([
//        student[i].ad,
//        student[i].loginDetail.istifadəçiadı ,
//        student[i].loginDetail.parol
//     ]);
//   }
//   console.log(newArray);
  
// }
// createarray();


//! 15 Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metodundan istifadə edin
// function addTeacher() {
//   for (let i = 0; i < student.length; i++) {
//     for (let j = 0; j < student[i].müəllim.length; j++) {
//      console.log(student[i].müəllim[j].ad += " müəllim");
      
//     }
//   }
// }
// addTeacher();

//! 16  Hamının boşluğunun əvvəlinə 3 ədəd əlavə edin. String metodundan istifadə edin
// function addelement () {
//   for (let i = 0; i < student.length; i++) {
//     console.log(student[i].ad = "3" + student[i].ad);
    
//    console.log(student[i].soyad = "3" + student[i].soyad);
//   }
// }
// addelement();

//! 17  Hamının istifadəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metodundan istifadə edin
// function maskUsername() {
//   for (let i = 0; i < student.length; i++) {
//   console.log(student[i].loginDetail.istifadəçiadı = student[i].loginDetail.istifadəçiadı?(student[i].loginDetail.istifadəçiadı?.length, "*"));
  
    
//   }
// }
// maskUsername();

//!  18 Hamının soyadının uzunluğunun uzunluğu qədər olsun. String metodundan istifadə edin
// function surname () {
//   for (let i = 0; i < student.length; i++) {
//     console.log(student[i].soyad = student[i].ad.slice(0,student[i].ad.length));
    
//   }
// }
// surname();

//! 19 Bütün bunun yaşlarının toplamı nə qədərdir
// function point () {
//   let sum = 0;
//   for (let i = 0; i < student.length; i++) {
//     sum += student[i].yaş;
//   }
//   console.log(sum);
  
// }
// point();


//! 20 Bütün xüsusiyyətlərin cəmi bal ortalaması nə qədərdir
// function average() {
//  let sum = 0;

//  for( let i = 0; i < student.length; i++) {
//   sum+= student[i].avgPoint;
//  }
//  let avg = sum / student.length;
// console.log(avg);

// }
// average();

//! 21 "kitab" həvəsini olan dəyişikliklərin aşağı çap edin
// function book () {
//   for( let i = 0; i < student.length; i++) {
//     if(student[i].hobbi?.includes("kitab")) {
//       console.log(student[i].ad + " " + student[i].soyad + " " + "kitab hevesi var");
      
//     }
//   }
// }
// book();
//! 22 Tələbələrin yaş ortalaması nədir? // - Bütün bunların ad və soyadlarının uzunluqlarının cəmi hansıdır


// function point () {
//     let sum = 0;
//     for (let i = 0; i < student.length; i++) {
//       sum += student[i].yaş;
//     } 
//     let avg = sum / student.length;
//     console.log(avg);
    
//   }
//   point();

//!  

// function GenderAndAge(students) {
//   let result = [];
//   for (let i = 0; i < students.length; i++) {
//     let student = {
//       ad: students[i].ad,
//       cins: students[i].cins,
//       yaş: students[i].yaş
//     };
//     result.push(student);
//   }
//   return result;
// }
// console.log(GenderAndAge(student));

//! 
// function getTotalNameLength(students) {
//   let totalLength = 0;
//   for (let i = 0; i < students.length; i++) {
//     totalLength += students[i].ad.length + students[i].soyad.length;
//   }
//   return totalLength;
// }
// console.log(getTotalNameLength(student));

//! 23tersine cevirmek
// function revrse () {
//   for( let i = 0; i < student.length; i++) {
//     let name = student[i].ad;
//     let reverseName = name.split('').reverse().join('');
//     console.log(reverseName);
    
//   }
// }
// revrse();

//! 24  "gaming" həvəsi olan oyunun array-ini yaradın
// function gaming () {
//   let gamingstudent = [];
//   for( let i = 0; i < student.length; i++) {
//     if(student[i].hobbi?.indexOf("oyun") !== -1) {
//       gamingstudent.push(student[i]);
//     }
//   }
//   console.log(gamingstudent);
  
// }
// gaming();






