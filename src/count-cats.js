const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // filter any of strings:  ^^, || ,^^, || ,^^ || ^^
  const regExp = /(?<=(^|,))\^\^(?=(,|$))/g;
  let catMatchesList = backyard.toString().match(regExp); // null or [results]
  let catCount = catMatchesList ? catMatchesList.length : 0;
  return catCount;
};
