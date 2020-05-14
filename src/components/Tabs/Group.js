import React, { Component } from "react";
import { Link } from "react-router-dom";

//Importing images
import Colorado from '../../assets/img/co_flag.png';
import GT from '../../assets/img/gt_logo.png';
import USA from '../../assets/img/american_flag.png';

class Group extends Component {
  render() {
    return (
        <div className="jumbotron d-flex align-items-center min-vh-100" style={{ 'background-color': 'white' }}>
            <div className="container">
                <div className="row align-items-center h-100">
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <a href='https://gcarr7.github.io/brainy-sight-words-web/' target="_blank" style={{ color: '#000000' }}>
                            <i className="fas fa-user-graduate fa-10x"></i>
                            <p>Junior Design</p>
                        </a>
                    </div>
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <a href='http://jeremy.schonfeld.net/CS4460-Team-Search-Engine/' target="_blank" style={{ color: '#000000' }}>
                            <i className="fas fa-signal fa-10x"></i>
                            <p>Data Visualization</p>
                        </a>
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

export default Group;
