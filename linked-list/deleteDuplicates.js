/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除排序链表中的重复元素
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 输入: 1->1->2->3->3 输出: 1->2->3
 * 
 * @param {*} head 
 */
var deleteDuplicates = function(head) {
    let current_node = head

    while (current_node) {
        let cur_val = current_node.val
        let pre_node = current_node.next

        if(cur_val != pre_node.val){
            current_node = pre_node
        }else{
            // 相等时，改变指针，再入循环
            current_node.next = pre_node.next
        }

    }
};