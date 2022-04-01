// 时间转化为几天前,几小时前，几分钟前
export const before = (dateTimeStamp) => {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;
  const now = new Date().getTime();
  const diffValue = now - dateTimeStamp;

  if (diffValue < 0) return;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;

  if (monthC >= 1) {
    return "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return "" + parseInt(minC) + "分钟前";
  } else {
    return "刚刚";
  }
};

// 将给定时间转换为指定格式
export const format = (date, fmt = "YYYY-MM-DD HH:mm:ss") => {
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    date = new Date(date.replace(/-/g, "/"));
  }
  if (typeof date === "number") {
    date = new Date(date);
  }
  var o = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  var week = {
    0: "\u65e5",
    1: "\u4e00",
    2: "\u4e8c",
    3: "\u4e09",
    4: "\u56db",
    5: "\u4e94",
    6: "\u516d",
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

// 获取指定日期所在月份的天数
export const dayNum = (Y, M) => {
  return new Date(Y, M, 0).getDate();
};

// 给定一个时间，获取这个时间在日历当月中的所有日期列表
export const days = (date) => {
  // 日期列表
  const dayList = [];
  // 当月第一天
  const curFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // 当月时间对象
  const curMonthTime = {
    year: curFirstDay.getFullYear(),
    month: curFirstDay.getMonth(),
    // 总共多少天
    dayCount: new Date(
      curFirstDay.getFullYear(),
      curFirstDay.getMonth() + 1,
      0
    ).getDate(),
    firstDayIndex: curFirstDay.getDay(), // 首日索引（空缺几天）
    lastDayIndex: 0, // 尾日索引（6-lastDayIndex=空缺几天）
  };
  curMonthTime.lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    curMonthTime.dayCount
  ).getDay();

  // 上月第一天
  const preFirstDay =
    curMonthTime.month == 0
      ? new Date(curMonthTime.year - 1, 11, 1)
      : new Date(curMonthTime.year, curMonthTime.month - 1, 1);
  // 上月时间对象
  const preMonthTime = {
    year: preFirstDay.getFullYear(),
    month: preFirstDay.getMonth(),
    // 总共多少天
    dayCount: new Date(
      preFirstDay.getFullYear(),
      preFirstDay.getMonth() + 1,
      0
    ).getDate(),
  };
  // 下月第一天
  const nextFirstDay =
    curMonthTime.month == 11
      ? new Date(curMonthTime.year + 1, 0, 1)
      : new Date(curMonthTime.year, curMonthTime.month + 1, 1);
  // 下月时间对象
  const nextMonthTime = {
    year: nextFirstDay.getFullYear(),
    month: nextFirstDay.getMonth(),
  };

  // 添加上月日期
  for (let i = 0; i < curMonthTime.firstDayIndex; i++) {
    dayList.unshift(
      `${preMonthTime.year}-${preMonthTime.month + 1}-${
        preMonthTime.dayCount - i
      }`
    );
  }
  // 添加当月日期
  for (let i = 0; i < curMonthTime.dayCount; i++) {
    dayList.push(`${curMonthTime.year}-${curMonthTime.month + 1}-${i + 1}`);
  }
  // 添加下月日期
  for (let i = 0; i < 6 - curMonthTime.lastDayIndex; i++) {
    dayList.push(`${nextMonthTime.year}-${nextMonthTime.month + 1}-${i + 1}`);
  }
  return dayList;
};
