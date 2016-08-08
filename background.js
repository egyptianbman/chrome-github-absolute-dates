var execute = function(details) {
    chrome.tabs.executeScript(details.tabId, {
        file: 'process-dates.js'
    });
};

chrome.webNavigation.onHistoryStateUpdated.addListener(execute);
chrome.webNavigation.onCompleted.addListener(execute);
