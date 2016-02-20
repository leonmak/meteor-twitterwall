Template.tweetsList.helpers({
	tweets: function() {
		return Tweets.find();
	},
	noSearchTerm: function(){
		return Session.get("noSearchTerm");
	}
});

Template.tweetsList.onCreated(function () {
	// polls loklak tweets as REST API and uses as DDP
	Session.set("noSearchTerm", true);

// 	var self = this;
// 	var apiURLSettings = Meteor.settings.public.apiURL; // localhost:9000/api
// console.log(apiURLSettings);
//
// 	self.autorun(function () {
// 		self.subscribe('REST2DDP', "loklak-tweets",{variables:{
// 			apiURL: apiURLSettings,
// 			queryString: ""
// 		}});
// });
});
