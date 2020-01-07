import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">

          <div className="row">
            <div className="col-sm-12 mx-auto">
              <h1 className="text-center">Welcome to Bitebody.xyz!</h1>
              <hr/>
      
              <Link to="/about">
                About
              </Link>
      
              <br/>
      
              <p>Our web application is intended to make traveling much easier. Our goal and vision is to allow our users to have access to popular tourist spots, great dining options, and awesome things to do!</p>
            </div>
          </div>
          

        </div>
      </div>
    )
  }
}

export default Landing
