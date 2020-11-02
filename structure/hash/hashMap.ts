type TKey = string | number

/**
 * 散列表类型
 */
type TMapItem<T> = { [key: number]: ValuePair<T> }

interface IHashMap<T> {
    put(key: TKey, value:T): void;
    remove(key: TKey): void;
    get(key: TKey): void;
    hashCode(key: TKey): number;
}

class ValuePair<T>{
    constructor(public key: TKey, public value: T){}
    toString(){
        return `[${this.key}: ${this.value}]`
    }
}

class HashMap<T> implements IHashMap<T> {
    constructor(private table: TMapItem<T> = {}){}

    /**
     * 想散列表新增值，也可以更新值
     * @param key 
     * @param value 
     */
    put(key: TKey, value: T){
        if(key == '' || key == null || value == null) return console.error('put 方法参数异常')
        let code = this.hashCode(key)
        this.table[code] = new ValuePair<T>(key, value)
    }

    /**
     * 移除散列表对应的值
     * @param key 
     */
    remove(key: TKey){
        if(key == "" || key == null) return console.error('remove 方法参数异常')
        let hashCode = this.hashCode(key)
        if(this.table[hashCode]){
            delete this.table[hashCode]
        }else{
            console.error(`列表中不存在键值 ${key}`)
        }
    }

    /**
     * 获取散列表中对应的值
     * @param key 
     */
    get(key: TKey){
        if(key == "" || key == null) return console.error('get 方法参数异常')
        let valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? console.error(`没有查询到键值 ${key}`) : valuePair.value
    }

    /**
     * 散列函数
     * 将每个键值中的每个字母的 ASCII 值相加
     * @param key 
     */
    private loseloseHashCode(key: TKey): number{
        // 如果已经是数字了，直接返回
        if(typeof key === 'number'){
            return key
        }

        if(typeof key != 'string'){
            key = JSON.stringify(key)
        }

        let hash = 0
        for (let i = 0; i < key.length; i++) {
            // 指定位置的字符的 Unicode 编码
            hash += key.charCodeAt(i)
        }

        // 可以规避操作数超过数值变量最大表示范围的 风险
        return hash % 37
    }

    /**
     * 这并不是最好的散列函数，但这是最受社区推崇的散列函数之一
     * @param key 
     */
    private djb2HashCode(key: TKey){
        if(typeof key === 'number'){
            return key
        }

        if(typeof key != 'string'){
            key = JSON.stringify(key)
        }

        // 初始化一个 hash 变量并赋值 为一个质数，大多数实现都是使用 5381
        let hash = 5381;

        for (let i = 0; i < key.length; i++) {
            // 将 hash 与 33 相乘，并和当前迭代到的字符的 ASCII 码值相加
            hash = (hash * 33) + key.charCodeAt(i)
        }

        // 使用相加的和与另一个随机质数相除的余数
        // 余数会有三位数，这个散列表可能会有 1000
        return hash % 1013;
    }

    /**
     * 获取
     * @param key 
     */
    hashCode(key: TKey): number{
        return this.loseloseHashCode(key)
    }

    /**
     * 散列表是否为空
     */
    isEmpty(){
        let keys = Object.keys(this.table)
        return keys.length == 0
    }

    toString(){
        if(this.isEmpty()) return ""
        let keys = Object.keys(this.table)
        let objStr = `{ ${keys[0]} => ${this.table[keys[0]]} }`
        for (let i = 1; i < keys.length; i++) {
            objStr += `\n{ ${keys[i]} => ${this.table[keys[i]]} }`
        }
        return objStr
    }

}

let hash = new HashMap<string | number>()
hash.put("zhangsan", 1)
hash.put("lisi", 2)
hash.put('wanger', 3)
hash.put("zhangsan", 11)

// hash.remove("zhangsan")

console.log(hash.toString())