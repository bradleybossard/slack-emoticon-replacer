chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    // Watch the input for changes.
    $('#message-input').bind('input propertychange', function() {
      console.log(this.value);
    });

	}
	}, 10);
});
