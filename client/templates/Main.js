if (Meteor.isClient) {
  Meteor.subscribe("tweets");

}
Template.main.helpers({
  query: function(){
    return Session.get("query");
  }
});
Template.main.rendered = function(){
  $(".button-collapse").sideNav();

}
