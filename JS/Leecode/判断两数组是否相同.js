//如果数组里的元素是标量，非object类型，可以使用==比较数组里的元素：
function scalarArrayEquals(array1, array2) {
    return array1.length == array2.length && array1.every(function (v, i) {
        return v === array2[i]
    });
}