Template.fullscreen.helpers({
  gridList: function(){
    return Tweets.find({}, {sort: { uDate: -1 }, limit: Session.get('tweetLimit')});
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


Template.gridItem.helpers({
    tweetLink: function(){
        // replace twitter handles with links
        var re = /@(\w+)/g;
        function replacer(match, p1){
            return "<a href=\"https://twitter.com/" + p1 + "\">@" + p1 + "</a>";
        }
        return this.tweet.replace(re, replacer);
    },
    showTweet: function(){
        return Session.get("showTweet") === this._id;
    }
})

Template.gridItem.rendered = function(){

        console.log($('.black-text'));

        $('.black-text').linkify({
            format: function (value, type) {
                if (type === 'url' && value.length > 50) {
                    value = value.slice(0, 50) + '…';
                }
                return value;
            }
        });

}

Template.gridItem.events({
    "mouseenter .wallPic": function(event, template){
        Session.set("showTweet", this._id);
        console.log(this._id);

        // console.log($(event.target.id));
        // $("#" + event.target.id).removeClass("hidden");
    },
    "mouseleave .wallPic": function(event, template){
        // Session.set("showTweet", "");
        // $("#"+event.target.id).addClass("hidden");
    }
});
