import React, { Component } from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Header from '../components/layouts/Header';
import About from '../components/layouts/about';
import Quytrinhtichdiem from '../components/layouts/quytrinhtichdiem';
import Client from '../components/layouts/client';
import Contact from '../components/layouts/contact';
import Navigation from '../components/layouts/Navigation';

class Index extends Component {
  render() {
    return (
      <DefaultLayout title="Trang chủ">
        <Navigation/>
        <Header/>
        <About/>
        <Quytrinhtichdiem/>
        <Client/>
        <Contact/>
      </DefaultLayout>
    );
  }
}

export default Index;
