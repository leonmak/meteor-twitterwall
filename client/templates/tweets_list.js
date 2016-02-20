Template.tweetsList.helpers({
	tweets: function() {
		return Tweets.find();
	}
});
