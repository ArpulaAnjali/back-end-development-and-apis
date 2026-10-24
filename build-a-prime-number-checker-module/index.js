function isPrime(num) {
  // Numbers less than or equal to 1 are not prime
  if (typeof num !== 'number' || num <= 1) {
    return false;
  }

  // Check for divisors from 2 up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Export as a named property of module.exports
module.exports = {
  isPrime
};