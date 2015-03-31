chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    var isEmotifyOn = false;

    // Watch the input for changes.
    $('#message-input').bind('input propertychange', function() {
      console.log(this.value);
    });

    //$('<a id="emotify_toggle" title="Toggle Emotification" class="flexpane_toggle_button"><i class="ts_icon ts_icon_mentions"></i></a>')
    $('<button id="emotify_toggle">Emoticons Off</button>')
      .on('click', function() {
        if (isEmotifyOn) {
          $(this).text('Emoticons Off');
        } else {
          $(this).text('Emoticons On');
        }
        isEmotifyOn = !isEmotifyOn;
      })
      .insertBefore('#channel_members_toggle');
	}
	}, 10);
});
