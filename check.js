function setSenButton() {
    var selectVal = $( "#commentLevel option:selected" ).val();
    if (selectVal == '') {
        $('#issue-comment-add-submit').hide();
    } else {
        $('#issue-comment-add-submit').show();
  };
}

$("body").on("click", ".aui-list-item-link", function(){
    setSenButton();
});

$( "#comment" ).on('input', function() {
    setSenButton();
});
