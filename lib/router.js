Router.configure({
  layoutTemplate:"main",
  // notFoundTemplate:"notFoundTemplate",
  // yieldRegions:{
  //   "header": {to: "header"},
  //   "footer": {to: "footer"}
  // },
  loadingTemplate:"loadingTemplate", // Spinner
  waitOn: function(){
    return [ Meteor.subscribe('tweets'), Meteor.subscribe('suggestions')];
  }
});


Router.route("/", {
  name:"tweetsList"
});

Router.route("/fullscreen", {
  name:"fullscreen"
});
