// Logic Challenge - Hitung Huruf
// Problem
// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

// Code
function hitungHuruf(kata) {
    const data = kata.toLowerCase().split(' ')
    var result = []

    for (let a = 0; a < data.length; a++) {
        temp = []
        for (let b = 0; b < data[a].length; b++) {
            count = 0
            for (let c = 0; c < data[a].length; c++) {
                if (data[a][b] == data[a][c]) {
                    count++
                    temp.push(data[a])
                }
            }
            if (count > 1) result.push(temp)
        }
    }   
   return (result.length != 0 ? result[0][0] : `Nothing match`)
}

// // TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
console.log(hitungHuruf('belajar dari pengalaman')); // belajar
console.log(hitungHuruf('abcd efgh mnop ijkl')); // 