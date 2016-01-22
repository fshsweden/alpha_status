
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
	layout: 'layoutTemplate'
});

Router.route('/register', {
	name: 'register',
	layout: 'layoutTemplate'
});


/*
Router.route('/list/:_id', {
	layout: 'layoutTemplate',
	name: 'listpage',
    data: function(){
        var currentList = this.params._id;
        return Lists.findOne({ _id: currentList });
    }
});
*/
