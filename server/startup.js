Meteor.startup(function () {

  // Meteor.call('getLoklakTweets', "friday", Meteor.settings.public.apiURL);

});

// inserting documents are unused for now,
// since using REST2DDP and loklak for updating collections

Meteor.methods({
  clearTweets:function(){
    Tweets.remove({});
  },
  // remove documents from Tweet Collection and inserts from loklak api
  getLoklakTweets: function(query, apiURL){
    var loklakURL = apiURL + "/search.json?timezoneOffset=-480&q=" + query;
    HTTP.call( 'GET', loklakURL, {}, function( error, response ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( response );
        Tweets.remove({});

        var statusArr = response.data.statuses;
        statusArr.forEach(function(tweet){
          console.log(tweet);
          var userScreenName = tweet.user.name;
          var userName = tweet.user.screen_name;
          var userTweet = tweet.text;
          var tweetDate = tweet.created_at;
          var profileImg = tweet.user.profile_image_url_https;
          var imgArr = tweet.images;
          Tweets.insert({user: userName, userscreen: userScreenName, tweet: userTweet, picture: profileImg, date: tweetDate, images: imgArr},
            function(error){
                if(error)
                console.log(error);
          });
        })
      }
    })

  },

  // get tweets using meteor package, requires keys, set in custom_settings.json
  getTwitterTweets:function(query){
    var stream = T.stream('statuses/filter', { track: query })

    stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
      var userScreenName = tweet.user.name;
      var userName = tweet.user.screen_name;
      var userTweet = tweet.text;
      var tweetDate = tweet.created_at;
      var profileImg = tweet.user.profile_image_url;
      var imgArr = tweet.images;

      console.log(userScreenName + " (" + userName + ")" + " said " + userTweet + " at " + tweetDate);
      console.log("=======================================");
      Tweets.insert({user: userName, userscreen: userScreenName, tweet: userTweet, picture: profileImg, date: tweetDate, images: imgArr}, function(error){
        if(error)
        console.log(error);
      });
    }))

  }


});
