// Latihan 1

var sayHello = "Hello World!"
console.log(sayHello);


// Latihan 2 - Variable

var name = "John"  			//string
var angka = 12				//number
var todayIsFriday = false	///boolean

console.log(name)
console.log(angka)
console.log(todayIsFriday)

var items
console.log(items) // undefined karena tidak ada nilainya

// Latihan 3 - String

/*String adalah 
tipe data yang berisi karakter-karakter dibungkus dalam tanda petik ("" atau '' ). 
Karakter-karakter pada suatu string dapat diakses dengan menggunakan indeks 
atau posisi karakter berada. Indeks pada string selalu mulai dari 0.
*/

// String
var sentences = "Javascript"
console.log(sentences[0]); // J
console.log(sentences[1]); // a
console.log(sentences[2]); // a
console.log(sentences[3]); // a


/// String Properties
var word = "Javascript is awesome"
console.log(word.length) //21

/// String Methods

	/*.charAt([indeks])
	Mengembalikan karakter pada indeks yang diinginkan 
	*/

	console.log('iamastring'.charAt(0)) //i

	/*.concat([string])
	Menggabungkan beberapa string dan mengembalikannya menjadi string baru.
	*/

	var string1 = 'good ';
	var string2 = 'luck ';
	var string3 = 'Guys';

	console.log(string1.concat(string2, string3)); //goodluck
	

	/*.indexOf([string/karakter])
	Mengembalikan indeks dari string/karakter yang dicari, 
	yang pertama kali ditemukan, atau -1 apabila tidak ditemukan

	# memunculkan indeks kalau ada bernilai  ~sesuai urutan indeksnya
	# kalau tidak ada hasilnya -1
	# ngitungnya per kata atau perkarakter
	#tapi 
	*/

	var text ='dung dung ces!';

    console.log(text.indexOf('d')); 	// 0
    console.log(text.indexOf('dung')); 	// 0
    console.log(text.indexOf('n'));    	// 2
    console.log(text.indexOf('jreng')); // -1
    console.log(text.indexOf('!')); 	// 13
    console.log(text.indexOf('ces')); 	// 10


    /* .substring([indeks awal], [indeks akhir (optional)])

    Mengembalikan potongan string mulai dari indeks pada parameter pertama (indeks awal) 
    sampai dengan indeks pada parameter kedua (indeks akhir). 
    Bila parameter kedua tidak ditentukan, maka secara otomatis 
    berakhir pada karakter terakhir. 
    Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output

    Menampilkan karakter mulai dari indeks yang dimaksud
    */

    var car1 = 'Mochammad Mikrod';
    var car2 = car1.substr(10);
    console.log(car2); //Mikrod

    var car1 = 'Lykan Hypersport';
    var car2 = car1.substr(6);
    console.log(car2); // Hypersport 

    /*  .substr([indeks awal], [jumlah karakter yang diambil (optional)])
    Mendapatkan potongan string mulai dari indeks pada parameter pertama (indeks awal) 
    dengan jumlah indeks pada parameter kedua (jumlah karakter).
     Bila parameter kedua tidak ditentukan, maka secara otomatis berakhir pada karakter terakhir. 
    Karakter pada indeks yang ditentukan pada parameter kedua tidak diikutkan sebagai output.

    */

    var motor1 = 'zelda motor';
    var motor2 = motor1.substr(3, 3);
    console.log(motor2); //da

    /*.toUpperCase()
	Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kapital.
	*/
	var letter = 'This Letter Is For You';
	var upper  = letter.toUpperCase();
    console.log(upper); // THIS LETTER IS FOR YOU


    /*.toLowerCase()

    Mengembalikan string baru dengan semua karakter yang diubah menjadi huruf kecil	
    */
    var letter = 'This Letter Is For You';
    var lower  = letter.toLowerCase();
	console.log(lower); // this letter is for you

	/*
	.trim()
	Mengembalikan string baru yang  sudah dihapus karakter whitespace (” “) 
	pada awal dan akhir string tersebut.
	*/

	var username    = '          abc   administrator   bgg ';
	var newUsername = username.trim(); 
	console.log(newUsername) //  abc   administrator   bgg


