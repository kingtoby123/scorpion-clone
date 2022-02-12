import React, { Component } from 'react'

import { NavLink } from "react-router-dom";


export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (

              <div className="navigation-container">

                <div className="left-side">

                  <div className="nav-link-wrapper">
                    <NavLink to="/" activeClassName="nav-link-active">
                      <h2>
                        SCORPION
                      </h2>
                    </NavLink>
                  </div>

                </div>
                  

                <div className="right-side">

                  <div className="nav-link-wrapper">
                    <NavLink to="/technology" activeClassName="nav-link-active">
                        Technology
                    </NavLink>
                  </div>

                  <div className="nav-link-wrapper">
                    <NavLink to="/marketing" activeClassName="nav-link-active">
                        Marketing
                    </NavLink>
                  </div>

                  <div className="nav-link-wrapper">
                    <NavLink to="/who-we-help" activeClassName="nav-link-active">
                        Who We Help
                    </NavLink>
                  </div>

                  <div className="nav-link-wrapper">
                    <NavLink to="/resources" activeClassName="nav-link-active">
                        Resources
                    </NavLink>
                  </div>

                  <div className="nav-link-wrapper">
                    <NavLink to="/who-we-are" activeClassName="nav-link-active">
                          Who We Are
                    </NavLink>
                  </div>

                  <div className="nav-link-wrapper">
                    <NavLink to="/talk-to-us" activeClassName="nav-link-active">
                          Talk To Us
                    </NavLink>

                  </div>

                  <div className="get-started">


                    <div className="nav-link-wrapper">
                      <NavLink to="/get-started" activeClassName="nav-link-active">
                            Get Started
                      </NavLink>

                    </div>
                  </div>
                </div>
              </div>
      )
    }
}