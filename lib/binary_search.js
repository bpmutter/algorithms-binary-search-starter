function binarySearch(list, target) {
  console.log("list", list)
  if (list.length === 0) return false;
  const slicePoint = Math.floor(list.length / 2);
  const leftHalf = list.slice(0, slicePoint);
  const rightHalf = list.length>1 ? list.slice(slicePoint) : [];


  if (target < list[slicePoint]) {
    return binarySearch(leftHalf, target);
  } else if (target > list[slicePoint]) {
    return binarySearch(rightHalf, target);
  } else { 
    return true;
  }
}

console.log(binarySearch([1], 1))

function binarySearchIndex(list, target, low, high) {
  
}


module.exports = {
  binarySearch,
  binarySearchIndex
};
