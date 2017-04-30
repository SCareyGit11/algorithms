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

// given a string return a boolean of whether the string is a palindrome
// this is the strict version, does not ignore capitalization, punctuation or whitespace
// the string has to be strictly the same backward as forward
function isStrictPalindrome(str){
  // comment out the following block if you want to check for a strict palindrome
  // use this block if you want to ignore capitalization, punctuation and whitespace
 
  for(var i=0; i<Math.floor(str.length/2); i++){
    if(str[i] !== str[str.length-1-i]){
      console.log('isStrictPalindrome '+false);
      return false;
    }
  }
  console.log('isStrictPalindrome '+true);
  return true;
}




// use this version if you want to only consider the letters, ignoring capitalization, punctuation and whitespace
function isPalindrome(str){
  // test a version of the string as all lowercase so that e.g 'D' == 'd'
  var testStr = str.toLowerCase();
  var j = testStr.length-1;
  for(var i=0; i<Math.floor(testStr.length/2); i++){
    // skip over any non-letters using ASCII range
    while(testStr.charCodeAt(i)<97 || testStr.charCodeAt(i)>122){
      i++;
    }
    while(testStr.charCodeAt(j)<97 || testStr.charCodeAt(j)>122){
      j--;
    }
    // now we know we're testing a lowercase letter from the front against a lowercase from the back
    if(testStr[i] !== testStr[j]){
      console.log('isPalindrome '+false);
      return false;
    }
    j--;
  }  // end of for loop
  console.log('isPalindrome '+true);
  return true;
}

isStrictPalindrome('noon');
isPalindrome('noon');

isStrictPalindrome('Dad');
isPalindrome('Dad');

isStrictPalindrome('1Race car 7!');
isPalindrome('1Race car 7!');


// given a string, return whether all the string's letters are in alphabetical order
function isAlphabetical(str){
  // test all letters as lowercase for ASCII comparison
  var testStr = str.toLowerCase();
  var max;
  for(var i=0; i<testStr.length; i++){
    // only consider the letters in the string
    if(97<=testStr.charCodeAt(i)<=122){
      // each letter must be later in the alphabet than any letter previously found in the string
      if(!max || testStr.charCodeAt(i)>=max ){
       max = testStr.charCodeAt(i); 
      }
      // if we find a letter that is earlier in the alphabet
      else{
        console.log('isAlphabetical '+false);
        return false;
      }
    }
  }// end of for loop
  console.log('isAlphabetical '+true);
  return true;
}
              
isAlphabetical('alms');
isAlphabetical('quick');

// recreate the built-in function String.slice(start,end)
// end parameter is optional and if included refers to one index beyond
// the last character to include
function stringSlice(string, start, end){
  var newString = "";
  if(!end){
    end = string.length;
  }
  // support for negative index
  if(start<0){
    start = string.length+start;
  }
  for(var i=start; i<end; i++){
    newString += string[i];
  }
  console.log('stringSlice',newString);
  return newString;
}

stringSlice('bacon, lettuce and tomato', 15, 18);
stringSlice('bacon, lettuce and tomato', 19);
stringSlice('bacon, lettuce and tomato', -6);


// recreate the built-in function String.split(separator)
// split a string into an array of substrings
// Separator specifies where to dive sustrings and is not included in any substring
// limit is optional and indicates the number of splits, discarding all items after the limit
// return the new array
function stringSplit(string, separator, limit){
  var array = [];
  var substring = "";
  
    for(var i=0; i<string.length; i++){
      
      if(string[i] === separator){
        array.push(substring);
        substring = "";
      }
      if(array.length == limit){
        break;
      }
      else{
        substring += string[i];
        // if the separator is an empty string then separate at every character
        if(separator === ""){
          array.push(substring);
          substring = "";
        }
        // if the last letter of the string is not the separator and 
        // we are below the limit(if provided), then push the last substring
        if(i == string.length-1){
          array.push(substring);
        }
      }
    }
    
    
  console.log('stringSplit',array);
  return array
}

stringSplit("Live from New York, It's Saturday Night!", " ");
stringSplit("Live from New York, It's Saturday Night!", " ", 4);
stringSplit("Live from New York, It's Saturday Night!", "", 4);
// stringSplit with no separator and no limit should return 
// an array of length 1 containing the entire string
stringSplit("Live from New York, It's Saturday Night!");




// recreate String.search(val)
// search string for the given value(another string)
// return the index position of the first match found or -1 if not found
function stringSearch(string, val){
  for(var i=0; i<string.length; i++){
    if(string[i] === val){
      console.log('stringSearch', i);
      return i;
      
    }
  }
  // iterated through the string and val not found
  console.log('stringSearch, '+ val+' not found');
  return -1;
}

stringSearch('alphabet','p');
stringSearch('alphabet','q');