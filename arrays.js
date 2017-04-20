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