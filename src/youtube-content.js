console.log("YouTube Content Blocker Script: Initializing for UI changes...");

// --- Configuration ---
const YOUTUBE_HOSTNAME = "www.youtube.com";

// --- UI Modification Logic ---
function handleYouTubeUIChanges() {
  if (window.location.hostname !== YOUTUBE_HOSTNAME) return;

  // Remove YouTube shorts from sidebar
  document.querySelectorAll('a[href^="/shorts"]').forEach((el) => {
    const sideBarEntry = el.closest("ytd-guide-entry-renderer");
    if (sideBarEntry) {
      console.log(
        "YouTube Content Blocker Script: Removing YouTube Short from sidebar."
      );
      sideBarEntry.remove();
    }
  });
}

// --- Main Logic & Mutation Observer ---
function runYouTubeModifications() {
  handleYouTubeUIChanges();
}

// Initial run
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runYouTubeModifications);
} else {
  runYouTubeModifications();
}

// Setup MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(() => {
  runYouTubeModifications();
});

function startObserver() {
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    console.log(
      "YouTube Content Blocker Script: UI observer initialized and watching DOM changes."
    );
  } else {
    setTimeout(startObserver, 100); // Retry if body not ready
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startObserver);
} else {
  startObserver();
}
