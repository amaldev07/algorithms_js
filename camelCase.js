function camelcase(ccString) {
    let count = 1;
    for (let i = 0; i < ccString.length; i++) {
        count = count + ((ccString[i] == ccString[i].toUpperCase()) ? 1 : 0);
    }
    return count;
}


// other solutions
function camelcaseAlphabet(ccString) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let count = 1;
    for (let i = 0; i < ccString.length; i++) {
        count = count + ((alphabet.includes(ccString[i])) ? 1 : 0);
    }
    return count;
}
camelcaseAlphabet('ccStringDrrr');

