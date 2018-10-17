function setSenButton() {
	var onlyRole = $('#pleaseSelect').data('onlyRole');
     var selectVal = $( "#commentLevel option:selected" ).val();

    if (onlyRole) {
    	if (selectVal == '') {
     		$('#issue-comment-add-submit').hide();
     	} else {
        	$('#issue-comment-add-submit').show();
        	$('#pleaseSelect').hide();
     	}
 	} else {
 		$('#issue-comment-add-submit').show();
        $('#pleaseSelect').hide();
 	}
}

function restore_options() {
  chrome.storage.sync.get({
    onlyRole: false
  }, function(items) {
  	$('#pleaseSelect').data('onlyRole', items.onlyRole);
  });
}


$(function() {
	if(window.location.href.indexOf("atlassian.net") > -1) {
		$('#commentLevel').after('<span id="pleaseSelect" style="color:red;"><b>&lt;-- Please select!</b></span>');
		restore_options();
		$('#issue-comment-add-submit').hide();
		$("body").on("click", ".aui-list-item-link", function(){
		    setSenButton();
		});
	}
});
