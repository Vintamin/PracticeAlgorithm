/* 
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。


*/

/* 
    方法一：双指针解法，存到原数组一中
    利用逆序放到最后，不存在数据覆盖问题

    如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可。
    如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作。
*/

var merge = function(nums1, m, nums2, n) {
        // 初始化两个指针的指向，初始化 nums1 尾部索引k
        let i = m - 1, j = n - 1, k = m + n - 1
        // 当两个数组都没遍历完时，指针同步移动
        while(i >= 0 && j >= 0) {
            // 取较大的值，从末尾往前填补
            if(nums1[i] >= nums2[j]) {
                nums1[k] = nums1[i] 
                i-- 
                k--
            } else {
                nums1[k] = nums2[j] 
                j-- 
                k--
            }
        }
        
        // nums2 留下的情况，特殊处理一下 
        while(j>=0) {
            nums1[k] = nums2[j]  
            k-- 
            j--
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


