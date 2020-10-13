/**
 * 349. 两个数组的交集
 * 给定两个数组，编写一个函数来计算它们的交集
 * 使用字典
 * 时间复杂度 O(m + n) 只有两个遍历，不嵌套
 * 空间复杂度 O(n)
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2] 输出：[2]
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums1_map = new Map()
    nums1.forEach((n1) => {
        // 不用管是否有重复的值，同一个键会覆盖值
        nums1_map.set(n1, true)
    })

    // 遍历第二个数组，如果元素在第一个集合内，则取出交集
    let result = []
    nums2.forEach((n2) => {
        if(nums1_map.get(n2)){
            // 首次碰到相同值，则立即放入数组中，然后要删除字典对应的值，这样下次遇到同样值时，不会放入返回数组中
            result.push(n2)
            nums1_map.delete(n2)
        }
    })

    return result
};