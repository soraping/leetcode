import { BinarySearchTreeNode } from './binarySearchTree'
import { Queue } from '../queue/queue'

/**
 * 二叉树的深度,递归方案
 */
let maxDepth = function<T>(root: BinarySearchTreeNode<T>){
    if(root == null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.rigth)) + 1
}


/**
 * 二叉树的深度，广度遍历
 * 使用队列，将节点一次放入队列中
 * @param root 
 */
let maxDepth_bfs = function<T>(root: BinarySearchTreeNode<T>){
    let queue = new Queue<BinarySearchTreeNode<T>>()
    queue.enqueue(root)
    let maxLen = 0

    while (!queue.isEmpty()) {
        let node = queue.dequeue()
        if(node.rigth != null) queue.enqueue(node.rigth)
        if(node.left != null) queue.enqueue(node.left)
        maxLen++
    }

    return maxLen
}

