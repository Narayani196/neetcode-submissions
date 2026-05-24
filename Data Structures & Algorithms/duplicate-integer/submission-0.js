class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = new Map();
        for(let n of nums){
            if(!hash.has(n))
                hash.set(n,1)
            else 
                return true
        }
        return false
    }
}
