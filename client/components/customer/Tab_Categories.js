import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';

export default class TabCategory extends Component {
    render() {
        return (
            <TabProvider defaultTab="one">
                <section className="my-tabs">
                    <TabList className="my-tablist">
                        <Tab tabFor="one">Tab 1</Tab>
                        <span className="divider">•</span>
                        <Tab tabFor="two">Tab 2</Tab>
                        <span className="divider">•</span>
                        <Tab tabFor="three" className="my-tab">Tab 3</Tab>
                    </TabList>
                    <div className="wrapper">
                        <TabPanel tabId="one">
                            <p>Tab 1 content</p>
                        </TabPanel>
                        <TabPanel tabId="two">
                            <p>Tab 2 content</p>
                        </TabPanel>
                        <TabPanel tabId="three">
                            <p>Tab 3 content</p>
                        </TabPanel>
                    </div>
                </section>
            </TabProvider>
        );
    }
}