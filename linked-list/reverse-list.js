var reverseList = function(head) {
    let cur_node = head;
    let pre_node = null;
    
    while (cur_node) {
        let next_node = cur_node.next;
        cur_node.next = pre_node;

        pre_node = cur_node;
        cur_node = next_node;
        

    }
    return pre_node
};

console.log(reverseList([1,2,3,4,5]))