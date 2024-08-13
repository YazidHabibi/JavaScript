// Tugas Bag 1 nomor 1
const person = {
    name: "Yazid",
    umur: 15,
    address: {
        kota: "Jakarta",
        negara: "Indonesia"
    },
};
// Tugas Bag 1 nomor 2

// Menggunakan Brekcket 
console.log(person.address.negara);
person['name'] = "habibi"
console.log(person.name);

console.log(person.umur);
person['umur'] = 16
console.log(person['umur']);

// Menggunakan dot

console.log(person.name);
person.name = "tambunan"
console.log(person.name);

console.log(person.umur);
person.umur = 17
console.log(person.umur);


// Tugas Bag 1 nomor 3
delete person.city;
console.log(person.city);


// Tugas Bag 2 Nomor 1
const {name:n, umur:u, } = person;
console.log(n,u);

// Tugas Bag 2 Nomor 2
const {name:userName, umur:userAge} = person;
console.log(userName, userAge);


// Tugas Bag 3  Nomor 1
class Buku {
    constructor(title, author, penulis) {
        this.title = title;
        this.author = author;
    }
    getDetails() {
        return `This is ${this.title}, a ${this.author}.`;
    }
    updateAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
const mybook = new Buku("Javascript Essentials","Jane Doe")
console.log(mybook.getDetails());

// Tugas Bag 3 Nomor 2
mybook.updateAuthor("Habibie");

console.log(mybook.getDetails());
