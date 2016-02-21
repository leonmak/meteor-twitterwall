if (Meteor.isClient) {
  Meteor.subscribe("tweets");

}

Template.main.rendered = function(){
  $(".button-collapse").sideNav();
  
}
