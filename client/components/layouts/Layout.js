import React, { Component } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'reactstrap';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" ></meta>
                    <meta name="author"></meta>
                    <link href="/static/googleapis/Montserrat.css" rel="stylesheet" />
                    <link href="/static/googleapis/Kaushan.css" rel="stylesheet" />
                    <link href="/static/googleapis/Droid-Serif.css" rel="stylesheet" />
                    <link href="/static/googleapis/Roboto-Slab.css" rel="stylesheet" />
                    <link rel="stylesheet" href="/static/stylesheets/agency.min.css" />
                    {/*<link rel="stylesheet" href="/static/stylesheets/agency.css" />*/}
                    <link rel="stylesheet" href="/static/stylesheets/style.css" />
                    <link rel="stylesheet" href="/static/stylesheets/admin.css" />
                    <script src="/static/javascripts/jquery/jquery.min.js"></script>
                    <script src="/static/javascripts/js/jqBootstrapValidation.js"></script>
                    <script src="/static/javascripts/babel/babel.min.js"></script>
                    <link rel="stylesheet" href="/static/stylesheets/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
                </Head>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;