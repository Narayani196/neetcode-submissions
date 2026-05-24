class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        let preMap = new Map();
        let results = [];
        for(let i = 0; i<numCourses; i++){
            preMap.set(i, []);
        }
        for(let [crs, pre] of prerequisites){
            preMap.get(crs).push(pre);
        }
        let visiting = new Set();
        let cycle = new Set();
        const dfs = (crs)=>{
            if(cycle.has(crs)){
                return false
            }
            if(visiting.has(crs)){
                return true;
            }
            cycle.add(crs);
            for(let i = 0 ; i<preMap.get(crs).length; i++){
                if(!dfs(preMap.get(crs)[i])){
                 //   results.push(preMap.get(crs)[i]);
               // }else{
                    return false;
                }

            }
            cycle.delete(crs);
            visiting.add(crs);
            //preMap.set(crs, []);
            results.push(crs)
            return true;
            
        }
        for(let i = 0; i<numCourses;i++){
            if(!dfs(i)){
                return []
            }
        }
        return results;

    }
}
