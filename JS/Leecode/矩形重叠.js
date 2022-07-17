/* 
    矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。
    如果相交的面积为 正 ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。
    给出两个矩形 rec1 和 rec2 。如果它们重叠，返回 true；否则，返回 false 。
    比如：
        输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
        输出：true
    思路：满足下面四种情况就说明不重叠
        rec1右 <= rec2左
        rec1左 >= rec2右
        rec1下 >= rec2上
        rec1上 <= rec2下

*/
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 var isRectangleOverlap = function(rec1, rec2) {
    if (rec1[2]<= rec2[0] || rec1[0]>=rec2[2]
        || rec1[1]>=rec2[3] || rec1[3]<= rec2[1]) {
        return false
    }
    return true;
};