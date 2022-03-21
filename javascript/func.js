export const func_throttle = (fn, delay, atleast) => {
  var timer = null;
  var previous = null;

  return function () {
    var now = +new Date();

    if (!previous) previous = now;

    if (now - previous > atleast) {
      fn();
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn();
      }, delay);
    }
  };
};

export const run_once = (fn, context) => {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
};

// 组合多个函数(第一个函数运行的结果传给第二个)
export const composFn = (...fns) => {
  return (x) => fns.reduce((pre, cur) => cur(pre), x);
};
