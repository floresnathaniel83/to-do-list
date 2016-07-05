import React from 'react'
import ReactDOM from 'react-dom'

import Backbone from 'backbone'

import Header from './Header.js'
import TaskList from './TaskList.js'
import TaskAdder from './TaskAdder.js'
import Tab from './Tab.js'

var AllTaskView = React.createClass({
	
	getInitialState: function(){ 
        
        return{
            
            taskColl: this.props.taskColl,
            taskViewType: 'all'
        }
    },
    
    componentWillMount: function(){

    	var updater = () => {
    		this.setState({
                
                taskColl: this.state.taskColl
            })

		}
        
        this.props.taskColl.on('update', updater)
		Backbone.Events.on ('changeTaskList', updater)
        Backbone.Events.on('updateTaskView', (taskViewType) => {
			this.setState({

        		taskViewType: taskViewType

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
					<Tab />
					<TaskList taskColl = {this.state.taskColl} />

				</div>

			)

		}

})

export default AllTaskView