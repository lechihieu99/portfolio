import { DotsThreeVertical } from '@phosphor-icons/react';
import { Carousel, ConfigProvider, Image, Tabs, Space, QRCode, Typography } from 'antd';
import { useEffect } from 'react';
import { images } from '../../constant/getImages';
import './style.css'
const onChange = (key) => {
    // console.log(key);
};

// ABC là một trang web giải trí cho người sử dụng, bao gồm các tiện ích như nghe nhạc, chơi game đồng thời giao lưu, kết nối bạn bè. Với trang web đó, chúng tôi mong muốn người dùng có thể tận hưởng tất cả các tiện ích của trang web, hòa mình cùng những phong cách âm nhạc độc đáo, chơi những trò chơi với đầy đủ các thể loại đồng thời thể hiện màu sắc, suy nghĩ cá nhân thông qua các hoạt động trong mục Cộng đồng

const Tab1 = () => {
    return (
        <div style={{ textAlign: 'left', borderBottom: '1px solid rgba(255, 255, 255, 0.454)', borderRight: '1px solid rgba(255, 255, 255, 0.454)', borderLeft: '1px solid rgba(255, 255, 255, 0.454)', borderRadius: '10px', padding: 16 }}>
            <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                AfU (All for U) is an entertainment website for users, including utilities such as listening to music, playing games and interacting and connecting with friends. With that website, we want users to be able to enjoy all the benefits of the website, immerse themselves in unique music styles, play games of all genres and express their colors. personal identity and thoughts through activities in the Community section
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                <b>Technology used:</b> HTML, CSS, JavaScript, ReactJS, Redux Tool-kit, Tailwind CSS, Flowbite React, Git, NodeJS, ExpressJS, MySQL, Phosphoricon,...
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>URL: </b><a href="https://lechihieu99.github.io/afuproject" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/afuproject</a><br />
                or<br />
                <div style={{ background: '#fff', width: 'fit-content' }}>
                    <QRCode value="https://lechihieu99.github.io/afuproject" />
                </div>
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Website interface:</b><br />
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                <b>Login and Signup Page</b>
            </div>
            <Image
                width='100%'
                src={images.AfULogin}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Home Page</b>
            </div>
            <Image
                width='100%'
                src={images.AfUHome}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Games Page where you can freely play games of all genres</b>
            </div>
            <Image
                width='100%'
                src={images.AfUGame}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Music Page where you can immerse yourself in the melodies of life, freely express your personal musical colors</b>
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
                <b>Community Page is a place where you can interact, connect with people, and freely express your thoughts and feelings in the community.</b>
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
                <b>Mobile Version</b>
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
                Cyborg Website is HTML Template in Internet
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                <b>Technology used:</b> HTML, CSS, JavaScript, ReactJS
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>URL: </b><a href="https://lechihieu99.github.io/cyborg-design" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/cyborg-design</a><br />
                or<br />
                <div style={{ background: '#fff', width: 'fit-content' }}>
                    <QRCode value="https://lechihieu99.github.io/cyborg-design" />
                </div>
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Website interface:</b><br />
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                <b>Home Page</b>
            </div>
            <Image
                width='100%'
                src={images.CyborgHome}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Browse Page</b>
            </div>
            <Image
                width='100%'
                src={images.CyborgBrowse}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Details Page</b>
            </div>
            <Image
                width='100%'
                src={images.CyborgDetails}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Stream Page</b>
            </div>
            <Image
                width='100%'
                src={images.CyborgStream}
            />


            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Profile Page</b>
            </div>
            <Image
                width='100%'
                src={images.CyborgProfile}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Mobile Version</b>
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
                My Favourite App
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                <b>Technology used:</b> HTML, CSS, JavaScript, ReactJS
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>URL: </b><a href="https://lechihieu99.github.io/myfavouritemusicapp" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/myfavouritemusicapp</a><br />
                or<br />
                <div style={{ background: '#fff', width: 'fit-content' }}>
                    <QRCode value="https://lechihieu99.github.io/myfavouritemusicapp" />
                </div>
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Website interface:</b><br />
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                <b>Main Page</b>
            </div>
            <Image
                width='100%'
                src={images.Music}
            />
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Mobile Version</b>
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
                MotionM5 Website Template
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5 }}>
                <b>Technology used:</b> HTML, CSS, JavaScript, ReactJS
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5, paddingTop: 16 }}>
                <b>URL: </b><a href=" https://lechihieu99.github.io/my-test-project" target="_blank" style={{ textDecoration: 'none', color: '#eeeeee' }}>lechihieu99.github.io/my-test-project</a><br />
                or<br />
                <div style={{ background: '#fff', width: 'fit-content' }}>
                    <QRCode value=" https://lechihieu99.github.io/my-test-project" />
                </div>
            </div>
            <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingTop: 16 }}>
                <b>Website interface:</b><br />
            </div>
            <div style={{ color: '#e350a8', lineHeight: 1.5 }}>
                <b>Main Page</b>
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
const Section3 = ({ animate }) => {
    
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
                    4 Projects
                </Typography.Title>

                <Tabs moreIcon={<DotsThreeVertical color="#fff" size={20} />} defaultActiveKey="1" items={items} onChange={onChange} />
            </ConfigProvider>
        </div>
    )

};
export default Section3;