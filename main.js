$(document).ready(function(){
  var imgDiv =$('.image');
  $('#find').on('click',function (f) {
    window.scrollTo(0,document.body.scrollHeight);      //scroll to the end of the page
    f.preventDefault();
    var searchterm =$('#input').val();
    var key = "https://api.giphy.com/v1/gifs/search?q="+searchterm+"&rating=g&api_key=dc6zaTOxFJmzC";    //get AJAX
    $.ajax({
      method: "GET",
      url:key,
    }).then(function(a){
      $("form").trigger("reset");
      var index = Math.floor(Math.random()*a.data.length)             //random a gif
      var newimg =$('<img>')
      newimg.attr('src',a.data[index].images.fixed_height.url)
      imgDiv.append(newimg);
    });
  });
// Remove button
  $('#remove').on('click',function(e){
    e.preventDefault();
    $('img').remove();
  })
});
