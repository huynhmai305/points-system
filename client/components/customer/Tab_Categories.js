import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Post from '../post/Store_Post/PostListStore'
import News from '../post/News/ListNews'
import Map from './Map'
import Type from '../type.json'

export default class TabCategory extends Component {
    render() {
        return (
            <Container>
                <TabProvider defaultTab="one">
                    <section className="my-tabs">
                        <TabList className="my-tablist">
                            <Tab tabFor="location">Quanh đây</Tab>
                            {Type.map((item,key) => (
                                <Tab key={key} tabFor={item.value} className="my-tab">{item.label}</Tab>
                            ))}
                        </TabList>
                        <div className="wrapper">
                            <TabPanel tabId="location">
                                <Map/>   
                            </TabPanel>
                            {Type.map((item,key) => (
                                <TabPanel tabId={item.value} key={key}>
                                    <Post type={item.value}/>
                                    <News type={item.value}/>
                                </TabPanel>
                            ))}
                        </div>
                    </section>
                </TabProvider>
            </Container>
        );
    }
}
