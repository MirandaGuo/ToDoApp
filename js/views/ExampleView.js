define(function(require){

	var    _             = require('underscore'),
	       $             = require('jquery'),
	      Backbone       = require('backbone'),
	      Template       = require('text!../../../templates/ExampleTemplate.html');

	return Backbone.View.extend({

		id: 'example',

		initialize:function(){

             this.render();
		},

		render: function(){

           var template_fn =  _.template(Template);

            var html = template_fn();
            this.$el.html(html);

		}


	});

});