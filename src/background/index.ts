if (chrome && chrome.runtime.onInstalled) {
  chrome.runtime.onInstalled.addListener(() => {
    // tslint:disable-next-line: no-console
    console.log("extension installed");
  });
}
