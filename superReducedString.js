/**
 * Delete repeating chars ina string, like aasd->sd, till the 'no repetations'. 
 * If the final string is empty, return Empty String
 * https://www.hackerrank.com/challenges/reduced-string/problem
*/

function reduceString(inputString) {
    let s = inputString.split('');
    let continueOperation = true;
    while (continueOperation) {
        continueOperation = false;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === s[i + 1]) {
                s[i] = '';
                s[i + 1] = '';
                continueOperation = true;
            }
            s = s.join('').split('');
        }
    }
    console.log("Original string : " + inputString);
    console.log("Formatted string : " + s.join(''))

}

