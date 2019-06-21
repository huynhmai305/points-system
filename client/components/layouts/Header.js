import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div >
                <header className="masthead mt-5">
                    <div className="container">
                        <div className="intro-text ">
                            <div className="intro-lead-in"></div>
                            <div className="intro-heading text-uppercase transbox"><h1>Tích điểm mọi nơi - Rinh ngay quà thưởng</h1></div>
                            <a className="btn btn-success btn-xl text-uppercase js-scroll-trigger" href="#quytrinhtichdiem">Tell Me More</a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;