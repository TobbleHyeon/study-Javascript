for (let i = 0; i <5 ; i ++) {
  if (i%2 ===0) continue;
  for(let j = 0; j < 5; j ++) {
    if (j%2 ===0) continue;
    for(let k = 0; k < 5; k ++) {
      if (k%2 ===0) continue;
      console.log(i,j,k);
    }
  }
}

/* 
1 1 1
1 1 3
1 3 1
1 3 3
3 1 1
3 1 3
3 3 1
3 3 3
*/