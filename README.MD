### 栈

- 后进先出 入栈 `push` 出栈 `pop`

栈遵从 `LIFO` 原则，`last in, first out`

`javascript` 没有栈，但可以用 `Array` 实现栈所有功能

```javascript
let stack = []
// 入栈
stack.push(1)
stack.push(2)

// 出栈
// 2
let p1 = stack.pop()
// 1
let p2 = stack.pop()

```

![stack](https://img.1000.com/qm-a-img/prod/3780480/e5ff400a17db39876944efd0aaea6679.png)

构造 `Stack` 类，建立 `stack.ts` 文件

```javascript
class Stack<T> {

    /**
     * 存储元素
     */
    private _items: T[]

    /**
     * 长度
     */
    private _count: number

    constructor() {
        this._items = []
        this._count = 0
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
     * 判断栈是否为空
     */
    isEmpty(): boolean{
        return this.size == 0
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

    /**
     * 返回栈的长度
     */
    get size(): number {
        return this._count
    }

    toString(){
        if (this.isEmpty()) return ''
        let objString = `${this._items[0]}`
        for (let i = 1; i < this._count; i++){
            objString += `, ${this._items[i]}`
        }
        return objString
    }
}
```

***额外定义私有属性 `_count` 来描述栈的长度，而不是从 `length` 属性获取。如果栈长度非常大的情况下，数组的大部分方法时间复杂度都是 `O(n)` ，频繁访问 `length` 属性就会有很大的消耗，所以，定义一个额外的属性 `_count` 来记录栈操作元素时的数量。***

执行命令：

```bash
tsc stack.ts --target 'es6'
```
可以使用这个类来处理栈的问题

**应用场景(后进先出场景)**

十进制转二进制，判断字符串的挂号是否有效，函数的调用堆栈...

**leetcode-20 有效的括号**

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

题解：

一个括号字符串，想要闭合必须是偶数
遍历字符串，将字符串入栈，遍历当前元素 `c` 必须与栈顶元素是一对括号


```js
var isValid = function(s) {
    if(!s || !s.length){
        return false
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push(")")
                break;
            case "[":
                stack.push("]")
                break;
            case "{":
                stack.push("}")
                break;
            case ")":
                let p1 = stack.pop()
                if(p1 != ")"){
                    return false
                }
                break;
            case "]":
                let p2 = stack.pop()
                if(p2 != "]"){
                    return false
                }
                break;
            case "}":
                let p3 = stack.pop()
                if(p3 != "}"){
                    return false
                }
                break;
            default:
                break;
        }
        
    }

    return stack.length === 0
```

栈顶元素查看：```stack[stack.length-1]```

**js函数调用栈**

### 队列(queue)

**先进先出的数据结构**

遵循 `FIFO` 原则，`first in, first out`

js中没有队列数据结构，可以用Array实现队列的所有功能

```javascript
const queue = []
queue.push(1)
queue.push(2)

// 1
const p1 = queue.shift()
// 2
const p2 = queue.shift()
```

构造 `Queue` 类，新建 `queue.ts` 文件：

```javascript
class Queue<T>{
    /**
     * 数组模拟队列
     */
    private _items: T[]

    /**
     * 元素数量
     */
    private _count: number

    constructor(){
        this._items = []
        this._count = 0
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
     * 队列长度
     */
    get size(): number{
        return this._count
    }

    /**
     * 是否为空队列
     */
    isEmpty(): boolean{
        return this.size == 0
    }

    /**
     * 清空队列
     */
    clear(){
        while (!this.isEmpty()) {
            this.dequeue()
        }
    }

    toString(){
        if (this.isEmpty()) return ''
        let objString = `${this._items[0]}`
        for (let i = 1; i < this._count; i++){
            objString += `, ${this._items[i]}`
        }
        return objString
    }

}
```

**队列使用场景**

需要**先进先出**的场景

食堂打饭，js 异步中的任务队列，计算最近请求此处

先进先出，保证有序

队列第一个元素 `queue[0]`

**leetcode-933 最近的请求次数**

写一个 RecentCounter 类来计算最近的请求。

它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 ping 数。

任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

保证每次对 ping 的调用都使用比之前更大的 t 值。


解题思路：

设计一个队列，当前添加的数，减去3000后，要小于等于队列顶部数，如果大于，则将队列头部数出列

一个数 m ，入列 queue 的要求就是，遍历这个队列，(m - 3000 <= queue[0])，如果大于，则将 queue 顶部数出列, 再遍历这个队列，知道满足提交后，将这个数入列

```javascript
var RecentCounter = function() {
    this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {

    if(t == null) return null
    while(true){
        if((t-this.queue[0]) > 3000){
            this.queue.shift()
        }else{
            break
        }
    }
    this.queue.push(t)
    return this.queue.length

};

var obj = new RecentCounter()
console.log(obj.ping(null))
console.log(obj.ping(642))
console.log(obj.ping(1849))
console.log(obj.ping(4921))
console.log(obj.ping(5936))
console.log(obj.ping(5957))
```

```python
from collections import deque
class RecentCounter:
    
    def __init__(self):
        self.queue = deque()
        

    def ping(self, t: int) -> int:
        if t is None:
            return None
        while True:
            if len(self.queue) and ((t-self.queue[0]) > 3000):
                self.queue.popleft()
            else:
                break
        self.queue.append(t)
        print(self.queue)
        return len(self.queue)


obj = RecentCounter()
print(obj.ping(None))
print(obj.ping(642))
print(obj.ping(1849))
print(obj.ping(4921))
print(obj.ping(5936))
print(obj.ping(5957))


```

**异步队列**

`Event Loop` 中的 `Callback Queue` 就是队列来处理异步任务

```javascript
setTimeout(() => console.log(1), 0)
console.log(2)
```
```bash
2
1
```

### 循环队列

循环队列就是将队列存储空间的最后一个位置绕到第一个位置，形成逻辑上的环状空间，供队列循环使用。

在循环队列结构中，当存储空间的最后一个位置已被使用而再要进入队运算时，只需要存储空间的第一个位置空闲，便可将元素加入到第一个位置，即将存储空间的第一个位置作为队尾。

循环队列可以更简单防止伪溢出的发生，但队列大小是固定的。


![循环队列](https://img.1000.com/qm-a-img/prod/3780480/a4e8aefb5653608adeb8d10dd90c7e8c.png@800w_600h)

上图中，a是初始位置时，指针的值都是0，图b时，队尾插入3条数据，`_rear` 指针的值是4，说明位置4是空闲。图c，出列了两个元素，`_front` 指针位置放在了3，图d，又插入了三条数据，假如队列分配的最大空间为6，可以看出还是有空间可以存储元素的，但是此时尾指针 `_rear` 已经出界，不能继续插入元素，所以这种现象就是--假溢出。

在顺序队列中，当队尾指针已经到数组的上界，不能再有入队操作，但其实数组中还有空位置，这就叫做“假溢出”，解决假溢出的途径---- 采用循环队列。

![循环队列](https://img.1000.com/qm-a-img/prod/3780480/abace79abcb4698b6e5ce5d56349f480.png@350w_350h)

- 图中有两个指针(其实就是两个整数型变量，因为在这里有指示作用，所以这里理解为指针)`front`、`rear`,一个指示队头，一个指示队尾。

- `rear` 和 `front` 互相追赶着，这个追赶过程就是队列添加和删除的过程，如果 `rear` 追到 `head` 说明队列满了，如果 `front` 追到 `rear` 说明队列为空。

#### 循环队列的实现

- 当添加一个元素时，`rear = (rear + 1) % max_size` 
- 当删除一个元素时，`front = (front + 1) % max_size`
- **在循环队列中，空队特征是`front = rear`, 队满时也会有 `front = rear`; 判断条件将出现二义性**

使用 `空闲单元法` -- 人为的浪费一个单元，令队满特征为 ： `front = (rear +1) % max_size` 

![空闲单元法](https://img.1000.com/qm-a-img/prod/3780480/ad26837fd09c0c34c8fd23c07dbb499e.png@800w_600h)

> **为什么要求模？**

主要是为了处理临界状态，如 `rear` 向后移动一个位置后，指针坐标是 `rear + 1` ，很可能超出了数组的小标，其实它真实的下标是 `0`。

![image](https://img.1000.com/qm-a-img/prod/3780480/a71954a1ab45186a47af2d5db9aa0ec8.png@800w_600h)

如上图，最大空间是 `max_size` ，当 `rear = max_size - 1` 时, `(rear + 1) % max_size = 0`，而且 `front = 0` 时，正好满足队满条件：

`(rear + 1) % max_size == front`

因此，无论 `front` 还是 `rear` 移动位置时，都要加1且与 `max_size` 求模运算，处理临界问题。



### 双端队列(deque)

允许同时从队列的前端和后端添加和移除元素的特殊队列

双端队列同时遵守 `FIFO` 和 `LIFO` 这两个原则


### 链表

多个元素组成的列表
元素存储不连续，用 `next` 指针连在一起

**数组VS链表**

数组：增删非首尾元素时往往需要移动元素
链表：增删非首尾元素，不需要移动元素，只需要更改 `next` 的指向即可

`javascript` 没有链表，可以用 `object` 模拟链表

```javascript
const a = {val: 'a'}
const b = {val: 'b'}
const c = {val: 'c'}
const d = {val: 'd'}

a.next = b
b.next = c
c.next = d

/** 遍历链表 */ 

// step1 声明一个指针 point, 指向链表的头部
let p = a

// step2 设计循环，当指针为空时跳出循环
while (p) {
    console.log(p.val)
    // step3 指针指向下一个元素
    p = p.next
}

/** 插入元素 */
// 在 c 和 d 之间插入 e

const e = {val: 'e'}

// 改变 c 的指针指向 e
c.next = e
// 设置 e 的指针指向 d
e.next = d

/** 删除元素 */

// 将 e 删除
// 改变上一个元素的指针指向即可
c.next = d
```

#### 使用链表指针获取 `JSON` 的节点值

```js
let data = {
    a: {b: {c: 1}},
    d: {e: 2}
}

// 通过访问 Path 元素对应的路径，访问到 json 数据中最后的值
let path = ['a', 'b', 'c']

// 定义指针
let point = data

// 遍历json，重新设置指针位置
path.forEach(key => {
    // 移动指针
    point = point[key]
})

console.log(point);
```

使用 `javascript` 实现链表:


#### 单向链表

```javascript
// 定义链表的基本节点
class NodeBase<T>{
    constructor(public element: T, public next?: NodeBase<T>){}
}

// 单向链表类
class LinkList<T>{

    constructor(protected count: number = 0, protected head?: NodeBase<T>, protected tail ?: NodeBase<T>){
        
    }

    /**
     * 向链表尾部添加一个新元素
     * @param element 
     */
    push(element: T){
        let node = new NodeBase<T>(element)
        // 指针
        let point: NodeBase<T>

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

            // 链表尾部元素
            this.tail = node
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

        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position} 的元素`)
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
        if(this.isEmpty()) return console.error("该链表为空")

        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position} 的元素`)
        }

        // 链表只有一个元素
        if(this.size == 1){
            this.head = null
        }
        
        // 特殊位置处理
        if(position == 0){
            this.head.next = this.head.next.next
        }else{
            // 目标节点的上一个节点
            let preNode = this.getElementAt(position-1)
            // 越过删除节点
            preNode.next = preNode.next.next
        }
        this.count--
    }

    /**
     * 链表任意位置插入节点
     * @param element 
     * @param position 
     */
    insert(element: T, position: number){
        if(!this.checkPositionOfLinkList(position)){
            return console.error(`该链表不存在位置 ${position} 的元素`)
        }

        let targetNode = new NodeBase(element)

        // 添加在第一个位置
        if(position == 0){
            let point = this.head
            this.head = targetNode
            this.head.next = point
        }else{
            let preNode = this.getElementAt(position - 1)
            // 原下一个元素
            let nextNode = preNode.next
            // 替代新元素
            preNode.next = targetNode
            // 将后面的元素接在新元素后
            preNode.next.next = nextNode
        }

    }

    /**
     * 获取链表任意位置节点
     * @param position 
     */
    getElementAt(position: number){
        // 越界处理
        if(this.checkPositionOfLinkList(position)){
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

    /**
     * 链表是否为空
     */
    isEmpty(){
        return this.head == null
    }

    /**
     * 链表长度
     */
    get size(){
        return this.count
    }

    /**
     * 返回链表头部元素
     */
    getHead(){
        return this.head
    }

    /**
     * 检查目标位置是否在链表范围内
     * @param position 
     */
    protected checkPositionOfLinkList(position: number): boolean{
        return position >= 0 && position < this.size
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
```

#### 双向链表

单向链表的长度 `count` 在 `push` 和 `remove`, `insert` 的方法时，更新这个值，单向链表只有 `next` 属性，指向下一个链表元素，若不存在则默认为 `null`

双向链表节点多了 `prev` 属性，指向节点的上一个节点，如果是第一个节点，那么这个属性值是 `null`。在双向链表的 `insert` 和 `remove` 方法操作时，与单向链表不同的是，需要注意节点 `prev` 属性的改变

```javascript

class DoublyNode<T> {

    /**
      * @param count 节点数量
      * @param element 
      * @param next 下一个节点
      * @param prev 上一个节点
      */
    constructor(public count: number = 0, public element: T, public next: DoublyNode<T> = null, public prev: DoublyNode<T> = null){
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


```

#### 循环链表

循环链表是在单向链表的基础上改进，将尾部节点的 `next` 属性指向了头部节点，这样就实现了循环。

```javascript

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

```

#### 有序链表

有序链表的节点不是随意放置的，它们都是有顺序排列的，如果按照升序 `0->1->2->3->4->5` 这样排列，所以调用 `push` 方法添加节点时，一定要先判断该节点在当前链表中的位置

```javascript
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
```


### 集合

一种 **无序且唯一** 的数据结构

`ES6` 中 `Set` 数据结构，常用作去重，判断某元素是否在集合中，求交集

```js
// 去重
let arr = [1, 1, 2, 3, 3]
let arr2 = [...new Set(arr)]
console.log(arr2)

// 是否存在集合中
let set1 = new Set(arr2)
console.log(set1.has(1));

// 求交集
let set2 = new Set([2, 3, 4])
// set中没有直接的api，使用数组遍历且判断元素是否在另一个集合中的间接方式来判断
let set3 = new Set([...set2.filter(item => set1.has(item))])

// 求差集
let set4 = new Set([...set2.filter(item => !set1.has(item))])

// 迭代
for(let item of set1) console.log(item)
for(let item of set1.keys()) console.log(item)
for(let item of set1.values()) console.log(item)f
// keys()和values()方法是一样的
for(let [key, value] of set1.entries()) console.log(key, value)

// set 转成 array
console.log(Array.from(set1))

```

### 字典 dict

与集合类似，也是一种存储唯一值的数据结构，但是它以 **键值对** 的形式来存储

`ES6` 中有字典，`Map`

> 3. 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
输入: "abcabcbb" 输出: 3 
因为无重复字符的最长子串是 "abc"，所以其长度为 3。

**思路：**

*使用双指针滑动窗口剪切字符串*

不断的移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位

在指针移动的过程中，记录所有窗口的长度，并返回最大值

```javascript

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let max = 0

    // i 是最长子串下标的位置，j是当前循环下标
    for(let i=0, j=0; j<s.length; j++){
        if(map.has(s[j])){
            // 当前字符存在字典内，则更新 i 的起始
            // i 的位置很重要，一定要是 字典内相同字符位置的下一位
            i = Math.max(map.get(s[j]) + 1, i)
        }
        // 最长值就是当前下标 j 减去子串起始下标 i 再加上 1
        // 并与当前缓存的 max 取最大值 
        max = Math.max(max, j-i+1)
        // 存入当前字符和对应的下标
        map.set(s[j], j)
    }

    return max
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring("dvdf"));

console.log(lengthOfLongestSubstring("abba"));

// console.log(lengthOfLongestSubstring('   '));
// console.log(lengthOfLongestSubstring('  fs23d'));

```

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # 子串初始位置指针
        point = 0
        # 子串最长数
        max_len = 0
        # 字典
        temp_dict = {}

        for index, value in enumerate(s):
            if value in temp_dict:
                # 更新指针
                point = max(temp_dict[value] + 1, point)

            temp_dict[value] = index
            max_len = max(index - point + 1, max_len)
        
        return max_len
                
        

sss = Solution()

print(sss.lengthOfLongestSubstring('abcabcbb'))
```

### 散列表

**散列算法**的作用是尽可能快地在数据结构中找到一个值。

在某个数据结构中，获取值的方式是 `get` 方法，需要迭代整个数据结构。如果使用 *散列函数* ，就知道值的具体位置，因此能够快速检索到该值。

*散列函数* 的作用是给定一个键值，然后返回值在表中的地址。

散列表有一些在计算机科学中应用的例子。因为它是字典的一种实现，所以可以用作关联数 组。它也可以用来对数据库进行索引。

`JavaScript` 语言内部就是使用散列表来表示每个对象。此时，对象的每个 属性和方法(成员)被存储为 key 对象类型，每个 key 指向对应的对象成员。

用 `javascript` 来实现散列表：

```javascript
type TKey = string | number

/**
 * 散列表类型
 */
type TMapItem<T> = { [key: number]: ValuePair<T> }

interface IHashMap<T> {
    put(key: TKey, value:T): void;
    remove(key: TKey): void;
    get(key: TKey): void;
    hashCode(key: TKey): number;
}

class ValuePair<T>{
    constructor(public key: TKey, public value: T){}
    toString(){
        return `[${this.key}: ${this.value}]`
    }
}

class HashMap<T> implements IHashMap<T> {
    constructor(private table: TMapItem<T> = {}){}

    /**
     * 想散列表新增值，也可以更新值
     * @param key 
     * @param value 
     */
    put(key: TKey, value: T){
        if(key == '' || key == null || value == null) return console.error('put 方法参数异常')
        let code = this.hashCode(key)
        this.table[code] = new ValuePair<T>(key, value)
    }

    /**
     * 移除散列表对应的值
     * @param key 
     */
    remove(key: TKey){
        if(key == "" || key == null) return console.error('remove 方法参数异常')
        let hashCode = this.hashCode(key)
        if(this.table[hashCode]){
            delete this.table[hashCode]
        }else{
            console.error(`列表中不存在键值 ${key}`)
        }
    }

    /**
     * 获取散列表中对应的值
     * @param key 
     */
    get(key: TKey){
        if(key == "" || key == null) return console.error('get 方法参数异常')
        let valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? console.error(`没有查询到键值 ${key}`) : valuePair.value
    }

    /**
     * 散列函数
     * 将每个键值中的每个字母的 ASCII 值相加
     * @param key 
     */
    private loseloseHashCode(key: TKey): number{
        // 如果已经是数字了，直接返回
        if(typeof key === 'number'){
            return key
        }

        if(typeof key != 'string'){
            key = JSON.stringify(key)
        }

        let hash = 0
        for (let i = 0; i < key.length; i++) {
            // 指定位置的字符的 Unicode 编码
            hash += key.charCodeAt(i)
        }

        // 可以规避操作数超过数值变量最大表示范围的 风险
        return hash % 37
    }

    /**
     * 获取
     * @param key 
     */
    hashCode(key: TKey): number{
        return this.loseloseHashCode(key)
    }

    /**
     * 散列表是否为空
     */
    isEmpty(){
        let keys = Object.keys(this.table)
        return keys.length == 0
    }

    toString(){
        if(this.isEmpty()) return ""
        let keys = Object.keys(this.table)
        let objStr = `{ ${keys[0]} => ${this.table[keys[0]]} }`
        for (let i = 1; i < keys.length; i++) {
            objStr += `\n{ ${keys[i]} => ${this.table[keys[i]]} }`
        }
        return objStr
    }

}
```

使用这个类

```bash
let hash = new HashMap<string | number>()
hash.put("zhangsan", 1)
hash.put("lisi", 2)
hash.put('wanger', 3)
hash.put("zhangsan", 11)

console.log(hash.toString())
```

打印

```
{ 7 => [zhangsan: 11] }
{ 15 => [wanger: 3] }
{ 26 => [lisi: 2] }
```

可以发现，当 `key` 相同时，值会被覆盖。

有相同 `key` 的情况称为冲突，使用一个数据结构来保存数据的目的不是丢失这些数据，而是通过某种方法将他们全部保存起来。

处理冲突的集中方法：

- **分离链接**

为散列表的每一个位置创建一个链表并将元素存储在里面。

- **线性探查**

直接将元素存储在表中，而不是单独的数据结构中。
当想向表中某个位置添加一个新元素的时候，如果索引为 `position` 的位置已经被占据了，就尝试 `position+1` 的位置。如果 `position+1` 的位置也被占据了，就尝试 `position+2` 的位 置，以此类推，直到在散列表中找到一个空闲的位置。

- **双散列表**

### 递归

> **要理解递归，首先要理解递归**