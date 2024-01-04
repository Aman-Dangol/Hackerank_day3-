function minimumBribes(q) {
  // in this code we are checking the e positions from the index e.g in p[0] we are checking 1 , 2 ,3 so
  // we are doing so because p[0] is allowed to be 1 , 2 , 3 if more than this is the value we know there is a bribe bigger than two
  let pos1 = 1,
    pos2 = 2,
    pos3 = 3;
  let totalBribes = 0;
  let bribes = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] == pos1) {
      // if no bribes were taken and all position is in actual order
      // 1 , 2 , 3
      pos1 = pos2;
      pos2 = pos3;
      pos3++;
      // 2,3,4
    } else if (q[i] == pos2) {
      // if we find that q[i] was  bribes to take a step back we know the someonw behind of it was the briber
      // 2 , 1 , 3
      totalBribes++;
      pos2 = pos3;
      pos3++;
      // 1,3,4
    } else if (q[i] == pos3) {
      // if we find that q[i] was  bribed to take 2 step back we know the someone two step  behind of it was the briber
      // 3 1 2
      totalBribes += 2;
      pos3++;
    } else {
      console.log("Too chaotic");
      return;
    }
  }
  console.log(totalBribes);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
