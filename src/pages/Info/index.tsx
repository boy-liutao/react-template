import React from 'react';
import { Button, Icon, Row, Col } from 'antd';

export default class Info extends React.Component {
    render() {
        return (
            <div>
                <Row style={{ textAlign: "center", color: 'red' }}>
                    <Col span={8}>这是info页面</Col>
                    <Col span={8}>
                        <Button type="primary">Primary</Button>
                    </Col>
                    <Col span={8}>
                        <Icon type="smile" theme="twoTone" />
                    </Col>
                </Row>


            </div>
        )
    }
}