define(function(require){

	var Backbone              =  require('backbone'),
	    bootstrap             =  require('bootstrap'),
	    _                     =  require('underscore'),
        Router                =  require('Router');

        return function(){

        	//setup global Events namespace App.vent.on and App.vent.trigger
        	App.vent = _.extend({}, Backbone.Events);

           	App.router = new Router();
	        App.router.start();

        }
     
});