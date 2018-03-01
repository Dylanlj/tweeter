//counts the number of characters in the tweet text area
$( document ).ready(function() {
  $(".new-tweet textarea").on("keyup", function(event){
    let charNum = 140 -  $(this).val().length;
    let counter = $(this).siblings(".counter");
    counter.html(charNum);    
  //if it has the class "negative" the css will turn the counter red  
    if(charNum < 0){
      counter.addClass("negative");
    } else {
      counter.removeClass("negative");
    };
  });
});