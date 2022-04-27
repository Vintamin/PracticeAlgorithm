// 根据指定个数分割数组
function chunkArr (arr, size) {
    //判断如果不是数组(就没有length)，或者size没有传值，size小于1，就返回空数组
    if (!arr.length || !size || size < 1) return []
    let [start, end, result] = [null, null, []]
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
      start = i * size
      end = start + size
      result.push(arr.slice(start, end))
    }
    return result
  }
   
  // 验证方法
  let arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
   
  console.log(chunkArr(arrList, 5))
 