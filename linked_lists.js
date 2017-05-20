
// list node constructor
function ListNode(value){
  this.val = value;
  this.next = null;
}


// singly-linked list constructor
function SList(){
  var head = null;
   
}  
  
// initialize a new singly-linked list object
var mySLL = new SList();

// list method to add a new node with given value to the list head
SList.prototype.addFront = function(value){
    var node = new ListNode(value);
    if(this.head){
      node.next = this.head;
    }
    this.head = node;
    console.log('addFront',this.head);
    return this;
}


// list method to remove the head node from the list and return the existing node that is now at the head
// return false for empty list, null if list had one node before remove
SList.prototype.removeFront = function(){
    if(this.head){
      this.head = this.head.next;
      console.log('removeFront',this.head);
      return this.head;
    }
    else{
      console.log('empty list');
      return false;
    }
}
  
SList.prototype.contains = function(value){
    if(this.head){
      if(this.head.val === value){
        console.log('contains '+value,true);
        return true;
      }
      else{
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
          if(runner.val === value){
            console.log('contains '+value,true);
            return true;
          }
        }
      }
    }
    console.log('contains '+value,false);
    return false;
}  // end of contains



mySLL.addFront(7).addFront(5).addFront(3).addFront(1);
mySLL.removeFront();
mySLL.contains(5);
mySLL.contains(1);
console.log(mySLL.head.val);

SList.prototype.length = function(){
  var length = 0;
  if(!this.head){
    console.log('length ', length);
    return length;
  }
  else{
    var runner = this.head;
    length++;
    while(runner.next){
      runner = runner.next;
      length++;
    }
    console.log('length ', length);
    return length;
  }
}

mySLL.length();


// return the max value in the list
SList.prototype.max = function(){
  var max, runner;
  if(this.head){
    max = this.head;
    runner = this.head;
    while(runner.next){
      runner = runner.next;
      if(runner.val > max.val){
        max = runner;
      }
    }
  }
  console.log('max', max.val);
  return max.val;
}

mySLL.max();

// return a string containing all list values
SList.prototype.display = function(){
  var display = "";
  if(this.head){
    var runner = this.head;
    display += runner.val;
    while(runner.next){
      runner = runner.next;
      display += ", "+runner.val;
    }
  }
  console.log('display ', display);
  return display;
}

mySLL.display();



// create a function that accepts a ListNode pointer, then traverses the list from that pointer, and
// returns the last value in the list
function back(ListNode){
  var runner = ListNode;
  while(runner.next){
    runner = runner.next;
  }
  console.log('back(ListNode)', runner.val);
  return runner.val;
}



// create a function that creates a ListNode with given value
// and inserts it and the end of a linked list
SList.prototype.addBack = function(value){
  var node = new ListNode(value);
  if(!this.head){
    this.head = node;
  }
  else{
    var runner = this.head;
    while(runner.next){
      runner = runner.next;
    }
    runner.next = node;
  }
}



// create a standalone function that locates the minimum value in a linked list
// and moves that node to the front of the list.
// Return the new list with all nodes still present and in the original order
// (except for the new head node)
function minToFront(SList){
  if(!SList.head){
    console.log('minToFront, empty list');
    return false;
  }
  else{
    var min = SList.head;
    var runner = SList.head;
    var previous;
    while(runner.next){
      // save the node before the min node 
      if(runner.next.val < min.val){
        previous = runner;
        min = runner.next; 
      }
      runner = runner.next;
    }
    // no more runner.next, end of the line.
    // if previous is undefined, then the min was already at the head
    if(previous){
      // link the node before the min directly to the node after the min
      previous.next = previous.next.next;
      // set the min node's next to point to the current head node;
      min.next = SList.head;
      // set the min node at the list's head
      SList.head = min;
    }
    
  }
  console.log('minToFront(SList)');
  return SList;
}

mySLL.addFront(45);
minToFront(mySLL);
mySLL.display();


// create a method of the SList object that given a value,
// removes the node with that value from the list.
// return the new list
SList.prototype.remove = function(value){
  if(!this.head){
    return this;
  }
  else if(this.head.val == value){
    // remove the current head if its val == value
    this.head = this.head.next;
    return this;
  }
  else{
    var runner = this.head;
    while(runner.next){
      // check the value of the next node before moving on
      if(runner.next.val == value){        
        // if the next val matches value, then remove it by skipping over to runner.next.next
        runner.next = runner.next.next;
        return this;
      }
      else{
        // move down the list one space
        runner = runner.next;
      }
    }
    // if we've gotten here, then we're at the end of the list and val was not present
    console.log('remove('+value+'); false');
    
    return this;
  }
}


// remove nodes with duplicate values, retain only
// first instance of each value
SList.prototype.removeDuplicates = function(){
  if(!this.head){
    console.log('empty list');
    return false;
  }
  else{
    var unique = [this.head.val];
    console.log('unique check');
    console.log(Array.isArray(unique));
    console.log(unique.includes(this.head.val));
    var runner = this.head;
    while(runner.next){
      // if we encounter a value that we've already seen, then cut it from the list
      if(unique.includes(runner.next.val)){
        console.log('found a duplicate ',runner.next.val);
        console.log(unique);
        runner.next = runner.next.next;
      }
      else{
        // if the next value is unique then add it to the array
        console.log('push '+runner.next.val);
        unique.push(runner.next.val);
        // only move on to the next node if we've already confirmed it's val is unique
        runner = runner.next;
      }
      
    }  // end of while(runner.next)
  }
}

mySLL.addFront(7).addFront(1).addFront(5);
mySLL.display();
mySLL.removeDuplicates();
mySLL.display();