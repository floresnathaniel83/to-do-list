import React from 'react'

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

	getInitialState: function () {
		return {
				isShowing: false

			}
	},

	_changeTaskList: function (eventObj) {
		this.props.taskModel.set ({
			task: eventObj.target.value


		})
		Backbone.Events.trigger('changeTaskList')

	},
	
	_handleToggleCheck: function () {
		if(this.state.isShowing === true){
      		this.setState({
        		isShowing: false
      		})
	    } else {
	      this.setState({
	        isShowing: true
	      })
	    }   
	  },

	render: function () {

    	var buttonLabel

	    if(this.state.isShowing){
	      buttonLabel = <i className = "fa fa-check"></i>
	   
	    } else {
	      buttonLabel = ""
	  
	    }

		return (
				<div className = "task">

					<span className = "taskToDo">{this.props.taskModel.get('task')}</span>
					<button onChange = {this._changeTaskList} onClick = {this._handleToggleCheck}>{buttonLabel}</button>

				</div>
		)
	}

})



export default TaskList