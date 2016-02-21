Template.tweetsItem.helpers({
  created_date: function(){
    return moment(this.date).fromNow().toUpperCase();
  }
});
