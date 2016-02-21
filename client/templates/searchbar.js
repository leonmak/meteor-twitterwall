Template.searchbar.events({
  "keydown input#search": function(event, template){

    if (event.which == 13) {
      // stop search bar from refreshing
      event.preventDefault();

      // update the subscription url of the template
      var search = document.getElementById('search');
      var qString = search.value.replace(/ /g, "+");
      console.log(qString);

      // show the prompt when nothing in search bar
      if(qString.length === 0){
        Session.set("noSearchTerm", true);
      } else {
        Session.set("noSearchTerm", false);
      }

      // remove all docs in Tweets Collection
      Meteor.call("clearTweets");
      Meteor.call("updateTweets", qString);
      //
      // // stop the previous autorun computation
      // if(template.comp) template.comp.stop();
      //
      // // create the new computation
      // template.comp = template.autorun(function () {
      //   template.subscribe('REST2DDP', "loklak-tweets",{variables:{
      //     apiURL: Meteor.settings.public.apiURL,
      //     queryString: qString
      //   }});
      // });

      // reset the form
      document.getElementById('search').value = '';
      search.value = '';
    }


  }
});
