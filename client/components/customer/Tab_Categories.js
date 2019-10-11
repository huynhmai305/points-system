import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Post from '../post/PostList'
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
                            <Tab tabFor="thucpham">Thực phẩm</Tab>
                            <Tab tabFor="giaitri">Giải trí</Tab>
                            <Tab tabFor="vppham">Văn phòng phẩm</Tab>
                            <Tab tabFor="dientu">Điện tử</Tab>
                        </TabList>
                        <div className="wrapper">
                            <TabPanel tabId="location">
                                <Map/>   
                            </TabPanel>
                            <TabPanel tabId="cafe">
                                <p>Cafe content</p>
                                <Post/>
                            </TabPanel>
                            <TabPanel tabId="trasua">
                                <p>Trà sữa content</p>
                                <Post/>
                            </TabPanel>
                            <TabPanel tabId="anvat">
                                <p>Ăn vặt content</p>
                                <Post/>
                            </TabPanel>
                            <TabPanel tabId="thoitrang">
                                <p>Thời trang content</p>
                            </TabPanel>
                            <TabPanel tabId="thucpham">
                                <p>Tab 3 content</p>
                            </TabPanel>
                            <TabPanel tabId="giaitri">
                                <p>Giải trí content</p>
                            </TabPanel>
                            <TabPanel tabId="vppham">
                                <p>Văn phòng phẩm content</p>
                            </TabPanel>
                            <TabPanel tabId="dientu">
                                <p>Điện tử content</p>
                            </TabPanel>
                        </div>
                    </section>
                </TabProvider>
            </Container>
        );
    }
}
