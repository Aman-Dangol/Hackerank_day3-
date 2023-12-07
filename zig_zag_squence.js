function processData(input) {
  //Enter your code here
  let k = Math.round((input.length + 1) / 2);
  let kCom = input.length - k; //for increasing array
  let increaseArr = new Array();
  let decreaseArr = new Array();
  //   increase array
  for (let i = 0; i < kCom; i++) {
    increaseArr.push(input[i]);
  }
  //removing
  for (let i = 0; i < kCom; i++) {
    input.shift();
  }
  increaseArr.sort();
  //   decrease array
  for (i = 0; i < input.length; i++) {
    decreaseArr.push(input[i]);
  }
  decreaseArr.sort().reverse();
//   combine array
    for (let index = 0; index < decreaseArr.length; index++) {
      increaseArr.push(decreaseArr[index]);
    }
    let arrToString = increaseArr.toString()
    let finalOutput = arrToString.replace(/,/g," ")
  console.log(finalOutput);
}

let array = [1, 2, 3, 4, 5, 6, 7];
// output should be 1 4,5,3,2
processData(array);

// hackerank version

function processData(input) {
    //Enter your code here
     let builtArray = [];
  for (let i = 4; i < input.length; i++) {
    if (input[i] !== ' ') {
      builtArray.push(+input[i]);
    }
  }
   let k = Math.round((builtArray.length + 1) / 2);
  let kCom = builtArray.length - k; //for increasing array
  let increaseArr = new Array();
  let decreaseArr = new Array();
  //   increase array
  for (let i = 0; i < kCom; i++) {
    increaseArr.push(builtArray[i]);
  }
  //removing
  for (let i = 0; i < kCom; i++) {
    builtArray.shift();
  }  
  increaseArr.sort();
  //   decrease array
  for (i = 0; i < builtArray.length; i++) {
    decreaseArr.push(builtArray[i]);
  }
  decreaseArr.sort().reverse();
  //combine array
  for (let index = 0; index < decreaseArr.length; index++) {
    increaseArr.push(decreaseArr[index]);
  }
  let arrToString = increaseArr.toString()
    let finalOutput = arrToString.replace(/,/g," ")
  console.log(finalOutput);
} 

