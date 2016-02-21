Template.sidebar.rendered = function () {
  $(".button-collapse").sideNav();
};


Template.suggestionList.events({
  "click .suggestion": function(event, template){
    console.log(event);
    var clickId = event.currentTarget.id;
    Session.setPersistent("query", clickId);

    // remove all docs in Tweets Collection
    Meteor.call("clearTweets");
    Meteor.call("updateTweets", clickId.replace(/ /g, "+"));

  }
});

Template.suggestionList.helpers({
  suggestList: function(){
    return Suggestions.find();
  }
});

Template.suggestionList.onCreated(function(){

  var self = this;
  	var apiURLSettings = Meteor.settings.public.apiURL; // localhost:9000/api
  console.log(apiURLSettings);

  	self.autorun(function () {
  		self.subscribe('REST2DDP', "loklak-suggest",{variables:{
  			apiURL: apiURLSettings
  		}});
  });

})
