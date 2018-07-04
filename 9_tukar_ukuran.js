// Logic Challenge - Tukar Besar Kecil
// Problem
// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

// Code
function tukarBesarKecil(kalimat) {
  var result = ''
  for(let a=0; a<kalimat.length; a++){
      result += (kalimat[a] == kalimat[a].toUpperCase() ? kalimat[a].toLowerCase() : kalimat[a].toUpperCase())
  }
  return result
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"