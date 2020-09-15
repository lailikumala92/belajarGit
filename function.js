const nama = 'anjas'
//function
function mengambilNama(aha) {
    console.log('nama', aha);
}

//function expression
const mengambilNama = function(nama) {
    console.log('nama', nama);
}

const mengambilNama =(nama) => {
    console.log('nama', nama)
}

const mengambilNama =(nama) => console.log('nama', nama)

mengambilNama(nama)