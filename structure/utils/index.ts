
export enum Compare {
    LESS_THEN = -1,
    BIG_THEN = 1,
    EQUAL = 0
}

export const compareFn = function(a, b){
    if(a === b) return 0
    return a < b ? Compare.LESS_THEN : Compare.BIG_THEN
}

/**
 * 数组元素交换
 * @param array 
 * @param a 下标
 * @param b 下标
 */
export const swap = function(array: any[], a, b){
    console.log('原 array => ', array);
    [array[a], array[b]] = [array[b], array[a]];
    console.log('新 array => ', array);
    return array
}