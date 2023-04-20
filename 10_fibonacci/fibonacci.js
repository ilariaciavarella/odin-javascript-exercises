const fibonacci = function(pos) {
    let fib = [1, 1];
    
    for (let i = 2; i < pos; i++) {
        fib.push(fib[i-2] + fib [i-1]);
    }

    if (pos <= 0) {
        return 'OOPS';
    } else {
        return fib[pos-1];
    }


};
// Do not edit below this line
module.exports = fibonacci;
