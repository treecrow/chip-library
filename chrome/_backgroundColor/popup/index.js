const { scripting, storage, tabs } = chrome;
document.getElementById("changeColor").addEventListener("click", async () => {
  let [tab] = await tabs.query({ active: true, currentWindow: true });

  scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
      });
    },
  });
});
