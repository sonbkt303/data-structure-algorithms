const romanHashTable = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
  ["IV", 4],
  ["IX", 9],
  ["XL", 40],
  ["XC", 90],
  ["CD", 400],
  ["CM", 900],
]);

// const b = romanHashTable.get('Va');

// console.log('b', b)

const solution1 = (romanStr = '') => {
  let total = 0;
  const stringLength = romanStr.length;
  let startIndex = 0;
  do {
    const twoSubStr = romanStr.substr(startIndex, 2);

    const twoSubStrNumber = romanHashTable.get(twoSubStr);

    if (twoSubStrNumber) {
      startIndex += 2;
      total += twoSubStrNumber;
    }

    if (!twoSubStrNumber) {
      const oneSubStr = romanStr.substr(startIndex, 1);
      const oneSubStrNumber = romanHashTable.get(oneSubStr);
      startIndex += 1;
      total += oneSubStrNumber;
    }
  } while (startIndex < stringLength);

  return total;
};

// const number = main('IX');
const number = solution1('MCMXCIV');

console.log(number);