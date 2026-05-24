class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let h = new Map();
        let results = [];
        for(let i in nums){
            if(!h.has(nums[i])){
                h.set(nums[i],1);
            }else{
                h.set(nums[i], h.get(nums[i]) + 1);
            }
        }
        let sortedMap = new Map([...h].sort((a, b) => b[1] - a[1]));
        let sortedArr = Array.from(sortedMap.keys());
        for(let i = 0; i<k; i++){
            results.push(sortedArr[i]);
        }
        return results;
    }
}