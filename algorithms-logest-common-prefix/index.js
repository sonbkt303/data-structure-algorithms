/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const arrLength = strs.length;
  const shortestString = strs.reduce((a, b) => {
      return a.length < b.length ? a : b
  });
  const splitStringArr = [];

  for (let i = 0; i < shortestString.length; i++) {
      const splitString = shortestString.substring(0, i + 1);
      splitStringArr.push(splitString)
  }

  const revertSplitArr = splitStringArr.reverse();
  let longestCommonPrefix = '';
  revertSplitArr.forEach(subString => {
      let count = 0;
      if (longestCommonPrefix.length) return;

      for (let i = 0; i < arrLength; i++) {
          const sampleString = strs[i];
          // if (sampleString.includes(subString)) {
          if(sampleString.substring(0, subString.length) === subString) {
              count += 1;
          }
      }
      if (count === arrLength) {
          longestCommonPrefix = subString;
      }
      count = 0;

  });
  return longestCommonPrefix;
};