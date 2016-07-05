import React from 'react'
import Backbone from 'backbone'

const Tab = React.createClass ({

	_updateList: function (eventObj) {

		var taskViewType = eventObj.target.textContent

		if (eventObj.target.tagName === 'A') {
            var taskViewType = eventObj.target.textContent
            Backbone.Events.trigger('updateTaskView',taskViewType)
        }
    },


	render: function () {
		return (
			<div onClick = {this._updateList} className = 'tabContainer'>
				
				<a href = '#task/all'>all</a>
				<a href = '#task/done'>done</a>
				<a href = '#task/undone'>undone</a>

			</div>


			)


	}

})

export default Tab