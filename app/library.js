var getPrimes = module.exports = function(n){
	var arrPrime = [];
	for(var i = 2; i <= n ; i++){

        var isPrime = true;
        var q = Math.floor(Math.sqrt(n));

        for(var j = 2; j <= q; j++){
            if(i % j === 0){
                isPrime = false;
            }
        }
        if(isPrime === true){
            arrPrime.push(i);
        }
    }
    return arrPrime;
};
