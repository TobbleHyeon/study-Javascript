// 별찍기
for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(i + 1));
}

/*

 *
 **
 ***
 ****
 *****

 */

// 별찍기 역순
for (let i = 6; i > 1; i--) {
  console.log('*'.repeat(i - 1));
}

/*

 *****
 ****
 ***
 **
 *

 */

// 별찍기 let i = 0 상태 "역순"
for (let i = 0; i < 5; i++) {
  console.log('*'.repeat(5 - i))
}

/*

 *****
 ****
 ***
 **
 *

 */

// 별찍기 홀수만
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log('*'.repeat(i));
}

/*

*
***
*****
*******
*********

*/


// 별찍기 홀수만 "역순"
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log('*'.repeat(10-i));
}

/*

*********
*******
*****
***
*

*/

// 별찍기 앞에 공백
for (let i = 0; i <=5 ; i++) {
  console.log(' '.repeat(i) + '*'.repeat(5-i));
}

/*

*****
 ****
  ***
   **
    *

*/

// 별찍기 앞에 공백
for (let i = 1; i <=5 ; i++) {
  console.log(' '.repeat(5-i) + '*'.repeat(i));
}

/*

     *
    **
   ***
  ****
 *****

*/