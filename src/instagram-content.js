// src/instagram-content.js
console.log(
  "Instagram Content Blocker Script: Initializing for UI changes (simplified)..."
);

// --- Configuration & Selectors ---
const INSTAGRAM_HOSTNAME = "www.instagram.com";
const INSTAGRAM_SELECTORS = {
  reelsLink: 'a[href="/reels/"]', // Direct link to Reels
  exploreLink: 'a[href="/explore/"]', // Direct link to Explore
};

// --- UI Modification Logic ---
function handleInstagramUIChanges() {
  if (window.location.hostname !== INSTAGRAM_HOSTNAME) return;

  // Hide Reels Button
  const reelsLink = document.querySelector(INSTAGRAM_SELECTORS.reelsLink);
  if (
    reelsLink &&
    reelsLink.parentElement &&
    reelsLink.parentElement.parentElement
  ) {
    const reelsButtonContainer = reelsLink.parentElement.parentElement; // This should be the main span container
    if (reelsButtonContainer.style.display !== "none") {
      console.log(
        "Instagram Content Blocker Script: Hiding Reels button container (simplified)."
      );
      reelsButtonContainer.style.display = "none";
    }
  }

  // Hide Explore Button
  const exploreLink = document.querySelector(INSTAGRAM_SELECTORS.exploreLink);
  if (
    exploreLink &&
    exploreLink.parentElement &&
    exploreLink.parentElement.parentElement
  ) {
    const exploreButtonContainer = exploreLink.parentElement.parentElement; // This should be the main span container
    if (exploreButtonContainer.style.display !== "none") {
      console.log(
        "Instagram Content Blocker Script: Hiding Explore button container (simplified)."
      );
      exploreButtonContainer.style.display = "none";
    }
  }
}

// --- Main Logic & Mutation Observer ---
function runInstagramModifications() {
  handleInstagramUIChanges();
}

// Initial run
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runInstagramModifications);
} else {
  runInstagramModifications();
}

// Setup MutationObserver
const observer = new MutationObserver(() => {
  runInstagramModifications();
});

function startObserver() {
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    console.log(
      "Instagram Content Blocker Script: UI observer initialized (simplified) and watching DOM changes."
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
