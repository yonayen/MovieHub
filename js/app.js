$(function(){
  $('#search-button').on("click", function(event){
    var searchTerm = $('#query').val();
    $('#top_movies .clearfix h2').text(searchTerm);
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  $('#top_movies .wrapper .row').remove()
  var html = "";
  var counter = 0;
  $.each(results, function(index,value){
    if (counter < 6) {
      if (value.Poster != 'N/A') {
        counter++;
        html += '<div class="row">'+
            '<div class="post">'+
              '<img src="' + value.Poster.replace("https://", "http://") + '"/>'+
              '<h3 class="title">' + value.Title + '</h3>'+
              '<p class="post_info">' + value.Year + ' | ' + value.Type + '</p>'+
            '</div>'+
          '</div>';
      }
    }
    console.log(value.Title);
  });
  $('#top_movies .wrapper').append(html);
}