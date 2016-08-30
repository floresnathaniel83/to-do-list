import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $


export var  TaskModel = Backbone.Model.extend({
	        defaults: {
	        	done: false
	        }
	    }) 

export var TaskCollection = Backbone.Collection.extend({
	        model: TaskModel
	    })