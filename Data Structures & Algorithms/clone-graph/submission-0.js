/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }
    dfs(node, oldToNew){
        if(node == null){
            return node;
        }
        if(oldToNew.has(node)){
            return oldToNew.get(node);
        }
        let copy = new Node(node.val);
        oldToNew.set(node, copy);
        for(const n of node.neighbors){
            copy.neighbors.push(this.dfs(n,oldToNew));
        }
        return copy;
    }
}
