// Code your solution in this file

function findMatching(driversArray, string) {
  return driversArray.filter(function(driverElement) {
    return driverElement.toLowerCase() === string.toLowerCase();
  });
}

fuction fuzzyMatch(driversArray, string) {
  return driversArray.filter (function (driverElement){
    return driverElement.slice(0, string.length) === string
})
}
