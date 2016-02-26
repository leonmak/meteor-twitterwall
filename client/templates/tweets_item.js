Template.tweetsItem.helpers({
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
        var re = /@(\w+)/g;
        function replacer(match, p1){
            return "<a href=\"https://twitter.com/" + p1 + "\">@" + p1 + "</a>";
        }
        return this.tweet.replace(re, replacer);
    }
});

Template.tweetsItem.rendered = function(){
    $(document).ready(function(){
        $('.materialboxed').materialbox();
        $('.black-text').linkify({
            format: function (value, type) {
                if (type === 'url' && value.length > 50) {
                    value = value.slice(0, 50) + '…';
                }
                return value;
            }
        });
    });
}
