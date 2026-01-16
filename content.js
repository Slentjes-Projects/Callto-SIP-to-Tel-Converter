/**
 * Callto/SIP to Tel Converter
 * Version: 1.1
 * Converts callto: and sip: links to tel: links for better phone compatibility
 */

(function() {
  'use strict';

  function convertLinks(root) {
    if (!root || !root.querySelectorAll) return;

    const links = root.querySelectorAll('a[href^="callto:" i], a[href^="sip:" i]');
    links.forEach(link => {
      link.href = link.href.replace(/^(callto:|sip:)/i, 'tel:');
    });
  }

  function handleNode(node) {
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    // Check if the node itself is a callto or sip link
    if (node.matches && node.matches('a[href^="callto:" i], a[href^="sip:" i]')) {
      node.href = node.href.replace(/^(callto:|sip:)/i, 'tel:');
    }
    // Check for links within the added node
    convertLinks(node);
  }

  // Convert existing links on page load
  convertLinks(document);

  // Watch for dynamically added links
  if (document.body) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(handleNode);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
