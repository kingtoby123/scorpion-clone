import React, { Component } from 'react'

import getStarted from "../../../static/assets/get-started/get-started.png"
import getStartedBackground from "../../../static/assets/get-started/get-started-background.jpg"


export default class GetStarted extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    

    render() {
        return (

            <div className="get-started-wrapper">

                <div className="image-get-started">
                    <img src={getStartedBackground} alt="getStartedBackground" />
                </div>
                <div className="get-started-box">

                    <div className="get-started-heading">

                        <div className="get-started-heading-top">
                            <p>
                                You don’t have time to waste on marketing.
                            </p>

                            <p>
                                See What Scorpion Can Do For You.
                            </p>
                        </div>

                    </div>

                    <div className="get-started-bottom-section-wrapper">


                        <div className="get-started-bottom-section">

                            <div className="get-started-bottom-section-box">


                                <div className="left-side">

                                    <div className="input-boxes">
                                        <input type="text" />                                
                                    </div>

                                    <div className="input-boxes">
                                        <input type="text" />                                
                                    </div>

                                    <div className="input-boxes">
                                        <input type="text" />                                
                                    </div>

                                    <div className="input-boxes">
                                        <input type="text" />                                
                                    </div>

                                    <div className="input-boxes">
                                        <input type="text" />                                
                                    </div>

                                    <div className="policy-notice">
                                        <p>
                                        
                                            By submitting your information you agree that Scorpion may process your information in accordance with its <a href="/privacyPolicy">privacy policy</a>  
                                        </p>

                                    </div>
                                    
                                    <div className="button-get-started">
                                        <button>
                                            Get Started
                                        </button>
                                    </div>
                                    
                                </div>

                                <div className="right-side">

                                    <div className="right-side-box">


                                        <div className="right-side-heading">

                                            <p>
                                                Let us know who you are and our team will be in touch shortly on how we can help your business grow with best in class technology and marketing services.
                                            </p>

                                            
                                        </div>

                                        <div className="right-side-bottom-section">

                                            <div className="right-side-bottom-left">


                                                <div className="location">


                                                    <div className="details">

                                                        <p>
                                                            (866) 344-8852
                                                        </p>

                                                        <p>

                                                            Headquarters
                                                            3301 N Thanksgiving Way
                                                            Suite 500
                                                            Lehi, UT 84043
                                                        
                                                        </p>

                                                        <a href="https://www.google.com/maps/place/3301+N+Thanksgiving+Way,+Lehi,+UT+84043/@40.4292,-111.8933137,17z/data=!3m1!4b1!4m5!3m4!1s0x87528025c2833cd9:0x7d4662f7e8bb8354!8m2!3d40.4292!4d-111.891125?hl=en" >Map + Direction</a>

                                                    </div>


                                                </div>

                                            </div>

                                            <div className="right-side-bottom-right">

                                                <img src={getStarted} alt="getStarted" />

                                            </div>

                                        </div>
                                    </div>



                                </div>
                            </div>

                            


                        </div>

                    </div>
                
                </div>
            </div>

            
           
        )
    }
}