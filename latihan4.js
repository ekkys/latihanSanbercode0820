// LATIHAN LOOP

	// WHILE-LOOP

		//  Contoh 1 - Looping 1-9
		var flag = 1;
		console.log("<--- CONTOH 1 *while --->");
		while(flag < 10){ 					 //selama ini bernilai benar
			console.log('Iterasi ke-'+flag); // ini jalan
			flag++;							 // ini juga jalan				
		}
		console.log(" ");

		// Contoh 2 - Looping return angka total
		var deret = 5;
		var jumlah = 0;
		console.log("<--- CONTOH 2 *while --->");
		while(deret > 0){
			jumlah += deret;
			deret--;
			console.log("Jumlah saat ini:"+ jumlah);
			//5 9 12 14 15
		}
		console.log(" ");

	// FOR-LOOP

		//  Contoh 1 - Looping 1-9
		console.log("<--- CONTOH 1 *for --->");
		for (var angka = 1; angka < 10; angka++) {
			console.log("Iterasi ke-"+angka);
		}
		console.log(" ");

		// Contoh 2 - Looping return angka total
		console.log("<--- CONTOH 2 *for --->");
		console.log(" ");
		var jumlah = 0;
		for (var deret= 5; deret > 0  ; deret--) {
			jumlah += deret;
			console.log("Jumlah saat ini : " + jumlah);
		}
		//console.log("Jumlah terakhir:" +jumlah);



//LATIHAN ARRAY

var hobbies = ["coding", "cycling", "climbing", "skateboarding"] 
console.log(hobbies) // [ 'coding', 'cycling', 'climbing', 'skateboarding' ]
console.log(hobbies.length) // 4 

console.log(hobbies[0]) // coding
console.log(hobbies[2]) // climbing

// Mengakses elemen terakhir dari array
console.log(hobbies[hobbies.length -1]) // skateboarding



var feeling = ["dag", "dig"];
feeling.push("dug");
console.log(feeling);

feeling.pop();
console.log(feeling);

feeling.unshift("wow");
console.log(feeling);

feeling.shift();
console.log(feeling);


//Latihan


//.push()

var numbers = [0, 1, 2]
numbers.push(5)
		console.log(numbers) // [0, 1, 2, 3]

		// Bisa juga memasukkan lebih dari satu nilai menggunakan metode push
		numbers.push(4, 5)
		console.log(numbers) // [0, 1, 2, 3, 4, 5] 

//.pop()

var numbers = [0, 1, 2, 3, 4, 5]
numbers.pop() 
		console.log(numbers) // [0, 1, 2, 3, 4] 

		//satu doang yang ilang paling terakhir

//.shift
var numbers = [ 0, 1, 2, 3]
numbers.shift() //no parameetr
console.log(numbers) // [1, 2, 3] 


//.unshift

var numbers = [0, 1, 2, 3]
numbers.unshift(-1) 
numbers.unshift(-2) 
numbers.unshift(5) 
console.log(numbers) // [-1, 0, 1, 2, 3]
//sasak tambah depannya terus


//.sort()

 //1-10
 //asc nilai kecil ke besar

 var animals = ["kera", "gajah", "musang"] 
 animals.sort()
 console.log(animals) // ["gajah", "kera", "musang"]


//.slice()
var angka = [0, 1, 2, 3]
var irisan1 = angka.slice(1,4) 
console.log(irisan1) //[1, 2, 3]
var irisan2 = angka.slice(0,2)
console.log(irisan2) //[0, 1] 
var irisan3 = angka.slice(2);
console.log(irisan3); //[2,3]
var salinAngka = angka.slice();
console.log(salinAngka);



// .splice()


var fruits = [ "banana", "orange", "grape"]
//hapus orange
// fruits.splice(0,1); //(indeksmulai, jumlahyang ingin dihapus, nialiyang ditambah)
//hapus banana
// fruits.splice(0,1)
//hapus grape
fruits.splice(2,1);
console.log(fruits);



//.split()
var biodata = "name:john,doe" 
var name = biodata.split(":")
console.log(name) // [ "name", "john,doe"]


var title = ["my", "first", "experience", "as", "programmer"] 
var slug = title.join("-")
console.log(slug) // "my-first-experience-as-programmer"






