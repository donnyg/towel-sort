module.exports = function towelSort(matrix) {
  if (!matrix) return [];

  return matrix.flatMap((row, index) =>
    index % 2 === 0 ? row : row.reverse()
  );
};
