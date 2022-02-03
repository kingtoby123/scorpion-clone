import React, { Component } from 'react'
import PurpleHomeBackground from "../../../static/assets/img/purple-homeBackground.jpg"
import imgPurpleHomeBackground from "../../../static/assets/img/img-purple-homeBackground.jpg"
import secondSectionTech from "../../../static/assets/img/second-section-best-tech.png"



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        
        this.routeChange = this.routeChange.bind(this);
        this.routeChangeLeadManagement = this.routeChangeLeadManagement.bind(this);
        this.routeChangeMobileApp = this.routeChangeMobileApp.bind(this);
        this.routeChangeCaseManagement = this.routeChangeCaseManagement.bind(this);
        this.routeChangeReporting = this.routeChangeReporting.bind(this);
    }


    routeChange() {
        const path = '/get-started';
        this.props.history.push(path);
      }

    routeChangeLeadManagement(){
        const path = '/marketing';
        this.props.history.push(path);
    }
    routeChangeMobileApp(){
        const path = '/mobileApp';
        this.props.history.push(path);
    }
    routeChangeCaseManagement(){
        const path = '/casemanagement';
        this.props.history.push(path);
    }
    routeChangeReporting(){
        const path = '/reporting';
        this.props.history.push(path);
    }



    render() {
        return (
            <div className="home">
                
                <div className="first-section-tech">


                    <div className="get-started-img">
                        <img src={PurpleHomeBackground} alt="purple-background" />
                    </div>

                    <div className="home-purple-background-text">

                        <div className="tech">
                            <h2>
                                Technology For Your Business
                            </h2>

                        </div>

                        <div className="advantage">

                            <p>
                                Take advantage of powerful technology to help your business grow. From marketing tools to AI-powered advertising, you've got it all with Scorpion.
                            </p>

                        </div>

                        <div className="button">

                        <button  onClick={this.routeChange} className="btn" type="submit">
                                Get Started
                            </button>

                        </div>



                       <div className="learn-more">
                           LEARN MORE
                       </div>

                    </div>


                    <div className="image-on-background">

                        <img src={imgPurpleHomeBackground} alt="img" />
                    </div>
                </div>


                <div className="second-section-tech">

                    <div className="box">



                        <div className="best-technology">
                            <div className="left-side">
                                <h1>
                                    The Best Technology To Grow Your Practice
                                </h1>

                                <p>
                                    Scorpion provides the best technology to save you time and grow your legal practice.
                                </p>

                                <p>
                                    Our technology helps you connect better with your clients, find new customers, hire the right people, and improve your lead flow with results you can trust.
                                </p>
                            </div>

                            <div className="right-side">
                                <img src={secondSectionTech} alt="best-tech" />
                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="second-section-popups">

                                <div className="second-section-popups-text">

                                    <p>
                                        Take Advantage of Scorpion Technology
                                    </p>

                                </div>

                                <div className="second-section-popups-button">



                                    <button onClick={this.routeChangeLeadManagement}>
                                        <p>
                                            Lead Management
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeMobileApp}>
                                        <p>
                                            Mobile App
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeReporting }>
                                        <p>
                                            Reporting
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeCaseManagement}>
                                        <p>
                                            Case Management
                                        </p>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="second-section-tech">

                    <div className="box">



                        <div className="best-technology">
                            <div className="left-side">
                                <h1>
                                    The Best Technology To Grow Your Practice
                                </h1>

                                <p>
                                    Scorpion provides the best technology to save you time and grow your legal practice.
                                </p>

                                <p>
                                    Our technology helps you connect better with your clients, find new customers, hire the right people, and improve your lead flow with results you can trust.
                                </p>
                            </div>

                            <div className="right-side">
                                <img src={secondSectionTech} alt="best-tech" />
                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="second-section-popups">

                                <div className="second-section-popups-text">

                                    <p>
                                        Take Advantage of Scorpion Technology
                                    </p>

                                </div>

                                <div className="second-section-popups-button">



                                    <button onClick={this.routeChangeLeadManagement}>
                                        <p>
                                            Lead Management
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeMobileApp}>
                                        <p>
                                            Mobile App
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeReporting }>
                                        <p>
                                            Reporting
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeCaseManagement}>
                                        <p>
                                            Case Management
                                        </p>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                
            </div>
        )
    }
}