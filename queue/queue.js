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

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var obj = new RecentCounter()
console.log(obj.ping(null))
console.log(obj.ping(642))
console.log(obj.ping(1849))
console.log(obj.ping(4921))
console.log(obj.ping(5936))
console.log(obj.ping(5957))