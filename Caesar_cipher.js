function caesarCipher(s, k) {
  // Write your code here
  let sentence = s;
  let rotation = k;
  let rotatedText = "";
  let capRegex = /[A-Z]/;
  let smallRegex = /[a-z]/;
  let rotatedCode;
  let differece;
  for (let i = 0; i < sentence.length; i++) {
    if (!capRegex.test(sentence[i]) && !smallRegex.test(sentence[i])) {
      rotatedText += sentence[i];
    } else {
      if (capRegex.test(sentence[i])) {
        rotatedCode = sentence.charCodeAt(i);
        rotatedCode += rotation;

        while (rotatedCode > 90) {
          differece = rotatedCode - 90;
          rotatedCode = 65 + differece - 1;
        }
      } else {
        rotatedCode = sentence.charCodeAt(i);
        rotatedCode += rotation;
        while (rotatedCode > 122) {
          differece = rotatedCode - 122;
          rotatedCode = 97 + differece - 1;
        }
      }
      rotatedText += String.fromCharCode(rotatedCode);
    }
  }
  return rotatedText;
}
let s = "6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr";
let k = 87;
console.log(caesarCipher(s, k));
