import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $


export var  TaskModel = Backbone.Model.extend({
	        
	    }) 

export var TaskCollection = Backbone.Collection.extend({
	        model: TaskModel
	    })