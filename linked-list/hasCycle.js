/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 *  输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。
    链表尾部指向链表中任一位置，说明链表有环

    使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
    如果 pos 是 -1，则在该链表中没有环
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head) {
        if(head.cycle){
            return true
        }else{
            // 给访问过的节点打个标示，下次再访问到，说明是环
            head.cycle = 1
            // 指针指向下个节点
            head = head.next
        }
    }
    return false
};