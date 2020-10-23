export abstract class A<T> {

    /**
     * 栈，队列的数组长度
     */
    _count: number

    /**
     * 模拟队列数组
     */
    _items: T[]

    constructor(){
        this._items = []
        this._count = 0
    }

    /**
     * 长度
     */
    get size(): number{
        return this._count
    }

    /**
     * 栈和队列是否为空
     */
    isEmpty(): boolean{
        return this.size == 0
    }

    /**
     * 清空
     */
    abstract clear(): void

    toString(): string{
        if (this.isEmpty()) return ''
        let objString = `${this._items[0]}`
        for (let i = 1; i < this._count; i++){
            objString += `, ${this._items[i]}`
        }
        return objString
    }
}