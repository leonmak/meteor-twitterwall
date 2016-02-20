Meteor.startup(function () {

  var stream = T.stream('statuses/filter', { track: 'mango' })

  stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
    var userName = tweet.user.name;
    var userScreenName = tweet.user.screen_name;
    var userTweet = tweet.text;
    var tweetDate = tweet.created_at;
    var profileImg = tweet.user.profile_image_url;

    console.log(userScreenName + " (" + userName + ")" + " said " + userTweet + " at " + tweetDate);
    console.log("=======================================");
    Tweets.insert({user: userName, userscreen: userScreenName, tweet: userTweet, picture: profileImg, date: tweetDate}, function(error){
      if(error)
      console.log(error);
    });


  }))

});
