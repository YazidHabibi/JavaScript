// Skilvul Encapsulation

class Pelajar { 
    constructor(nama, sekolah) {
        var _nama = nama;
        var _sekolah = sekolah;

        this.setNama = function(nama) {
             _nama = nama;
        }
        
        this.setSekolah = function(sekolah) {
            _sekolah = sekolah;
        }

        this.getNama = function() {
            return _nama;
        }        
        
        this.getSekolah = function() {
            return _sekolah;
        }
    }

    belajar() {
        return `${this.getNama()} belajar di ${this.getSekolah()}`
    }
}

let pelajar = new Pelajar ("Alpha", "Skilvul")
console.log(pelajar.belajar())

// Skilvul Abstraction

class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    
    luas() {
        var hasil = this.panjang*this.lebar;
        return hasil
    }

    keliling() {
        var hasil = 2*this.panjang + this.lebar
        return hasil;
    }
}

let persegiPanjang = new PersegiPanjang (4,3)
console.log(persegiPanjang.keliling())
console.log(persegiPanjang.luas())

// Tugas 1 

class Mobil {
    constructor(merk, tahun) {
        var _merk = merk;
        var _tahun = tahun;

    this.setMerk = function(merk) {
        _merk = merk;}

    this.setTahun = function(tahun) {
        _tahun = tahun;}

    this.getMerk = function() {
        return _merk;}

    this.getTahun = function() {
        return _tahun;}
    }
}

let mobil = new Mobil ("BMW",10)
console.log(mobil.getTahun());

// tugas 2
class Pesawat {
    constructor(jenis, kecepatan){
        var _jenis = jenis;
        var _kecepatan = kecepatan;
    }

    terbang() {
        return 'Pesawat sedang terbang'
    }
}

class Jet extends Pesawat {
    constructor(jenis, kecepatan, kapasitasBahanBakar) {
        super(jenis, kecepatan);
        var _kapasitasBahanBakar = kapasitasBahanBakar;
    }
    isiBahanBakar() {
        return 'isi bahan bakar'
    }
}

let pesawat = new Jet ('boeing 7710', 100000)
console.log(pesawat.terbang());

// Tugas 3

class Karyawan {
    constructor(nama, gaji, jabatan) {
        var _nama = nama;
        var _gaji = gaji;
        var _jabatan = jabatan;
        console.log(_jabatan);
        

        this.setNama = function(nama) { 
            _nama = nama;    
        } 

        this.setGaji = function(gaji) {
            _gaji = gaji;
        }

        this.setJabatan = function(jabatan) {
            _jabatan = jabatan;
        }

        this.getNama = function() {
            return _nama
        }

        this.getGaji = function() {
            return _gaji
        }

        this.getJabatan = function() {
            return _jabatan;
        }
    }
}

class Manajer extends Karyawan {
    constructor(nama,gaji,jabatan){
        super(nama,gaji,jabatan)
        
        
    }
    beriTunjangan() {
        return `${this.getGaji()}`
    }
}

let manajer = new Manajer ('UDIN', 100, 'BOS')
console.log(manajer.beriTunjangan());

// Tugas Nomor 4

class Kendaraan {
    constructor(kecepatan){
        var _kecepatan = kecepatan;

        this.setKecepatan = function(kecepatan) {
            _kecepatan = kecepatan}

        this.getKecepatan = function() {
            if (_kecepatan >0 ) {
                return _kecepatan;
            }
            return _kecepatan
        }
    }
}

let kendaraan =  new Kendaraan (100,50)
console.log(kendaraan.getKecepatan());
kendaraan.setKecepatan(-60  )
console.log(kendaraan.getKecepatan());
// tugas nomor 5

class AkunBank {
    constructor(saldo,) {
        var _saldo = saldo;

    this.setSaldo = function(saldo) {
        _saldo = saldo
    }

    this.getSaldo = function(){
        if(_saldo < 0) {
            _saldo = 0
            return `Saldo tidak dapat di set dibawah 0, Saldo : 0`
        } else {
            return _saldo
        }
    }

    }
    
}

let akunbank = new AkunBank (10)
console.log(akunbank.getSaldo());
akunbank.setSaldo(1)
console.log(akunbank.getSaldo());

akunbank.setSaldo(-9)
console.log(akunbank.getSaldo());

// tugas nomor 6

class Perusahaan {

    constructor(nama, gaji) {
        var _nama = nama;
        var _gaji = gaji;
    

    this.setNama = function (nama) {
        _nama = nama
    }

    this.getNama = function () {
        return _nama  
    }

    this.setGaji = function (gaji) {
        _gaji = gaji;
    }

    this.getGaji = function() {
       return _gaji;
    }
 }
} 

class Manager extends Perusahaan {
    constructor(nama, gaji) {
        super(nama, gaji);
    }

    buatLaporan() {
        return  ` Nama Karyawan: ${this.getNama()}, Gaji: ${this.getGaji()}`;
    }
}

let jabatan = new Manager('Budi', 10000000);
console.log(jabatan.buatLaporan()); 

jabatan.setNama('Altop')
jabatan.setGaji(20000000)
console.log(jabatan.buatLaporan());
