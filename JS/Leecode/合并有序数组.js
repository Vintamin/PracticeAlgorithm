/* 
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。


*/

/* 
    方法一：双指针解法，存到原数组一中
    利用逆序放到最后，不存在数据覆盖问题
*/

var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    //fill() 方法用于将一个固定值替换数组的元素。就是将新建所有元素设为0。这句可加可不加
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i < m + n; ++i) {
        nums1[i] = sorted[i];
    }
};
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

//思路2，归并排序，存到一个新数组中
function mergeArray(arr1,arr2){
	var ind1=0; //标记arr1的对比元素的初始索引值
	var ind2=0; //标记arr2的对比元素的初始索引值
	var arr=[]; //作为输出的新数组
	while(ind1<arr1.length && ind2<arr2.length){ //当arr1和arr2元素均未全部存入arr中，则从第一个元素开始进行比较，将较小的那个元素存入arr
		if(arr1[ind1]<=arr2[ind2]){
			arr.push(arr1[ind1]); //若arr1的对比元素小于arr2的对比元素，则将arr1的对比元素存入arr中
			ind1++;
		}else{
			arr.push(arr2[ind2]);
			ind2++;
		}
	}
	while(ind1<arr1.length){ //当arr2的元素已全部存入arr中，则直接将arr1剩余的所有元素依次存入arr
		arr.push(arr1[ind1]);
		ind1++;
	}
	while(ind2<arr2.length){ //当arr1的元素已全部存入arr中,则直接将arr2剩余的所有元素依次存入arr
		arr.push(arr2[ind2]);
		ind2++;
	}
	return arr;
}


