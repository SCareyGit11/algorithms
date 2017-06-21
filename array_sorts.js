



// bubble sort in-place
// the function repeatedly steps through the list to be sorted, compares each pair 
// of adjacent items and swaps them if they are in the wrong order. The pass through 
// the list is repeated until no swaps are needed, which indicates that the list is sorted.
// O(n^2)

function bubbleSort(array){
  var len = array.length,
      max_index = len-1,
      sorted;
  
    while(max_index > 0){

      // if we iterate all the way through and never shuffle a pair, then the array is sorted 
      // and there's no need to continue      
      sorted = true;
      for(var j=0; j<max_index; j++){
        if(array[j] > array[j+1]){
          sorted = false;
          
          temp = array[j+1];
          array[j+1] = array[j];
          array[j] = temp;
        }
      }
      
      if(sorted){
        break;
      }
      
      max_index--;
    }
  
  console.log(array);
  return array;
}

var bubble_arr = [];
for(var n=1; n<=1000; n++){
  bubble_arr.push(Math.floor(Math.random()*1000))
}

console.log(bubble_arr);
bubbleSort(bubble_arr);



// selection sort divides the array into a sorted subset, initially empty, and
// an unsorted subset, initially the whole array.  We iterate through the unsorted
// portion and find the lowest value.  We then swap that value with the leftmost
// unsorted element and finally, moving the subset boundaries one spot to the right
// O(n^2)
function selectionSort(array){
  var left_index = 0,
      minimum_index,
      len = array.length,
      temp;
  while(left_index < len-1){ 
    
    minimum_index = left_index;
    for(var i=left_index; i<len; i++){
      if(array[i] < array[minimum_index]){
        minimum_index = i;
      }
    } // out of for loop, so we've found the minimum value in the unsorted subset
    temp = array[minimum_index];
    array[minimum_index] = array[left_index];
    array[left_index] = temp;
    
    left_index++;
  }
  
  console.log(array);
  return array;
}

var select_arr = [];
for(var n=0; n<1000; n++){
  select_arr.push(Math.floor(Math.random()*100));
}

selectionSort(select_arr);


// Insertion sort iterates, saving one element as var temp each repetition, 
// At each iteration, insertion sort removes temp, 
// finds the location it belongs within the sorted list, 
// and inserts it there. It repeats until no unsorted elements remain.
// We consider a sorted subset of just array[0].  Since it only has one element it 
// is inherently sorted.  Therefore, our iteration starts at array[1].
// O(n^2)

function insertionSort(array){
  var i = 1,
      len = array.length,
      temp;
  
  while(i < len){
    
    temp = array[i];
    for(var j=i; j>0; j--){
      if(array[j-1] < temp){
        array[j] = temp;
        break;
      }
      else{
        array[j] = array[j-1];
      }
    } // end of for loop
    if(j === 0){
      // if we got to the left most element and still haven't inserted, then
      // we have the minimum and it needs to go at array[0]
      array[0] = temp;
    }
    i++;
  }
  
  console.log(array);
  return array;
}

var insert_arr = [];
for(var n=0; n<1000; n++){
  insert_arr.push(Math.floor(Math.random()*100));
}

insertionSort(insert_arr);


// a function that sorts two already separately sorted arrays,
// placing the result back into the first provided array

function combineArrays(array1, array2){
  var temp,
      j=0;
  for(var i=0; i<array2.length; i++){
    temp = array2[i];
    // inspect each element in array2 and insert it in its proper place in array1
    while(j<array1.length){
      if(temp < array1[j]){
        // copy right and insert
        for(var k=array1.length; k>j; k--){
          array1[k] = array1[k-1];
        }
        array1[j] = temp;
        break;
      }
      j++;
    } // end of array1 loop
    if(j == array1.length){
      // if we're here then we've found an array2 value >= all array1 values
      temp = array2.slice(i);
      
      array1 = array1.concat(temp);
      console.log(array1);
      return array1;
    }
  } // end of array2 for loop, if we're here then all array2 values fit within array1 bounds
  console.log(array1);
  return array1;
}

var arr1 = [],
    arr2 = [];
for(var n=0; n<1000; n++){
  arr1.push(n);
  arr2.push(n*2);
}


arr1 = combineArrays(arr1,arr2);
console.log(arr1.length);


// a function that will combine two already sorted separate arrays into one new 
// sorted array, this function will be used as a helper for merge sort
function combineArrays2(arr1,arr2){
  var new_arr = [];
  
  // using this function within mergeSort, so we can't assume arrays
  while(arr1.length && arr2.length){
    
    if(arr1[0] <= arr2[0]){
      new_arr.push(arr1.shift())
    }
    else{
      new_arr.push(arr2.shift());
    }
  } // end of while loop, at least one array is now empty
  while(arr1.length){
    new_arr.push(arr1.shift());
  }
  while(arr2.length){
    new_arr.push(arr2.shift());
  }
  
  
  return new_arr;
}

// merge sort takes an unsorted array  of length=n and recursively breaks it all the way down into n separate arrays
// containing one value each.  Since an array of one element is inherently sorted, combineArrays2 can sort up from there.
// The two functions stitch these arrays back together until we have one array with all the values sorted.
function mergeSort(arr){
  if(arr.length > 1){
    var middle = Math.floor(arr.length/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle);
    
    return combineArrays2(mergeSort(left), mergeSort(right));
  }
  else{
    return arr;
  }
}

var merge_arr = [];
for(var n=0; n<5000; n++){
  merge_arr.push(Math.floor(Math.random()*100));
}


// helper function
function swap(array,first,second){
  var temp = array[second];
  array[second] = array[first];
  array[first] = temp;
}

function partition(array,left,right){
  var i = left,
      j = right,
      pivot = array[Math.floor((left+right)/2)];
  
  while(i <= j){
    while(array[i] < pivot){
      i++;
    }
    while(array[j] > pivot){
      j--;
    }
    if(i <= j){
      swap(array,i,j);
      
      i++;
      j--;
    }
  }
  return i;
}

var parr = [];
for(n=0; n<1000; n++){
  parr.push(Math.floor(Math.random()*100));
}


function quicksort(array,left,right){
  var index;
  if(array.length > 1){
    index = partition(array,left,right);
    
    if(left < index-1){
      quicksort(array,left,index-1);
    }
    if(index < right){
      quicksort(array,index,right);
    }
  }
  
  return array;
}

console.log(quicksort(parr,0,parr.length-1));