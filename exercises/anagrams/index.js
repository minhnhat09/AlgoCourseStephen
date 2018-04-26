// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let s1 = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    let s2 = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
    return s1 === s2;
}
/* function anagrams(stringA, stringB) {
    let s1 = stringA.replace(/[^\w]/g, "").toLowerCase();
    let s2 = stringB.replace(/[^\w]/g, "").toLowerCase();

    let map1 = {};
    for (e1 of s1) {
        if (map1[e1]) {
            map1[e1]++;
        } else {
            map1[e1] = 1;
        }
    }
    let map2 = {};
    for (e2 of s2) {
        map2[e2] = map2[e2]++ || 1
    }

    console.log(map1, map2);
    if (s1.length !== s2.length) {
        return false;
    } else {
        for (e in map1) {
            return map1[e] === map2[e];
        }
    }


} */

module.exports = anagrams;
