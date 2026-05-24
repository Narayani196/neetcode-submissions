class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        
        let sum;
        let results = [];
        for(let i =0 ; i<nums.length; i++){
            if (nums[i] > 0) break;
            let a = nums[i];
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            }
            let left = i+1, right = nums.length-1;
            
            while(left<right){
                sum = a + nums[left] + nums[right];
                if(sum>0){
                    right--;
                }else if(sum<0){
                    left++;
                }else{
                    results.push([a, nums[left], nums[right]]);
                    left++;
                    right--;
                    while(left<right && nums[left]==nums[left-1]){
                        left++;
                    }
                }
            }
            
            
        }
        return results;
        
    }
}
