class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rLen = grid.length;
        let cLen = grid[0].length; 
        let visited = new Set(); 
        let islands = 0; 
        function bfs(r,c){
            let queue = [];
            visited.add(`${r},${c}`);
            let directions = [[-1,0], [1,0],[0,-1],[0,1]];
            queue.push([r,c]);
            while(queue.length>0){
                const [row,col] = queue.shift();
                for(const [dr,dc] of directions){
                    const nr = row + dr;
                    const nc = col + dc;
                    if(nr < rLen && nr >= 0 && nc >= 0 && nc < cLen && grid[nr][nc]==="1" && !visited.has(`${nr},${nc}`) ){
                        visited.add(`${nr},${nc}`);
                        queue.push([nr,nc]);
                    }
                }
            }

        }
        for(let i = 0 ;i <rLen; i++){
            for(let j = 0 ;j <cLen; j++){
                if(grid[i][j] == "1" && !visited.has(`${i},${j}`)){
                    islands++;
                    bfs(i,j);
                }
            }
        }
        return islands;

    }
}
