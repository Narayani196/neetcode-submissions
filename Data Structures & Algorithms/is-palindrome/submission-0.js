class Solution {

    isAlphanumeric(char){
        return ((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9'));
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newstr = '';
        for(let i of s){
            if(this.isAlphanumeric(i)){
                newstr = newstr.concat(i.toLowerCase());
            }
        }
        return newstr === newstr.split("").reverse().join("")
    }
}
