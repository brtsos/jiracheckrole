function save_options() {
  var onlyRole = document.getElementById('onlyrole').checked;
  chrome.storage.sync.set({
    onlyRole: onlyRole
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    onlyRole: false
  }, function(items) {
    document.getElementById('onlyrole').checked = items.onlyRole;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);