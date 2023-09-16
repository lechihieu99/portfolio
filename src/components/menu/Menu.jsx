
import { Col, ConfigProvider, Menu, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import './style.css'

const { Text } = Typography
const items = [
    {
        label: (
            <a href="#home" rel="noopener noreferrer">
                <b>Home</b>
            </a>
        ),
        key: 'home',
    },
    {
        label: (
            <a href="#about" rel="noopener noreferrer">
                <b>About me</b>
            </a>
        ),
        key: 'about',
    },
    {
        label: (
            <a href="#project" rel="noopener noreferrer">
                <b>Project</b>
            </a>
        ),
        key: 'project',
    },
    {
        label: (
            <a href="#skill" rel="noopener noreferrer">
                <b>Skill</b>
            </a>
        ),
        key: 'skill',
    },
    {
        label: (
            <a href="#contact" rel="noopener noreferrer">
                <b>Contact</b>
            </a>
        ),
        key: 'contact',
    },
];

const menuStyle = {
    background: 'black',
    color: '#eeeeee',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
}
const MenuComponents = ({ current, setCurrent }) => {

    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemHoverColor: '#b8e7ea',
                        horizontalItemSelectedColor: '#b8e7ea',
                        horizontalItemHoverColor: '#b8e7ea',
                        itemSelectedColor: '#b8e7ea'
                    }
                }
            }}
        >
            <Row>
                <Col span={6}>
                    <Space align='center' style={{ width: '100%', height: '100%' }}>
                        {/* <Text style={{ color: '#e350a8' }}>ABC</Text> */}
                        <Typography.Title level={window.innerWidth < 600 ? 5 : 3} style={{ margin: 0, color: '#e350a8' }}>
                            LECHIHIEU
                        </Typography.Title>
                    </Space>
                </Col>
                <Col span={18}>
                    <Menu style={menuStyle} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="menu" />

                </Col>
            </Row>


        </ConfigProvider>
    );
};
export default MenuComponents;