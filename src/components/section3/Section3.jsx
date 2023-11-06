import { DotsThreeVertical } from '@phosphor-icons/react';
import { Carousel, ConfigProvider, Image, Tabs, Space, QRCode, Typography, Row, Col } from 'antd';
import { useEffect } from 'react';
import { images } from '../../constant/getImages';
import './style.css'
import { useTranslation } from 'react-i18next';

import musicApp from '../../asset/file/miniMusic.apk'

var WIDTH = window.innerWidth;

const Section3 = ({ animate }) => {
    const { t } = useTranslation()

    const onChange = (key) => {
        // console.log(key);
    };

    const Tab1 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab1.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}</b> HTML, CSS, JavaScript, ReactJS, Redux Tool-kit, Tailwind CSS, Flowbite React, Git, NodeJS, ExpressJS, MySQL, Phosphoricon,...
                </div>
                {WIDTH > 800 ? (
                    <Row style={{ margin: '50px 16px 0 16px', justifyContent: 'center', alignItems: 'center' }}>
                        <Col span={8}>
                            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingBottom: 16, textAlign: 'center' }}>
                                <b>URL: </b><a href="https://lechihieu99.github.io/afuproject" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/afuproject</a><br />
                                <br />
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ background: '#fff', width: 'fit-content' }}>
                                        <QRCode value="https://lechihieu99.github.io/afuproject" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Carousel
                                style={{ borderRadius: 10, overflow: 'hidden' }}
                                autoplay>
                                <Image
                                    width='100%'
                                    src={images.AfULogin}
                                />
                                <Image
                                    width='100%'
                                    src={images.AfUHome}
                                />
                                <Image
                                    width='100%'
                                    src={images.AfUGame}
                                />
                                <div>
                                    <Image
                                        width='100%'
                                        src={images.AfUMusic1}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width='100%'
                                        src={images.AfUMusic2}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width='100%'
                                        src={images.AfUCommunity1}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width='100%'
                                        src={images.AfUCommunity2}
                                    />
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Image
                                        width="25%"
                                        src={images.AfULoginMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.AfUHomeMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.AfUGameMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.AfUMusic1Mobile}
                                    />
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Image
                                        width="25%"
                                        src={images.AfUMusic2Mobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.AfUCommunity1Mobile}
                                    />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16, paddingBottom: 16, textAlign: 'center' }}>
                            <b>URL: </b><a href="https://lechihieu99.github.io/afuproject" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/afuproject</a><br />
                            <br />
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ background: '#fff', width: 'fit-content' }}>
                                    <QRCode value="https://lechihieu99.github.io/afuproject" />
                                </div>
                            </div>
                        </div>
                        <Carousel
                            style={{ borderRadius: 10, overflow: 'hidden' }}
                            autoplay>
                            <Image
                                width='100%'
                                src={images.AfULogin}
                            />
                            <Image
                                width='100%'
                                src={images.AfUHome}
                            />
                            <Image
                                width='100%'
                                src={images.AfUGame}
                            />
                            <div>
                                <Image
                                    width='100%'
                                    src={images.AfUMusic1}
                                />
                            </div>
                            <div>
                                <Image
                                    width='100%'
                                    src={images.AfUMusic2}
                                />
                            </div>
                            <div>
                                <Image
                                    width='100%'
                                    src={images.AfUCommunity1}
                                />
                            </div>
                            <div>
                                <Image
                                    width='100%'
                                    src={images.AfUCommunity2}
                                />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    width="25%"
                                    src={images.AfULoginMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.AfUHomeMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.AfUGameMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.AfUMusic1Mobile}
                                />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    width="25%"
                                    src={images.AfUMusic2Mobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.AfUCommunity1Mobile}
                                />
                            </div>
                        </Carousel>
                    </>
                )}


            </div>
        )
    }

    const Tab5 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab5.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}</b> JavaScript, React Native, Redux Tool-kit, NodeJS, ExpressJS, MySQL, Expo Icons,...
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab5.how')} </b>
                    <br />
                    <b>Android (APK): </b>
                    <br />
                    <span style={{ color: '#bdbdbd' }}>{t('section3.tab5.warning')}</span>
                    <br />
                    <a href={musicApp} target="_blank" style={{ textDecoration: 'none', color: 'yellow' }}>Mini Music App.apk</a><br />
                </div>

                <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.interface')}:</b><br />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                    <b>{t('section3.tab5.home')}</b>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 16 }}>
                    <Image
                        width='100%'
                        src={images.MusicHome1}
                    />
                    <Image
                        width='100%'
                        src={images.MusicHome2}
                    />
                    <Image
                        width='100%'
                        src={images.MusicHome3}
                    />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab5.playlist')}</b>
                </div>
                <Image
                    width='25%'
                    src={images.MusicPlaylist}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab5.search')}</b>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 16 }}>
                    <Image
                        width='25%'
                        src={images.MusicSearch1}
                    />
                    <Image
                        width='25%'
                        src={images.MusicSearch2}
                    />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab5.chart')}</b>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 16 }}>
                    <Image
                        width='25%'
                        src={images.MusicChart1}
                    />
                    <Image
                        width='25%'
                        src={images.MusicChart2}
                    />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab5.player')}</b>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 16 }}>
                    <Image
                        width='100%'
                        src={images.MusicPlayer1}
                    />
                    <Image
                        width='100%'
                        src={images.MusicPlayer2}
                    />
                    <Image
                        width='100%'
                        src={images.MusicPlayer3}
                    />
                    <Image
                        width='100%'
                        src={images.MusicPlayer4}
                    />
                </div>
            </div>
        )
    }

    const Tab2 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab2.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}:</b> HTML, CSS, JavaScript, ReactJS
                </div>
                {WIDTH > 800 ? (
                    <Row style={{ margin: '50px 16px 0 16px', justifyContent: 'center', alignItems: 'center' }}>
                        <Col span={8}>
                            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingBottom: 16, textAlign: 'center' }}>
                                <b>URL: </b><a href="https://lechihieu99.github.io/cyborg-design" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/cyborg-design</a><br />
                                <br />
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ background: '#fff', width: 'fit-content' }}>
                                        <QRCode value="https://lechihieu99.github.io/cyborg-design" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={16}>
                            <Carousel
                                style={{ borderRadius: 10, overflow: 'hidden' }}
                                autoplay>
                                <Image
                                    width='100%'
                                    src={images.CyborgHome}
                                />
                                <Image
                                    width='100%'
                                    src={images.CyborgBrowse}
                                />
                                <Image
                                    width='100%'
                                    src={images.CyborgDetails}
                                />
                                <Image
                                    width='100%'
                                    src={images.CyborgStream}
                                />
                                <Image
                                    width='100%'
                                    src={images.CyborgProfile}
                                />
                                <div style={{ display: 'flex' }}>
                                    <Image
                                        width="25%"
                                        src={images.CyborgHomeMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.CyborgBrowseMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.CyborgDetailsMobile}
                                    />
                                    <Image
                                        width="25%"
                                        src={images.CyborgStreamMobile}
                                    />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <div style={{ color: '#e350a8', lineHeight: 1.5, paddingBottom: 16, paddingTop: 16, textAlign: 'center' }}>
                            <b>URL: </b><a href="https://lechihieu99.github.io/cyborg-design" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/cyborg-design</a><br />
                            <br />
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ background: '#fff', width: 'fit-content' }}>
                                    <QRCode value="https://lechihieu99.github.io/cyborg-design" />
                                </div>
                            </div>
                        </div>
                        <Carousel
                            style={{ borderRadius: 10, overflow: 'hidden' }}
                            autoplay>
                            <Image
                                width='100%'
                                src={images.CyborgHome}
                            />
                            <Image
                                width='100%'
                                src={images.CyborgBrowse}
                            />
                            <Image
                                width='100%'
                                src={images.CyborgDetails}
                            />
                            <Image
                                width='100%'
                                src={images.CyborgStream}
                            />
                            <Image
                                width='100%'
                                src={images.CyborgProfile}
                            />
                            <div style={{ display: 'flex' }}>
                                <Image
                                    width="25%"
                                    src={images.CyborgHomeMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.CyborgBrowseMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.CyborgDetailsMobile}
                                />
                                <Image
                                    width="25%"
                                    src={images.CyborgStreamMobile}
                                />
                            </div>
                        </Carousel>
                    </>
                )}


            </div>
        )
    }

    const Tab3 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab3.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}</b> HTML, CSS, JavaScript, ReactJS
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>URL: </b><a href="https://lechihieu99.github.io/myfavouritemusicapp" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/myfavouritemusicapp</a><br />
                    {t('section3.or')}<br />
                    <div style={{ background: '#fff', width: 'fit-content' }}>
                        <QRCode value="https://lechihieu99.github.io/myfavouritemusicapp" />
                    </div>
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.interface')}:</b><br />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                    <b>{t('section3.tab3.main')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.Music}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.mobile')}</b>
                </div>
                <Image
                    width='25%'
                    src={images.MusicMobile}
                />
            </div>
        )
    }

    const Tab4 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab4.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}:</b> HTML, CSS, JavaScript, ReactJS
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>URL: </b><a href=" https://lechihieu99.github.io/my-test-project" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/my-test-project</a><br />
                    {t('section3.or')}<br />
                    <div style={{ background: '#fff', width: 'fit-content' }}>
                        <QRCode value=" https://lechihieu99.github.io/my-test-project" />
                    </div>
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.interface')}:</b><br />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                    <b>{t('section3.tab4.main')}</b>
                </div>
                <Image
                    width={window.innerWidth < 600 ? "100%" : "50%"}
                    src={images.MotionM5}
                />
            </div>
        )
    }

    const items = [
        {
            key: '1',
            label: 'AfU - All for U (Entertainment Website)',
            children: <Tab1 />,
        },
        {
            key: '2',
            label: 'Mini Music App with React Native',
            children: <Tab5 />,
        },
        {
            key: '3',
            label: 'Cyborg Website Template',
            children: <Tab2 />,
        },
        {
            key: '4',
            label: 'My Favourite App',
            children: <Tab3 />,
        },
        {
            key: '5',
            label: 'MotionM5 Template',
            children: <Tab4 />,
        },
    ];
    return (
        <div id="project" style={{ width: '100%', minHeight: '100vh', paddingTop: 64, transition: 'all 1s ease-in-out' }}>
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            itemColor: '#fff',
                            itemHoverColor: 'pink',
                            itemSelectedColor: '#fff',
                            itemActiveColor: '#fff',
                            inkBarColor: '#e350a8',
                        }
                    }
                }}
            >
                <Typography.Title level={5} style={{ margin: 0, color: '#fff', fontWeight: 'bold', textShadow: '#e350a8 1px 0 5px' }}>
                    5 {t('section3.project')}
                </Typography.Title>

                <Tabs moreIcon={<DotsThreeVertical color="#fff" size={20} />} defaultActiveKey="1" items={items} onChange={onChange} />
            </ConfigProvider>
        </div>
    )

};
export default Section3;