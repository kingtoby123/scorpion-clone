import React, { Component } from 'react'
import PurpleHomeBackground from "../../../static/assets/tech-section/purple-homeBackground.jpg"
import imgPurpleHomeBackground from "../../../static/assets/tech-section/img-purple-homeBackground.jpg"
import secondSectionTech from "../../../static/assets/tech-section/second-section-best-tech.png"
import thirdSectionTech from "../../../static/assets/tech-section/third-section-best-tech.png"
import fourthSectionTech from "../../../static/assets/tech-section/fourth-section-best-tech.png"
import fifthSectionTech from "../../../static/assets/tech-section/fifth-section-best-tech.png"
import sixthSectionTech from "../../../static/assets/tech-section/sixth-tech-section.jpg"
import seventhSectionTech from "../../../static/assets/tech-section/seventh-tech-section.png"
import seventhSectionTechTwo from "../../../static/assets/tech-section/seventh-tech-section-two.png"
import seventhSectionTechThree from "../../../static/assets/tech-section/seventh-tech-section-three.png"
import seventhSectionTechFour from "../../../static/assets/tech-section/seventh-tech-section-four.png"
import seventhSectionTechFive from "../../../static/assets/tech-section/seventh-tech-section-five.png"
import seventhSectionTechSix from "../../../static/assets/tech-section/seventh-tech-section-six.png"
import seventhSectionTechSeven from "../../../static/assets/tech-section/seventh-tech-section-seven.png"
import seventhSectionTechEight from "../../../static/assets/tech-section/seventh-tech-section-eight.png"
import seventhSectionTechNine from "../../../static/assets/tech-section/seventh-tech-section-nine.png"
import seventhSectionTechTwelve from "../../../static/assets/tech-section/seventh-tech-section-twelve.png"
import seventhSectionTechThirteen from "../../../static/assets/tech-section/seventh-tech-section-thirteen.png"
import seventhSectionTechFourteen from "../../../static/assets/tech-section/seventh-tech-section-fourteen.png"
import seventhSectionTechFifteen from "../../../static/assets/tech-section/seventh-tech-section-fifteen.png"
import seventhSectionTechSixteen from "../../../static/assets/tech-section/seventh-tech-section-sixteen.png"
import seventhSectionTechSeventeen from "../../../static/assets/tech-section/seventh-tech-section-seventeen.png"
import seventhSectionTechEighteen from "../../../static/assets/tech-section/seventh-tech-section-eighteen.png"
import seventhSectionTechnineteen from "../../../static/assets/tech-section/seventh-tech-section-nineteen.png"
import eigthSectionLeftSide from "../../../static/assets/tech-section/eigth-section-left-side.png"
import eigthSectionRightSide from "../../../static/assets/tech-section/eigth-section-right-side.png"



export default class Marketing extends Component {
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
        this.routeChangeAdvertising = this.routeChangeAdvertising.bind(this);
        this.routeChangeMarketInsight = this.routeChangeMarketInsight.bind(this);
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
    routeChangeAdvertising(){
        const path = '/advertising';
        this.props.history.push(path);
    }

    routeChangeMarketInsight(){
        const path = '/marketInsight';
        this.props.history.push(path);
    }


    routeChangeAppointmentReminders(){
        const path = '/appointmentReminders';
        this.props.history.push(path);
    }
    routeChangeAppointmentReminders(){
        const path = '/appointmentReminders';
        this.props.history.push(path);
    }



