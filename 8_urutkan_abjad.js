// Logic Challenge - Mengurutkan Abjad
// Problem
// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

// Code
// Solution 1
// function urutkanAbjad(str) {
//   str = str.split('').sort()
//  return str.join('')
// }

// Solution 2
function urutkanAbjad(str) {
    var result = ''
    var alpha = 'abcdefghijklmnopqrstuvwxyz'

    for (let a = 0; a < alpha.length; a++) {
        for (let b = 0; b < str.length; b++) {
            if (str[b] == alpha[a]) result += alpha[a]
        }
    }
    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'