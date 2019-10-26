import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Post from '../post/PostListStore'
import Map from './Map'

export default class TabCategory extends Component {
    render() {
        return (
            <Container>
                <TabProvider defaultTab="one">
                    <section className="my-tabs">
                        <TabList className="my-tablist">
                            <Tab tabFor="location">Quanh đây</Tab>
                            <Tab tabFor="cafe" className="my-tab">Cafe</Tab>
                            <Tab tabFor="trasua">Trà sữa</Tab>
                            <Tab tabFor="anvat">Ăn vặt</Tab>
                            <Tab tabFor="thoitrang">Thời trang</Tab>
                            <Tab tabFor="spa">Spa</Tab>
                            <Tab tabFor="giaitri">Giải trí</Tab>
                            <Tab tabFor="dientu">Phụ kiện điện tử</Tab>
                        </TabList>
                        <div className="wrapper">
                            <TabPanel tabId="location">
                                <Map/>   
                            </TabPanel>
                            <TabPanel tabId="cafe">
                                <Post type='cafe'/>
                            </TabPanel>
                            <TabPanel tabId="trasua">
                                <Post type='tra sua'/>
                            </TabPanel>
                            <TabPanel tabId="anvat">
                                <Post type='an vat'/>
                            </TabPanel>
                            <TabPanel tabId="thoitrang">
                                <Post type='thoi trang'/>
                            </TabPanel>
                            <TabPanel tabId="spa">
                                <Post type='spa'/>
                            </TabPanel>
                            <TabPanel tabId="giaitri">
                                <Post/>
                            </TabPanel>
                            <TabPanel tabId="dientu">
                                <Post type='dien tu'/>
                            </TabPanel>
                        </div>
                    </section>
                </TabProvider>
            </Container>
        );
    }
}
