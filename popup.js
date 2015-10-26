// sending a message without receiving end being present
// should cause chrome.runtime.lastError to not be null
chrome.runtime.sendMessage("Fire!", function(response) {
  document.body.innerHTML += JSON.stringify(chrome.runtime.lastError);
});
