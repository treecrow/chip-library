const { runtime } = chrome;

chrome.runtime.onInstalled.addListener((details) => {
  // 自动打开chrome扩展介绍文件
  chrome.tabs.create({ url: runtime.getURL("README.md") });

  // 初始数据设置
  chrome.storage.sync.set({ color: "red" });
});
