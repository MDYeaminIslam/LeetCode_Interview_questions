//Time Complexity: O(n) and Space Complexity: O(1)
//LeetCode: 26. Remove Duplicates from Sorted Array
//Here we are using two pointer approach, one pointer is for iterating the array and another pointer is for storing the value which is not equal to nums[i-1]. Then we are returning the length of the array which is equal to the value of the second pointer that is k.
var removeDuplicates = function(nums) {
  let k = 0;
  let NewArr = [];
  for(let i=0; i<nums.length; i++){
    if(nums[i-1] !== nums[i]){
      NewArr[k] = nums[i];
      k++;
    }
  }
  return `Length of the array is ${k} and the array is ${NewArr}`
};

const nums = [0,1,2,2,3,3,4];
console.log(removeDuplicates(nums));


/*

var removeDuplicates = function(nums) {
    let k = 0;
    nums[k] = nums[0]
    k+=1;
    for(let i = 1; i<nums.length; i++){
      if(nums[i-1] !== nums[i]){
        nums[k] = nums[i];
        k++;
      }
    }
    return k;
};*/