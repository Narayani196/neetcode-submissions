# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        minVal = min(p.val, q.val)
        maxVal = max(p.val, q.val)
        def dfs(node, minVal, maxVal):
            if node is None:
                return None
            if maxVal < node.val: 
                return dfs(node.left, minVal, maxVal)
            elif minVal > node.val:
                return dfs(node.right, minVal, maxVal)
            else:
                return node
            
        return dfs(root, minVal, maxVal)