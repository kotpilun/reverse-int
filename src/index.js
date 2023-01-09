module.exports = function reverse (n) {
    const stringDig = n >= 0 ? String(n) : String(-1 * n);
    let revDig = '';
    for (let i = 0; i <= stringDig.length-1; i++) {
        revDig = stringDig[i] + revDig;
    }
    return Number(revDig);
}
