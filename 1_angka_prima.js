// Logic Challenge - Angka Prima
// Problem
// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

// Code
function angkaPrima(angka) {
    for(let a=0; a<=angka; a++){
        result = (a>=2 && a<=5 && a!=4 || a>=3 && a%2!=0 && a%3!=0 && a%5!=0 ? true : false)
    }
    return result
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false