function reduceString(inputString) {
    let doContinue = true;
    while (doContinue) {
        let ch = '';
        let i = 0;
        let doSearch = true;
        while (doSearch) {
            if (inputString[i] === inputString[i + 1]) {
                ch = inputString[i];
                doSearch = false;
            }
            i = i + 1;
            doContinue = (i == inputString.length) ? false : doContinue;
        }
        inputString = inputString.split('').filter(x => x !== ch).join('');
    }
    return inputString;
}
let t = 'uyetuppelecblwipdsqabzsvyfaezeqhpnalahnpkdbhzjglcuqfjnzpmbwprelbayyzovkhacgrglrdpmvaexkgertilnfooeazvulykxypsxicofnbyivkthovpjzhpohdhuebazlukfhaavfsssuupbyjqdxwwqlicbjirirspqhxomjdzswtsogugmbnslcalcfaxqmionsxdgpkotffycphsewyqvhqcwlufekxwoiudxjixchfqlavjwhaennkmfsdhigyeifnoskjbzgzggsmshdhzagpznkbahixqgrdnmlzogprctjggsujmqzqknvcuvdinesbwpirfasnvfjqceyrkknyvdritcfyowsgfrevzon';
var a = reduceString(t);
debugger;