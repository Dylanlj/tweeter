/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( document ).ready(function() {


  $(function() {
    //need to rethink how i'm calling these guys
    var $tweetButton = $('form');
    $tweetButton.on('submit', function (event) {

      event.preventDefault()

      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize(),
        success: loadTweets
      })
    });
  });

//gets the tweets then gives them here to renderTweets?
  function loadTweets(){
    console.log("yay")
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweets) {
        console.log('Success: ', tweets);
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


})


// let $tweet = (
//     `<article class=tweet> 
//     <header>
//       <img class=avatar src=>
//       <span class=name></span>
//       <span class=handle></span>
//     </header>
//       <article class=tweet-text></article>
//     <footer>fadsfsafdsadf</footer>
//   </article>`)

// $("section").append("hebajhsd")
















//$("<article>").addClass("tweet")




// $( document ).ready(function() {

//   let $tweet = createTweetElement(tweetData)
//     console.log($tweet)
//   $(".tweets-container").append($tweet);
// });
//need to fix the time/date





