class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let preReqMap = new Map();
        //Build a hashmap
        for(let i = 0; i<numCourses;i++){
          preReqMap.set(i,[])
        }
        for (let [crs, pre] of prerequisites) {
            preReqMap.get(crs).push(pre);
        }
        let visiting = new Set();
        function dfs(num){
            
            if(visiting.has(num)){
                return false;
            }
            if(preReqMap.get(num).length === 0){
                return true;
            }
            visiting.add(num);
            for(let i = 0; i<preReqMap.get(num).length; i++){
                if(!dfs(preReqMap.get(num)[i])){
                    return false;
                }
            }
            visiting.delete(num);
            preReqMap.set(num, []);
            return true;
        }

        /* {0: [1],
            1:[2],
            } */
        for(let i = 0; i<numCourses; i++){
           if(!dfs(i)){
            return false;
           }
        }
        return true;
    }
}
