import React, { Component } from 'react';
import { ToolbarItem } from './toolbaritem.js';
import { ProjectCard } from '../projects/projectCard.jsx';
import { ProjectList } from '../projects/projectList.jsx';
import { ProjectMock } from '../projects/projectMock.js';

class Shell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: [
                new ToolbarItem("Dashboard"),
                new ToolbarItem("Projects"),
                new ToolbarItem("Home"),
            ],
            component: <ProjectList />,
            runParams: {}
        }
    }
    render() {
        return (
            <div className="Shell">
                <div className="Shell-Header-container">
                    <ul className="Shell-Header-Toolbar">
                        {this.state.actions.map(this.renderToolbarItem)}
                    </ul>
                </div>
                <div className="Shell-Component-container">
                    {this.state.component}
                </div>
            </div>

        );
    };
    /**
    * Given a toolbar item, generates a list item for the toolbar
    * @param {ToolbarItem} action Toolbar action item
    * @returns JSX.IntrinsicElements.li
    * @memberOf App
    */
    renderToolbarItem(element, index) {
        return (
            <li className="Header-Toolbar-Item" key={index}>{element.text}</li>
        )
    }
    /**
 * 
 * Adds a new element to the action array
 * @param {ToolbarItem} action - The toolbar action item to add
 * @param {Number} position - the one-indexed position to insert the action at. By default, adds to the end
 * @memberOf App
 */
    addAction(action, position) {
        var actions = this.state.actions
        if (position > this.state.actions.length) {
            throw Error('Header.addAction: position must be less than the number of current toolbar items. Length: ' + actions.length);
        }
        else if (position > 0) {
            actions.splice((position - 1), 0, action);
        }
        else {
            actions.push(action);
        }
        this.setState({ actions: actions });
    }
}

export default Shell;