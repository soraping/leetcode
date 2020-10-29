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
    constructor(public element: T, public next: DoublyNode<T> = null, public prev: DoublyNode<T> = null){
        super(element, next)
    }
 }



/**
 * 双向链表
 * 多个方法和单向链表不同，双向链表多了一个 prev 属性，还要改变 prev 这个属性的值
 */
class DoublyLinkList<T> extends LinkList<T> {

    constructor(protected head ?: DoublyNode<T>, protected tail ?: DoublyNode<T>){
        super()
    }

    insert(element: T, position: number){

        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position}`)
        }

        let targetNode = new DoublyNode(element)
        let point: DoublyNode<T>

        if(position == 0){

            // 为空链表时赋值
            if(this.isEmpty()){
                this.head = targetNode
                this.tail = targetNode
            }else{
                // 链表头部
                point = this.head
                this.head = targetNode
                this.head.next = point
                point.prev = this.head
            }

        }else if(position == (this.size - 1)){
            // 链表尾部
            point = this.tail
            this.tail = targetNode
            this.tail.prev = point
            point.next = this.tail

        }else{
            // 目标位置的上一个元素
            let prevNode = this.getElementAt(position - 1) as DoublyNode<T>
            // 原目标位置元素
            let currentNode = prevNode.next
            // 新增元素
            let targetNode = new DoublyNode(element, currentNode, prevNode)
            prevNode.next = targetNode
            currentNode.prev = targetNode
        }

        // 链表数量加1
        this.count++

    }


    remove(position: number){
        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position}`)
        }

        // 指针
        let point: DoublyNode<T>

        if(position == 0){

            // 链表首元素
            point = this.head
            this.head = point.next
            this.head.prev = null
        }else if(position == this.size - 1){

            // 链表尾元素
            point = this.tail
            this.tail = point.prev
            this.tail.next = null
        }else{

            let prevNode = this.getElementAt(position - 1) as DoublyNode<T>
            let removeNode = prevNode.next
            prevNode.next = removeNode.next
            removeNode.next.prev = prevNode

        }

        this.count--

    }

}

let doublyLinkList = new DoublyLinkList<number>()

doublyLinkList.push(0)
doublyLinkList.push(1)
doublyLinkList.push(2)
doublyLinkList.push(3)
doublyLinkList.push(4)

// doublyLinkList.insert(12, 4)
doublyLinkList.remove(2)

console.log(doublyLinkList.toString())