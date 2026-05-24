class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0; 
        let right = heights.length - 1;
        let volume = 0;
        while(left<right){
            let currVol = (right-left)*Math.min(heights[left],heights[right]);
            if(currVol>volume){
                volume = currVol;
            }
            heights[left]<=heights[right]?left++:right--;
        }
        return volume;
    }
}
