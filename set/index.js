let arr = [1, 1, 2, 3, 3]
let arr2 = [...new Set(arr)]

console.log(arr2)

let set1 = new Set(arr2)
console.log(set1.has(1));

let set2 = new Set([2, 3, 4])
let set3 = new Set([...set2.filter(item => set1.has(item))])