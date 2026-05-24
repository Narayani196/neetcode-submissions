class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let h = new Map();

        if(strs.length <=1 ){
            return [strs];
        }else{
        
            for(let i in strs){
                let temp = strs[i];
                let sortValue = strs[i].split('').sort().join('')
                if(!h.has(sortValue)){
                    h.set(sortValue, [temp])
                }else{
                    h.get(sortValue).push(temp);
                }
            }
            return h.values().toArray();
        }
    }
}
