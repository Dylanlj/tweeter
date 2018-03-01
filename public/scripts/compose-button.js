// when the compose button is clicked the new tweet container appear or disappears
$( document ).ready(function() {
  $("#compose-button").on("click", function(event){
    $("section.new-tweet").slideToggle(100, "swing", focusToggle);
  });
});

// toggles focus of text area when new-tweet section appears. 
function focusToggle(){
  if($("section.new-tweet").is( ":visible" )){
    $("section.new-tweet").find("textarea").focus()
  };
};
