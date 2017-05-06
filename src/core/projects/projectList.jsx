import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { GetProjects } from './projectMock.js';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        // initialize projects
        this.state = {
            projects: [],
            didLoad: false
        }
    }
    render() {
        if (this.state.didLoad) {
            return (<div className="Project-Card-container">{this.state.projects.map(this.renderProjectCard)}</div>)
        }
        else {
            return (<div className="Project-Card-container"><p>Projects are loading. Please wait.</p></div>);
        }
    }
    /**
     * Initiates a request to load components
     * 
     * 
     * @memberOf ProjectList
     */
    componentDidMount() {
        GetProjects().then((projects) => {
            this.setState({
                didLoad: true,
                projects: projects
            });
        });
    }
    /**
     * 
     * 
     * @param {ProjectCard} element - ProjectCard from this.state.projects
     * @param {Integer} index - the index of the element in the array
     * @returns 
     * 
     * @memberOf ProjectList
     */
    renderProjectCard(element, index) {
        return element.render();
    }
}

export { ProjectList };