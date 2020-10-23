import { A } from './a'
import { IDeque } from './types'
/**
 * 双端队列
 */
class Deque<T> extends A<T> implements IDeque<T> {

    constructor(){
        super()
    }

    /**
     * 从前端加入元素
     * 数组元素右端（末尾）加入一个元素
     * 
     * @param item 
     */
    addFront(item: T){
        this._count++
        this._items.push(item)
    }
    
    /**
     * 从后端加入元素
     * 数组的左端，起始0位置上加入一个元素
     * @param item 
     */
    addBack(item: T){
        this._count++
        this._items.unshift(item)
    }

    removeBack(){
        if(this.isEmpty()) return null
        let temp = this._items.splice(0, 1)
        this._count--
        return temp[0]
    }

    removeFront(){
        if(this.isEmpty()) return null
        this._count--
        return this._items.pop()
    }

    /**
     * 获取双端队列后端的队首元素
     * 数组的第一个元素
     */
    peekBack(){
        if(this.isEmpty()) return null
        return this._items[0]
    }

    /**
     * 获取双端队列前端的队首元素
     * 数组的最后一个元素
     */
    peekFront(){
        if(this.isEmpty()) return null
        return this._items[this.size - 1]
    }

    clear(){
        this._items = []
        this._count = 0
    }

}

let deque = new Deque<number>()

deque.addFront(1)
deque.addFront(2)

deque.addBack(21)
deque.addBack(22)

console.log(deque)

console.log(deque.peekBack())
console.log(deque.peekFront())