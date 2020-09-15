//  1. map() :method ini membuat array baru dengan hasil pemanggilan fungsi yg disediakan pada setiap elemen dalam array ini
// const arr = [1,2,3,4,5,6];
// const mapped = arr.map(Element => Element + 10);
// console.log(mapped);

// 2. filter() :method ini membuat larik baru dengan hanya elemen yang meneruskan kondisi didalam fungsi yang disediakan
// const arr = [1,2,3,4,5,6];
// const filtered = arr.filter(Element => Element === 2 || Element === 4);
// console.log(filtered);

// 3. concat() :method ini digunakan untuk menggabungkan dua atau lebih array dan mengembalikan array baru, tanpa mengubah array yang sudah ada
// const arr1 = ["j", "k", "l"];
// const arr2 = ["m", "n", "o"];
// console.log(arr1.concat(arr2));

// 4. every() :method ini memeriksa setiap elemen  dalam larik yang melewati kondisi, mengembalikan benar atau salah
//all elements are less than 8
// const arr = [1,2,3,4,5,6];
// const lessFive = arr.every(num => num < 8);
// console.log(lessFive);

// 5. includes() : method ini memeriksa apakah sebuah array menyertakan elemen yang melewati kondisi tersebut, mengembalikan benar atau salah 
// const arr = [1,2,3,4,5,6];
// console.log(arr.includes(2));
// console.log(arr.includes(8));

// 6. find() :method ini mengembalikan nilai element pertama dalam larik yang lulus pengujian dalam fungsi pengujian.
// const arr = [1,2,3,4,5];
// const found = arr.find(Element => Element > 2);
// console.log(found);

// 7. findIndex() :method ini mengembalikan index element pertama dalam larik yang lulus pengujian dalam fungsi pengujian.
// const arr = ["apple", "banana", "orange"];
// const indexFinder = arr.findIndex(Element => Element === "banana");
// console.log(indexFinder);

//8. reverse() :method ini digunakan untuk membalikkan elemen pada index 0 akan menjadi yang terkahir.
// const arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

//9. push() :method ini menambahkan satu atau lebih elemen ke akhir larik dan mengembalikan panjang larik yang baru
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits.push("peach"));
// console.log(fruits);

//10. join() : method ini mengembalikan string baru dengan menggabungkan semua elemen array yang dipisahkan oleh pemisah yang sudah ditentukan
const arr = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
console.log(arr.join(''));

