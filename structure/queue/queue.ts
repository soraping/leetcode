import { A } from './a'
import { IQueue } from './types'

/**
 * 队列
 */
class Queue<T> extends A<T> implements IQueue<T>{

    constructor(){
        super()
    }

    /**
     * 向队列尾部添加一个元素
     * 数组最后一个位置
     * @param item 
     */
    enqueue(item: T): void{
        this._items.push(item)
        this._count++
    }

    /**
     * 出队列
     * 数组第一个元素出列
     */
    dequeue(): T{
        if (this.isEmpty()) return null
        this._count--
        // 分割数组，将第一个元素分离
        let temp = this._items.splice(0, 1)
        return temp[0]
    }

    /**
     * 返回队首的元素
     */
    peek(): T{
        if (this.isEmpty()) return null
        return this._items[0]
    }

    /**
     * 清空队列
     */
    clear(){
        while (!this.isEmpty()) {
            this.dequeue()
        }
    }

}

let q = new Queue<number>()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

console.log(q.peek())

console.log(q)

q.dequeue()

console.log(q)

console.log(q.toString())