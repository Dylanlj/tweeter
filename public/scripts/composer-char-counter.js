//counts the number of characters in the tweet text area
$( document ).ready(function() {
  $(".new-tweet textarea").on("keyup", function(event){
    let charNum = 140 -  $(this).val().length;
    let counter = $(this).parent().find(".counter")
    counter.html(charNum);    

    if(charNum < 0){
      counter.addClass("negative");
    } else {
      counter.removeClass("negative")
    }

  })
});


//remove negative class