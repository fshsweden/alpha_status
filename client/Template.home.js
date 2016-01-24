Template.home.helpers({
    'servers': function(){
        console.log("Helper 'servers' called!");
        var tmp = Servers.find({});
        tmp.forEach(function(srv){
            console.log(srv);
        });
        return tmp;
    }
});

Template.home.onRendered(function() {
  var query = Servers.find({});

  var handle = query.observeChanges({
    changed: function (id, fields) {
      //this will highlight the row of the updated favorite, using the id from the Favorites collection

      for (f in fields) {
          $('#' + id + "-" + f).effect('highlight', {}, 1500);
      }
      //$('#' + id).animate({backgroundColor: "#ff0000" });
    }
  });
});


/*
Tracker.autorun(function() {
    console.log("Tracker.autorun");
    Servers.find().observe({
    changed: function(item) {
      console.log("Tracker callback:" + item.server);

      // $(".PriceCollector").fadeIn(300).fadeOut(300);
      $(".PriceCollector").animate({backgroundColor: "#ff0000" });
      $(".PriceCollector").animate({backgroundColor: "#ffffff" });
    }
  });
});
*/