import React, { Component } from 'react'

import getStartedBackground from "../../../static/assets/get-started/get-started-background.jpg"


export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="footer-wrapper">

                <div className="footer-wrapper-box">

                    
                    
                    <div className="footer-heading">

                        <h1>
                            SCORPION
                        </h1>

                    </div>

                    <div className="footer-middle-section">

                        <div className="footer-middle-section-button">
                            <button>
                                Get Started
                            </button>

                        </div>


                        <div className="nav-link">
                            Our Industries
                        </div>

                        <div className="nav-link">
                            Technology
                        </div>

                        <div className="nav-link">
                            Marketing
                        </div>

                        <div className="nav-link">
                            Firms We Help
                        </div>
                        
                        <div className="nav-link">
                            Resources 
                        </div>

                        <div className="nav-link">
                            Who We Help
                        </div>

                        <div className="nav-link">
                            Get Started
                        </div>

                        <div className="nav-link">
                            facebook
                        </div>

                        <div className="nav-link">
                            Twitter
                        </div>

                        <div className="nav-link">
                            Youtube
                        </div>

                        <div className="nav-link">
                            Linkend
                        </div>

                        <div className="nav-link">
                            Instagram
                        </div>

                        <div className="nav-link">
                            yelp
                        </div>

                        <div className="nav-link">
                            Better Buissness Burrow
                        </div>

                        

                    </div>

                    <div className="footer-bottom-section-wrapper">

                        <div className="footer-bottom-section">

                            <div className="left-side">

                                <div className="nav-link">
                                    Search Our Site
                                </div>

                                <div className="nav-link">
                                    Site Map
                                </div>

                                <div className="nav-link">
                                    Privacy Policy
                                </div>

                                <div className="nav-link">
                                    Accessibility Statement
                                </div>

                            </div>

                            <div className="right-side">

                                <div className="nav-link">
                                    Scorpion © 2022 All Rights Reserved.
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </div>
                
        )
    }
}