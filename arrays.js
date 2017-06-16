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

// remove duplicates again but this time from an unsorted array,
// work in place (same array), we do not need to maintain the original order (stability) 

function remDuplicates(array){
  
  for(var i=0; i<array.length-1; i++){
    for(var j=array.length-1; j>i; j--){
      // if we find a duplicate, then copy over the last value, then pop();
      if(array[j] == array[i]){
        array[j] = array[array.length-1];
        array.pop();
      }
      // since we're iterating from both sides, we might as well look for duplicates with both iterators
      if(j != array.length-1 && array[j] == array[array.length-1]){
        array.pop();
      }
      
    }
  }
  console.log(array);
  return array;
}


// remove duplicates again from an unsorted array,
// this time, work in place (same array) AND maintain order (stable) 
function remDuplicatesStable(array){
  
  for(var i=0; i<array.length-1; i++){
    for(var j=array.length-1; j>i; j--){
      // if we find a duplicate, copy elements left, then pop();
      if(array[j] == array[i]){
        for(var k=j; k<array.length-1; k++){
          array[k] = array[k+1];
        }
        
        array.pop();
      }
      // since we're iterating from both sides, we might as well look for duplicates with both iterators
      if(j != array.length-1 && array[j] == array[array.length-1]){
        array.pop();
      }
      
    }
  }
  console.log(array);
  return array;
}


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


// credit card validation with the Luhn formula, 
// 1. accept an array of 20 values 
// 2. starting from the back, multiply the values in even positions (2nd-to-last, 4th-to-last etc.) by 2
// 3. if any results > 9, then subtract 9 from them
// 4. add all numbers (not just odds) together, the sum should be a multiple of 10
// 5. return a boolean whether the array satisfies the formula
function isCardValid(num){
  // if card number is supplied as a string then convert to array of values
  if(typeof(num) == 'string'){
    var arr = [];
    for(var s=0; s<num.length; s++){
      num[s] = parseInt(num[s],10); 
      arr.push(num[s]);
    }
    num = arr;
  }
  if(num.length !== 20){
    console.log('isCardValid',false);
    return false;
  }
  for(var i=num.length-2; i>=0; i-=2){
    num[i] = num[i]*2;
    if(num[i] > 9){
      num[i] = num[i]-9;
    }
  }
  var sum = 0;
  for(var j=0; j<num.length; j++){
    sum += num[j];
  }
  if(sum%10 === 0){
    console.log('isCardValid',true);
    return true;
  }
  else{
    console.log('isCardValid',false);
    return false;
  }
}

