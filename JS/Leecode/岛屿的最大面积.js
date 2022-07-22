/* 
    给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。
    一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
    找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let result = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const count = dfs(row,col);
                result = Math.max(result, count);
            }
            
        }
    }
    function dfs(row,col){
        if (row<0 || row>=grid.length || col<0 ||col>=grid[0].length || grid[row][col] === 0) {
            return 0;
        }
        grid[row][col] = 0;//避免重复遍历
        let count = 1;//算上已经沉没掉的一个1
        //检查四周
        count += dfs(row-1,col);
        count += dfs(row+1,col);
        count += dfs(row,col-1);
        count += dfs(row,col+1);
        return count;
    }
    return result;
};