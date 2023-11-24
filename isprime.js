function printPrimes(lowerLimit, upperLimit) {
    for (let num = lowerLimit; num <= upperLimit; num++) {
      if (isPrime(num)) {
        console.log(num);
      }
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
  
    for (let i = 2; i <= num/2; i++) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  const start = 17;
  const end = 19;
  
  printPrimes(start, end);
  //we divide number bc any number is divisble by half of its number only like 
  //10 is never divided by 6