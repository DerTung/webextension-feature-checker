console.log('Send ContentScriptMessage');
chrome.runtime.sendMessage("ContentScriptMessage", function(response) {
  console.log('Response:', response);
  console.log('chrome.runtime.lastError:', chrome.runtime.lastError);
});
console.log('ContentScriptMessage send');
