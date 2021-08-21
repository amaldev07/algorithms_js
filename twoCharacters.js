// Two Characters
// hacker rank
// https://www.hackerrank.com/challenges/two-characters/problem

function getLastChar(str) {
    return str.length == 0 ? '' : str[str.length - 1];
}
function getArray(n) {
    let metrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push('');
        }
        metrix.push(row);
    }
    return metrix;
}

function alternate(s) {
    if (s.length == 1) {
        return 0;
    }
    let uniqChars = [...new Set(s.split(''))].sort();
    let metrix = getArray(uniqChars.length);
    let k = [
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ];
    let loopcount = 0;
    let i = 0;
    let largest = '';
    while (loopcount < s.length) {
        let ch = s[loopcount];
        i = uniqChars.indexOf(ch);
        let j = 0; let k = 0;
        while (j < uniqChars.length) {
            let metrixRowItem = metrix[i][j];
            if (metrixRowItem !== false) {
                if ((getLastChar(metrixRowItem) == ch)) {
                    metrixRowItem = false;
                } else {
                    metrixRowItem = metrixRowItem + ch;
                    largest = largest.length > metrixRowItem.length ? largest : metrixRowItem;
                }
            }
            metrix[i][j] = metrixRowItem;
            j = j + 1;
        }
        while (k < uniqChars.length) {
            let metrixColItem = metrix[k][i];
            if (metrixColItem !== false && i !== k) {
                if ((getLastChar(metrixColItem) == ch)) {
                    metrixColItem = false;
                } else {
                    metrixColItem = metrixColItem + ch;
                    largest = (largest.length > metrixColItem.length) ? largest : metrixColItem;
                }
            }
            metrix[k][i] = metrixColItem;
            k = k + 1;
        }
        loopcount = loopcount + 1;
    }
    let greatest = metrix.reduce((pre, cur) => {
        let greter = pre;
        for (let i = 0; i < cur.length; i++) {
            let current = cur[i] === false ? '' : cur[i];
            greter = greter > current.length ? greter : current.length;
        }
        return greter;
    }, 0);
    return greatest;
}
alternate('abab');

