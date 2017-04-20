// rewrite some underscore methods

var _ = {
  // produce a new array by iterating through and performing the function on each value
   map: function(list, callback) {
    if(typeof(callback) == 'function'){
     var newArr = [];
     for(var i=0; i<list.length; i++){
      newArr.push(callback(list[i]));
     }
    };
    console.log(list);
    console.log(newArr);
    return newArr; 
   },
   // boil an array of values down to a single value by performing the function on the values
   // the function is passed the array and returns each step of reduction until down to a single value
   reduce: function(list, callback) { 
     if(typeof(callback) == 'function'){
      while(list.length > 1){
        var i = list.length-2; 
        list[i] = callback(list,i);
        list.pop();
        console.log(list);
      }
     }

     return list;
   },
   // iterate through a list and return the first value that passes the callback function, then stop
   // return undefined if no such value is found
   find: function(list, callback) {   
     if(typeof(callback) == 'function'){
      for(var i=0; i<list.length; i++){
        if(callback(list[i]) === true){
          console.log(list[i]);
          return list[i];
        }
      }
      console.log(undefined)
      return undefined;
     }
   },
   // like find but returns a list of all values that pass the function test, not just the first value
   // return undefined if no value passes
   filter: function(list, callback) { 
     if(typeof(callback) == 'function'){
      var newArr = [];
      for(var i=0; i<list.length; i++){
        if(callback(list[i])){
          newArr.push(list[i]);
        }
      }
      console.log(newArr);
      if(newArr.length > 0){
        return newArr;
      }
      else{
        return undefined;
      }
     }
   },
   // opposite of filter, return an array without the values that pass the test
   // return undefined if all values pass
   reject: function(list, callback) { 
     if(typeof(callback) == 'function'){
      var newArr = [];
      for(var i=0; i<list.length; i++){
        if(!callback(list[i])){
          newArr.push(list[i]);
        }
      }
      console.log(newArr);
      if(newArr.length > 0){
        return newArr;
      }
      else{
        return undefined;
      }      
     }
   }
 }



_.map([1,2,3], function byThree(num){return num*3;});
_.reduce([1,2,3,4,5], function add(arr,num){return arr[num]+arr[num+1];});
_.reduce([1,2,3,4,5], function multiply(arr,num){return arr[num]*arr[num+1];});
_.find([5,10,15,20,25], function threeAndFive(num){return num%3 === 0 && num%5 === 0;});
_.filter([5,10,15,20,25,30], function threeAndFive(num){return num%3 === 0 && num%5 === 0;});
_.reject([5,10,15,20,25,30], function threeAndFive(num){return num%3 === 0 && num%5 === 0;});