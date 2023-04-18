const palindromes = function (str) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //Filter non-letters
    let toFil = str.toLowerCase().split('');

    let filtered = toFil.filter(char => letters.includes(char))

    let newStr = filtered.join("");
    console.log(newStr);

    return newStr === filtered.reverse().join("");

};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))


// Do not edit below this line
module.exports = palindromes;
