import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Document, Page } from 'react-pdf';

//Importing images
import Colorado from '../../assets/img/co_flag.png';
import GT from '../../assets/img/gt_logo.png';
import USA from '../../assets/img/american_flag.png';
import PDF from '../../assets/documents/Gage.Carr.Resume(1_17_20).pdf'

class About extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {

    const { pageNumber, numPages } = this.state;

    return (
        <div className="jumbotron d-flex align-items-center min-vh-100" style={{ 'background-color': 'white' }}>
            <div className="container">
                <div className="row align-items-center h-100">
                    <div className="col text-center">
                        <h1>About Stuff</h1>
                        <Document file={PDF} onLoadSuccess={this.onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>Page {pageNumber} of {numPages}</p>
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

export default About;
