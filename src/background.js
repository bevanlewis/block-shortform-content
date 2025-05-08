// Listen for tab updates to detect URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only run when URL changes and is complete
  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);

    // Handle YouTube Shorts
    if (
      url.hostname === "www.youtube.com" &&
      url.pathname.startsWith("/shorts")
    ) {
      console.log("Background: Redirecting YouTube Shorts");
      chrome.tabs.update(tabId, { url: "https://www.youtube.com" });
    }

    // Handle Instagram Reels and Explore page
    if (url.hostname === "www.instagram.com") {
      if (url.pathname.startsWith("/reels")) {
        console.log("Background: Redirecting Instagram Reels");
        chrome.tabs.update(tabId, { url: "https://www.instagram.com" });
      } else if (url.pathname === "/explore/") {
        console.log("Background: Redirecting Instagram Explore page");
        chrome.tabs.update(tabId, { url: "https://www.instagram.com" });
      }
    }
  }
});
