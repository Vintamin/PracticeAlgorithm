Array.prototype.copyMap = function (fn, toThis) {
    let arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const item = fn.call(toThis, arr[i], i, arr);
      result.push(item);
    }
    return result;
  };