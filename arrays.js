// given an array and additional value, insert the value at the beginning
// of the array
function pushFront(arr, val){
  for(var i=arr.length; i>0; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = val;
  console.log("pushFront",arr);
}

pushFront([2,3,4,5],1);


// given an array, remove and return the first value
function popFront(arr){
  var first = arr[0];
  for(var i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log("popFront",arr);
  console.log(first);
  return first;
}

popFront([1,2,3,4,5]);


// given array, index and value, insert value into array at the given index
function insertAt(arr,index,val){
  for(var i=arr.length; i>index; i--){
    arr[i] = arr[i-1];
  }
  arr[index] = val;
  console.log("insertAt",arr);
}

insertAt([5,10,20,25],2,15);


// given an array and index, remove and return the array value at that index
function removeAt(arr,index){
  var temp = arr[index];
  for(var i=index; i<arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log("removeAt",arr);
  console.log(temp);
  return temp;
}

removeAt([10,20,25,30,40],2);


// swap positions of successive pairs of values in a given array,
// if length is odd, do not change the final element
function swapPairs(arr){
  for(var i=0; i<arr.length-1; i+=2){
    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
  }
  console.log("swapPairs",arr);
}

swapPairs([1,2,3,4]);
swapPairs([1,2,3,4,5,6,7]);


// given a sorted array, remove duplicate values
function removeDuplicates(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
      // removes the first of the duplicates
      removeAt(arr,i);
      // recheck that index in case there's more than one duplicate of that val
      i--;
    }
  }
  console.log("removeDuplicates",arr);
}

removeDuplicates([1,2,2,3,4,4,4,4,5]);


// given an array of values, move the lowest value to the front
// do not otherwise change the order
function minToFront(arr){
  var shift = false;
  var minIndex = 0;
  for(var i=1; i<arr.length; i++){
    if(arr[i] < arr[minIndex]){
      minIndex = i;
      shift = true;
    }
  }
  // don't iterate again if the min was already at the front
  if(shift){
    var min = arr[minIndex];
    for(var j=minIndex; j>0; j--){
      arr[j] = arr[j-1];
    }
    arr[0] = min;
  }
  console.log("minToFront",arr);
}

minToFront([3,6,9,1,12]);
minToFront([1,10,8,6,4]);


// given a numerical array, reverse the order of values in-place
function reverse(arr){
 var j = arr.length-1
    for(var i=0; i<j; i++){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    }
  console.log("reverse",arr); 
}

reverse([2,4,6,8,10]);


// given array and offset, shift array values to the right by the offset number
// of times.  Wrap values from the end back around to the front
// e.g. [1,2,3] offset 1 would be [3,1,2]
function rotate(arr,offset){
  while(offset > 0){
    var temp = arr[arr.length-1];
    for(var i=arr.length-1; i>0; i--){
      arr[i] = arr[i-1];
    }
    arr[0] = temp;
    offset--;
  }
  console.log("rotate",arr);
}

rotate([1,2,3,4,5,6],3);


// given array and values min and max, remove values outside min and max.
// return given array (work in-place) with remaining values in original order
function filterRange(arr,min,max){
  for(var i=0; i<arr.length; i++){
    if(arr[i]<min || arr[i]>max){
      for(var j=i; j<arr.length-1; j++){
        arr[j] = arr[j+1];
      }
      console.log("before",i,arr);
      arr.pop();
      i--;
      console.log("after",i,arr)
    }
  }

  console.log("filterRange",arr);
  return arr;
}

filterRange([10,5,20,1,30],8,28);


// replicate concat(), a function that accepts two arrays and returns a
// new array containing the first array's elements followed by the second array's
function arrConcat(arr1,arr2){
  var newArr = [];
  for(var i=0; i<arr1.length; i++){
    newArr.push(arr1[i])
  }
  for(var i=0; i<arr2.length; i++){
    newArr.push(arr2[i]);
  }
  console.log("arrConcat",newArr);
  return newArr;
}


arrConcat([1,2,3],[4,5,6]);


// consider a numerical array as if looking at a line of buildings from street level.
// if you see a tall building, you could see shorter buildings in front of it
// but not any shorter buildings behind.
// given a numerical array, iterate from the front, remove values that are less than or equal
// to the highest value previously found.  Remove all zero and negative values
// regardless of position
function skylineHeights(arr){
  var max = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    else{
      // if the value isn't greater than current max, then remove it
      for(var j=i; j<arr.length-1; j++){
        arr[j] = arr[j+1];
      }
      arr.pop();
      // recheck that index after shifting values left
      i--;
    }
  }
  console.log("skylineHeights",arr);
  return arr;
}

skylineHeights([0,-1,1,3,1,5,4,5,7,5]) // should return [1,3,5,7]


// given a numerical array, remove negative values, return the same array
// with non-negative values in the same order
function removeNegatives(arr){
  for(var i=0; i<arr.length; i++){
    if(arr[i] < 0){
      for(var j=i; j<arr.length-1; j++){
        arr[j] = arr[j+1];
      }
      arr.pop();
      //recheck that index on the next iteration since we shifted values left
      i--;
    }
  } // end for
  console.log("removeNegatives",arr);
  return arr;
}

removeNegatives([1,-1,2,3,-3,4,-5]);

// given a numerical array, return the second-largest element
// if the array is too short, return null
function secondLargest(arr){
  var maxIndex = 0;
  var second = null;
  if(arr[1] > arr[maxIndex]){
    maxIndex = arr[1];
    second = arr[0];
  }
  else if(arr[1] <= arr[maxIndex]){
    second = arr[1];
  }
  for(i=2; i<arr.length; i++){
    if(arr[i] > arr[maxIndex]){
      second = arr[maxIndex];
      maxIndex = i;
    }
    else if(arr[i]<arr[maxIndex] && arr[i]>second){
      second = arr[i];
    }
  }
  console.log("secondLargest",second);
  return second;
}

secondLargest([1,2,3,5,4]);
secondLargest([1,2]);
secondLargest([1,1]);
secondLargest([1]);


// return the second-to-last element of an array
// if array is too short, return null
function penultimate(arr){
  var second = null;
  if(arr[arr.length-2]){
    second = arr[arr.length-2]
  }
  console.log('penultimate',second);
  return second;
}

penultimate([1,'one',2,'two']);
penultimate([1]);

// given an array and value 'n', return the nth-to-last element
// if the array is too short, return null
function nthToLast(arr, n){
  var nth = null;
  if(arr[arr.length-n]){
    nth = arr[arr.length-n]
  }
  console.log('nthToLast',nth);
  return nth;
}

nthToLast([1,'one',2,'two'], 3);
nthToLast([1],3);


// given a numerical array and value 'n', return the nth-largest element,
// ie there would be (n-1) elements larger than the one returned
// if the array is too short, return null
function nthLargest(arr,n){
  if(arr.length < n){
  	return null;
  }
  var found = 0;
  while(found < n){
    //find the max, move it to the last position,
    var maxIndex = 0;
    for(var i=1; i<arr.length-found; i++){
      if(arr[i] > arr[maxIndex]){
        maxIndex = i;
      }
    }
    // swap max to the end, shorten the 'end' one index each time around
    // till you have the n largest values at the end, 
    // the last swapped max is the nth
    var temp = arr[maxIndex];
    arr[maxIndex] = arr[arr.length-found-1];
    arr[arr.length-found-1] = temp;
    found++;
  }
  console.log(arr);
  console.log("nthLargest",arr[arr.length-n]);
  return arr[arr.length-n];
}

nthLargest([5,1,30,3,7,35,22,2,18],4);