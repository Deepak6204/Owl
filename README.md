
# Automatic Dark Mode Chrome Extension

This Chrome extension automatically toggles dark mode based on the brightness of the webpage's background color. It's perfect for users who prefer dark mode for better eye comfort or late-night browsing.

## Features
- Detects webpage background brightness and toggles dark mode accordingly.
- Works on most websites, including complex pages like Gmail.
- Uses CSS inversion to ensure text and images are still viewable in dark mode.

## Installation (Developer Mode)

To install the extension manually in Chrome using Developer Mode, follow these steps:

### Step 1: Download the Extension Files

1. Download or clone the repository containing the extension files.
   - [Click here to download the ZIP](https://github.com/Deepak6204/Owl.git).
2. Extract the contents of the `.zip` file to a folder on your computer.

### Step 2: Enable Developer Mode in Chrome

1. Open Google Chrome.
2. Go to the **Extensions** page by clicking the three dots in the top right corner and selecting:
   ```
   More Tools > Extensions
   ```
   Alternatively, type `chrome://extensions/` in your address bar.

3. In the top right corner of the Extensions page, toggle the **Developer Mode** switch to turn it on.

### Step 3: Load the Extension

1. Once in Developer Mode, click the **Load unpacked** button on the top left of the Extensions page.
2. Navigate to the folder where you extracted the extension files.
3. Select the folder, then click **Open**.

The extension will now appear in your list of installed extensions!

### Step 4: Using the Extension

- The extension runs automatically in the background. 
- When you visit a webpage, it will detect the background color, and if it’s too bright, it will apply dark mode to the page.
- You can test it by visiting bright websites or pages like Google, Wikipedia, or Medium.

### Step 5: Optional - Pinning the Extension

1. After installing the extension, you can pin it for easy access:
   - Click the puzzle icon (extensions icon) in the top right corner of Chrome.
   - Find the "Dark Mode Toggle" extension, then click the pin icon to keep it visible.

## Troubleshooting

- If the extension doesn't seem to be working on a specific site (e.g., Gmail):
  - **Reload the page**: Sometimes the page may need to be reloaded for the extension to properly detect the background color.
  - **Check console logs**: Open Developer Tools (`F12`), go to the **Console** tab, and check if there are any errors or logs from the extension.

## Future Improvements

- Custom dark mode themes for better control over the dark mode appearance.
- Support for dynamic content and embedded iframes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy the automatic dark mode, and feel free to contribute or provide feedback! If you have any questions, feel free to reach out or open an issue on GitHub.
