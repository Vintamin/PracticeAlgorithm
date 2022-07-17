/* 
    给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
    输入：grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
        ]
        输出：1

    思路：
        这类题的思路就是采用“沉没”小岛
        具体：在某一点，如果是1就先沉没变为0，然后判断四周是否越界（如果越界就什么都不用做），然后判断是否为1；
            如果是0就什么都不做；如果是1就做重复工作（递归），进行变0，四周判断....

    dfs: - 深度优先搜索（对于这道题来讲，就好比先走一条路，一直走这一条路走完，再去回去走其他方向的路）
    bfs: - 广度优先搜索（对于这道题来讲，就好比先处理某一个点的上下左右都处理完再去处理下一个点的上下左右）
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

 var numIslands = function(grid) {
    let count = 0;//小岛数量
    function dfs(row,col){
        if (row <0 || row >=grid.length || col <0 || col>= grid[0].length
            || grid[row][col] === "0") {
            return;//不用处理
        }
        grid[row][col] = "0";
        dfs(row-1,col);
        dfs(row+1,col);
        dfs(row,col-1);
        dfs(row,col+1);
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                count++;
                dfs(row,col);//沉没(递归函数)
            }    
        }       
    }
    return count;
};