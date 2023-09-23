//Time Complexity: O(n) and Space Complexity: O(1)
//LeetCode: 27. Remove Element
//Here we are using two pointer approach, one pointer is for iterating the array and another pointer is for storing the value which is not equal to val. Then we are returning the length of the array which is equal to the value of the second pointer that is k.
var removeElement = function(nums, val) {
  let k = 0;
  let NewArr = [];
  for(let i=0; i<nums.length; i++){
    if(nums[i] !== val){
      NewArr[k] = nums[i];
      k++;
    }
  }
  return `Length of the array is ${k} and the array is ${NewArr}`
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;
console.log(removeElement(nums, val));


/* /**
This one is the optimized solution of the above problem. Here we are not using any extra space. We are just replacing the value of the array with the value of the second pointer. And then we are returning the value of the second pointer.
 * @param {number[]} nums
 * @param {number} val
 * @return {number} k

var removeElement = function(nums, val) {
  let k = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] !== val){
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
*/