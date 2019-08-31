import React, { Component } from 'react';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Header from '../components/layouts/Header';
import About from '../components/layouts/About';
import Quytrinhtichdiem from '../components/layouts/Quytrinhtichdiem';
import Client from '../components/layouts/Client';
import Contact from '../components/layouts/Contact';
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
