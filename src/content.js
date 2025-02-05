// Listen for DOM changes to block dynamic loading of shorts/reels
const observer = new MutationObserver(() => {
  // Remove YouTube shorts from sidebar
  document.querySelectorAll('a[href^="/shorts"]').forEach((el) => {
    el.closest("ytd-guide-entry-renderer")?.remove();
  });

  // Remove Instagram reels button
  document.querySelectorAll('a[href="/reels"]').forEach((el) => {
    el.style.display = "none";
  });
});

// Start observing DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
