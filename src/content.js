const observer = new MutationObserver(() => {
  // Remove YouTube shorts from sidebar
  document.querySelectorAll('a[href^="/shorts"]').forEach((el) => {
    el.closest("ytd-guide-entry-renderer")?.remove();
  });

  // Remove Instagram Reels
  const hideInstagramReels = () => {
    // Select the reels button by matching elements with the aria-label "Reels"
    document.querySelectorAll('a[href="/reels/"]').forEach((el) => {
      el.style.display = "none";
    });

    // Additional check for text content
    document.querySelectorAll("span").forEach((span) => {
      if (span.textContent === "Reels") {
        span.style.display = "none";
      }
    });
  };

  hideInstagramReels();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
