import React from "react";
import { ConfigProvider, Descriptions, Divider, Timeline } from 'antd';

import CvEng from '../../asset/file/CVEng.pdf'
import CvViet from '../../asset/file/CVViet.pdf'

import './style.css'
import { useEffect } from "react";

// tôi lớn lên trong một gia đình nông dân nghèo khó, cố gắng từng ngày để có thể theo đuổi con đường mơ ước dù gặp rất nhiều khó khăn. Sau khi tôi hoàn thành 12 năm học trên nhà trường, tôi đã gác lại ước mơ đại học của mình vì không đủ tài chính trang trải cuộc sống. Với sự cố gắng của bản thân, tôi đã quay lại đại học sau 1 năm. Tôi bắt đầu đại học với lượng kiến thức giới hạn, điều đó dẫn đến không ít khó khăn cho việc thích nghi của tôi. Với sự cố gắng của bản thân, tôi đã vượt qua giai đoạn đó và đã tìm được hướng đi cho bản thân, đó là trở thành 1 Front-end Developer (ReactJS) và đang tiếp tục trau dồi, hướng tới 1 Full-Stack Developer. Chính bản thân tôi cảm thấy tôi không phải là người giỏi nhất, nhưng tôi có thể đảm bảo được rằng tôi có thể trở thành người thích nghi tốt nhất
// I grew up in a poor farmer family, trying every day to pursue my dream path despite many difficulties. After I completed 12 years of school, I put my college dream on hold because I didn't have enough money to cover my living expenses. With my own efforts, I returned to college after 1 year. I started college with a limited amount of knowledge, which led to many difficulties for me to adapt. With my own efforts, I overcame that stage and found a direction for myself, which is to become a Front-end Developer (ReactJS) and am continuing to improve, aiming for a Full-Stack. Developer. I personally feel that I am not the best, but I can guarantee that I can become the most adaptable person.

const items = [
    {
        key: '1',
        label: 'Full Name',
        children: 'Lê Chí Hiếu',
    },
    {
        key: '2',
        label: 'Sex',
        children: 'Male',
    },
    {
        key: '3',
        label: 'Phone Number',
        children: '0339042674',
    },
    {
        key: '4',
        label: 'Education',
        children: 'University of Science - HCM (2019 - 2023)',
    },
    {
        key: '5',
        label: 'Location',
        children: 'Thủ Đức, Hồ Chí Minh City',
    },
    {
        key: '6',
        label: 'Habit',
        children: 'Coding, Singing and Drawing',
    },
    {
        key: '7',
        label: 'My CV',
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <a href={CvEng} download>CV - English - Lê Chí Hiếu</a>
                <a href={CvViet} download>CV - Vietnam - Lê Chí Hiếu</a>
            </div>
        ),
    },
    {
        key: '8',
        label: 'Position',
        children: 'Front-end Developer Fresher (ReactJS)',
    },
];

const Section2 = ({ animate }) => {

    return (
        <div className={`${animate ? "activeSection2" : "notActiveSection2"}`} id="about" style={{ width: '100%', paddingTop: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 1s ease-in-out' }}>
            <div className="divStyle" style={{ width: '100%', border: '1px solid rgba(255, 255, 255, 0.222)', borderRadius: '10px', padding: '32px', backgroundColor: 'rgba(255, 255, 255, 0.074)', backdropFilter: 'blur(20px)' }}>

                <Descriptions contentStyle={{ color: '#eeeeee' }} labelStyle={{ color: '#bdbdbd' }} title={(<div style={{ color: '#EEEEEE' }}>My Infomation</div>)} items={items} />

                <div style={{ lineHeight: 1.5, textAlign: 'left' }}>
                    I grew up in a poor farmer family, trying every day to pursue my dream path despite many difficulties. After I completed 12 years of school, I put my college dream on hold because I didn't have enough money to cover my living expenses. With my own efforts, I returned to college after 1 year. I started college with a limited amount of knowledge, which led to many difficulties for me to adapt. With my own efforts, I overcame that stage and found a direction for myself, which is to become a Front-end Developer (ReactJS) and am continuing to improve, aiming for a Full-Stack. Developer. I personally feel that I am not the best, but I can guarantee that I can become the most adaptable person.
                </div>
                <div style={{ textAlign: 'left', paddingTop: 24, paddingLeft: 32, color: '#eeeeee' }}>
                    <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingBottom: 12 }}>Timeline of studying ReactJS</div>
                    <Timeline
                        pending={(<div style={{ color: '#eeeeee' }}>Developing...</div>)}
                        reverse={false}
                        items={[
                            {
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>March 2023</b></span>
                                        <span>Self-study ReactJS on Youtube</span>
                                    </div>
                                ),
                            },
                            {
                                color: 'green',
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>April 19, 2023</b></span>
                                        <span>Front-end Developer (ReactJS) Intern in TMA Solutions</span>
                                    </div>
                                ),
                            },
                            {
                                color: 'green',
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>July 19, 2023</b></span>
                                        <span>Complete the internship</span>
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div >
    )
}

export default Section2