define(function(require){

	var Backbone              = require('backbone'),
	    ToDoView              = require('views/ToDoView'),
	    ExampleView           = require('views/ExampleView');


	 return Backbone.Router.extend({
	 	routes:{
                'todo': 'todo',
                'example': 'example'
	 	},
        

        start:function(){
	 	    Backbone.history.start();
	    },

	    initialize:function(){

             this.initViews();
	    },

	    initViews:function(){

           App.Views.ToDoView = new ToDoView();
           $('#content').append(App.Views.ToDoView.el);

           App.Views.ExampleView = new ExampleView();
           $('#content').append(App.Views.ExampleView.el);
	    },

        todo:function(){
              App.Views.ToDoView.$el.show();
              App.Views.ExampleView.$el.hide();

        },

        example:function(){
             App.Views.ToDoView.$el.hide();
             App.Views.ExampleView.$el.show();
        }
	 });
	 

});