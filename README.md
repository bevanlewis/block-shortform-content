# Short Form Content Blocker

## Overview

Short Form Content Blocker is a Chrome extension designed to block YouTube Shorts and Instagram Reels by redirecting to their respective homepages or removing the content from the page.

## Features

- Redirects YouTube Shorts to the YouTube homepage.
- Redirects Instagram Reels to the Instagram homepage.
- Removes YouTube Shorts from the sidebar.
- Hides Instagram Reels buttons and text.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/block-shortform-content.git
```

2. Navigate to the project directory:

```sh
cd block-shortform-content
```

3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top right corner.
5. Click on "Load unpacked" and select the project directory.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Use the toggle button to enable or disable the extension.

## Files

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `popup/popup.js`: Handles the extension toggle functionality.
- `popup/popup.html`: The HTML for the extension popup.
- `src/content.js`: Content script to remove YouTube Shorts and Instagram Reels.
- `src/background.js`: Background script to handle URL redirections.
- `manifest.json`: Configuration file for the Chrome extension.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
