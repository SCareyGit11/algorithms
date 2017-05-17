// Queues - sequential data structures with linked list nodes, in this case, singly-linked
// sequence follows first in, first out rule (FIFO)

// singly-linked node constructor
function Node(value){
	this.val = value;
	this.next = null;
}


// queue constructor with singly-linked nodes
function SLQueue(){
  var head = null;
  var tail = null;
}

// SLQueue method enqueue(value) adds node of given value to the end of the queue
SLQueue.prototype.enqueue = function(value){
  var node = new Node(value);
  if(!this.head){
    this.head = node;
  }
  else{
    var runner = this.head;
    while(runner.next){
      runner = runner.next;
    }
    // end of queue
    runner.next = node;
  }
  this.tail = node;
}

// initialize new SLQueue
var myQueue = new SLQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);



// singly-linked list queue method to remove and return value at front of queue
SLQueue.prototype.dequeue = function(){
  if(!this.head){
    console.log('dequeue() '+false);
    return false;
  }
  else{
    // save head node as a temp 'front' variable
    var front = this.head;
    // change head to the node next in line
    this.head = this.head.next;
    
    console.log('dequeue() '+front.val);
    return front.val;
  }
}

// SLQueue method, front(), to return the value at the front of the queue
// without removing it
SLQueue.prototype.front = function(){
  if(!this.head){
    console.log('empty queue');
    return false;
  }
  else{
    console.log(this.head.val);
    return this.head.val;
  }
}


console.log(myQueue);
