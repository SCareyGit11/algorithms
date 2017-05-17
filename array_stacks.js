// Stacks - sequential data structures based on last in, first out (LIFO)

// examples of methods based on array stacks
myArrStack = [1,2,3,4]

// recreate push(val) to add val to our stack
arrStackPush = function(arrStack, value){
	if(Array.isArray(arrStack)){
		arrStack[arrStack.length] = value;
	}
	else{
		console.log('not array');
	}
}

arrStackPush(myArrStack, 5);


// recreate pop() to remove and return the top value
arrStackPop = function(arrStack){
  if(Array.isArray(arrStack)){
    if(arrStack.length === 0){
      console.log('empty array');
      return false;
    }
    else{
      // save the last value in a variable
      var pop = arrStack[arrStack.length-1];
      // cut off the last value
      arrStack.length = arrStack.length-1;
      console.log(pop);
      return pop;
    }
  }
  else{
    console.log('not an array');
    return false;
  }
}

arrStackPop(myArrStack);


// return (not remove) the stack's top value
arrStackTop = function(arrStack){
  if(Array.isArray(arrStack)){
    console.log(arrStack[arrStack.length-1]);
    return arrStack[arrStack.length-1]
  }
  else{
    console.log('not an array');
    return false;
  }  
}


// return whether the given value is in the stack
arrStackContains = function(arrStack, value){
	if(Array.isArray(arrStack)){
		for(var idx=0; idx<arrStack.length; idx++){
			if(arrStack[idx] === value){
				console.log(true, 'at', idx);
				return true;
			}
		}
		console.log(value,'not in arrStack');
		return false;
	}
	else{
		console.log('not array');
		return false;
	}
}

arrStackContains(myArrStack	,4);


// return whether the stack is empty
arrStackEmpty = function(arrStack){
	if(Array.isArray(arrStack)){
		if(arrStack.length === 0){
			console.log(arrStack,' is empty');
			return true;
		}
		else{
			console.log(arrStack,' is not empty');
			return false;
		}
	}
	else{
		console.log('not array');
		return false;
	}
}

arrStackEmpty(myArrStack);

// return the number of stacked values, different from .length because length includes undefined spots
arrStackSize = function(arrStack){
	if(Array.isArray(arrStack)){
		var count = 0;
		for(var idx=0; idx<arrStack.length; idx++){
			if(arrStack[idx]){
				count++;
			}
		}
		console.log('arrStackSize:',count);
		return count;
	}
	else{
		console.log('not array');
		return false;
	}
}

arrStackSize(myArrStack);
myArrStack[10] = 5;
console.log('length:',myArrStack.length);
arrStackSize(myArrStack);


console.log(myArrStack);