//Mengubah tipe data dari dan ke String

/*
String([angka/array])

Fungsi global String() dapat dipanggil kapan saja pada program JavaScript 
dan akan mengembalikan data dalam tipe data String dari parameter yang diberikan.
*/

var int  = 12;
var real = 3.45;
var arr  = [6, 7, 8];

var strInt  = String(int);
var strReal = String(real);
var strArr  = String(arr);

console.log(strInt);  // '12'
console.log(strReal); // '3.45'
console.log(strArr);  // '6,7,8

/*
.toString()

Mengonversi tipe data lain menjadi string. 
Bila data tersebut adalah array, 
setiap nilai akan dituliskan dan dipisah dengan karakter koma.
*/

var number = 21;
console.log(number.toString()); // '21'
var array = [1,2];
console.log(array.toString());  // '1,2'

/*
Number([String])

Fungsi global Number() mengonversi tipe data string menjadi angka.
Data yang diberikan pada parameter harus berupa karakter angka saja, 
dengan titik (separator) bila angka adalah bilangan desimal. 
Bila parameter berisi karakter selain angka dan/atau titik,
 Number() akan mengembalikan NaN (Not a Number).
 */

var number1 = Number("90");   // number1 = 90
var number2 = Number("1.23"); // number2 = 1.23
var number3 = Number("4 5");  // number3 = NaN

console.log(number1);
console.log(number2);
console.log(number3);

/*
parseInt([String]) dan parseFloat([String])

Fungsi global parseInt([String]) dan parseFloat([String]) mengembalikan angka dari string. 
Bila angka adalah bilangan desimal maka gunakan parseFloat(),
bila tidak bilangan dibelakang koma akan diabaikan.
*/
var int  = '89';
var real = '56.7';
var strInt_1 = parseInt(int);  // strInt_1 = 89
var strInt_2 = parseInt(real); // strInt_2 = 56
var strReal_1 = parseFloat(int); // strReal_1 = 89
var strReal_2 = parseFloat(real); // strReal_2 = 56.7

console.log(strInt_1);
console.log(strInt_2);
console.log(strReal_1);
console.log(strReal_2);


// CONDITIONAL 

// * if/ else if / else

// contoh 1
if (true) {
	console.log("jalankan code")
}

// contoh 2
if (false) {
	console.log("code tidak dijalankan")
}

// contoh 3
var mood = "happy"
if (mood == "happy") {
	console.log("Hari ni aku bahagia!")
}


// contoh 4 - Branching Sederhana

var minimarketStatus = "Open"
if (minimarketStatus == "open") {
	console.log("saya akan membeli telur dan buah")
} else {
	console.log("minimarketnya tutup")
}

// contoh 5 - Branching dengan kondisi

var minimarketStatus = "close"
var minuteRemainingOpen = 5

if (minimarketStatus == "Open") {
	console.log("saya akan membeli telur dan buah")
}else if ( minuteRemainingOpen <=5 ) {
	console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
	console.log("minimarket tutup, saya pulang lagi")
}


// contoh 6 - conditioanal bersarang

var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout"

if (minimarketStatus == "open") {
	console.log("saya akan membeli telur dan buah")
	if (telur == "soldout" || buah == "soldout") {
		console.log("belanjaan saya tidak lengkap")  
	}else if (telur == "soldout") {
		console.log("telur habis")
	}else if (buah == "soldout") {
		console.log("buah habis")
	}else{
		console.log("minimarket tutup saya pulang")
	}
}

// switch case

var buttonPushed = 1;

switch(buttonPushed){
	case 1: {console.log('matikan TV!'); break;}
	case 2:   { console.log('turunkan volume TV!'); break; }
	case 3:   { console.log('tingkatkan volume TV!'); break; }
	case 4:   { console.log('matikan suara TV!'); break; }
	default:  { console.log('Tidak terjadi apa-apa'); }
}
