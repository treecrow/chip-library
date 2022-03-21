// 金钱格式化
export const moneyFormat = (money, digit) => {
  digit = digit || 2;
  var tens = Math.pow(10, digit);
  var money = (Math.round(money * tens) / tens).toFixed(digit);
  var moneyArr = money.split(".");
  moneyArr[0].replace(/\B((?=\d{3})+(?!\d))/g, ",");
  return moneyArr.join(".");
};

// 生成指定位数数字验证码
export const verificationCode = (len) => {
  let result = "";
  while (len > 0) {
    len--;
    result += Math.floor(Math.random() * 10);
  }
  return result;
};
