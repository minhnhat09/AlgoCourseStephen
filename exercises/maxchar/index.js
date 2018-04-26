// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {}
    for (char of str) {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    }
    let maxChar = '';
    let maxVal = 0
    for (e in map) {
        if (map[e] > maxVal) {
            maxChar = e;
            maxVal = map[e];
        }
    }
    return maxChar;
}

module.exports = maxChar;
