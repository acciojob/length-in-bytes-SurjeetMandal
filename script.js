const byteSize = (str) => {
  // write your code here
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		count ++;
	}
	return count;
};
const str = prompt("Enter some string.");
alert(byteSize(str));
// Do not change the code below

