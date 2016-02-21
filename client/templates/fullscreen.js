Template.fullscreen.helpers({
  gridList: function(){
    return Tweets.find({}, {sort: { uDate: -1 }});
  }
});

Template.fullscreen.rendered = function(){
  var $grid = $('.grid');
  var $s = $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
    })

  $s.imagesLoaded().progress( function() {
    $s.isotope('layout');
  });


}

Template.fullscreen.onCreated(function () {
  $(".fixed-action-btn").fadeOut();
  $("#nav-mobile").addClass("out");
});
