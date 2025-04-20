document.writeln("bagian ini ditulis dalam file module3.js");

document.write("<h3>Variable</h3>")
let nama = "Maulana F"; //menyimpan teks (string) untuk variable yang nilainya bisa berubah
const umur = 24; //menyimpan angka (number) untuk variable yang nilainya tidak bisa berubah
var hobi = "Mendengarkan Musik"; //menyimpan teks (string) fungsi nya sama seperti let tapi lebih kuno

document.write("<p>Nama : " + nama + "</p>");
document.write("<p>Umur : " + umur + "</p>");
document.write("<p>Hobi : " + hobi + "</p>");

document.write("<h3>Tipe Data</h3>")

//Tipe data: String
let teks = "Hello World!"; //string
let angka = 10; //number
let benar = true; //boolean
let salah = false; //boolean
let kosong = null; //null
let undefineds; //undefineds
let mahasiswa = {
    nama: "Maulana F",
    umur: 24,
} //object yang menyimpan data mahasiswa

// Menampilkan nilai tipe data di halaman
document.write("<p>String : " + teks + "</p>");
document.write("<p>Number : " + angka + "</p>");
document.write("<p>Boolean : " + benar + "</p>");
document.write("<p>Boolean : " + salah + "</p>");
document.write("<p>Null : " + kosong + "</p>");
document.write("<p>Undefined / tidak didefinisikan : " + undefineds + "</p>");
document.write("<p>Mahasiswa:" + JSON.stringify(mahasiswa) + " </p>");

//Tipe Numerik: Bilangan bulat (integer)
document.write("<h3>Tipe Numerik</h3>");

let bilanganBulat = 100; //bilangan bulat
let bilanganOktal = 0o12; //bilangan oktal (base 8) setara dengan 10 dalam desimal
let bilanganHexadesimal = 0x2F; //bilangan hexadesimal (base 16) setara dengan 47 dalam desimal
//penambahan o dan x setelah angka 0 menunjukkan bahwa angka tersebut ditulis dalam format bilangan oktal (0o) atau heksadesimal (0x)
document.write("<p>Bilangan Bulat : " + bilanganBulat + "</p>");
document.write("<p>Bilangan Oktal : " + bilanganOktal + "</p>");
document.write("<p>Bilangan Hexadesimal : " + bilanganHexadesimal + "</p>");

//Tipe Numerik: Bilangan Pecahan (Float)
document.write("<h3>Tipe Numerik: Bilangan Pecahan (Float)</h3>");
let bilanganPecahan = 3.14; //bilangan pecahan (float)
let bilanganIlmiah = 1.23456E+3; //bilangan ilmiah (scientific notation), bilangand engan notasi ilmiah (1.23456 x 10^3)
let bilanganIlmiahNegatif = 1.23456E-3; //bilangan ilmiah negatif (1.23456 x 10^-3)
//bilangan ilmiah negatif menunjukkan bilangan yang lebih kecil dari 1
//misalnya 1.23456E-3 = 0.00123456
document.write("<p>Bilangan Pecahan : " + bilanganPecahan + "</p>");
document.write("<p>Bilangan Ilmiah : " + bilanganIlmiah + "</p>");
document.write("<p>Bilangan Ilmiah Negatif : " + bilanganIlmiahNegatif + "</p>");

document.write("<h3>String</h3>");

let salam = "Selamat Pagi"; //string
nama = "Maulana F"; //string
document.write(salam + ", " + nama + "<br>"); //menampilkan string dengan menggabungkan dua string
document.write("Panjang string : " + salam.length + "<br>"); //menampilkan panjang string

// Boolean

document.write("<h3>Boolean</h3>");
let isLogin = true; //true berarti sudah login
let isBayar = false; //false berarti belum bayar

document.write("Status Login : " + isLogin + "<br>");
document.write("Status Bayar : " + isBayar + "<br>");
document.write("Status Login : " + (isLogin ? "Sudah Login" : "Belum Login") + "<br>"); //menampilkan status login dengan operator ternary
document.write("Status Bayar : " + (isBayar ? "Sudah Bayar" : "Belum Bayar") + "<br>"); //menampilkan status bayar dengan operator ternary

// ==================
// Operator aritmatika
// Digunakan untuk melakukan operasi matematika dasar seperti penjumlahan, pengurangan, perkalian, pembagian, dan modulus atau sisa hasil bagi dari dua bilangan.
// ==================

document.write("<h3>Operator Aritmatika</h3>");
let a = 10,
    b = 3; //bilangan bulat

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("<br>");
document.write("Penjumlahan : " + (a + b) + "<br>"); //penjumlahan
document.write("Pengurangan : " + (a - b) + "<br>"); //pengurangan
document.write("Perkalian : " + (a * b) + "<br>"); //perkalian
document.write("Pembagian : " + (a / b) + "<br>"); //pembagian
document.write("Modulus : " + (a % b) + "<br>"); //modulus
document.write("Pangkat : " + (a ** b) + "<br>"); //pangkat (exponentiation)
document.write("<br>");
document.write("Increment a++ : " + (a++) + "<br>"); //increment (menambah 1)
document.write("a = " + a + "<br>"); //menampilkan nilai a setelah increment
document.write("Decrement b--: " + (b--) + "<br>"); //decrement (mengurangi 1)
document.write("b = " + b + "<br>"); //menampilkan nilai b setelah increment
document.write("<br>");
document.write("a = " + a + "<br>"); //menampilkan nilai a setelah increment
document.write("Increment ++a: " + (++a) + "<br>"); //increment (menambah 1)
document.write("b = " + b + "<br>"); //menampilkan nilai b setelah increment
document.write("Decrement --b: " + (--b) + "<br>"); //decrement (mengurangi 1)
document.write("<br>");
document.write("<p>Nilai akhir a dan b</p>");
document.write("b = " + b + "<br>"); //menampilkan nilai b setelah increment
document.write("a = " + a + "<br>"); //menampilkan nilai a setelah increment
