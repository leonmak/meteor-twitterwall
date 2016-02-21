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

Template.main.events({
	"click .fixed-action-btn": function(event, template){
		$(".fixed-action-btn").fadeOut();
		$("#nav-mobile").addClass("out");
	}
});
