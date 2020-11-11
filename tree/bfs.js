const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [
                        {
                            val: 'g',
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}

const bfs = (root) => {
    let queue = []
    queue.push(root)

    while (queue.length > 0) {
        let temp = queue.shift()
        console.log(temp.val)
        temp.children.forEach(child => queue.push(child))
        console.log('queue', JSON.stringify(queue))
    }
}

bfs(tree)