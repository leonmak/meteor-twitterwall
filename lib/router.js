Router.configure({
  layoutTemplate:"main",
  // notFoundTemplate:"notFoundTemplate",
  // yieldRegions:{
  //   "header": {to: "header"},
  //   "footer": {to: "footer"}
  // },
  loadingTemplate:"loadingTemplate", // Spinner
});


Router.route("/", {
  name:"tweetsList",
  waitOn: function(){
    return [ Meteor.subscribe('tweets')];
  }
});
