// print all integers 0-255
function integers(max,min){  
  if(!min){
    min = 0;
  }
  for(var x =min; x<=max; x++){
    console.log(x);
  }
}
integers(255);

// integers and sum 0 to 255
function intAndSum(max,min){
  var sum = 0;
  if(!min){
    min = 0;
  }
  for(var x=min; x<=max; x++){
    console.log(x);
    sum += x;
  }
  console.log("The sum from intAndSum is "+sum);
}

intAndSum(255);

// print odds 1-255
function odds(max,min){
  if(!min){
    min = 1;
  }
  // if user enters an even min, we don't want to print it
  for(var x=min; x<=max; x++){
    if(x%2 !== 0){
      console.log(x);
    }
  }
}

odds(255);

// iterate through a given array and print each value
function iterate(arr){
  
  if(Array.isArray(arr) === true){
    for(var i=0; i<arr.length; i++){
      console.log(arr[i])
    }
  }
    else{
      console.log('Not an Array')
    }

}

iterate([1,2,3,4,5]);

// find and print max in a given array
function maxInArray(arr){
  if(Array.isArray(arr) === true){
    var max = arr[0]
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    console.log("The maximum value in the array is "+max);
  }
  else{
    console.log('Not an Array')
  }
}

maxInArray([3,1,17,2,5]);

// get and print the average of a given array
function average(arr){
  if(Array.isArray(arr) === true){
    var sum = 0;
    
    for(var i=0; i<arr.length; i++){
      if(typeof(arr[i]) == 'number'){
        sum+= arr[i];
      }
    }
    var ave = sum/arr.length
    console.log("The average of the array is "+ave);
  }
  else{
    console.log('Not an Array')
  }  
}

average([2,4,6,8]);

// get and print an array with all odds from 1 to 255
function oddsArray(max,min){
  var arr = [];
  if(!min){
    min = 1;
  }
  for(var x=min; x<=max; x++){
    if(x%2 !== 0){  
      arr.push(x);
    }
  }
  console.log(arr);
  return arr;
}

oddsArray(255);


// square each value in a given array, 
// return that same array with changed values
function squaredArray(arr){
  if(Array.isArray(arr) === true){
    for(var i=0; i<arr.length; i++){
      arr[i] = arr[i]*arr[i];
    }
    console.log("The given array with values squared is "+arr);
    return arr;
  }
  else{
    console.log("Not an array");
    return "Not an array";
  }
}

squaredArray([2,4,6,8]);

// given an array and value Y,
// count and print the array values greater than Y
function greaterThanY(arr,Y){
  if(Array.isArray(arr) === true){
    if(typeof(Y) == 'number'){
      var count = 0;
      for(var i=0; i<arr.length; i++){
        if(arr[i] > Y){
          console.log(arr[i]);
          count++;;
        }
      }
      console.log("the given array has "+count+" values greater than "+Y);
    }
    else{
      console.log("Y is not a number");
      return "Y is not a number";
    }
  }
  else{
    console.log("arr is not an array");
    return "arr is not an array";
  }
}

greaterThanY([1,2,3,4,5],2);


// zero out any negative numbers from a given array, then return the array
function zeroOut(arr){
  if(Array.isArray(arr) === true){
    for(var i=0; i<arr.length; i++){
      if(arr[i] < 0){
        arr[i] = 0;
      }
    }
    console.log(arr);
    return arr;
  }
  else{
    console.log("arr is not an array");
    return "arr is not an array";
  }
}

zeroOut([2,-1,4,-2,6,-3,8,-4]);

//given an array, print the min, max and average 
function minMaxAverage(arr){
  if(Array.isArray(arr) === true){
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(var i=0; i<arr.length; i++){
      if(typeof(arr[i] == 'number')){
        if(arr[i] < min){
          min = arr[i];
        }
        else if(arr[i] > max){
          max = arr[i];
        }
        sum += arr[i];
      }
    }
    console.log("min is "+min+", max is "+max+" and the average is "+sum/arr.length);
  }
  else{
    console.log("not an array");
  }
}

minMaxAverage([1,2,3,4,5]);


//given an array, move all values forward one, dropping the first,
// and leaving a '0' at the end

function shiftArray(arr){
  if(Array.isArray(arr) === true){
    for(var i=0; i<arr.length-1; i++){
      arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
    return arr;
  }
  else{
    console.log('not an array');
  }
}

shiftArray([1,2,3,4,5]);

// given an array, swap negative values for the string, 'zero'
function stringZero(arr){
  if(Array.isArray(arr) === true){
    for(var i=0; i<arr.length; i++){
      if(arr[i] < 0){
        arr[i] = 'zero';
      }
    }
    console.log(arr);
    return arr;
  }
  else{
    console.log('not an array');
  }  
}

stringZero([-1,1,2,3,-5]);
stringZero([-1,1,'whoops',3,-5]);
stringZero('zero');