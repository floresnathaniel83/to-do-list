import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

import AllTaskView from './components/AllTaskView.js'
import {TaskModel, TaskCollection} from './models/taskModel.js'



var ListRouter = Backbone.Router.extend({
	
	routes: {
		'*default' : 'showAllTaskView',


	},

	showAllTaskView: function () {
		
		ReactDOM.render(<AllTaskView taskColl = {new TaskCollection()} />, document.querySelector('.container'))

	},	


	initialize: function () {
	
		Backbone.history.start()


		}


})

new ListRouter()