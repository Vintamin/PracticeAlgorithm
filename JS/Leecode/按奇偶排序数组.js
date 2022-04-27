/* 
    输入：[3,1,2,4]
    输出：[2,4,3,1]
*/

function sortArrayByParity(arr){
    let i=0, j=arr.length-1;
    //利用双指针
    while(i<j){
        //第一种情况：前面是奇数，后面是偶数
        if (arr[i]%2 == 1 && arr[j]%2 ==0) {
            [arr[i], arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }else if(arr[i]%2 == 0 && arr[j]%2 ==0){
            //第二种情况：前面是偶数，后面是偶数
            i++;
        }else if(arr[i]%2 == 0 && arr[j]%2 ==1){
            //第三种情况：前面是偶数，后面是奇数，正确的位置
            i++;
            j--;
        }else{
             //第四种情况：前面是奇数，后面是奇数
             j--
        }
    }
    return arr;
}