import { ILinkList} from './types'

class Node<T>{
    constructor(public element: T, public next?: Node<T>){}
}

/**
 * 链表实现
 */
class LinkList<T> implements ILinkList<T, Node<T>> {

    constructor(private count: number = 0, private head?: Node<T>){
        
    }

    /**
     * 向链表尾部添加一个新元素
     * @param element 
     */
    push(element: T){
        let node = new Node<T>(element)
        // 指针
        let point: Node<T>

        // 链表首元素
        if(this.head == null){
            // 首元素赋值新值
            this.head = node
        }else{
            // 指针指向第一个元素
            point = this.head
            /**
             * 遍历链表，直到链表的最后一个跳出循环
             */
            while (point.next) {
                point = point.next
            }
            // 将新元素追加到最后一个
            point.next = node
        }
        // 链表元素加1
        this.count++
    }

    /**
     * 删除链表指定位置元素
     * 第一种方式
     */
    removeAt(position: number){
        if(this.isEmpty()) {
            return console.error("该链表为空")
        }

        // 越界检查
        if(position < 0 || position >= this.size){
            return console.error("该位置超出链表范围")
        }

        // 链表只有一个元素
        if(this.size == 1){
            this.head = null
        }

        if(this.head){

            // 如果去掉第一个元素，则直接将首元素重新赋值
            if(position == 0){
                this.head = this.head.next
            }

            // 定义指针
            let point = this.head
    
            for(let i = 0; i < this.size && point != null; i++){
                
                // 当指针移动到要删除位置的前一个元素时，改变 next 指向，越过删除位置即可
                if (i == position-1) {
                    point.next = point.next.next;
                }else{
                    // 将指针指向下一个元素
                    point = point.next
                }
            }
        }

        this.count--

    }

    /**
     * 删除链表中指定位置节点
     * 第二种方式
     * @param position 
     */
    remove(position: number){

    }
    
    /**
     * 链表任意位置插入节点
     * @param element 
     * @param position 
     */
    insert(element: T, position: number){}

    /**
     * 获取链表任意位置节点
     * @param position 
     */
    getElementAt(position: number){
        // 越界处理
        if(position >= 0 && position < this.size){
            let point = this.head
            // 只要遍历至所需位置节点即可
            for(let i=0; i < position && point != null; i++){
                point = point.next
            }
            return point
        }
        return undefined
    }

    /**
     * 返回元素在链表位置
     * @param element 
     */
    indexOf(element: T){
        let point = this.head
        for (let i = 0; i < this.size && point != null; i++) {
            if(point.element === element){
                return i
            }
            point = point.next
        }
        console.error(`无法查询元素 ${element} 位置`)
        return -1
    }

    isEmpty(){
        return this.head == null
    }

    get size(){
        return this.count
    }

    toString(){
        if(!this.head) return ''
        let objString = `${this.head.element}`
        let point = this.head.next
        while (point) {
            objString += `, ${point.element}`
            point = point.next
        }
        return objString
    }

}

let linkList = new LinkList<number>()
linkList.push(0)
linkList.push(1)
linkList.push(2)
linkList.push(3)
linkList.push(4)

// linkList.removeAt(2)

console.log(linkList.getElementAt(3))

console.log(linkList.toString())