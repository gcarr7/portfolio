import React, { Component } from "react";
import { Link } from "react-router-dom";

//Importing images
import Colorado from '../../assets/img/co_flag.png';
import GT from '../../assets/img/gt_logo.png';
import USA from '../../assets/img/american_flag.png';

class Individual extends Component {
  render() {
    return (
        <div className="jumbotron d-flex align-items-center min-vh-100" style={{ 'background-color': 'white' }}>
            <div className="container">
                <div className="row align-items-center h-100">
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <Link to='/incomplete_page'style={{ color: '#000000' }}>
                            <i className="fab fa-js-square fa-10x"></i>
                            <p>Javascript & HTML</p>
                        </Link>
                    </div>
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <Link to='/incomplete_page'style={{ color: '#000000' }}>
                            <i className="fab fa-react fa-10x"></i>
                            <p>React</p>
                        </Link>
                    </div>
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <Link to='/incomplete_page'style={{ color: '#000000' }}>
                            <i className="fas fa-laptop-code fa-10x"></i>
                            <p>Javascript, D3, & HTML</p>
                        </Link>
                    </div>
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <Link to='/incomplete_page'style={{ color: '#000000' }}>
                            <i className="fas fa-brain fa-10x"></i>
                            <p>Machine Learning</p>
                        </Link>
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
