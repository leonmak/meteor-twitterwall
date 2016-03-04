Template.modal.rendered = function(){
    $('.modal-trigger').leanModal();
    $('#modal1').openModal();
};

Meteor.setInterval(function(){
    var skipCount = Math.floor(Math.random() * Session.get("tweetLimit"));
    Session.set("skipCount", skipCount);
}, 5 * 1000);


Template.modal.helpers({
    created_date: function(){
        return moment(this.date).fromNow().toUpperCase();
    },
    displayImgs: function(){
        if(this.image){
            return "<img class=\"materialboxed responsive-img\" width=\"auto\" data-caption=\"" +this.tweet +"\" src="+ this.image +">";
        }
    },
    tweetLink: function(){
        // replace twitter handles with links
        var urlRegex = /[^"]((http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?)+/g;
        function urlReplacer (match, p1){
            var shortened = p1.length > 30 ? p1.substring(0, 30)+"..." : p1;
            return "<a href=\"" + p1 + "\">" + shortened + "</a>";
        }

        var re = /@(\w+)/g;
        function replacer(match, p1){
            return "<a href=\"https://twitter.com/" + p1 + "\">@" + p1 + "</a>";
        }
        var str = this.tweet.replace(urlRegex, urlReplacer);
        console.log(str);

        return str.replace(re, replacer);
    }
});