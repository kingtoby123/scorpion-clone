import React, { Component } from 'react'
import purpleHomeBackground from "../../../static/assets/img/purple-homeBackground.jpg"
import imgPurpleHomeBackground from "../../../static/assets/img/img-purple-homeBackground.jpg"

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="home">

                <div className="get-started-img">
                    <img src={purpleHomeBackground} alt="purple-background" />
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

                        <button>
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
        )
    }
}