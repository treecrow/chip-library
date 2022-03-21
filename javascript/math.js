// 根据坐标点确定点相对于x轴的夹角
export const angle_by_point = (dx, dy)=>{
  var angel = (Math.atan2(dy, dx) * 180) / Math.PI;
  return angel > 0 ? angel : 360 + angel;
}

// 简单的求阶乘的函数
export const factorial = (n)=>{
  return n === 0 ? 1 : n * factorial(n - 1);
}

// 简化分数
export const fraction_reduce = (a, x, y)=>{
  if (x % y == 0) {
    a += x / y;
    return [a, 0, 0];
  }
  while (x > y) {
    x -= y;
    a++;
  }
  if (x > 1) {
    for (var i = 2; i < x; i++) {
      while (x % i == 0 && y % i == 0) {
        x /= i;
        y /= i;
      }
    }
  }
  return [a, x, y];
}
