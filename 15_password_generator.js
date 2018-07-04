// Logic Challenge - Password Generator
// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

// function changeVocals(str) {
//     let vocal  = 'aiueoAIUEO'
//     let change = 'bjvfpBJVFP'
//     var result = str.split('')

//     for (let a = 0; a < str.length; a++) {
//         for (let b = 0; b < vocal.length; b++) {
//             if (str[a] === vocal[b]) {
//                 result[a] = (change[b])
//             }
//         }
//     }
//     return result.join('')
// }

// function reverseWord(str) {
//     let result = ''
//     for(let a=0; a<str.length; a++){
//         result = str[a] + result
//     }
//     return result
// }

// function setLowerUpperCase(str) {
//     var result = ''
//     for(let a=0; a<str.length; a++){
//         if(str[a] == str[a].toLowerCase()){
//             result += str[a].toUpperCase()
//         } else { result += str[a].toLowerCase()}
//     }
//     return result
// }

// function removeSpaces(str) {
//     var result = ''
//     for(let a=0; a<str.length; a++){
//         if(str[a] == ' '){
//             result += ''
//         } else (result += str[a])
//     }
//     return result
// }

// function passwordGenerator(name) {
//     if(name.length < 5) return `Minimal karakter yang diinputkan adalah 5 karakter`
//     var vocals     = changeVocals(name)
//     var reverse    = reverseWord(vocals)
//     var lowerUpper = setLowerUpperCase(reverse)
//     var space      = removeSpaces(lowerUpper)
//     return space
// }

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// make more short
function changeVocals(str) {
    let vocal = 'aiueoAIUEO'; let change = 'bjvfpBJVFP'
    var result = str.split('')

    for (let a = 0; a < str.length; a++) {
        for (let b = 0; b < vocal.length; b++) {
            if (str[a] === vocal[b]) result[a] = change[b]
        }
    }
    return result
}

function reverseWord(str) {
    return str.reverse().join('');
}

function setLowerUpperCase(str) {
    var result = ''
    for (let a = 0; a < str.length; a++) {
        result += (str[a] == str[a].toLowerCase()) ? str[a].toUpperCase() : str[a].toLowerCase()
    }
    return result
}

function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

function passwordGenerator(name) {
    var space = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    return name.length < 5 ? `Minimal karakter yang diinputkan adalah 5 karakter` : space
}