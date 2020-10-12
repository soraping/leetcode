let data = {
    a: {b: {c: 1}},
    d: {e: 2}
}

let path = ['a', 'b', 'c']

// 通过访问 Path 元素对应的路径，访问到 json 数据中最后的值

// 定义指针
let point = data

// 遍历json，重新设置指针位置
path.forEach(key => {
    // 移动指针
    point = point[key]
})

console.log(point);