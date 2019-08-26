import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

class CardStore extends Component {
    render() {
        const { Meta } = Card;
        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}

export default CardStore;