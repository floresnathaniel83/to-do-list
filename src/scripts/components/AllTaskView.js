import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.js'
import TaskList from './TaskList.js'
import TaskAdder from './TaskAdder.js'

var AllTaskView = React.createClass({
	
	getInitialState: function(){ 
        
        return{
            
            taskColl: this.props.taskColl
        }
    },
    
    componentWillMount: function(){
        
        this.props.taskColl.on('update', () => { 
            
            this.setState({
                
                taskColl: this.state.taskColl
            })
        })
    },


	_addTask: function (taskToDo) {

		this.props.taskColl.add({
			
			task: taskToDo
		}) 

	},

	render: function () {
		
		return (
				
				<div id = "AllTaskViewContainer">
					<Header />
					<TaskAdder _addTaskFromAllTaskView = {this._addTask}  /> 
					<TaskList taskColl = {this.state.taskColl} />
				</div>

			)

		}

})

export default AllTaskView