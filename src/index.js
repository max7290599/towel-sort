module.exports = function towelSort(matrix) {
  const array = [];

  if (!matrix || matrix == []) return array;

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) matrix[i].reverse();
  }
  return (array.concat(...matrix));
}