    render() {
        return (
            <div className="marketing-wrapper">
                
                <div className="first-section-marketing">


                    <div className="get-started-img">
                        <img src={PurpleHomeBackground} alt="purple-background" />
                    </div>

                    <div className="marketing-purple-background-marketing">

                        <div className="marketing">
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


                <div className="second-section-marketing">
                    <div className="second-section-marketing-box">
                        <div className="best-marketing">
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

                <div className="third-section-marketing">

                    <div className="third-section-marketing-box">



                        <div className="best-marketing">
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

                <div className="fourth-section-marketing">
                    <div className="fourth-section-marketing-box">
                        <div className="best-marketing">
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

                <div className="fifth-section-marketing">

                    <div className="fifth-section-marketing-box">



                        <div className="best-marketing">
                            <div className="left-side">
                                <img src={fifthSectionTech} alt="best-tech" />
                            </div>

                            <div className="right-side">

                                <h1>
                                    Artificial Intelligence For Better Decision Making
                                </h1>

                                <p>
                                    The days of making decisions with guesswork are over.

                                </p>                                

                                <p>
                                    Grow your legal practice with artificial intelligence that helps you have smarter advertising, understand your clients better, and reduces the manual work you have to do.

                                </p>

                            </div>
                        </div>

                        <div className="bottom-section">
                            <div className="fifth-section-popups">

                                <div className="fifth-section-popups-text">

                                    <p>
                                        Let AI Boost Your Growth
                                    </p>

                                </div>

                                <div className="fifth-section-popups-button">



                                    <button onClick={this.routeChangeAdvertising}>
                                        <p>
                                            Advertising
                                        </p>
                                    </button>

                                    <button onClick={this.routeChangeMarketInsight}>
                                        <p>
                                            Marketing Insight
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

                <div className="sixth-marketing-section">
                    <div className="sixth-marketing-section-box">
                        <div className="sixth-marketing-section-first-text">
                            <p>
                                “Scorpion means an extension of my family. Without them, I wouldn’t be opening my fifth location. I wouldn’t be where I’m at with the ability to take more time off and not worry about whether we have enough calls coming in, or enough leads."
                            </p>
                        </div>

                        <div className="sixth-marketing-section-picture">
                            <img src={sixthSectionTech} alt="sixth-section-tech" />
                        </div>

                        <div className="sixth-marketing-section-second-text">
                            <p>
                                Joy Owenby
                            </p>
                        </div>

                        <div className="sixth-marketing-section-third-text">
                            <p>
                                Owner & Managing Member, Owenby Law, P.A.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="seventh-marketing-section">

                    <div className="seventh-marketing-section-box">
                        <div className="seventh-marketing-section-box-text">
                            <div className="trusted">
                            <p>
                                Trusted By
                            </p>

                            </div>

                            <div className="thousands">
                            <p>
                                Thousands of Law Firms

                            </p>

                            </div>

                            <div className="amazing">

                            <p>
                                Amazing things happen when your marketing works.
                            </p>
                            </div>



                        </div>
                    </div>

                    <div className="seventh-image-tech">
                        <img src={seventhSectionTech} alt="sevenSectionTech" />
                    </div>

                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechTwo} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechThree} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechFour} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechFive} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechSix} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechSeven} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechEight} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechNine} alt="sevenSectionTech" />
                    </div>
                   
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechTwelve} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechThirteen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechFourteen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechFifteen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechSixteen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechSeventeen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechEighteen} alt="sevenSectionTech" />
                    </div>
                    <div className="seventh-image-tech">
                        <img src={seventhSectionTechnineteen} alt="sevenSectionTech" />
                    </div>
                </div>

                <div className="eigth-section">
                    
                    <div className="eigth-section-box-top">

                        <p>
                            Make The Right Choice To Power Your Growth
                        </p>

                    </div>

                    <div className="eigth-section-box">

                        <div className="eigth-section-box-left">

                            <h1>
                                Scorpion Platform
                            </h1>

                            <p>
                                 The technology and insights that you need to keep your business moving up.
                            </p>

                            <button>
                                Get A Demo
                            </button>

                            <img src={eigthSectionLeftSide} alt="eighthSectionLeftSide" />


                        </div>

                        <div className="eigth-section-box-right">
                            <h1>
                                Marketing Services 
                            </h1>

                            <p>
                                Dedicated experts who are focused on getting you results. 

                            </p>

                            <button>
                                Schedule a Consultation
                            </button>


                            <img src={eigthSectionRightSide} alt="eighthSectionRightSide" />

                        </div>

                    </div>
                </div>

                
                
            </div>
        )
    }
}