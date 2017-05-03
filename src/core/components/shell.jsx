import React from 'react';
import { ToolbarItem } from './toolbaritem.js'
import { ProjectCard } from '../projects/projectCard.jsx'

class Shell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: [
                new ToolbarItem("Dashboard"),
                new ToolbarItem("Projects"),
                new ToolbarItem("Home"),
            ],
            component: new ProjectCard({
                title: 'Create legend.todo',
                description: "I'm going to create a project management app that feels like an rpg. After all " +
                "what are our larger projects but quests on our life adventure? Quests are made up of smaller missions " +
                "that represent discrete tasks that must be completed in order to complete the request. For example, " +
                "one mission to complete on the way to completing this project might be to design and create a login and " +
                "authentication screen. You can log time against missions, and optionally enter progress notes discussing " +
                "how things are going, what's working, what's not working. Of course, all these things award exp and gold. " +
                "Exp is a way to help quantify your work towards your goals. Hopefully it will serve as a motivator to make progress." +
                "Gold can be used to buy rewards, and serves as a way of allowing you to treat yourself.",
                dueDate: "04/17/18",
                timeSpent: "20.5",
                timeEstimate: "100.0",
                expReward: "50,000",
                goldReward: "2,000",
                imagePath: '../projects/Toco_toucan_closeup300x300.png',
            }),
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
                    {this.state.component.render(this.state.runParams)}
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