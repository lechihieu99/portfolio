import { Envelope, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { Col, Row, Form, Input, Button, ConfigProvider, Avatar } from "antd";
import React, { useState } from "react";
import { images } from "../../constant/getImages";
import axios from 'axios'
import './style.css'
import { useTranslation } from 'react-i18next';

const Section5 = ({ animate }) => {
    const { t } = useTranslation()
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');

    const [mess, setMess] = useState()
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;

    const onFinish = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;

        // console.log(name)
        if (name || email || message) {
            const payload = {
                email: email,
                fullname: name,
                message: message
            }
            axios.post('https://6ef5-27-64-140-249.ngrok-free.app/api/send-email', payload)

            setMess(t('section5.messSuccess'))
            setTimeout(() => {
                setMess()
            }, 3000)
        }
        else {
            setMess(t('section5.messFailed'))
        }
    }
    return (
        <>
            <div id="contact" style={{ width: '100%', minHeight: '100vh', paddingTop: window.innerWidth < 600 ? 64 : 128, marginBottom: window.innerWidth < 600 ? 32 : 0 }}>
                {window.innerWidth < 600 ? (
                    <Row gutter={[16, 24]}>
                        <Col span={24}>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className={`${animate.animate1 ? "mobileActive1Section5" : "mobileNotActive1Section5"} divStyle`} style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.222)', borderRadius: '10px', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.074)', backdropFilter: 'blur(20px)', transition: 'all 1s ease-in-out' }}>
                                    <Form
                                        {...formItemLayout}
                                        layout={formLayout}
                                        form={form}
                                        initialValues={{
                                            layout: formLayout,
                                        }}
                                        style={{
                                            maxWidth: formLayout === 'inline' ? 'none' : 600
                                        }}
                                    >
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelName')}</div>)}>
                                            <Input id="name" placeholder={t('section5.placeName')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelEmail')}</div>)}>
                                            <Input id="email" placeholder={t('section5.placeEmail')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelPhone')}</div>)}>
                                            <Input id="phone" placeholder={t('section5.placePhone')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelCompany')}</div>)}>
                                            <Input id="company" placeholder={t('section5.placeCompany')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelMess')}</div>)}>
                                            <Input.TextArea id="message" placeholder={t('section5.placeMess')} />
                                        </Form.Item>
                                        <Form.Item style={{ textAlign: 'left' }}>
                                            <ConfigProvider
                                                theme={{
                                                    components: {
                                                        Button: {
                                                            defaultBg: 'rgba(255, 255, 255, 0.074)',
                                                            defaultColor: '#eeeeee'
                                                        }
                                                    }
                                                }}
                                            >
                                                <Button onClick={onFinish}>{t('section5.send')}</Button>
                                                <div style={{ color: '#fc3728' }}>{mess}</div>
                                            </ConfigProvider>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: 1 }}>
                                - {t('section5.or')} -
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className={`${animate.animate2 ? "mobileActive2Section5" : "mobileNotActive2Section5"} divStyle`} style={{ width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255, 255, 255, 0.222)', borderRadius: '10px', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.074)', backdropFilter: 'blur(20px)', gap: 16, transition: 'all 1s ease-in-out' }}>

                                    <div style={{ borderRadius: '100%' }}>
                                        <Avatar src={images.Avatar} size={window.innerWidth < 600 ? 100 : window.innerWidth > 600 && window.innerWidth < 1000 ? 220 : 300} >

                                        </Avatar>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <GithubLogo size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="https://github.com/lechihieu99" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>github.com/lechihieu99</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <LinkedinLogo size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="https://linkedin.com/in/lechihieu99" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>linkedin.com/in/lechihieu99</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Envelope size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="mailto:lechihieu99us@gmail.com" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99us@gmail.com</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Phone size={window.innerWidth < 1080 ? 16 : 28} />
                                            0339042674
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                ) : (
                    <Row>
                        <Col span={11}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div className={`${animate.animate1 ? "active1Section5" : "notActive1Section5"} divStyle`} style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.222)', borderRadius: '10px', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.074)', backdropFilter: 'blur(20px)', transition: 'all 1s ease-in-out' }}>
                                    <Form
                                        {...formItemLayout}
                                        layout={formLayout}
                                        form={form}
                                        initialValues={{
                                            layout: formLayout,
                                        }}
                                        style={{
                                            maxWidth: formLayout === 'inline' ? 'none' : 600
                                        }}
                                    >
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelName')}</div>)}>
                                            <Input id="name" placeholder={t('section5.placeName')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelEmail')}</div>)}>
                                            <Input id="email" placeholder={t('section5.placeEmail')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelPhone')}</div>)}>
                                            <Input id="phone" placeholder={t('section5.placePhone')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelCompany')}</div>)}>
                                            <Input id="company" placeholder={t('section5.placeCompany')} />
                                        </Form.Item>
                                        <Form.Item label={(<div style={{ color: '#eeeeee' }}>{t('section5.labelMess')}</div>)}>
                                            <Input.TextArea id="message" placeholder={t('section5.placeMess')} />
                                        </Form.Item>
                                        <Form.Item style={{ textAlign: 'left' }}>
                                            <ConfigProvider
                                                theme={{
                                                    components: {
                                                        Button: {
                                                            defaultBg: 'rgba(255, 255, 255, 0.074)',
                                                            defaultColor: '#eeeeee'
                                                        }
                                                    }
                                                }}
                                            >
                                                <Button onClick={onFinish}>{t('section5.send')}</Button>
                                                <div style={{ color: '#fc3728' }}>{mess}</div>
                                            </ConfigProvider>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col span={2}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                - {t('section5.or')} -
                            </div>
                        </Col>
                        <Col span={11}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className={`${animate.animate2 ? "active2Section5" : "notActive2Section5"} divStyle`} style={{ width: '100%', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255, 255, 255, 0.222)', borderRadius: '10px', padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.074)', backdropFilter: 'blur(20px)', gap: 16, transition: 'all 1s ease-in-out' }}>

                                    <div style={{ borderRadius: '100%' }}>
                                        <Avatar src={images.Avatar} size={window.innerWidth < 600 ? 100 : window.innerWidth > 600 && window.innerWidth < 1000 ? 220 : 260} >

                                        </Avatar>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <GithubLogo size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="https://github.com/lechihieu99" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>github.com/lechihieu99</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <LinkedinLogo size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="https://linkedin.com/in/lechihieu99" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>linkedin.com/in/lechihieu99</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Envelope size={window.innerWidth < 1080 ? 16 : 28} />
                                            <a href="mailto:lechihieu99us@gmail.com" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99us@gmail.com</a>
                                        </div>
                                        <div style={{ display: 'flex', gap: 12, lineHeight: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Phone size={window.innerWidth < 1080 ? 16 : 28} />
                                            0339042674
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                )}
            </div>
        </>
    )
}

export default Section5