/**
 345. Reverse Vowels of a String

 Given a string s, reverse only all the vowels in the string and return it.

 The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



 Example 1:

 Input: s = "hello"
 Output: "holle"
 Example 2:

 Input: s = "leetcode"
 Output: "leotcede"


 Constraints:

 1 <= s.length <= 3 * 105
 s consist of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {string}
 */

const Vowels = 'aeiouAEIOU';
var reverseVowels = function(s) {
    const arr = [...s];
    for(let i = 0, j = arr.length -1; i < j; i++, j--){
        while(!Vowels.includes(arr[i]) && i < j){
            i++;
        }
        while(!Vowels.includes(arr[j]) && i < j){
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
};