function binarySearch(list, target) {
  if (list.length === 0) return false;
  const slicePoint = Math.floor(list.length / 2);
  const leftHalf = list.slice(0, slicePoint);
  const rightHalf = list.length > 1 ? list.slice(slicePoint) : [];


  if (target < list[slicePoint]) {
    return binarySearch(leftHalf, target);
  } else if (target > list[slicePoint]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}

function binarySearchIndex(list, target, low = 0, high = list.length-1) {
  
  if (low === high) {
     return -1;
  }
  let slicePoint = Math.floor((low + high) / 2);
  
  if (target < list[slicePoint]) {
    return binarySearchIndex(list, target, low, slicePoint);
  } else if (target > list[slicePoint]) {
    return binarySearchIndex(list, target, slicePoint + 1, high);
  } else {
    return slicePoint;
  }
}


function testAllRealValues(){
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 5));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 10));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 15));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 20));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 30));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 70, 0, 6));
  console.log("----");
}
testAllRealValues()

function testOutsideRangeBig(){
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 100));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 155));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 155));
  console.log("----");
}

//testOutsideRangeBig();

function testOutsideRangeSmall() {
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 1));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 2));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 3));
  console.log("----");
}
//testOutsideRangeSmall();
function testInsideButNotThere(){
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 22));
  console.log("final val", binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 67));
  console.log("----");
}
//testInsideButNotThere();
function testEmpty(){
  console.log("final val", binarySearchIndex([], 22));
  console.log("----");
}
testEmpty();


module.exports = {
  binarySearch,
  binarySearchIndex
};