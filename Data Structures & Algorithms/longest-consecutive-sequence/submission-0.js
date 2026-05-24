class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0; 
        for(let i of nums){
            if(!numSet.has(i-1)){
                let length = 1;
                while(numSet.has(i+length)){
                    length++;
                }
                longest = Math.max(longest, length);
            }

        }
        return longest;
    }
}
