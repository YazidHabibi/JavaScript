// Soal 1
const identity   = ['Yazid', '15', 'Permata Bintaro']
console.log(identity);

// Soal 2
identity[0] = 'Habibi Tambunan'
console.log(identity);

// Soal 3
identity.splice(1,1);
console.log(identity);

delete identity[0]
console.log(identity);


// Soal 4
const angka1 = [1,2,3]
const angka2 = [4,5,6]  
const angka3 = angka1.concat(angka2)
console.log(angka3);

// Soal 5
console.log(identity.indexOf('Permata Bintaro'));

// soal 6
const numbers =  [34, 7, 23, 32, 5];
numbers.sort(function(a,b) {return a-b;});
console.log(numbers);

// Soal 7
console.log(numbers.length);