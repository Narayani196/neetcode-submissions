class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({length: n}, ()=> []);
        let visit = Array(n).fill(false);
        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        const dfs = (node)=>{
            for(let nei of adj[node]){
                if(!visit[nei]){
                    visit[nei] = true;
                    dfs(nei);
                }
            }
        };
        let res = 0;
        for(let node =0; node<n;node++){
            if(!visit[node]){
                visit[node] = true;
                dfs(node);
                res++;
            }
        }
        return res;
    }
}
