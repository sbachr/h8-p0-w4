// Logic Challenge - Faktor Persekutuan Terbesar
// Problem
// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

// Code
function fpb(angka1, angka2) {
    const minMatch = Math.min(angka1, angka2)
    var result = []

    for (let a = 0; a <= minMatch; a++) {
        if (angka1 % a == 0 && angka2 % a == 0) {
            result.push(a)
        }
    }
    return result[result.length-1]
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1