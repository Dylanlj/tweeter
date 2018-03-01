$(document).ready(function() {
  $(function() {
    //need to rethink how i"m calling these guys
    $(".new-tweet form").on("submit", function (event) {
      event.preventDefault();
      let tweetText = $(this).find("textarea").val()
      if(tweetText.length > 140){
        alert("You are using too many characters")
      } else if (tweetText.search(/\w/) === -1){
        alert("That is an empty tweet");
      } else {
        $.ajax({
          url: "/tweets",
          method: "POST",
          data: $(this).serialize(),
          success: loadTweets
        });
      };
    });
  });

  //gets all the tweets then gives them to renderTweets
  function loadTweets(){
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (tweets) {
        renderTweets(tweets);
        //removing the text of the tweet, and resetting counter
        $("form").find("textarea").val("");
        $("form").find(".counter").html(140)
      }
    });
  };

  //passes each tweet to createTweetElement function
  function renderTweets (tweets){
    $("article.tweet").remove();
    tweets.forEach(function(tweet){
      let tweetToLoad = createTweetElement(tweet)
        $(".tweets-container").prepend(tweetToLoad);
    });
  };

  //takes tweet data and returns it in a format that can be used in HTML
  function createTweetElement (tweetData){
  let dateDiff = Math.round((Date.now() - tweetData.created_at) / 86400000);
  let $tweet = (
      `<article class=tweet> 
      <header>
        <img class=avatar src=${tweetData.user.avatars.regular}>
        <span class=name>${tweetData.user.name}</span>
        <span class=handle>${tweetData.user.handle}</span>
      </header>
        <article class=tweet-text>${escape(tweetData.content.text)}</article>
      <footer>${dateDiff} days ago
          <button class=like><img src=/images/like.png></button>
          <button class=flag><img src=/images/flag.png></button>
          <button class=retweet><img src=/images/retweet.png></button>
      </footer>
    </article>`);
  return $tweet;
  };

  //prevents cross site scripting
  function escape(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  loadTweets();
});

