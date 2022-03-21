// 获取链接的绝对地址
export const absoluteUrl = (url) => {
  let a = document.createElement("a");
  a.href = url;
  const result = a.href;
  a = null;
  return result;
};

// 获取域名主机
export const host = (url) => {
  if (typeof url == "undefined" || null == url) {
    url = window.location.href;
  }
  let host = "null",
    regex = /^\w+\:\/\/([^\/]*).*/,
    match = url.match(regex);
  if (typeof match != "undefined" && null != match) {
    host = match[1];
  }
  return host;
};

// 获取url参数对象
export const param = () => {
  const obj = {};
  const searchArr = window.location.search.substring(1).split("&");
  searchArr.forEach((item) => {
    const arr = item.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
};
