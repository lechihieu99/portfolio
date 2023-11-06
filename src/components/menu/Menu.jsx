
import { CaretDown } from '@phosphor-icons/react';
import { Col, ConfigProvider, Menu, Row, Select, Space, Switch, Typography } from 'antd';
import { useState } from 'react';
import './style.css'
import { useTranslation } from 'react-i18next';
import i18n from '../../translation/i18n';
import { useEffect } from 'react';

import ChristmasAudio from '../../asset/file/Christmas.mp3'
import Santa from '../../asset/icon/santa.gif'
const { Text } = Typography


const menuStyle = {
    backgroundColor: '#333333',
    color: '#eeeeee',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
}
const MenuComponents = ({ current, setCurrent, handleChange, onChange }) => {

    const { t } = useTranslation()
    const [width, setWidth] = useState(window.innerWidth)

    const [items, setItems] = useState()

    const [play, setPlay] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        const audio = document.getElementById('music')
        audio && play ? audio.play() : audio.pause()
        audio.volume = 0.03
    }, [play])

    useEffect(() => {
        const audio = document.getElementById('music')
        audio.addEventListener('ended', () => {
            setPlay(false)
            setTimeout(() => {
                setPlay(true)
            }, 1000)
        })

        return () => {
            audio.removeEventListener('ended', () => {
                setPlay(false)
                setTimeout(() => {
                    setPlay(true)
                }, 1000)
            })
        }
    }, [])

    useEffect(() => {
        setItems([
            {
                label: (
                    <a href="#home" rel="noopener noreferrer">
                        <b>{t('menu.home')}</b>
                    </a>
                ),
                key: 'home',
            },
            {
                label: (
                    <a href="#about" rel="noopener noreferrer">
                        <b>{t('menu.about')}</b>
                    </a>
                ),
                key: 'about',
            },
            {
                label: (
                    <a href="#project" rel="noopener noreferrer">
                        <b>{t('menu.project')}</b>
                    </a>
                ),
                key: 'project',
            },
            {
                label: (
                    <a href="#skill" rel="noopener noreferrer">
                        <b>{t('menu.skill')}</b>
                    </a>
                ),
                key: 'skill',
            },
            {
                label: (
                    <a href="#contact" rel="noopener noreferrer">
                        <b>{t('menu.contact')}</b>
                    </a>
                ),
                key: 'contact',
            },
            {
                label: width > 800 ? (
                    <Select
                        bordered={false}
                        suffixIcon={<CaretDown color="#eeeeee" size={16} />}
                        defaultValue="eng"
                        onChange={handleChange}
                        options={[
                            {
                                value: 'eng',
                                label: 'ENG',
                            },
                            {
                                value: 'vie',
                                label: 'VIE',
                            }
                        ]}
                    />
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000000', fontWeight: 'bold', gap: 6 }}>
                        <span>VIE</span>
                        <Switch defaultChecked onChange={onChange} />
                        <span>ENG</span>
                    </div>
                ),
                key: 'language'
            }
        ])
    }, [width, t])


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
                    },
                    Select: {
                        selectorBg: '#000000',

                    }
                }
            }}
        >
            <audio autoPlay id='music' >
                <source src={ChristmasAudio} type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <Row>
                <Col span={6}>
                    <Space align='center' style={{ width: '100%', height: '100%' }}>
                        {/* <Text style={{ color: '#e350a8' }}>ABC</Text> */}
                        <Typography.Title level={window.innerWidth < 800 ? 5 : 2} style={{ margin: 0, color: '#fff', fontWeight: 'bold', textShadow: '#e350a8 1px 0 5px' }}>
                            <span onClick={() => setPlay(!play)} style={{ cursor: 'pointer' }}>LECHIHIEU <img className="imageGift" src={Santa} style={{ borderRadius: 20 }} /></span>
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