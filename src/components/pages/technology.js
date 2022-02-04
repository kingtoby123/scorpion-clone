import React, { Component } from 'react'
import PurpleHomeBackground from "../../../static/assets/img/purple-homeBackground.jpg"
import imgPurpleHomeBackground from "../../../static/assets/img/img-purple-homeBackground.jpg"
import secondSectionTech from "../../../static/assets/img/second-section-best-tech.png"
import thirdSectionTech from "../../../static/assets/img/third-section-best-tech.png"
import fourthSectionTech from "../../../static/assets/img/fourth-section-best-tech.png"



export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        
        this.routeChange = this.routeChange.bind(this);
        this.routeChangeLeadManagement = this.routeChangeLeadManagement.bind(this);
        this.routeChangeMobileApp = this.routeChangeMobileApp.bind(this);
        this.routeChangeCaseManagement = this.routeChangeCaseManagement.bind(this);
        this.routeChangeReporting = this.routeChangeReporting.bind(this);
        this.routeChangeLocalMarketingPlatform = this.routeChangeLocalMarketingPlatform.bind(this);
        this.routeChangeMarketingTools = this.routeChangeMarketingTools.bind(this);
        this.routeChangeReviewManagement = this.routeChangeReviewManagement.bind(this);
        this.routeChangeWebsiteManagement = this.routeChangeWebsiteManagement.bind(this);


        this.routeChangeChatAndText = this.routeChangeChatAndText.bind(this);
        this.routeChangeEmailMarketing = this.routeChangeEmailMarketing.bind(this);
        this.routeChangeOnlineScheduling = this.routeChangeOnlineScheduling.bind(this);
        this.routeChangeAppointmentReminders = this.routeChangeAppointmentReminders.bind(this);
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

    routeChangeLocalMarketingPlatform(){
        const path = '/LocalMarketingPlatform';
        this.props.history.push(path);
    }
    routeChangeMarketingTools(){
        const path = '/marketingTools';
        this.props.history.push(path);
    }
    routeChangeReviewManagement(){
        const path = '/reviewManagement';
        this.props.history.push(path);
    }
    routeChangeWebsiteManagement(){
        const path = '/websiteManagement';
        this.props.history.push(path);
    }
    routeChangeChatAndText(){
        const path = '/chatAndText';
        this.props.history.push(path);
    }
    routeChangeEmailMarketing(){
        const path = '/emailMarketing';
        this.props.history.push(path);
    }
    routeChangeOnlineScheduling(){
        const path = '/onlineScheduling';
        this.props.history.push(path);
    }
    routeChangeAppointmentReminders(){
        const path = '/appointmentReminders';
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
                    <div className="second-section-tech-box">
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

                <div className="third-section-tech">

                    <div className="third-section-tech-box">



                        <div className="best-technology">
                            <div className="left-side">
                                <img src={thirdSectionTech} alt="best-tech" />
                            </div>

                            <div className="right-side">

                                <h1>
                                    Manage Your Practice With The Right Technology
                                </h1>

                                <p>
                                    Lead management, payments, reporting, and hiring are all crucial pieces of growing and managing a firm. Technology can help carry the load and improve how you manage your business.

                                </p>                                

                                <p>
                                    Scorpion technology helps with all of your firm’s needs. Our team will give you the tools to improve your lead flow, communicate with your clients, and strategize how you spend your marketing dollars. All with real-time reporting and results you can trust.

                                </p>

                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="third-section-popups">

                                <div className="third-section-popups-text">

                                    <p>
                                        Make Running Your Firm Easier
                                    </p>

                                </div>

                                <div className="third-section-popups-button">



                                    <button onClick={this.routeChangeLocalMarketingPlatform}>
                                        <p>
                                            Local Marketing Platform
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeMarketingTools}>
                                        <p>
                                            Marketing Tools
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeReviewManagement }>
                                        <p>
                                            Review Management
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeWebsiteManagement}>
                                        <p>
                                            Website Management
                                        </p>
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="fourth-section-tech">
                    <div className="fourth-section-tech-box">
                        <div className="best-technology">
                            <div className="left-side">
                                <h1>
                                    Save Time With Scorpion Technology
                                </h1>

                                <p>
                                    Growing your practice takes a lot of time. It helps to find the right technology so you can grow more quickly and communicate effectively with your clients.
                                </p>

                                <p>
                                    Scorpion provides you with tools to grow at the speed you want. We connect you with your clients through a beautiful website, a customer relationship management system, and live chat. We also help you find new clients with tools to grow, such as search engine optimization, paid advertising, email marketing, and artificial intelligence.
                                </p>
                            </div>

                            <div className="right-side">
                                <img src={fourthSectionTech} alt="best-tech" />
                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="fourth-section-popups">

                                <div className="fourth-section-popups-text">

                                    <p>
                                        Gain Time Back With The Right Technology
                                    </p>

                                </div>

                                <div className="fourth-section-popups-button">



                                    <button onClick={this.routeChangeChatAndText}>
                                        <p>
                                            Chat & Text
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeEmailMarketing}>
                                        <p>
                                            Email Marketing
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeOnlineScheduling }>
                                        <p>
                                            Online Scheduling
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeAppointmentReminders}>
                                        <p>
                                            Appointment Reminders
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