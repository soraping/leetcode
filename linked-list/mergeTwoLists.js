/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 * 
 * 这两链表一定是升序的链表
 * 
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let l3 = new ListNode(0)

    let point = l3

    while ((l1 || l2 ) && point) {

        let l1_val = l1 && l1.val
        let l2_val = l2 && l2.val

        if(l1_val != null && l2_val != null){
            if(l1_val > l2_val){
                point.next = new ListNode(l2_val)
                l2 = l2.next
            }else{
                point.next = new ListNode(l1_val)
                l1 = l1.next
            }
        }else{
            if(l1_val || l1_val == 0){
                point.next = new ListNode(l1_val)
                l1 = l1.next
            }

            if(l2_val || l2_val == 0){
                point.next = new ListNode(l2_val)
                l2 = l2.next
            }
        }
        point = point.next

    }

    return l3.next

};