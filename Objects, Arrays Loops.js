// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let extra01 = [1, 3, 5];
console.log("before reversal:",extra01)
extra01 = extra01.reverse();
console.log("after reversal:", extra01);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let testArray =[0,61,2,35,4,45,63,7,28,9];
console.log("Our starting array is:", testArray);
let biggerNumber = null;
let maxNumber = testArray[0];
for(i=0;i<testArray.length;i++){
    if(testArray[i+1]>testArray[i]){
        biggerNumber=testArray[i+1]
        //console.log("debug - higher");
        if(biggerNumber>maxNumber){
            maxNumber = biggerNumber;
            //console.log("debug - new max");
        }
        
    }//else{
        //console.log("debug - lower");
    //}
}
console.log("The max number is:", maxNumber);


/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let testArray02 =[1,61,2,35,4,0,63,7,28,9];
console.log("Our starting array is:", testArray02);
let smallerNumber = null;
let minNumber = testArray02[0];
for(i=0;i<testArray02.length;i++){
    if(testArray02[i+1]<testArray02[i]){
        smallerNumber=testArray02[i+1]
        //console.log("debug - lower");
        if(smallerNumber<minNumber){
            minNumber = smallerNumber;
            //console.log("debug - new min");
        }
        
    }//else{
        //console.log("debug - higher");
    //}
}
console.log("The min number is:", minNumber);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("Our starting array is:", testArray02);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
