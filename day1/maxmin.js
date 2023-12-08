function miniMaxSum(arr) {
  // Write your code here
  var sum = 0,
    temp = 0,
    min = 0,
    max = 0;
  var arr2 = arr.sort();
  for (var i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  max = sum - arr2[0];
  min = sum - arr2[arr2.length - 1];

  console.log(min, max);
}
