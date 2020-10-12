/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [],
    this.mini_stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // console.log('x', x)
    this.stack.push(x)
    let p = x;
    let flag = true
    if(this.getMin() != null && this.getMin() != undefined){
        p = Math.min(this.getMin(), x);
        if(x > this.getMin()){
            flag = false
        }
    }
    if(flag){
        this.mini_stack.push(p)
    }
    // console.log('p', p)
    // console.log(this.mini_stack)
    // console.log(this.stack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let p = this.stack.pop()
    // console.log('p', p)
    // console.log('mini', this.getMin())
    if(p == this.getMin()){
        this.mini_stack.pop()
        // console.log(this.mini_stack)
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let s = this.stack.slice()
    return s.reverse()[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let m = this.mini_stack.slice()
    return m.reverse()[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
// obj.push(-2)
// obj.push(0)
// obj.push(-3)
// console.log(obj.getMin())
// obj.pop()
// console.log(obj.top())
// console.log(obj.getMin())

// obj.push(0)
// obj.push(1)
// obj.push(0)
// console.log(obj.getMin())
// obj.pop()
// console.log(obj.getMin())

obj.push(2)
obj.push(0)
obj.push(3)
obj.push(0)
console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())
obj.pop()
console.log(obj.getMin())