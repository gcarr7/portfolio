import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from 'react-bootstrap';

//Import Components
import Individual from '../Tabs/Individual';
import Group from '../Tabs/Group';
import About from '../Tabs/About';

class Home extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
            <Tabs defaultActiveKey="projectsIn" id="uncontrolled-tab-example" style={{'background-color': '#454545', 'color': '#000000'}}>
                <Tab eventKey="projectsIn" title="Individual Projects">
                    <Individual/>
                </Tab>
                <Tab eventKey="projectsGroup" title="Group Projects">
                    <Group/>
                </Tab>
                <Tab eventKey="about" title="About">
                    <About/>
                </Tab>
            </Tabs>
        </div>
    );
  }
}

export default Home;
