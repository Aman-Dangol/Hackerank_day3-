function palindromeIndex(s) {
    let mid = Math.floor(s.length/2)
  // duplicate string to use
  let duplicate;
  // beginning of string
  let start = 0;
  //  last index of string
  let end = s.length - 1;
  // checking if provided string is already palindrome
  if (s == reverseString(s)) {
    return "pal";
  }
  while (start < mid) {
    duplicate = s.substring(0,start)+""+s.substring(start+1);
    if (duplicate == reverseString(duplicate)) {
      return start;
    }
    duplicate = s.substring(0,end)+""+s.substring(end+1);
    if (duplicate == reverseString(duplicate)) {
      return end;
    }
    start++;
    end--;
  }
  return "not palindrome";
}

reverseString = (s) => {
  let reversed = []; // Initialize as an array
  for (let i = 0; i < s.length; i++) {
    reversed[s.length - i - 1] = s[i];
  }
  return reversed.toString().replace(/,/g, "");
};

let s = "lhrxvssvxrhlx";
let test = "hellow world";

console.log(palindromeIndex(s));