import { BinarySearchTreeNode, BinarySearchTree } from './binarySearchTree'
import { Queue } from '../queue/queue'

/**
 * 二叉树的深度,递归方案
 */
let maxDepth = function<T>(root: BinarySearchTreeNode<T>){
    if(root == null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
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

        // 当前队列的长度，这个长度就是这一层树的节点数
        let levelSize = queue.size

        for(let i = 0; i < levelSize; i++){
            // 将队列中的节点逐个取出
            let node = queue.dequeue()
            node.right && queue.enqueue(node.right)
            node.left && queue.enqueue(node.left)
        }

        maxLen++
    }

    return maxLen
}

// let tree = new BinarySearchTree()

// tree.insert(12)
// tree.insert(7)
// tree.insert(19)
// tree.insert(4)
// tree.insert(9)
// tree.insert(8)
// tree.insert(15)
// tree.insert(21)
// tree.insert(25)

// console.log(maxDepth_bfs(tree.search(12)))
// console.log(maxDepth(tree.search(12)))
