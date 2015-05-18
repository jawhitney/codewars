function isPowerOfTwo(n){
	if (n == 2) return true;

	if (n == 0 || n % 2 != 0) return false;

	return isPowerOfTwo(n / 2);
}

// function isPowerOfTwo(n) {
// 	return !(n & (n - 1));
// }

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(8));