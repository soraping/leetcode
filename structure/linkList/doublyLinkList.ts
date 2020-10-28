/**
 * 双向链表
 */
 import { NodeBase, LinkList, ILinkList } from './linkList'

 class DoublyNode<T> extends NodeBase<T> {
     /**
      * 
      * @param element 
      * @param next 下一个节点
      * @param prev 上一个节点
      */
    constructor(element: T, next: DoublyNode<T> = null, private prev?: DoublyNode<T>){
        super(element, next)
    }
 }

interface IDoublyLinkList<T> extends ILinkList<T, DoublyNode<T>> {
    getElementAt(position: number): DoublyNode<T>;
}


/**
 * 双向链表
 * 多个方法和单向链表不同，双向链表多了一个 prev 属性，还要改变 prev 这个属性的值
 */
class DoublyLinkList<T> extends LinkList<T> implements IDoublyLinkList<T> {

    constructor(protected head ?: DoublyNode<T>, protected tail ?: DoublyNode<T>){
        super()
    }

    insert(element: T, position: number){
        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position}`)
        }
        if(position == 0){
            // 链表头部
            
        }else if(position == (this.size - 1)){
            // 链表尾部

        }else{
            // 目标位置的上一个元素
            let prevNode = this.getElementAt(position - 1)
            // 原目标位置元素
            let currentNode = prevNode.next
            // 新增元素
            let targetNode = new DoublyNode(element, currentNode, prevNode)
            prevNode.next = targetNode
            currentNode.prev = targetNode
        }
    }


}

let doublyLinkList = new DoublyLinkList<number>()
doublyLinkList.push(1)