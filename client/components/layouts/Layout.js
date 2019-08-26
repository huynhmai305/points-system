import React, { Component } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'reactstrap';
import 'js-cookie';
import "antd/dist/antd.css";

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>{this.props.title}</title>                 
                    <link rel="stylesheet" href="/static/stylesheets/admin.css" /> 
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>              
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"/>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>                   
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>
                    <link rel="stylesheet" href="/static/stylesheets/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
                </Head>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;