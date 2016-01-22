Meteor.startup(function() {
	if (Servers.find().fetch() == 0) {
		Servers.insert({server:"PriceCollector", connected:false, msgs_in:0, msgs_out:0, last_msg_time:0});
		Servers.insert({server:"StrategyServer", connected:false, msgs_in:0, msgs_out:0, last_msg_time:0});
		Servers.insert({server:"RiskManager", connected:false, msgs_in:0, msgs_out:0, last_msg_time:0});
	}
});
