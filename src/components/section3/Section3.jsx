import { DotsThreeVertical } from '@phosphor-icons/react';
import { Carousel, ConfigProvider, Image, Tabs, Space, QRCode, Typography } from 'antd';
import { useEffect } from 'react';
import { images } from '../../constant/getImages';
import './style.css'
import { useTranslation } from 'react-i18next';

const Section3 = ({ animate }) => {
    const { t } = useTranslation()

    const onChange = (key) => {
        // console.log(key);
    };

    const Tab1 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16 }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab1.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}</b> HTML, CSS, JavaScript, ReactJS, Redux Tool-kit, Tailwind CSS, Flowbite React, Git, NodeJS, ExpressJS, MySQL, Phosphoricon,...
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>URL: </b><a href="https://lechihieu99.github.io/afuproject" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/afuproject</a><br />
                    <br />
                    <div style={{ background: '#fff', width: 'fit-content' }}>
                        <QRCode value="https://lechihieu99.github.io/afuproject" />
                    </div>
                    {t('section3.or')}<br />
                    <b>URL: </b><a href="http://192.168.137.1:3000/afuproject" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>192.168.137.1:3000/afuproject</a><br />
                    <div style={{ background: '#fff', width: 'fit-content' }}>
                        <QRCode value="http://192.168.137.1:3000/afuproject" />
                    </div>

                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.interface')}:</b><br />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                    <b>{t('section3.tab1.login')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.AfULogin}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab1.home')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.AfUHome}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab1.games')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.AfUGame}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab1.music')}</b>
                </div>
                <Carousel autoplay>
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
                </Carousel>


                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab1.community')}</b>
                </div>
                <Carousel autoplay>
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
                </Carousel>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.mobile')}</b>
                </div>
                <Carousel>
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
            </div >
        )
    }

    const Tab2 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16 }}>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    {t('section3.tab2.introduce')}
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                    <b>{t('section3.technology')}:</b> HTML, CSS, JavaScript, ReactJS
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>URL: </b><a href="https://lechihieu99.github.io/cyborg-design" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/cyborg-design</a><br />
                    {t('section3.or')}<br />
                    <div style={{ background: '#fff', width: 'fit-content' }}>
                        <QRCode value="https://lechihieu99.github.io/cyborg-design" />
                    </div>
                </div>
                <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.interface')}:</b><br />
                </div>
                <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                    <b>{t('section3.tab2.home')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.CyborgHome}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab2.browse')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.CyborgBrowse}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab2.details')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.CyborgDetails}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab2.stream')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.CyborgStream}
                />


                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.tab2.profile')}</b>
                </div>
                <Image
                    width='100%'
                    src={images.CyborgProfile}
                />
                <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                    <b>{t('section3.mobile')}</b>
                </div>
                <Carousel>
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
                    <div style={{ display: 'flex' }}>
                        <Image
                            width="25%"
                            src={images.CyborgProfileMobile}
                        />
                    </div>


                </Carousel>
            </div>
        )
    }

    const Tab3 = () => {
        return (
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16 }}>
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
            <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16 }}>
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
            label: 'Cyborg Website Template',
            children: <Tab2 />,
        },
        {
            key: '3',
            label: 'My Favourite App',
            children: <Tab3 />,
        },
        {
            key: '4',
            label: 'MotionM5 Template',
            children: <Tab4 />,
        },
    ];
    return (
        <div className={`${animate ? "activeSection3" : "notActiveSection3"}`} id="project" style={{ width: '100%', minHeight: '100vh', paddingTop: 64, transition: 'all 1s ease-in-out' }}>
            <ConfigProvider
                theme={{
                    components: {
                        Tabs: {
                            itemColor: '#fff',
                            itemHoverColor: '#e350a8',
                            itemSelectedColor: '#e350a8',
                            itemActiveColor: '#e350a8',
                            inkBarColor: '#e350a8',
                        }
                    }
                }}
            >
                <Typography.Title level={5} style={{ margin: 0, color: '#e350a8' }}>
                    4 {t('section3.project')}
                </Typography.Title>

                <Tabs moreIcon={<DotsThreeVertical color="#fff" size={20} />} defaultActiveKey="1" items={items} onChange={onChange} />
            </ConfigProvider>
        </div>
    )

};
export default Section3;