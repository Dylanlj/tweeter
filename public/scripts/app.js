/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 let tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement (tweetData){

  return  (
    `<article class=tweet> 
    <header>
      <img class=avatar src=${tweetData.user.avatars.regular}>
      <span class=name>${tweetData.user.name}</span>
      <span class=handle>${tweetData.user.handle}</span>
    </header>
      <article class=tweet-text>${tweetData.content.text}</article>
    <footer>${tweetData.created_at}</footer>
  </article>`)
  
}





//$("<article>").addClass("tweet")




$( document ).ready(function() {

  let $tweet = createTweetElement(tweetData)
    console.log($tweet)
  $(".tweets-container").append($tweet);
});
//need to fix the time/date





