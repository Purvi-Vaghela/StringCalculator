function add(numbers) {

  // Empty string and single number
  if (numbers === "") {
      return 0;
  }
  return parseInt(numbers);
}

module.exports = { add };
