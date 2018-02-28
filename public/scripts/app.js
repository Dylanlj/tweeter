/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( document ).ready(function() {

//need to get rid of the text in the text area after this
  $(function() {
    //need to rethink how i'm calling these guys

    $('form').on('submit', function (event) {
      event.preventDefault()

      let tweetText = $(this).find("textarea").val()

      if(tweetText.length > 140){
        alert("You're using too many characters")
      } else if (tweetText.search(/\w/) === -1){
        alert("That's an empty tweet")
      } else {
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: $(this).serialize(),
          success: loadTweets
        })
      }
    });
  });

//gets all the tweets then gives them to renderTweets?
  function loadTweets(){
    console.log("yay")
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweets) {
        renderTweets(tweets);
      }
    });
  }


  function renderTweets (tweets){
    tweets.forEach(function(tweet){
      let hey = createTweetElement(tweet)
        $(".tweets-container").prepend(hey);
    })
  }


  function createTweetElement (tweetData){
  let dateDiff = Math.round((Date.now() - tweetData.created_at) / 86400000)

  let $tweet = (
      `<article class=tweet> 
      <header>
        <img class=avatar src=${tweetData.user.avatars.regular}>
        <span class=name>${tweetData.user.name}</span>
        <span class=handle>${tweetData.user.handle}</span>
      </header>
        <article class=tweet-text>${tweetData.content.text}</article>
      <footer>${dateDiff} days ago</footer>
    </article>`)
  return $tweet;
  }


  loadTweets();
})

//pressing enter isn't working

// they may not want that loadTweets call at the bottom

