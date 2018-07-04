function countProfit(shoppers) {
    if(shoppers.length == 0) return []
    var result = []

    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1],
    ];
    var result = []
    for (let b = 0; b < listBarang.length; b++) {
        var count = 0
        temp = {}
        temp.product = listBarang[b][0]
        temp.shoppers = []
        temp.leftOver = listBarang[b][2]

        for (let a = 0; a < shoppers.length; a++) {
            if (shoppers[a].product == listBarang[b][0] && temp.leftOver >= shoppers[a].amount) {
                temp.shoppers.push(shoppers[a].name)
                count += shoppers[a].amount
                temp.leftOver -= shoppers[a].amount
                temp.totalProfit = count * listBarang[b][1]
            }
        }
        result.push(temp)
    }
    return result
}



console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 }, { name: 'Devi', product: 'Baju Zoro', amount: 1 }, { name: 'Lisa', product: 'Baju Zoro', amount: 1 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([]))