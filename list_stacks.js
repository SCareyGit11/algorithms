var Node = function(value){
  this.val = value;
  this.previous = null;
}

// stack based on singly-linked list nodes
// as a stack, we can only add/remove nodes from the top of the stack (end of the list)
var SLStack = function(){
  var top = null;
}

// recreate push(val) to add a new node to the top
SLStack.prototype.push = function(value){
  var node = new Node(value);
  // point the new node's .previous to the stack's current top
  // (it's ok if the top is currently null)
  node.previous = this.top;
  // now set the new node at the top
  this.top = node;
}

var mySLStack = new SLStack();
mySLStack.push(1);
console.log(mySLStack.top);
mySLStack.push(2);

// recreate pop() to remove and return the top value
SLStack.prototype.pop = function(){
  if(!this.top){
    console.log('empty stack');
    return false;
  }
  else{
    // save the current top in a variable 'pop'
    var pop = this.top;
    // point top to the next node down,  effectively removes the old top
    this.top = this.top.previous;
    
    console.log(pop.val);
    return pop.val;
  }
}

mySLStack.pop();

console.log(mySLStack.top.val);


// return whether a given value is in the stack
SLStack.prototype.contains = function(value){
  if(!this.top){
    console.log('empty stack');
    return false;
  }
  else if(this.top.val === value){
    console.log('contains '+value+': '+true);
    return true;
  }
  else{
    var runner = this.top;
    while(runner.previous){
      // move down the stack and check values
      runner = runner.previous;
      if(runner.val === value){
        console.log('contains '+value+': '+true);
        return true;
      }
    }
    // out of while loop, so we've reached the bottom and not found value
    console.log('contains '+value+': '+false);
    return false;
  }
}

mySLStack.push(3);
mySLStack.contains(1);
mySLStack.contains(3);
mySLStack.contains(14);


// return the number of stacked values
SLStack.prototype.size = function(){
  var count = 0;
  if(this.top){
    count++;
    var runner = this.top;
    while(runner.previous){
      runner = runner.previous;
      count++;
    }
  }
  // end of while loop, we've counted all nodes or var count is still 0 if no this.top
  console.log('size: '+count);
  return count;
}

mySLStack.size();

// function to determine whether two stacks are equal
// stacks are equal only if they have equal elements in identical order
function stacksAreEqual(SLStack1, SLStack2){
  // start at the top, can't get the value of an undefined node, so make sure they both have a top
  if(SLStack1.top && SLStack2.top){
    if(SLStack1.top.val === SLStack2.top.val){
      var runner1 = SLStack1.top;
      var runner2 = SLStack2.top;
      // run down the stacks as long as Either of them have more nodes
      // if one stack is smaller, we will compare a value to null and get false;
      while(runner1.next || runner2.next){
        runner1 = runner1.next;
        runner2 = runner2.next;
        if(runner1.val !== runner2.val){
          console.log('stacksAreEqual: '+false);
          return false;
        }
      }
      // out of while loop and values were identical all the way down
      console.log('stacksAreEqual: '+true);
      return true;
    }
    else{
      console.log('stacksAreEqual: '+false);
      return false;
    }
  }
  // call 2 empty stacks equal
  else if(!SLStack1.top && !SLStack2.top){
    console.log('areStackEqual: both empty');
    return true;
  }
  else{
    // one is empty and the other isn't
    console.log('areStacksEqual: '+false);
    return false;
  }
}

var testStack = new SLStack();


stacksAreEqual(mySLStack, testStack);
testStack.push(1);
testStack.push(3);
stacksAreEqual(mySLStack, testStack);