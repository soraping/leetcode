var isValid = function(s) {
    if(!s || !s.length){
        return false
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push(")")
                break;
            case "[":
                stack.push("]")
                break;
            case "{":
                stack.push("}")
                break;
            case ")":
                let p1 = stack.pop()
                if(p1 != ")"){
                    return false
                }
                break;
            case "]":
                let p2 = stack.pop()
                if(p2 != "]"){
                    return false
                }
                break;
            case "}":
                let p3 = stack.pop()
                if(p3 != "}"){
                    return false
                }
                break;
            default:
                break;
        }
        
    }

    if(!stack.length){
        return true
    }
    return false

}

// ture
console.log(isValid("()"))
// ture
console.log(isValid("()[]{}"))
// false
console.log(isValid("(]"))
// false
console.log(isValid("([)]"))
// true
console.log(isValid("{[]}"))