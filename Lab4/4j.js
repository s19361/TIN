const binarySearch = (array, target) => {

    array.sort((a, b) => a - b);

// for (const iterator of array) {
//     console.log(iterator);
// }
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex);
      }
      if(target > array[middleIndex]) {
        //Searching the right side of Array
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        //Searching the left side of array
        endIndex = middleIndex - 1;
      }
    }   
    console.log("Target value not found in array");
  }

  binarySearch([1, 5, 9, 4, 2, 7, 8, 3 ,10], 7);
  binarySearch([1, 2, 3, 4, 5, 7, 8, 9 ,10], 6);