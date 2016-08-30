import React from 'react'
import ReactDOM from 'react-dom'

import $ from 'jquery'
import Backbone from 'backbone'

Backbone.$ = $

import AllTaskView from './components/AllTaskView.js'
import {TaskModel, TaskCollection} from './models/taskModel.js'



var ListRouter = Backbone.Router.extend({
	
	routes: {
		'task/all' : 'showAllTaskView',
		'task/done' : 'showDoneTaskView',
		'task/undone' : 'showUndoneTaskView',
		'*default' : 'showAllTaskView',


	},

	showAllTaskView: function () {
		
		ReactDOM.render(<AllTaskView taskColl = {new TaskCollection()} />, document.querySelector('.container'))

	},	

	showDoneTaskView: function () {

		ReactDOM.render(<DoneTaskView />, document.querySelector('.container'))
	},

	showUndoneTaskView: function () {

		ReactDOM.render(<UndoneTaskView />, document.querySelector('.container'))

	},


	initialize: function () {
	
		Backbone.history.start()


		}


})

new ListRouter()