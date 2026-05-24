class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rLen = grid.length;
        let cLen = grid[0].length;
        let maxArea = -1; 
        let visited = new Set();
        function bfs(r,c){
            let queue = []; 
            let area = 1;
            let directions = [[-1,0], [0,-1], [1,0],[0,1]];
            queue.push([r,c]); 
            visited.add(visited.add(`${r},${c}`));
            while(queue.length>0){
                let [row,col] = queue.shift();
                for(let [dr,dc] of directions){
                   let nr = row + dr;
                   let nc = col + dc;
                    if(nr >= 0 && nr < rLen && nc >=0 && nc < cLen && grid[nr][nc]=== 1 && !visited.has(`${nr},${nc}`)){
                        queue.push([nr,nc]);
                        visited.add(`${nr},${nc}`);
                        area++;
                    }
                } 
                
            }
            return area;
        }
        for(let i =0; i<rLen; i++){
            for(let j =0 ;j<cLen; j++){
                if(grid[i][j]=== 1 && !visited.has(`${i},${j}`)){
                    let currArea = bfs(i,j);
                    if(currArea > maxArea){
                        maxArea = currArea;
                    }

                }
            }
        }
        return maxArea==-1?0:maxArea;
    }
}
