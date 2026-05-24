class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length; 
        //let visited = new Set();
        let queue = [];
        let fresh =0;

        for(let i = 0; i<rows; i++){
            for(let j = 0; j<cols; j++){
                if(grid[i][j]===1){
                    fresh++;
                }
                if(grid[i][j]===2){
                    queue.push([i,j]);
                }
            }
        }
        let min = 0;
        const directions = [[0,1],[0,-1],[1,0],[-1,0]];
        while(fresh>0 && queue.length>0){
            const len = queue.length;
            for(let k = 0; k<len; k++){
                const [r,c] = queue.shift();
                for(const [dr,dc] of directions){
                    const nr = r+dr;
                    const nc = c+dc;
                    if(nr>=0 && nc >=0 && nr<rows && nc<cols && grid[nr][nc]===1){
                        grid[nr][nc]=2;
                        queue.push([nr,nc]);
                        fresh--;
                    }
                } 
                
            }
            min++;     
        }
        return fresh==0?min:-1;
    }
}