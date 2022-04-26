const { runtime, action, storage, tabs } = chrome;

runtime.onInstalled.addListener((details) => {
  // 自动打开chrome扩展介绍文件
  tabs.create({ url: runtime.getURL("README.md") });

  // 初始数据设置
  storage.sync.set({ color: "red" });
});

// 点击扩展icon时
action.onClicked.addListener((tab) => {
  // do something
});
