// Handle extension toggle functionality
document.getElementById("toggleButton").addEventListener("click", function () {
  const status = document.getElementById("status");
  const button = document.getElementById("toggleButton");

  if (status.textContent === "Active") {
    status.textContent = "Disabled";
    button.textContent = "Enable";
    // Disable functionality
    chrome.storage.local.set({ enabled: false });
  } else {
    status.textContent = "Active";
    button.textContent = "Disable";
    // Enable functionality
    chrome.storage.local.set({ enabled: true });
  }
});

// Initialize popup state
chrome.storage.local.get("enabled", function (data) {
  const status = document.getElementById("status");
  const button = document.getElementById("toggleButton");

  if (data.enabled === false) {
    status.textContent = "Disabled";
    button.textContent = "Enable";
  }
});
