// // Latihan INHERITANCE

// class human{
//     constructor(nama, umur) {
//       this.nama = nama;
//       this.umur = umur;
//     }
  
//     tidur() {
//       return `${this.nama} sedang tidur`;
//     }
  
//     makan() {
//       return `${this.nama} sedang makan`;
//     }
//   }
  
//   class Pelajar extends Orang {
//     constructor(nama, umur, namaSekolah) {
//     super(nama, umur);
//     this.namaSekolah = namaSekolah
//     }
//     belajar(){
//       return `${this.nama} belajar di ${this.namaSekolah}` ;
//     }
//   }
//   let user = new Pelajar("yazid",16,"abudzar");
//   console.log(user.nama);

//   // polymorphism 

//   class Hewan {
//   constructor(nama) {
//     this.nama = nama;
//   }

//   makan() {
//     return "Hewan sedang makan";
//   }
// }


// class Harimau extends Hewan {
//   constructor(nama) {
//     super(nama)
//   }
//   suara() {
//     return `${this.nama} makan daging`
//   }
// }
// let harimausumatra = new Harimau("Harimau Sumatra")
// console.log(harimausumatra.makan())


// Soal Gambar 1

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
   return `${this.brand} Is Starting`
  }
}

class Car extends Vehicle  {
  constructor(brand,model) {
    super(brand); 
    this.model = model;
    
  }
  start() {
    return `${this.model} Is Starting`
  } 
}

let Mobil = new Car ("Avanza", "BMW")
console.log(Mobil.start());



// Soal Gambar 2

class Shape {
  
  draw() {
    return "Drawing  Shape"
  }
}

class Rectangle extends Shape {
  draw() {
    return "Drawing Rectangle "
  }
}

let Gambar = new Rectangle
console.log(Gambar.draw());

// Soal Gambar 3

class Person {
  constructor(name) {
    this.name = name
  }
  introduce(){
    return ` Hi, my name is ${this.name}`
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  
  introduce() {
    return ` Hi, my name is ${this.name}, I am an ${this.position}`
  }
}

class Manager extends Employee{
  constructor(name, position) {
    super(name, position);

}
    introduce() {
   return ` Hi, my name is ${this.name}, I am an ${this.position}, and i manage a team `
      
    }
  }

  let nama = new Person ("Kibooy", "Chef")
  console.log(nama.introduce());

  let posisi = new Employee ("kibooy", "Chef")
  console.log(posisi.introduce());

  let pemilik = new Manager ("Kibooy", "Chef")
  console.log(pemilik.introduce());
  





