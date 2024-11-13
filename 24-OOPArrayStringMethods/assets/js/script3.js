//!  
// class Person {
//   constructor(ad, yas) {
//     this.ad = ad;
//     this.yas =yas;
//   }

//   tanitmaq() {
//     console.log(`adim ${this.ad}, ${this.yas} yasim var.`);
    
//   }
// }

// class Student extends Person {
//   constructor(ad, yas, sinif) {
//     super(ad, yas);
//     this.sinif = sinif
//   }

//   tanitmaq() {
//     super.tanitmaq();
//     console.log(`${this.sinif} kursda oxuyuram.`);
    
//   }
// }


// class Teacher extends Person {
//   constructor(ad, yas, fenn) {
//     super(ad, yas);
//     this.fenn = fenn;
//   }

//   tanitmaq() {
//     super.tanitmaq();
//     console.log(`${this.fenn} tedris edirem.`);
    
//   }
// }

// const idris = new Student("idris", 19, 3);
// idris.tanitmaq();

// const Seid = new Teacher("Seid", 35, "Front-end");
// Seid.tanitmaq();