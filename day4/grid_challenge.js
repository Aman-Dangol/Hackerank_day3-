function gridChallenge(grid) {
  let sorted = new Array(); // to store the sorted array on a new variable
  grid.forEach((element) => {
    sorted.push(element.split("").sort()); //pushing each element into sorted after spliting them into characters and then sorting them
  });
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (j + 1 >= sorted.length) {
        break;
      }
      console.log(j);

      if (sorted[j][i] > sorted[j + 1][i]) {
        console.log("NO");
        return "NO";
      }
    }
  }
  console.log("yes");
  return "YES";
}

console.log(gridChallenge(["zzwj", "zjzw", "zwzj", "jzwz"]));
