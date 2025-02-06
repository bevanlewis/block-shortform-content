// Listen for DOM changes to block dynamic loading of shorts/reels
const observer = new MutationObserver(() => {
  // Remove YouTube shorts from sidebar
  document.querySelectorAll('a[href^="/shorts"]').forEach((el) => {
    el.closest("ytd-guide-entry-renderer")?.remove();
  });

  // Remove Instagram reels - updated selectors
  document
    .querySelectorAll(
      [
        'a[href="/reels"]',
        'a[href="/reels/"]',
        'svg[aria-label="Reels"]',
        'span:contains("Reels")',
      ].join(",")
    )
    .forEach((el) => {
      const reelsContainer = el.closest('div[role="link"], a[role="link"]');
      if (reelsContainer) {
        reelsContainer.style.display = "none";
      }
    });
});

// Start observing DOM changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
