/**
 * 3.给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb" 输出: 3 
 * 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function(s) {
    let strMap = new Map()
    // 存储长度序列
    let lenArr = []

    let arr = s.split('')
    if(!arr.length) return 0
    if(arr.length == 1) return 1

    for(let i=0;i<arr.length;i++){
        if(arr[i] == ' '){
            arr[i] = '#'
        }
        if(!strMap.get(arr[i])){
            strMap.set(arr[i], true)
            // 如果是最后一长串字符
            if(i == arr.length - 1){
                let size = strMap.size
                lenArr.push(size)
            }
        }else{
            // 计算字典已有长度且清除
            let size = strMap.size
            lenArr.push(size)
            strMap.clear()
        }
    }

    let sortArr = lenArr.sort((a, b) => {
        return a - b
    })

    return sortArr[sortArr.length - 1]
    
};


var lengthOfLongestSubstring = function(s){
    let map = new Map()
    let max = 0

    // i 是最长子串下标的位置，j是当前循环下标
    for(let i=0, j=0; j<s.length; j++){
        if(map.has(s[j])){
            // 当前字符存在字典内，则更新 i 的起始
            // i 的位置很重要，一定要是 字典内相同字符位置的下一位
            // i 类似于指针，只能向前，所以，要和当前值去最大值
            i = Math.max(map.get(s[j]) + 1, i)
        }
        // 最长值就是当前下标 j 减去子串起始下标 i 再加上 1
        // 并与当前缓存的 max 取最大值 
        max = Math.max(max, j-i+1)
        // 存入当前字符和对应的下标
        map.set(s[j], j)
    }

    return max

}

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring("dvdf"));

console.log(lengthOfLongestSubstring("abba"));

// console.log(lengthOfLongestSubstring('   '));
// console.log(lengthOfLongestSubstring('  fs23d'));