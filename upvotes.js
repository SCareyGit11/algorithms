// given an array and window length K, compute and log the non-decreasing subranges
// of each window minus the non-increasing subranges
function upvotes(arr,K){
  var N = arr.length;
  var non_increasing;
  var non_decreasing;
  // track if previous days had been trending up, down or holding steady
  var trend;
  var steady;
  for(var i=0; i<=N-K; i++){
    // console.log('window');
    non_increasing = 0;
    non_decreasing = 0;
    trend = 0;
    steady = 0;
    for(var j=i+1; j<i+K; j++){
      if(arr[j]>arr[j-1]){
        non_decreasing++;
        // add in any subranges begun with contiguous equal values
        non_decreasing+=steady;
        // reset days holding steady to zero
        steady = 0;
        if(trend>0){
          // if it was already trending up, then add in subranges contiguous with this trend
          non_decreasing+=trend;
        }
        else if(trend<0){
          // if it had been trending down, reset trend to zero (change of direction)
          trend = 0;
        }
        // this subrange started a new uptrend (whether it reversed a down trend or
        // continued an established up trend)
        trend++;
      }
      else if(arr[j]<arr[j-1]){
        // same logic as above just positives become negatives for down trends
        non_increasing--;
        non_increasing-=steady;
        steady = 0;
        if(trend<0){
          non_increasing+=trend;
        }
        else if(trend>0){
          trend = 0;
        }
        trend--;
      }
      // if contiguous values are equal, days holding steady, not up or down
      else{
        steady++;
        // add the days holding steady to the current trend
        if(trend>0){
          non_decreasing+=steady;
        }
        else if(trend<0){
          non_increasing-=steady;
        }
      }
     
    }  // end of j for loop
    // contiguous equal values not counted as both non_increasing and non_decreasing
    // since they cancel eachother out.  Contiguous equal values are just 
    // counted as potential to contribute to non_decreasing or non_increasing
    // console.log('non_decreasing '+non_decreasing);
    // console.log('non_increasing '+non_increasing);
    console.log(non_decreasing+non_increasing);
  } // end of i for loop
}

upvotes([1,2,3,1,1],3);
// upvotes([1,1,1,5,4,5,2],4);