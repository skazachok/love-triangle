/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count=0;
  for(var i = 0 ;i < preferences.length; i++) {
    const lover1=i+1;
    const lover1target=preferences[i];
    const lover2target=preferences[lover1target-1];
    const lover3target=preferences[lover2target-1];
    if (lover1===lover3target) {
      count++;
    }
  }
  return Math.floor(count/3);
};
