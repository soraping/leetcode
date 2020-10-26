/**
 * 循环队列
 */
class MyCircularQueue<T>{
    
    /**
     * 
     * @param _item 
     * @param _front 队首下标
     * @param _rear 队尾下标
     */
    constructor(private max_size: number, private _item: T[] = [], private _front: number = 0, private _rear: number = 0){
        this.log()
    }

    /**
     * 向循环队列插入一个元素。如果成功插入则返回真
     * @param value 
     */
    enQueue(value: T){
        if (this.isFull() ) return false
        this._item[this._rear] = value
        this._rear = (this._rear + 1) % this.max_size
        this.log()
        return true
    }

    /**
     * 从循环队列中删除一个元素。如果成功删除则返回真
     */
    deQueue(){
        if (this.isEmpty) return false
        // 被移除的元素，数组内没有必要删除元素，此元素已经是一个无效值
        let e = this._item[this._front]
        console.log(`移除元素 指针 => ${this._front} 值 => ${e}`)
        // 队首指针移动一位
        this._front = (this._front + 1) % this.max_size
        return true
    }

    /**
     * 从队首获取元素。如果队列为空，返回 -1
     */
    front(){
        if (this.isEmpty) return -1
        return this._item[this._front]
    }

    /**
     * 获取队尾元素。如果队列为空，返回 -1 
     */
    rear(){
        if (this.isEmpty) return -1
        return this._item[this._rear]
    }

    /**
     * 检查循环队列是否为空
     */
    isEmpty(){
        return this._front == this._rear
    }

    /**
     * 检查循环队列是否已满
     * 牺牲一个空间来判断是否为空
     */
    isFull(){
        if (this.isEmpty()) return false
        return this._front == ((this._rear + 1) % this.max_size)
    }

    /**
     * 元素个数
     */
    get size(){
        return (this._rear - this._front + this.size) % this.max_size
    }

    log(){
        console.log(`队首指针 => ${this._front}, 队尾指针 => ${this._rear}, 是否队满 => ${this.isFull()}, 模拟数组 => ${this._item}`)
    }

}

let circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1))
console.log(circularQueue.enQueue(2))
console.log(circularQueue.enQueue(3))