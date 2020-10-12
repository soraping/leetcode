### 栈

- 后进先出 入栈 `push` 出栈 `pop`

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

### 队列

**先进先出的数据结构**

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

事件循环原理

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
for(let item of set1.values()) console.log(item)
// keys()和values()方法是一样的
for(let [key, value] of set1.entries()) console.log(key, value)

// set 转成 array
console.log(Array.from(set1))

```

### 字典 dict

与集合类似，也是一种存储唯一值的数据结构，但是它以 **键值对** 的形式来存储

`ES6` 中有字典，`Map`