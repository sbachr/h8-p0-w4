// Logic Challenge - Most Frequent Largest Numbers
// Problem
// Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    for (let a = 0; a < arrNumber.length; a++) {
        for (let b = a + 1; b < arrNumber.length; b++) {
            if (arrNumber[a] > arrNumber[b]) {
                const temp = arrNumber[a]
                arrNumber[a] = arrNumber[b]
                arrNumber[b] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    if(arrNumber.length == 0) return `''`
    var num = arrNumber
    var result = []

    for(let a=0; a<num.length; a++){
        count = 0
        count1 = 0; count2 = 0;
        for(let b=1; b<num.length; b++){
            if( num[a] == num[b]) count ++;
            count1 = count
        }
        if(count1>count2) {
            count2 = count1
            result = num[a]
        }
    }
    if(count2 === num.length-1) count2 += 1
    return `angka paling besar adalah ${result} dan jumlah kemunculan sebanyak ${count2} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''