isCardValid([1,2,3]);
isCardValid([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
isCardValid('44444444444444444444');


// randomly shuffle a given array's values, work in-place
function shuffle(arr){
  // swap the value at each index with the value at a randomly selected index
  for(var i=0; i<arr.length; i++){
    var swapIndex = Math.floor(Math.random()*arr.length);
    console.log('swapIndex',swapIndex);
    var temp = arr[i];
    arr[i] = arr[swapIndex];
    arr[swapIndex] = temp;
  }
  console.log('shuffle',arr);
}

shuffle([1,2,3,4,5,6,7]);


// given an array and start and end indeces, remove vals in that index range, 
// work in place, shortening the array
function removeRange(arr,start,end){
  if(!end){
    end = arr.length-1;
  }
  else if(end>=arr.length){
    console.log('end out of range');
    return false;
  }
  for(var i=end; i>=start; i--){
    arr[i] = arr[arr.length-1];
    arr.pop();
  }

  console.log('removeRange',arr)
}

removeRange([0,1,2,3,4,5,6,7],2,4);
removeRange([0,1,2,3,4,5,6,7],2,40);
removeRange([0,1,2,3,4,5,6,7],2);

// given an array, change it to list each element twice, in order
function double(arr){
  for(var i=0; i<arr.length; i+=2){
    for(var j=arr.length; j>i; j--){
      arr[j] = arr[j-1];
    }
  }
  console.log('double',arr);
}

double([0,1,2,3,4,5]);


// given an array of numbers 
// after every nth element, add an element that is the sum of those previous n values
// if the array does not end aligned evenly with n elements then add
// the sum of those leftover

//helper function insertAt()
function intermediateSums(arr, n){
  var count = 0;
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum += arr[i];
    count++;
    // if we've summed up n elements or reached the end of the array,
    // then insert sum after those elements
    if(i == arr.length-1){
        arr.push(sum);
        // break so we don't then continue checking the pushed element
        break;
      }
    else if(count%n === 0){
      insertAt(arr, i+1, sum);
      // reset sum and count
      sum = 0;
      count = 0;
      // skip the inserted element so we don't add one sum into the next sum
      i++;
    }
  }
  console.log('intermediateSums',arr);
}

intermediateSums([1,2,3],3);
intermediateSums([1,2,3,4,5],3);


// given an array and window length K, compute and log the non-decreasing subranges
// of each window minus the non-increasing subranges
function upvotes(arr,K){
  var N = arr.length;
  var non_increasing;
  var non_decreasing;
  // track if previous days had been trending up, down or holding steady
  var trend;
  var steady;
  for(var i=0; i<=N-K; i++){
    console.log('window');
    non_increasing = 0;
    non_decreasing = 0;
    trend = 0;
    steady = 0;
    for(var j=i+1; j<i+K; j++){
      if(arr[j]>arr[j-1]){
        non_decreasing++;
        // add in any subranges begun with contiguous equal values
        non_decreasing+=steady;
        // reset days holding steady to zero
        steady = 0;
        if(trend>0){
          // if it was already trending up, then add in subranges contiguous with this trend
          non_decreasing+=trend;
        }
        else if(trend<0){
          // if it had been trending down, reset trend to zero (change of direction)
          trend = 0;
        }
        // this subrange started a new uptrend (whether it reversed a down trend or
        // continued an established up trend)
        trend++;
      }
      else if(arr[j]<arr[j-1]){
        // same logic as above just positives become negatives for down trends
        non_increasing--;
        non_increasing-=steady;
        steady = 0;
        if(trend<0){
          non_increasing+=trend;
        }
        else if(trend>0){
          trend = 0;
        }
        trend--;
      }
      // if contiguous values are equal, days holding steady, not up or down
      else{
        steady++;
        // add the days holding steady to the current trend
        if(trend>0){
          non_decreasing+=steady;
        }
        else if(trend<0){
          non_increasing-=steady;
        }
      }
     
    }  // end of j for loop
    // contiguous equal values not counted as both non_increasing and non_decreasing
    // since they cancel eachother out.  Contiguous equal values are just 
    // counted as potential to contribute to non_decreasing or non_increasing
    console.log('non_decreasing '+non_decreasing);
    console.log('non_increasing '+non_increasing);
    console.log(non_decreasing+non_increasing);
  } // end of i for loop
}

upvotes([1,2,3,1,1],3);
upvotes([1,1,1,5,4,5,2],4);



// a function that returns whether an array has a balance point Between indices
// where the sum to the left is equal to the sum on the right

function balancePoint(array){
  // corner cases
  if(array.length === 0 || array.length == 1){
    return false;
  }

  // first get the sum of the whole array
  var sum = 0,
      len = array.length;
  for(var i=0; i<len; i++){
    sum += array[i];
  }
  // iterate again. At each index, get the partial sum up to and including that index.  Then compare 
  // the partial to the sum without the partial
  var partial = 0;
  for(var j=0; j<len-1; j++){
    partial += array[j];
    if(partial == sum-partial){
      return true;
    }
    
  } // out of second iteration, if we're here then we never found a balance point
  return false;
}

var x = [1,2,3,4,5,10];
var y = [1,2,3,4,10]
console.log(balancePoint(x));
console.log(balancePoint(y));


// a function like balancePoint but this time, if there is a point ON an index
// where values to the left equal the sum of values to the right, then return 
// that index.  Return -1 if there is no such index

function balanceOn(array){
  // corner cases
  if(array.length == 1){
    return 0;
  }
  if(array.length === 0 || array.length == 2){
    return -1;
  }

  var sum = 0,
      len = array.length;

  for(var i=0; i<len; i++){
    sum += array[i];
  }

  var partial = 0;
  // do not include the value of the balanceOn index, compare the sum to the left
  // to the sum on the right
  for(var j=1; j<len; j++){
    partial += array[j-1];
    if(partial == sum-partial-array[j]){
      return j;
    }
  } // out of second iteration, no balanceOn found
  return -1;
}


// given a large sorted array and a value, use 'divide and conquer' to quickly 
// scan the array and return whether the value is present
// given a large sorted array and a value, use 'divide and conquer' to quickly 
// scan the array and return whether the value is present
function binarySearch(array, value){
  var len = array.length;
  // corner case
  // is value outside the array?
  if(value < array[0] || value > array[len-1]){
    return false;
  }
  // does value equal either the first or last values in the array?
  if(value == array[0] || value == array[len-1]){
    return true;
  }
  
  // otherwise, get the midpoint
  var mid_index = Math.floor(len/2);
  
  // does value equal the midpoint?
  if(value == array[mid_index]){
    return true;
  }
  
  // if we've shrunk the array down to one or zero values and haven't found the value
  else if(len <=1){
    return false;
  }
  
  // still looking? narrow the search..
  var search_array = array;
  if(value > search_array[mid_index]){
    search_array = search_array.slice(mid_index+1);
  }
  // value is < this midpoint
  else{
    search_array = search_array.slice(0,mid_index);
  }
  return binarySearch(search_array, value);
}

var arr = [];
for(var x=1; x<50000; x++){
  arr.push(3*x);
}

console.log(binarySearch(arr, 14031));



// given an array, eliminate nested and empty arrays.
// do not alter original, return a new array, maintaining original order
function flatten(array){
  var new_array = [],
      len = array.length;
  
  for(var i=0; i<len; i++){
    if(!Array.isArray(array[i])){
      new_array = new_array.concat(array[i]);
      
    }
    else{
      if(array[i].length > 0){
        new_array = new_array.concat(flatten(array[i]));
      }
      // skip over empty arrays
    }
  }
  return new_array;
}

var y = [1,[2,3],[4,[5,[6]],[]],[],7];
console.log(flatten(y));



// given an array, return the mode, the most frequent value in the array
function mode(array){
  var values = [{name:array[0], count:1}],
      mode_index = 0;
  
  for(var i=1; i<array.length; i++){
    
    for(var j=0; j<values.length; j++){
      if(values[j].name == array[i]){
        values[j].count++;
        if(values[j].count > values[mode_index].count){
          mode_index = j;
        }
        break;
      }
    }
    if(j == values.length){
      values.push({name:array[i], count:1})
    }
  }
  console.log(values);
  
  console.log('mode is '+values[mode_index].name);
  return values[mode_index].name;
}

mode([1,2,3,2,3,3]);


// You are given an unsorted array of length N, which contains integers from 0 to N with 
// one integer missing.  Return the missing integer.  Ex. given [0,3,1] return 2

function missingValue(array){
  var N = array.length,
      // compare the sum of the values in the array to the sum of all integers
      // from 0 to N
      sigma = 0,
      sum = 0;
  for(var i=0; i<N; i++){
    sum += array[i];
    sigma += i+1;
    
  }
  
  
  var difference = sigma - sum;
  console.log('missingValue is '+difference);
  return difference;
}

missingValue([0,3,1]);
missingValue([2,3,1]);
missingValue([8,3,7,2,1,9,5,4,0]);


// Second, redo missingValue but now the lowest value can be any integer, instead of always being zero
// find the integer that is missing from lowest value to N

function missingValueRev(array){
  var N = array.length
      // high = N + the lowest value
      function sigma(low, high){
        var sigma_sum = 0;
        for(var n=low; n<=high; n++){
          sigma_sum += n;
          
        }
        return sigma_sum;
      }
  var sum = array[0],
      min = array[0];
  
  for(var i=1; i<N; i++){
    sum += array[i];
    
    if(array[i] < min){
      min = array[i];
    }
    
  }
  var sigma = sigma(min, N+min);
  
  var difference = sigma - sum;
  console.log('missingValueRev is '+difference);
  return difference;
}


missingValueRev([8,3,7,2,1,9,5,4]);
missingValueRev([2,-4,0,-2,-3,1]);


// a function that accepts to non-negative integers.  It should return the last
// digit of a number found by raising the first number, a, to an exponent of the second
// number, b.  Ex. given (3,4) the function should return 1 because 3x3x3x3=81.

function lastDigitAtoB(a,b){
  var num = Math.pow(a,b);
  num = num.toString();
  num = num.slice(-1);
  console.log('lastDigit is '+num);
  num = parseInt(num);
  return num;
}

lastDigitAtoB(3,4);
lastDigitAtoB(12,5);