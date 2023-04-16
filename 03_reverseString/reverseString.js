const reverseString = function(str) {
    let strArr = str.split("");
    let reverseArr = [];
    for (let i = 0; i < strArr.length; i++) {
        reverseArr.unshift(strArr[i]);
    }
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
