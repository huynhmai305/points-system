import React, { Component } from 'react';

class Testsidebar extends Component {
    render() {
        return (
            <style jsx>{`
            `

            }</style>
            <div>
            <div>
            <div id="mySidebar" className="sidebar">
              <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>
            <div id="main">
              <button className="openbtn" onclick="openNav()">☰ Toggle Sidebar</button>  
              <h2>Collapsed Sidebar</h2>
              <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
            </div>
          </div>
            </div>
        
    }
}

export default Testsidebar;