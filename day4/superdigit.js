function superDigit(n, k) {
  let splitNum = n.split(""); //splitig the bumbers into chacracters
  let sum = 0;
  // loop to evaluate the bumerical sum of those characters
  splitNum.forEach((element) => {
    sum += parseInt(element); // before adding turning those characters into integers else it will concatinate the string
  });
  sum = sum * k; // multiplying the string k times to get the p string instead of first multiply and adding we add first and then multiply e.g : sayy (1111 ,2) if we add 1111  and make 4 and then mukltiplt by 2 = 8 it is as same as first concating the string to 11111111 and then adding . The former was aves us time and memery;

  if (sum / 10 > 1) {
    //checking if the sum of those digits is a single digit ot multiple. single digit == super digit
    return superDigit(String(sum), 1); // if its not a super digit , then we again call this function
  }
  return sum; // if it is single digit then we simply return the sum;
}

let result = superDigit("9875", 4);
console.log(result);
