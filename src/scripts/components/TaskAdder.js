import React from 'react'

var TaskAdder = React.createClass ({
	
	_handleTaskAdd: function (eventObj) {
		
		
		if(eventObj.keyCode === 13){
			this.props._addTaskFromAllTaskView(eventObj.target.value) //>>> _addTask is function that is passed down on props through _addTaskFromAllTaskView
			eventObj.target.value = ' '

		}


	},

	render: function () {
		return (
			
			<input placeholder = "Add task" onKeyDown = {this._handleTaskAdd}  />

		)


	}

})


export default TaskAdder