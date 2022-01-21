chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if (tab.url.includes('https://www.instagram.com/')) {
            chrome.tabs.executeScript(null, { file: "content.js" });
            chrome.tabs.insertCSS(null, { file: "content.css" });
        }
    });
});