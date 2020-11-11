import { Queue } from '../queue/queue'
import { BinarySearchTreeNode, BinarySearchTree } from './binarySearchTree'

type TLevels<T> = T[][]

/**
 * leetcode-102
 * 二叉树层序遍历
 * 
 * @param root 
 */
const levelOrder = function<T>(root: BinarySearchTreeNode<T>): TLevels<T> {
    if(root == null) return []

    let q = new Queue<BinarySearchTreeNode<T>>()
    q.enqueue(root)

    /**
     * 存储每一层节点值
     * 如何判断该节点的层级
     */
    let res = []

    /**
     * 每次 while 就是一层的节点遍历，而不再是广度遍历那样，一次循环是一个节点
     */
    while (!q.isEmpty()) {

        // 当前队列长度
        // 这个长度就是这一层所有节点数
        let currentSize = q.size

        // 初始化这一层的数据展示
        res.push([])

        // 在这个单次 while 中， 把这一层的节点都遍历，这样就能实现层序遍历了
        for (let i = 0; i < currentSize; i++) {

            // 逐个取出该层的节点数
            let node = q.dequeue()
            
            // 最近的一层就是当前队列节点
            res[res.length - 1].push(node.key)

            node.left && q.enqueue(node.left)
            node.rigth && q.enqueue(node.rigth)
        }

    }

    return res

};

// let tree = new BinarySearchTree()

// tree.insert(12)
// tree.insert(8)
// tree.insert(19)
// tree.insert(13)
// tree.insert(7)
// tree.insert(1)
// tree.insert(20)
// tree.insert(5)

// console.log(levelOrder(tree.search(12)))


