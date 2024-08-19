function add(numbers) {
  // Empty string and single number
  if (numbers === "") {
    return 0;
  }

  // sum of two numbers
  const numArray = numbers.split(",");
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);

  return parseInt(numbers);
}

module.exports = { add };
