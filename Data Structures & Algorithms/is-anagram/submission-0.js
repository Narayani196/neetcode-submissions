class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hs = new Map();
        let ht = new Map();
        if(s.length !== t.length)
        return false;
        for(let i = 0, j = 0; i<s.length;i++,j++ ){
            if(!hs.has(s[i])){
                hs.set(s[i], 1);
            }else{
                hs.set(s[i], hs.get(s[i])+1);
            }
            if(!ht.has(t[i])){
                ht.set(t[i], 1);
            }else{
                ht.set(t[i], ht.get(t[i])+1);
            }
        }
        if(hs.size != ht.size)
            return false
        for(let [key,value] of hs ){
           let testVal = ht.get(key);
           if(testVal !== value || (testVal == undefined && !ht.has(key)))
            return false
        }
        return true

    }
}
