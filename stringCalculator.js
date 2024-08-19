function add(numbers) {

  // Empty string and single number
  if (numbers === "") {
      return 0;
  }

  let delimiter = /[\n,]/;

  //"//;\n1;2" :-->>  first part: //;  second: 1;2 
  if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(`[${parts[0].slice(2)}]`);
      numbers = parts[1];
  }

  const numArray = numbers.split(delimiter);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  
  return parseInt(numbers);
}

module.exports = { add };
