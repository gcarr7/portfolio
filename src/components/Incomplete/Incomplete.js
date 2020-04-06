import React, { Component } from "react";
import { Link } from "react-router-dom";

class Incomplete extends Component {
  render() {
    return (
        <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="row align-items-center h-100">
                    <div className="col text-center">
                        <h1>My apologies this project is not complete yet. Please check back later!</h1>
                    </div>
                </div>
                <div className="row align-items-center h-100">
                    <div className="col"></div>
                    <div className="col text-center shadow p-3 mb-5 bg-white rounded mx-1">
                        <Link to='/'style={{ color: '#000000' }}>
                            <h1>Return to Home</h1>
                        </Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Incomplete;
