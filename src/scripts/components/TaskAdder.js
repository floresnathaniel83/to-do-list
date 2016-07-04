import React from 'react'

var TaskAdder = React.createClass ({
	
	_handleTaskAdd: function (eventObj) {
		
		if(eventObj.keyCode === 13){

			this.props._addTaskFromAllTaskView(eventObj.target.value)
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