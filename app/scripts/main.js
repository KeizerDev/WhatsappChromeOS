'use strict';

// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: {width: 700, height: 520},
    minWidth: 700,
    minHeight: 520,
    maxWidth: 700,
    maxHeight: 520,
    frame: {
        type: 'chrome',
        color: '#eee',
        inactiveColor: '#eee',
      }
    }
  );
});
