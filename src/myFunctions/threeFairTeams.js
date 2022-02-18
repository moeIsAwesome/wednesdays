const getSum = (a) => {
  return a.reduce((previousValue, currentValue) => {
    if (!currentValue) return previousValue + 0;
    return previousValue + currentValue.Overall;
  }, 0);
};

function chunker(myArray, chunk_size) {
  const result = [];

  while (myArray.length) {
    result.push(myArray.splice(0, chunk_size));
  }

  return result;
}
