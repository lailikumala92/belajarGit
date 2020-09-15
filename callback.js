// function user(name, greeting, callback) {
//     return callback(name, greeting);
// }

// let cetak = user('reza', 'hay ', function(name, greeting) {
    
// const nama = ['abigail', 'alexandra', 'alison',
// 'amanda', 'angela', 'bela',
// 'carol', 'caroline', 'carolyn',
// 'deirdre', 'diana', 'elizabeth',
// 'ella', 'faith', 'olivia', 'penelope']

// console.log(nama[1], nama[3], nama[4]);
//     return greeting + name;
// });
// console.log(cetak);

// function user(nama, index, callback) {
//     return callback(nama, index);
// }

// let searchName = user(
//             [
//             'abigail', 'alexandra', 'alison',
//             'amanda', 'angela', 'bela',
//             'carol', 'caroline', 'carolyn',
//             'deirdre', 'diana', 'elizabeth',
//             'ella', 'faith', 'olivia', 'penelope'
//         ],
//         index, 
//         function(name, greeting) {
//             return greeting + name;
//         });
//         console.log(cetak);
// )




// // const name = [
// //     'abigail', 'alexandra', 'alison',
// //     'amanda', 'angela', 'bela',
// //     'carol', 'caroline', 'carolyn',
// //     'deirdre', 'diana', 'elizabeth',
// //     'ella', 'faith', 'olivia', 'penelope'
// // ]
// //conth
// //searchName("an", 3, callback)
// //output
// //["alexandra", "amanda", "angela"]


// let seleksiNilai = (awal, akhir, data)=> {
//     if(typeof  awal == 'number' && typeof akhir == 'number') {
//         if(awal < akhir ) {
//             console.log('benar');
//             if( data.length < 5) {
//                 console.log('benar');
//             } else i
//         } else {
//             console.log('nilai akhir harus besar');
//         }
        


//     } else {
//         console.log("data harus benar");
//     }
// }
// seleksiNilai(0,1,[8,7,8,8,0])

// let seleksiNilai = (awal, akhir, data)=> {
//     if(typeof  awal == 'number' && typeof akhir == 'number') {
//         if(awal < akhir) {
//             if(data.length > 5) {
//                 const point = data;
//                 point.sort(function(a,b) {return a - b });
//                 // console.log(point);
//                 const filtered = point.filter(Element => Element >= awal && Element <= akhir);
//                 console.log(filtered);
//             } else {
//                 console.log('jumlah dalam data array harus lebih dari 5');
//             }
//         } else {
//             console.log('nilai akhir harus besar dari nilai awal');
//         }
//     } else {
//         console.log('data harus benar');
//     }
// }
// // seleksiNilai(2,6,[4,7,2,1,3,10])
// seleksiNilai(4,9,[10,8,5,1,3,11])


// const arr = ["apple", "banana", "orange"];

// const indexFinder = arr.findIndex(Element => Element === arr[]);
// console.log(indexFinder);


const name = ['abigail', 'alexandra', 'alison',
                        'amanda', 'angela', 'bela',
                        'carol', 'caroline', 'carolyn',
                        'deirdre', 'diana', 'elizabeth',
                        'ella', 'faith', 'olivia', 'penelope']

let newName = []
function serachName (findName, maxArr, callback) {
    let regEx = new RegExp(findName, 'i')
    for(let i =0; i<name.length; i++) {
        if(regEx.test(name[i]) === true) {
            newName.push(name[i])
        }
    }
    callback(newName.splice(0, maxArr))
}
function callback(text) {
    console.log(text);
}
serachName('an', 3, callback)
// console.log(nama[1], nama[3], nama[4]);
// function filter(q) {
//     return name.filter(function(abjad){
//         if(abjad === 1) {
//             console.log('no valid');
//         } else {
//             name.splice(name, 0);
//         }
//         return abjad.toLowerCase().indexOf(q.toLowerCase() >= 0)
//     });
// }
// console.log(filter('an'));

