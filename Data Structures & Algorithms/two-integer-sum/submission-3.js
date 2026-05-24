class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let i = 0; i<nums.length;i++){
        //     for(let j = i+1; j<nums.length; j++){
        //         if(nums[i]+nums[j]==target)
        //             return[i,j];
        //     }
        // }
        // return [];
        let A = [];
        for( let i in nums){
            A.push([nums[i],i]);
        }
        A.sort((a,b)=> a[0]-b[0]);
        let i =0,
            j=nums.length-1;
        while(i<j){
            if(A[i][0]+A[j][0]==target){
                return [Math.min(A[i][1],A[j][1]), Math.max(A[i][1],A[j][1])]
            }
            else if(A[i][0]+A[j][0] < target){
                i++;
            }else{
                j--;
            }
        }
        return [];

    }
}
