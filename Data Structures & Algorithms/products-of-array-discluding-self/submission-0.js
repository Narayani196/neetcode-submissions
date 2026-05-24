class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let results = Array(nums.length).fill(1);
        let j = 0, i = 1;
        while(i <= nums.length && j<=nums.length-1){
            if(i==nums.length){
                j++;
                i=0;
            }else if(i==j){
                i++;
                continue;
            }
            else{
                results[j] = results[j]*nums[i];
                i++;
            }
            
        }
        return results
    }
}
