// given a string, return that string with characters reversed
function reverseString(string){
  var newString = "";
  for(var i=string.length-1; i>=0; i--){
    newString += string[i];
  }
  console.log(newString);
  return newString;
}

reverseString("yellow");


// given a string containing parentheses, braces and brackets, 
// return a boolean whether they are valid
function bracesValid(string){
  var punctuation = [];
  var last;
  
  for(var i=0; i<string.length; i++){
    last = punctuation.length-1;
    // push all opening braces into the array
    if(string[i]=='(' || string[i]=='[' || string[i]=='{'){
      punctuation.push(string[i]);
      
    }
    // when a closing brace is found, check the array, the corresponding opening brace must
    // be the most recent or the braces are invalid
    else if(string[i]==')'){
      if(punctuation[last]=="("){
        punctuation.pop();
        continue;
      }
      
      else{
        console.log(')',i,false);
        return false;
      }
    }
    
    else if(string[i]==']'){
      if(punctuation[last]=='['){
        punctuation.pop();
        continue;
      }
      
      else{
        console.log(']',i,false);
        return false;
      }
    }
    
    else if(string[i]=='}'){
      if(punctuation[last]=='{'){
        punctuation.pop();
        continue;
      }
      else{
        console.log('}',i,false);
        return false;
      }
    }

  } // end of string for loop
  
  // check that there are no opening braces left hanging
  if(punctuation.length === 0){
    console.log('bracesValid',true);
    return true;
  }
  else{
    console.log('bracesValid',false);
    return false;
  }
}

bracesValid('a{ei(o)[u]}');
bracesValid('][');
bracesValid('({)}');