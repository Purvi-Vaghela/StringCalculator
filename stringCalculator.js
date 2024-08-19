function add(numbers) {

  // Empty string and single number
  if (numbers === "") {
      return 0;
  }

  // sum of multiple numbers having new line as delimiter
  const numArray = numbers.split(/[\n,]/);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  
  return parseInt(numbers);
}

module.exports = { add };
