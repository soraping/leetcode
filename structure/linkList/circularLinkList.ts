import { LinkList, NodeBase } from './linkList'

/**
 * 循环链表，链表尾部节点的 next 指向 链表头部节点
 * 
 */
class CircularLinkList<T> extends LinkList<T> {

    constructor(protected tail ?: NodeBase<T>){
        super()
    }

    /**
     * 循环链表的第一个节点比较特殊，自己指向自己
     * @param element 
     */
    push(element: T){
        let targetNode = new NodeBase<T>(element)
        let point: NodeBase<T>
        
        if(this.isEmpty()){
            // 链表为空时，自己指向自己
            this.head = targetNode
            this.tail = targetNode
            targetNode.next = this.head
        }else{
            point = this.tail
            this.tail = targetNode
            point.next = this.tail
            this.tail.next = this.head
        }

        this.count++

    }


    insert(element: T, position: number){
        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position}`)
        }

        let targetNode = new NodeBase<T>(element)
        let point: NodeBase<T>

        if(position == 0){
            if(this.isEmpty()){
                // 特殊情况，链表为空时，插入一个节点，循环链表的情况是，自己的 next 就是自己
                this.head = targetNode
                targetNode.next = this.head
            }else{
                // 新增首节点
                point = this.head
                // 首节点重新赋值
                this.head = targetNode
                this.head.next = point.next
                // 将链表尾节点指向新节点
                this.tail.next = this.head
            }

        }else if(position == this.size - 1){
            // 新增尾部节点
            point = this.tail
            this.tail = targetNode
            point.next = this.tail
            this.tail.next = this.head
        }else {
            // 目标位置前一个节点
            let prevNode = this.getElementAt(position - 1)
            point = prevNode.next
            prevNode.next = targetNode
            targetNode.next = point
        }

        this.count++
    }

}

let circularLinkList = new CircularLinkList<number>()
circularLinkList.push(0)
circularLinkList.push(1)
circularLinkList.push(2)
circularLinkList.push(3)

circularLinkList.insert(12, 2)

console.log(circularLinkList.toString())
