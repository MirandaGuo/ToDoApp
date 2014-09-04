//Global application namespaces
var App = {
	Collections: {},
	Models: {},
    Views:{}
}

//Gloabl events namespaces
var E ={}

require.config({
	
	paths:{		
		backbone: '../libs/backbone',
		underscore: '../libs/underscore',
		text: '../libs/text',
		json2: '../libs/json2',
		jquery: '../libs/bower_components/jquery/dist/jquery',
		bootstrap: '../libs/bower_components/bootstrap/dist/js/bootstrap'
	},

	// Dependency tree
	shim: {
		'bootstrap':{
			deps: ['jquery']
		},
		'backbone': {
			deps: ['json2','underscore', 'jquery'],
		    exports: 'Backbone'
		},
		'underscore':{
			exports: '_'
		}
	}

});


require(['App', 'Events', 'backbone'], function(App, Events, backbone){

	  E = new Events();

	  App = new App();

});