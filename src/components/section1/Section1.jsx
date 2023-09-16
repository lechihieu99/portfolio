import { Avatar, Col, Row, Space, Typography } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowCircleDown } from '@phosphor-icons/react'

import './style.css'
import { images } from "../../constant/getImages";

const Section1 = ({ setCurrent }) => {

    const [hour, setHour] = useState('00')
    const [minute, setMinute] = useState('00')
    const [second, setSecond] = useState('00')

    useEffect(() => {
        const setTime = setInterval(() => {
            const date = new Date()
            setHour(date.getHours())
            setMinute(date.getMinutes())
            setSecond(date.getSeconds())
        }, 1000)

    }, [])
    return (
        <Row id="home" style={{ width: '100%', height: '100vh', paddingTop: 64 }}>
            <Col span={window.innerWidth < 800 ? 24 : 14}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {window.innerWidth < 600 && (
                        <div style={{ width: '100%', textAlign: 'center', marginBottom: 32 }}>
                            <Avatar shape="square" src={images.Avatar} size={150} >

                            </Avatar>
                        </div>
                    )}
                    <Typography.Title level={1} style={{ margin: 0, color: '#e350a8', textAlign: 'left' }}>
                        Welcome to my Portfolio!
                    </Typography.Title>
                    <div className="scroller">
                        <span>
                            I'm Hieu<br />
                            My full name is Le Chi Hieu<br />
                            Front-end Developer Fresher {`(ReactJS)`}<br />
                            University of Science - HCM
                        </span>
                    </div>
                    <Typography.Title level={3} style={{ margin: 0, color: '#e350a8', textAlign: 'left', paddingTop: 12 }}>
                        {hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
                    </Typography.Title>
                    <Space >
                        <a href="#about" onClick={() => setCurrent('about')}>
                            <ArrowCircleDown style={{ color: '#b8e7ea', cursor: 'pointer' }} className="iconDown" size={46} />
                        </a>
                    </Space>
                </div>
            </Col>
            <Col span={window.innerWidth < 800 ? 0 : 10}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="divStyle" style={{ borderRadius: '100%' }}>
                        <Avatar src={images.Avatar} size={window.innerWidth < 600 ? 100 : window.innerWidth > 600 && window.innerWidth < 1000 ? 220 : 300} >

                        </Avatar>
                    </div>
                </div>
            </Col>
        </Row>

    )
}

export default Section1