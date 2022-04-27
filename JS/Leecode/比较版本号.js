
//注意：1 和 1.0、1.0.0、1.00.0 的版本是一样的。
//1.20.35和1.20.3
function compareVersion(version1, version2) {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')
    const length1 = arr1.length
    const length2 = arr2.length
    const minlength = Math.min(length1, length2)
    let i = 0
    for (; i < minlength; i++) {
      let a = parseInt(arr1[i])
      let b = parseInt(arr2[i])
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
    }
    if (length1 > length2) {
      for(let j = i; j < length1; j++) {
        if (parseInt(arr1[j]) != 0) {
          return 1
        }
      }
      return 0
    } else if (length1 < length2) {
      for(let j = i; j < length2; j++) {
        if (parseInt(arr2[j]) != 0) {
          return -1
        }
      }
      return 0
    }
    return 0
  }

compareVersion('1.2.4', '1.1.5') // 1
compareVersion('1.2', '1.10.5') // -1
compareVersion('1.00.03', '1.0.03') // 0
  