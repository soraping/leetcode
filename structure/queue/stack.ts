import { A } from './a'
/**
 * 栈实现
 */
class Stack<T> extends A<T> {

    constructor() {
        super()
    }

    /**
     * 添加一个元素至栈顶
     * 也就是数组的末尾
     * @param item 
     */
    push(item:T): void{
        this._items.push(item)
        this._count++
    }

    /**
     * 出栈
     * 移除最后添加的元素(栈顶元素)
     * 移除了数组最后一个元素
     */
    pop(): T{
        if(this.isEmpty()) return null
        this._count--
        return this._items.pop()
    }

    /**
     * 返回栈顶元素
     * 数组最后一个元素
     * 不对栈做任何操作
     */
    peek(): T{
        if(this.isEmpty()) return null
        return this._items[this.size - 1]
    }

    /**
     * 清空栈
     * 遵循 LIFO 原则，逐个出栈
     */
    clear(): void{
        while (!this.isEmpty()) {
            this.pop()
        }
    }

}

let s = new Stack<number>()

s.push(1)
s.push(2)
s.push(3)

console.log(s.toString())

s.clear()

console.log(s.toString())