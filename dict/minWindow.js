/**
 * 76. 最小覆盖子串
 * 
 * 给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。
 * 输入：S = "ADOBECODEBANC", T = "ABC"
 * 输出："BANC"
 * 
 * 如果 S 中不存这样的子串，则返回空字符串 ""
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 左指针，定位最小子串起始位置下标
    let left_point = 0
    // 临时字典
    let temp_map = new Map()

    for(let i=0; i<t.length; i++){
        temp_map.set(t[i], 0)
    }

    for(let right_point=0; right_point<s.length; right_point++){
        // 移动右指针，判断当前指针元素是否在目标字符内
        if(temp_map.has(s[right_point])){
            temp_map.set(s[right_point], right_point)
        }

    }







};