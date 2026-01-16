# Callto/SIP to Tel Converter

A browser extension that automatically converts `callto:` and `sip:` links to `tel:` links for better phone compatibility with VoIP systems like Microsoft Teams, 3CX, and others.

## Features

- Converts `callto:` links to `tel:` links
- Converts `sip:` links to `tel:` links
- Works on all websites
- Handles dynamically loaded content (AJAX/SPA)
- No data collection - works entirely locally
- Manifest V3 compatible

## Installation

### Microsoft Edge

1. Open `edge://extensions`
2. Enable **Developer mode** (bottom left toggle)
3. Click **Load unpacked**
4. Select the extension folder
5. The extension is now active

### Google Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode** (top right toggle)
3. Click **Load unpacked**
4. Select the extension folder
5. The extension is now active

## How It Works

The extension runs a content script on every webpage that:

1. Scans for all `<a>` elements with `href` starting with `callto:` or `sip:`
2. Converts these to `tel:` links
3. Uses a MutationObserver to watch for dynamically added links

This allows phone numbers to open in your default phone application (Teams, 3CX, etc.) instead of triggering browser-specific behavior.

## Use Case

Many websites and CRM systems use `callto:` or `sip:` links for phone numbers. However, modern VoIP applications like Microsoft Teams and 3CX work better with `tel:` links. This extension bridges that gap automatically.

## Files

```
LinkChangerExtenstion/
├── manifest.json          # Extension configuration
├── content.js             # Link conversion logic
├── privacy-policy.html    # Privacy policy
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # This file
```

## Privacy

This extension:

- Does NOT collect any personal information
- Does NOT track your browsing history
- Does NOT store any data locally or remotely
- Does NOT communicate with any external servers
- Does NOT use cookies or any tracking mechanisms

See [privacy-policy.html](privacy-policy.html) for full details.

## Compatibility

| Browser | Supported |
|---------|-----------|
| Microsoft Edge | Yes |
| Google Chrome | Yes |
| Firefox | No (different extension API) |
| Safari | No |

## Version History

| Version | Changes |
|---------|---------|
| 1.0 | Initial release with `callto:` support |
| 1.1 | Added `sip:` protocol support, improved code structure |

## Future Plans

- Publish to Chrome Web Store
- Publish to Microsoft Edge Add-ons
- Add configuration options (if needed)

## License

MIT License - Feel free to use and modify.

## Support

For issues or questions, please open an issue on GitHub or contact IT support.
