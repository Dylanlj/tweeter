/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];




function renderTweets (tweets){
  tweets.forEach(function(tweet){
    let hey = createTweetElement(tweet)
    $( document ).ready(function() {
      $(".tweets-container").append(hey);
    })
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


renderTweets(data);

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





