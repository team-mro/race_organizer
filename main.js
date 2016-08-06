chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    id: 'window',
    innerBounds: {
      height: 500,
      width: 800,
    },
    resizable: true
  });
});