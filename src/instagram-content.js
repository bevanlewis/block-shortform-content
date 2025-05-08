// src/instagram-content.js
console.log("Instagram Content Blocker Script: Initializing for UI changes...");

// --- Configuration & Selectors ---
const INSTAGRAM_HOSTNAME = "www.instagram.com";
const INSTAGRAM_SELECTORS = {
  reelsButton: [
    'a[href="/reels/"]',
    'a[role="link"][href*="/reels/"]',
    'svg[aria-label="Reels"]',
  ],
  exploreButton: 'a[href="/explore/"]',
};

// --- UI Modification Logic ---
function hideElement(element, elementType) {
  if (!element) return;
  let containerToHide = null;
  if (element.tagName.toLowerCase() === "svg") {
    const clickableParent = element.closest("a");
    if (clickableParent) {
      if (
        clickableParent.parentElement &&
        clickableParent.parentElement.parentElement &&
        clickableParent.parentElement.parentElement.tagName.toLowerCase() ===
          "span"
      ) {
        containerToHide = clickableParent.parentElement.parentElement;
      } else {
        containerToHide = clickableParent.closest('span[class*="x"]');
      }
      if (!containerToHide) containerToHide = clickableParent.parentElement;
    }
  } else {
    if (
      element.parentElement &&
      element.parentElement.parentElement &&
      element.parentElement.parentElement.tagName.toLowerCase() === "span"
    ) {
      containerToHide = element.parentElement.parentElement;
    } else {
      containerToHide = element.closest('span[class*="x"]');
    }
    if (!containerToHide) containerToHide = element.parentElement;
  }
  if (!containerToHide && element.style.display !== "none") {
    console.log(
      `Instagram Content Blocker Script: Hiding ${elementType} element directly (fallback).`
    );
    element.style.display = "none";
    return;
  }
  if (containerToHide && containerToHide.style.display !== "none") {
    console.log(
      `Instagram Content Blocker Script: Hiding ${elementType} container.`
    );
    containerToHide.style.display = "none";
  }
}

function handleInstagramUIChanges() {
  if (window.location.hostname !== INSTAGRAM_HOSTNAME) return;
  for (const selector of INSTAGRAM_SELECTORS.reelsButton) {
    const reelsElement = document.querySelector(selector);
    if (reelsElement) {
      hideElement(reelsElement, "Reels button");
    }
  }
  const exploreLink = document.querySelector(INSTAGRAM_SELECTORS.exploreButton);
  if (exploreLink) {
    hideElement(exploreLink, "Explore button");
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
      "Instagram Content Blocker Script: UI observer initialized and watching DOM changes."
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
