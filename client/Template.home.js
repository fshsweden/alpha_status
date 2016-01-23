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

Template.server_item.rendered = function() {
    var instance = this;
    console.log("rendered:" + instance);
};

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
