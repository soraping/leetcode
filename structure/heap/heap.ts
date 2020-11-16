import { Compare, compareFn, swap } from '../utils'

interface IHeap<T> {
    // 指定节点左侧子节点索引
    getLeftIndex(index: number): number;

    // 指定节点右侧子节点索引
    getRightIndex(index: number): number;

    // 返回指定节点的父节点索引
    getParentIndex(index: number): number;

    // 插入节点
    insert(value: T): boolean;

    // 移除堆中的最大值或者最小值
    extract(): T;

    // 堆的总节点数
    size: number;

    // 堆是否为空
    isEmpty(): boolean;
}


/**
 * 堆抽象类
 */
abstract class Heap<T> implements IHeap<T> {

    constructor(protected heap : T[] = [], protected count : number = 0){}

    getLeftIndex(index: number){
        return 2 * index + 1
    }

    getRightIndex(index: number){
        return 2 * index + 2
    }

    getParentIndex(index: number){
        if (index == 0) return null
        return Math.floor((index - 1) / 2)
    }

    abstract insert(value: T): boolean

    extract(){
        if(this.isEmpty()){
            return null
        }

        if(this.size == 1){
            return this.heap.shift()
        }
    }

    isEmpty(){
        return this.size == 0
    }

    get size(){
        return this.count
    }
}

/**
 * 最小堆
 */
class MiniHeap<T> extends Heap<T> {

    /**
     * 返回堆中的最小值
     * 最小堆中，最小值一定是根节点，即第一个节点
     */
    findMiniNode(){
        return this.isEmpty() ? null : this.heap[0]
    }

    /**
     * 一，新增节点，将节点设置在树的尾部，即数组的最后一个元素
     * 二，该节点与父节点比大小，如果大于父节点，则不动，如果小于父节点，则和父节点交换位置，即，数组内部两元素交换下标位置
     * @param value 
     */
    insert(value: T){
        if(value != null){
            this.heap.push(value)
            // 将新节点放置在最后一个位置上
            this.siftUp(this.count)
            this.count++
            return true
        }
        return false
    }

    /**
     * 元素上移
     * @param index 
     */
    private siftUp(index){
        let parentIndex = this.getParentIndex(index)
        while (index > 0 && compareFn(this.heap[index], this.heap[parentIndex]) == Compare.LESS_THEN) {
            // 目标元素小于父节点，则交换元素
            swap(this.heap, parentIndex, index)
            // 目标元素的小标更换为父节点下标
            index = parentIndex
            // 目标节点新位置后，它的父节点也变成了新下标
            parentIndex = this.getParentIndex(index)
        }
    }

}

// let miniHeap = new MiniHeap<number>()

// miniHeap.insert(2)
// miniHeap.insert(3)
// miniHeap.insert(4)
// miniHeap.insert(5)

// miniHeap.insert(1)

// console.log(miniHeap.size)
// console.log(miniHeap.findMiniNode())

/**
 * 最大堆
 */
class MaxHeap<T> extends Heap<T> {
    
    findMaxNode(){

    }

    insert(value: T){
        if(value != null){
            return true
        }
        return false
    }

}

