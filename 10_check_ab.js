// Logic Challenge - Check AB
// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

// Code
function checkAB(num) {
    var kata = num
    var temp = kata.split('') ; resultA = [] ; resultB = [] 
    var count = 0;
    for(let a=0; a<kata.length; a++){
        count++
        temp[a] = (kata[a] === 'a' ?  resultA.push(count) : 0) || (kata[a] === 'b' ?  resultB.push(count) : 0)
    }
    for(let a=0; a<resultA.length; a++){
        count = 0
        for(let b=0; b<resultB.length; b++){
            count = Math.abs(resultB[b] - resultA[a])
            if(count >= 3) return true
        }
    }
    return false
}

// TEST CASES
 console.log(checkAB('lane borrowed')); // true
 console.log(checkAB('i am sick')); // false
 console.log(checkAB('you are boring')); // true
 console.log(checkAB('barbarian')); // true
 console.log(checkAB('bacon and meat')); // false
 console.log(checkAB('baca'))