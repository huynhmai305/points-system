import React, { Component } from 'react';
import {FaTwitter, FaFacebook, FaLinkedinIn} from 'react-icons/fa'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="copyright">Copyright &copy; Your Website 2019</span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <FaTwitter/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <FaFacebook/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <FaLinkedinIn/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div> 
            </footer>
        );
    }
}

export default Footer;
