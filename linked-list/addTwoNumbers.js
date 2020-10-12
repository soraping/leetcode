/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    // 初始化
    let l3 = new ListNode(0)
    // head 是 l3 的傀儡，因为一会head要被覆盖，但是head的一举一动一直被l3记录着；
    /**
     * 引用类型
     * head 变量用来在循环内，其实是l3链表的指针
     * 
     */
    let head = l3
    // 进位
    let carry = 0
    
    while (l1 || l2) {
        let l1_val = (l1 && l1.val) || 0
        let l2_val = (l2 && l2.val) || 0

        // 总和
        let sum = l1_val + l2_val + carry

        // 求商
        carry = parseInt(sum/10)

        // 求模
        let l3_val = sum % 10

        head.next = new ListNode(l3_val)

        head = head.next

        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    
    // 如果最后一位还有进位，则再新增一个节点
    if(carry > 0){
        head.next = new ListNode(carry)
    }

    return l3.next

};