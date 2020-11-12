import { BinarySearchTreeNode, BinarySearchTree } from './binarySearchTree'
import { Queue } from '../queue/queue'

/**
 * 二叉树最小深度-leetcode 111
 * @param root 
 */
var minDepth = function<T>(root: BinarySearchTreeNode<T>) {

    if (root == null) return 0;
  
    if (root.left && root.right) {
        return 1 + Math.min(minDepth(root.left), minDepth(root.right));
    } 
    
    if (root.left) {
        return 1 + minDepth(root.left);
    } 
    if (root.right) {
        return 1 + minDepth(root.right);
    } 

    return 1;

};

let tree = new BinarySearchTree()
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
tree.insert(6)

console.log(minDepth(tree.search(2)))

