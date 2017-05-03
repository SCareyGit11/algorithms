function ListNode(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null;
  this.addFront = function(val){
    var node = new ListNode(val);
    if(this.head){
      node.next = this.head;
    }
    this.head = node;
    console.log('addFront',this.head);
    return this;
  }
  
  this.removeFront = function(){
    if(this.head){
      this.head = this.head.next;
    }
    console.log('removeFront',this.head);
    return this.head;
  }
  
  this.contains = function(val){
    if(this.head){
      if(this.head.val === val){
        console.log('contains '+val,true);
        return true;
      }
      else{
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
          if(runner.val === val){
            console.log('contains '+val,true);
            return true;
          }
        }
      }
    }
    console.log('contains '+val,false);
    return false;
  }  // end of contains
}

var mySLL = new SLL();
mySLL.addFront(7).addFront(5).addFront(3).addFront(1);
mySLL.removeFront();
mySLL.contains(5);
mySLL.contains(1);
console.log(mySLL.head.val);

SLL.prototype.length = function(){
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
SLL.prototype.max = function(){
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
SLL.prototype.display = function(){
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