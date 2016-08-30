import React from 'react'
import Backbone from 'backbone'

var TaskList = React.createClass ({
	
	_getTaskComponent: function(taskColl) {

		 return taskColl.map((model) => <Task key = {model.cid} taskModel = {model} />)

		 
	},

	render: function () {
		
		return (
				<ul id = "taskList">
					{this._getTaskComponent(this.props.taskColl)}

				</ul>

		)
	
	}


})

var Task = React.createClass ({
	_handleDeleteTask: function () {
		this.props.taskModel.destroy()

	},

	_handleToggleCheck: function () {
		console.log(this.props.taskModel.get('done'))
		if(this.props.taskModel.get('done')) {
      		this.props.taskModel.set({
      			done: false
      		})
	    } else {
		  this.props.taskModel.set({
		  	done: true

		  })
	    }
	    Backbone.Events.trigger('changeTaskList')  

	  },

	render: function () {

		if(!this.props.taskModel.get('done')){
			var styleObj = {display : 'none'}

		}

    	var buttonLabel

	    if(this.props.taskModel.get('done')){
	      buttonLabel = <i className = "fa fa-check"></i>
	   
	    } else {
	      buttonLabel = ""
	  
	    }

		return (
				<div className = "task">

					<span className = "taskToDo">{this.props.taskModel.get('task')} </span>
					<button id='check' onChange = {this._changeTaskList} onClick={this._handleToggleCheck}> {buttonLabel} </button>
					<button style = {styleObj} id='delete' onClick={this._handleDeleteTask}>X</button>

				</div>
		)
	}

})



export default TaskList