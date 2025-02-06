// Listen for tab updates to detect URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only run when URL changes and is complete
  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);

    // Handle YouTube Homepage
    // YouTube content can only be reached if you serach for it
    if (url.hostname === "www.youtube.com" && url.pathname.startsWith("/")) {
      chrome.tabs.update(tabId, { url: "https://duckduckgo.com/?t=brave" });
    }

    // Handle YouTube Shorts
    if (
      url.hostname === "www.youtube.com" &&
      url.pathname.startsWith("/shorts")
    ) {
      chrome.tabs.update(tabId, { url: "https://www.youtube.com" });
    }

    // Handle Instagram Reels
    if (
      url.hostname === "www.instagram.com" &&
      url.pathname.startsWith("/reels")
    ) {
      chrome.tabs.update(tabId, { url: "https://www.instagram.com" });
    }
  }
});
