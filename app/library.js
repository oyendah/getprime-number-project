
function getPrimes(max) {
    var primes = [];
    for(var i = 2; i <= max; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(n) {
    var start = 2;
    while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) return false;
    }
    return n > 1;
}

module.exports = getPrimes;
console.log(getPrimes(5));