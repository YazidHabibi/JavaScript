//Latihan Soal LOOP

//Tugas Gambar 1
var day = "Minggu"

switch (day) {
  case "Senin":
    var jenis = "weekday";
    break;

  case "Selasa":
    var jenis = "weekday";
    break;

  case "Rabu":
    var jenis = "weekday";
    break;

  case "kamis":
    var jenis = "weekday";
    break;

  case "Jumat":
    var jenis = "weekday";
    break;

  case "Sabtu":
    var jenis = "weekend";
    break;

  case "Minggu":
    var jenis = "Weekend";
    break;

  default:
    "Gak Tau Hari Apa";
    break;
}
console.log(jenis);


// Tugas Gambar 2

for (let i = 1; i <= 15; i++) {
    // Kelipatan 3 dan 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");

      //Kelipatan 3
    } else if (i % 3 === 0) {
      console.log("Fizz");

    //   Kelipatan 5
    } else if (i % 5 === 0) {
      console.log("Buzz");

    } else {
      console.log(i);
    }
  }


//   Tugas Gambar 3

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Tugas Gambar Terakhir  (4) 

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
      console.log("Multiple Of 3: " + i);
    }
  }