function printFactors(n, i) {
    if (i <= 0) {
      return;
    } else if (n % i === 0) {
      console.log(i);
    }
    printFactors(n, i - 1);
  }
  
  const a = 8;
  const i = 8;
  
  console.log(`Factors of ${a}:`);
  printFactors(a, i);
  