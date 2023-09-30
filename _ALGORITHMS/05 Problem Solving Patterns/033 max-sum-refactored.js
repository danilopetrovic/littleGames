// Time complexity O(n)

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // svaku iteraciju oduzme prvi i sledeci umesto da sve opet zbraja...
    maxSum = Math.max(maxSum, tempSum); // uzima vecu sumu
  }
  return maxSum;
}

const result = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result);