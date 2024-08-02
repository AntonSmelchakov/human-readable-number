module.exports = function toReadable(number) {

    let prepStr = `${number}`
    let prepAr = prepStr.split('').reverse()
    let newAr = []

    let simple = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['empty', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    console.log(newAr)

    for (let i = 0; i < prepAr.length; ++i) {
        if (number === 0) newAr.push('zero')
        else if (prepAr[i] === '0') newAr.push('')
        else if (i % 2 === 0) {
            newAr.push(simple[+prepAr[i] - 1])
            if (i !== 0) newAr[i] = `${newAr[i]} hundred`
        }
        else if (prepAr[i] === '1') {
            newAr[i - 1] = ''
            newAr.push(teen[+prepAr[i - 1]])
        }
        else {
            newAr.push(tens[+prepAr[i] - 1])
        }
    }

    return newAr.reverse().join(' ').trim().replaceAll('  ', ' ')


}
