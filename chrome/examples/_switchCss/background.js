const { runtime, action, scripting } = chrome;

runtime.onInstalled.addListener(() => {
  action.setBadgeText({
    text: "OFF",
  });
});

const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.com/docs/webstore";
action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    const prevState = await action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "ON" ? "OFF" : "ON";

    await action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    nextState === "ON"
      ? await scripting.insertCSS({
          files: ["focus-mode.css"],
          target: { tabId: tab.id },
        })
      : await scripting.removeCSS({
          files: ["focus-mode.css"],
          target: { tabId: tab.id },
        });
  }
});
