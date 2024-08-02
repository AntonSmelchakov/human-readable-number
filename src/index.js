//module.exports = function toReadable() {

let number = 310
let prepStr = `${number}`
let prepAr = prepStr.split('').reverse()
let newAr = []

let simple = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let tens = ['empty', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let big = ['hundred']

console.log(newAr)

for (let i = 0; i < prepAr.length; ++i) {
    if (prepAr[i] === '0') true
    else if (i % 2 === 0) {
        newAr.push(simple[+prepAr[i] - 1])
        console.log(newAr)
    }
    else if (prepAr[i] === '1') {
        newAr[i - 1] = ''
        newAr.push(teen[+prepAr[i - 1]])
        console.log(newAr)
    }
    else {
        newAr.push(tens[+prepAr[i] - 1])
        console.log(newAr)
    }
}

newAr[2] = `${newAr[2]} hundred`

console.log(newAr.reverse().join(' '))
return newAr.reverse().join(' ')


//}
