import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

//Importing images
import Colorado from '../../assets/img/co_flag.png';
import GT from '../../assets/img/gt_logo.png';
import USA from '../../assets/img/american_flag.png';

class Individual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            javaPopover: false,
            reactPopover: false,
            htmlPopover: false,
            mlPopover: false
        };
    }

    javaToggle = () => this.setState({javaPopover: !this.state.javaPopover});
    reactToggle = () => this.setState({reactPopover: !this.state.reactPopover});
    htmlToggle = () => this.setState({htmlPopover: !this.state.htmlPopover});
    mlToggle = () => this.setState({mlPopover: !this.state.mlPopover});


    render() {
        return (
            <div className="jumbotron d-flex align-items-center min-vh-100" style={{ 'background-color': 'white' }}>
                <div className="container">
                    <div className="row align-items-center h-100">
                        <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                            <div className="row">
                                <div className="col text-center">
                                    <Link to='/incomplete_page'style={{ color: '#000000' }}>
                                        <i className="fab fa-js-square fa-10x"></i>
                                        <p>Javascript & HTML</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                  <Link style={{ color: '#000000' }}><i className="fas fa-info fa-sm" id="Popover1"></i></Link>
                                  <Popover placement="bottom" isOpen={this.state.javaPopover} target="Popover1" toggle={this.javaToggle}>
                                    <PopoverHeader>Javascript</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                  </Popover>
                                </div>
                            </div>
                        </div>
                        <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                            <div className="row">
                                <div className="col text-center">
                                    <Link to='/incomplete_page'style={{ color: '#000000' }}>
                                        <i className="fab fa-react fa-10x"></i>
                                        <p>React</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                  <Link style={{ color: '#000000' }}><i className="fas fa-info fa-sm" id="Popover2"></i></Link>
                                  <Popover placement="bottom" isOpen={this.state.reactPopover} target="Popover2" toggle={this.reactToggle}>
                                    <PopoverHeader>React</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                  </Popover>
                                </div>
                            </div>
                        </div>
                        <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                            <div className="row">
                                <div className="col text-center">
                                    <Link to='/incomplete_page'style={{ color: '#000000' }}>
                                        <i className="fas fa-laptop-code fa-10x"></i>
                                        <p>Javascript, D3, & HTML</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                  <Link style={{ color: '#000000' }}><i className="fas fa-info fa-sm" id="Popover3"></i></Link>
                                  <Popover placement="bottom" isOpen={this.state.htmlPopover} target="Popover3" toggle={this.htmlToggle}>
                                    <PopoverHeader>HTML</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                  </Popover>
                                </div>
                            </div>
                        </div>
                        <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                            <div className="row">
                                <div className="col text-center">
                                    <Link to='/incomplete_page'style={{ color: '#000000' }}>
                                        <i className="fas fa-brain fa-10x"></i>
                                        <p>Machine Learning</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-left">
                                  <Link style={{ color: '#000000' }}><i className="fas fa-info fa-sm" id="Popover4"></i></Link>
                                  <Popover placement="bottom" isOpen={this.state.mlPopover} target="Popover4" toggle={this.mlToggle}>
                                    <PopoverHeader>ML</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                                  </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center h-100">
                        <div className="col"></div>
                        <div className="col text-center">
                            <img src={Colorado} style={{ width: "40%", height: "auto" }} />
                        </div>
                        <div className="col text-center">
                            <img src={GT} style={{ width: "60%", height: "auto" }} />
                        </div>
                        <div className="col text-center">
                            <img src={USA} style={{ width: "40%", height: "auto" }} />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Individual;
