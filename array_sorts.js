// bubble sort in-place
// the function repeatedly steps through the list to be sorted, compares each pair 
// of adjacent items and swaps them if they are in the wrong order. The pass through 
// the list is repeated until no swaps are needed, which indicates that the list is sorted.
// O(n^2)

function bubbleSort(array){
  var len = array.length,
      max_index = len-1,
      sorted,
      temp;
  
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