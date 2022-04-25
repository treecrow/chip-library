let color = "red";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default backgrounds color set to %cgreen", `color: ${color}`);
});
