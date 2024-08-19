function add(numbers) {
  //  Empty string and single number
  if (numbers === "") {
    return 0;
  }
  // with delimiter
  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(`[${parts[0].slice(2)}]`);
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter);
  //checking number is negative
  const negatives = numArray.filter((num) => parseInt(num) < 0);

  if (negatives.length > 0) {
    throw `negative numbers not allowed: ${negatives.join(",")}`;
  }

  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
