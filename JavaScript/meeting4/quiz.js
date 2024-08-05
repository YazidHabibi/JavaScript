//Quiz gambar 1

var nilai = 80
var kehadiran = 20
var totalpertemuan = 25
var presentasekehadiran = kehadiran/totalpertemuan*100

//Kategori Nilai A
if (nilai > 85) {
 console.log("Kategori A");
  if (presentasekehadiran >= 75) {
    console.log("Lulus");
  } else{
    console.log("tidak lulus");
  }
//Kategori Nilai B
} else if (nilai >70 && nilai <=85) {
    console.log("Kategori B");
    if (presentasekehadiran >75) {
        console.log("Lulus");
    }else {
        console.log("Tidak Lulus");
    }
//Kategori Nilai C
}  else if (nilai >=50 && nilai <=70) {
    console.log("Kategori C");
    if (presentasekehadiran >75) {
        console.log("Lulus");
    }else {
        console.log("Tidak Lulus");
    }
//Kategori Tidak lulus
} else if (nilai <50) {
    console.log("Tidak Lulus");
    if (presentasekehadiran >75) {
        console.log("Lulus");
    }
}

//Quiz Gambar 2 
var pendaftaran = -1
var pembayaran = -1

if (pendaftaran >0) {
    if (pembayaran >0) {
        console.log("Dapat Mengikuti Kursus");       
       }else {
        console.log("Tidak Dapat Mengikuti Kursus");
        
       }
}else {
    console.log("Tidak dapat Mendaftar");
    
}

