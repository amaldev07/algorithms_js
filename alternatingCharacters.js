function alternatingCharacters(s) {
    let strAry = s.split('');
    let doContinue = true;
    let count = 0;
    for (let i = 0; i < strAry.length; i++) {
        if (strAry[i] == strAry[i + 1]) {
            count = count + 1;
        }
    }
    return count;
}
let a = alternatingCharacters('aaa');
debugger;
// let
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB