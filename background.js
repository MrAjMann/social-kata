// Access chrome tabs and listen for social accounts
chrome.tabs.onActivated.addListener(tab => {
    console.log(tab)
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
    });
});