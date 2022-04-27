/* 
红灯 3 秒亮一次，绿灯 2 秒亮一次，黄灯 1 秒亮一次；如何让三个灯不断交替重复亮灯？
思路：Promise + 递归
*/

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const light = (timmer, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timmer);
  });
};

const step = () => {
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, green);
    })
    .then(() => {
      return light(1000, yellow);
    })
    .then(() => {//为了不断循环
      step();
    });
};

step();