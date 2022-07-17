/* 二分查找（折半查找）
(1)从有序数组的中间元素开始搜素，如果该元素正好是目标元素，则搜索过程结束，否则进行下一步
(2)如果目标元素大于或小于中间元素，则在数组大于或小于中间元素的那一半区域进行查找，然后重复第一步
(3)如果某一步数组为空，则表示找不到指定元素

注意：要求是一个有序的数组 */

//时间复杂度：O(log n) 空间复杂度：O(1)

function binarySearch(arr, target) {
    let low = 0,
      high = arr.length - 1;
    while (low <= high) {
      let middle = parseInt((low + high) / 2);//向下取整
      if (target === arr[middle]) {
        return middle;
      } else if (target > arr[middle]) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    return -1;
  }

  console.log( parseInt((2 + 2.2) / 2));
  let arr = [1,2,6,8,12,56];
  console.log(binarySearch(arr,2));