$( document ).ready(function() {
  $("article.tweet").on("mouseenter", function(event){
    $(this).addClass("hovering")
    $(this).find("footer").append(`<span class=symbols > corner symbols <span>`)
  })
  $("article.tweet").on("mouseleave", function(event){
    $(this).removeClass("hovering")
    $(this).find(".symbols").remove()
  })
});
