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
mySLL.addFront(5).addFront(3).addFront(1);
mySLL.removeFront();
mySLL.contains(5);
mySLL.contains(1);
console.log(mySLL.head.val);