class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length; 
        let visited = new Set();
        let queue = [];
        function addCell(r,c){
            if (Math.min(r, c) < 0 || r === rows || c === cols ||
                visited.has(`${r},${c}`) || grid[r][c] === -1
            ) {
                return;
            }
            visited.add(`${r},${c}`);
            queue.push([r,c]);
        }
        for(let i = 0; i<rows;i++){
            for(let j = 0; j<cols; j++){
                if(grid[i][j]==0){
                    queue.push([i,j]);
                    visited.add(`${i},${j}`);
                }
            }
        }
        let dist = 0;
        while(queue.length>0){
            //for(let i = 0; i<queue.length; i++){
            for(let i = queue.length; i>0; i--){
                let [r,c] = queue.shift();
                grid[r][c] = dist;
                addCell(r+1, c);
                addCell(r-1, c);
                addCell(r, c+1);
                addCell(r, c-1);

            }
            dist++;         


        }
    }
       
}
//[INF,  -1,   0, INF]
//[INF, INF, INF,  -1]
//[INF,  -1, INF,  -1]
//[  0,  -1, INF, INF]