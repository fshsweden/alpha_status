Template.home.helpers({
    'servers': function(){
        console.log("Helper called!");
        var tmp = Servers.find({});
        tmp.forEach(function(srv){
            console.log(srv);
        });
        return tmp;
    }
});

