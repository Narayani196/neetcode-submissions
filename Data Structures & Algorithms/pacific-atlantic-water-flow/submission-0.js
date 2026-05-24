class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pac = Array.from({ length: heights.length }, () => 
                  Array(heights[0].length).fill(false));
        let atl = Array.from({ length: heights.length }, () => 
                  Array(heights[0].length).fill(false));
        
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let pacQ = [];
        let atlQ = [];
        for(let i = 0 ; i<heights[0].length;i++){
            pacQ.push([0,i]);
            atlQ.push([heights.length-1, i]);
        }
        for(let i = 0 ; i<heights.length;i++){
            pacQ.push([i,0]);
            atlQ.push([i,heights[0].length-1]);
        }
        function bfs(queue, ocean, heights){
            while(queue.length>0){
                let [r,c] = queue.shift();
                ocean[r][c] = true;
                for(let [dr,dc] of directions){
                    let nr = r+dr;
                    let nc = c+dc;
                    if(nr >= 0 && nr<heights.length && nc >= 0 && nc <heights[0].length
                    && !ocean[nr][nc] && heights[nr][nc]>= heights[r][c]){
                        queue.push([nr,nc]);
                    }
                }

            }
        }
        bfs(pacQ, pac, heights);
        bfs(atlQ, atl, heights);

        let res = [];
        for(let r = 0; r<heights.length; r++){
            for(let c=0; c<heights[0].length;c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r,c]);
                }
            }
        }
        return res;
        
    }
}
