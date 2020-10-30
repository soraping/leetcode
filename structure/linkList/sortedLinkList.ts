import { LinkList, NodeBase } from './linkList'

enum Compare {
    LESS_THEN = -1,
    BIG_THEN = 1
}

/**
 * 有序链表
 * 保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性
 * 
 */
class SortedLinkList<T> extends LinkList<T> {
    constructor(){
        super()
    }

    /**
     * 每加入一个节点，都要先判断该节点能够在有序链表中的的位置
     * @param element 
     */
    push(element: T){
        let targetNode = new NodeBase(element)
        if(this.isEmpty()){
            this.head = targetNode
        }else{
            let position = this.getIndexNextSortedElement(element)
            this.insertSortElement(element, position)
        }
        this.count++
    }

    /**
     * 有序链表插入节点
     * 有序链表并不是任意位置都能插入节点，需要先获取节点值能够在链表中排序的位置
     * 根据此位置，在插入节点
     * 该方法没有校验越界
     * @param element 
     */
    private insertSortElement(element: T, position: number){

        let targetNode = new NodeBase<T>(element)
        let point: NodeBase<T>

        if(position == 0){
            point = this.head
            this.head = targetNode
            targetNode.next = point
        }else{
            let prevNode = this.getElementAt(position - 1)
            prevNode.next = targetNode
    
            if(prevNode.next.next){
                targetNode.next = prevNode.next.next
            }
        }
    }

    /**
     * 获取该节点在链表排序后所在的位置
     * @param element 
     */
    private getIndexNextSortedElement(element: T): number{
        let point = this.head
        for (let i = 0; i < this.size; i++) {
            let comp = this.compare(element, point.element)
            if(comp == Compare.LESS_THEN){
                // 当遇到小于时，则跳出循环，说明这个位置时节点位置
                return i
            }
            point = point.next
        }
        return this.size
    }

    private compare(a, b){
        if(a === b) return 0
        return a < b ? Compare.LESS_THEN : Compare.BIG_THEN
    }

}

let sortedLinkList = new SortedLinkList<number>()
sortedLinkList.push(2)
sortedLinkList.push(1)
sortedLinkList.push(0)
sortedLinkList.push(4)

console.log(sortedLinkList.toString())