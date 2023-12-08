function caesarCipher(s, k) {
  // Write your code here
  let sentence = s;
  let rotation = k;
  let rotatedText = "";
  let capRegex = /[A-Z]/;
  let smallRegex = /[a-z]/;
  let rotatedtext;
  let differece;
  for (let i = 0; i < sentence.length; i++) {
    // checking if character is an alphavet or not and if not just adding to final text
    if (!capRegex.test(sentence[i]) && !smallRegex.test(sentence[i])) {
      rotatedText += sentence[i];
    } else {
      // converting the character to its equivalent ascii value
      rotatedtext = sentence.charCodeAt(i);
      // increaseing the value per the rotation to cipher it
      rotatedtext += rotation;
      // checcking if the character is uppercase or lowercases
      if (capRegex.test(sentence[i])) {
        // if after addding the rotation value goes above the bound(Z)
        while (rotatedtext > 90) {
          //getting the difference to know how much to add to the rotatedtext
          differece = rotatedtext - 90;
          //   subraticting 1 beacause by default 65 represents first character
          rotatedtext = 65 + differece - 1;
        }
        // do the loop untill the value of rotated text is above 90
      } else {
        // same as rotated text but for lowercase
        while (rotatedtext > 122) {
          differece = rotatedtext - 122;
          rotatedtext = 97 + differece - 1;
        }
      }
      rotatedText += String.fromCharCode(rotatedtext);
    }
  }
  return rotatedText;
}
let s = "middle-outz";
let k = 2;
console.log(caesarCipher(s, k));
