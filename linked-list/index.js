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