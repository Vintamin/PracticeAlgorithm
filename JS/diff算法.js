// diff算法核心原理
// 每一次遍历是一个循环, 每个循环执行五次操作, 分别是
// 1、oldstart 与 newstart 比较
// 2、oldend 与 newend 比较
// 3、oldstart 与 newend 比较
// 4、oldend 与 newstart 比较 
// 5、newstart 与 oldAll(所有旧节点) 比较 (前面4次都不匹配时才进入第5次)

// 循环(1)
// oldstart 与 newstrat一致, oldstart和newstart index向中间+1, dom不改变
// dom        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//         oldstart                   oldend
//            |                           |
// oldVNode   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//            |                            |
//        newstrat                       newend

// oldend与newend一致 index向中间+1, dom不改变
// dom        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//            oldstart             oldend
//               |                    |
// oldVNode   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//               |                     |
//           newstrat                newend

// 循环(2)
// oldstart和newend相同 
// dom        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//            oldstart             oldend
//               |                    |
// oldVNode   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//               |                     |
//           newstrat                newend

// 将oldstart放到oldend后面, dom改变, oldstart和newend index向中间+1
// dom        1, 3, 4, 5, 6, 7, 8, 9, 2, 10
//              oldstart            oldend
//                  |                 |
// oldVNode   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//               |                  |
//           newstrat             newend

// newstrat和oldend相同, 将oldend放到oldstart前面 
// dom改变, newstrat和oldend index向中间+1
// dom        1, 9, 3, 4, 5, 6, 7, 8, 2, 10
//              oldstart        oldend
//                  |              |
// oldVNode   1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//                  |               |
//                newstrat        newend

// 循环(3)
// 发现前4次都匹配不上, 进入第5次 newstart 与 所有旧节点 比较
// 发现老节点有7这个节点, 把节点7 放到oldstart之前
// dom改变, newstart index向中间+1
// dom        1, 9, 7, 3, 4, 5, 6, 8, 2, 10
//               oldstart                      oldend
//                  |                             |
// oldVNode   1, 2, 3, 4, 5, 6, 7(标记undefined), 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//                      |           |
//                   newstrat     newend

// 循环(4)
// 发现前4次都匹配不上, 进入第5次 newstart 与 所有旧节点 比较
// 发现没用11这个节点 11节点是新增, 将新增节点放在oldstart前面
// dom改变, newstart index向中间+1
// dom        1, 9, 7, 11, 3, 4, 5, 6, 8, 2, 10
//               oldstart                      oldend
//                  |                             |
// oldVNode   1, 2, 3, 4, 5, 6, 7(标记undefined), 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//                         |        |
//                      newstrat  newend

// 循环(5) 和 循环(6) 和 循环(7)
// 发现前oldstart 与 newstart匹配
// dom不改变, oldstart和newstart index向中间+1
// dom        1, 9, 7, 11, 3, 4, 5, 6, 8, 2, 10
//                       oldstart               oldend
//                           |                    |
// oldVNode   1, 2, 3, 4, 5, 6, 7(标记undefined), 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//                                  ||
//                           newstrat newend

// 循环(8)
// 遍历结束 
// 当oldstart > oldend 有新增节点 直接新增
// 当newstart > newend 有删除节点 删除
// 当前我们满足(newstart > newend) 删除节点8 , 7有特殊标记(改变了位置)
// dom改变 (完成) 与 newVnode匹配
// dom        1, 9, 7, 11, 3, 4, 5, 6, 2, 10 
//                          oldstart           oldend
//                              |                 |
// oldVNode   1, 2, 3, 4, 5, 6, 7(标记undefined), 8, 9, 10
// newVNode   1, 9, 7, 11, 3, 4, 5, 6, 2, 10
//                                  |  |
//                             newend  newstrat 
