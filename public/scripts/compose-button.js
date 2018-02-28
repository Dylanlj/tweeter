$( document ).ready(function() {
  $("#compose-button").on("click", function(event){
    $("section.new-tweet").slideToggle(100, "swing", focusToggle);
  })
});

function focusToggle(){
    if($("section.new-tweet").is( ":visible" )){
    $("section.new-tweet").find("textarea").focus()
  }
}