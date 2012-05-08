$(document).ready(function() {
  $.getJSON("https://api.github.com/users/mattroyer/gists?callback=?", function(json) {
    $.each(json.data, function(index, value) {
      $('#gists').append('<li><a href="' + value.html_url + '">' + value.description + '</a></li>');
    });
  });
});
