//Praktek Nomor 1

const pengunjung = 5;
if (pengunjung>=5) {
    console.log("Harus membayar tiket penuh");
} else if (pengunjung >=2 && pengunjung <5) {
    console.log("Bayar setengah harga");
} else if (pengunjung <2) {
    console.log("Tidak boleh masuk");
}

//praktek nomor 2

const usia = 28
if (usia >= 18 ) {
    console.log("Sudah Berhak Dapat SIM");
} else {
    console.log("Belum Berhak Dapat SIM");
}

//Praktek nomor 3
const angka = 0
if (angka == 0) {
    console.log("Netral");
} else if (angka <0) {
    console.log("Negative");
} else if (angka >0) {
    console.log("Positive");
}

//praktek nomor 4
var x = -10
var y = -10

if (x > 0 && y > 0) {
    console.log("kanan atas");
} else if (x < 0 && y <0) {
    console.log("kiri bawah");
} else if (x > 0 && y <0) {
    console.log("kanan bawah");
} else if (x < 0 && y > 0) {
    console.log("kiri atas");
}

//praktek nomor 5 

const pembelian = 190
if (pembelian >=200 ) {
    console.log("Diskon 15% diterapkan");
   var discon = 0.15*pembelian
   var totalharga = pembelian-discon
   console.log(totalharga);

} else if (pembelian >=100 && pembelian <200) {
    console.log("Diskon 10% diterapkan");
    var discon2 = 0.10*pembelian
    var totalharga2 = pembelian-discon2
    console.log(totalharga2);

} else if (pembelian <100) {
    console.log("Tidak Mendapat Diskon");
}

//Praktek nomor 6
const umur = 18
if (umur >= 18) {
    console.log("Registrasi Berhasil");
} else {
    console.log("Registrasi Gagal");
}