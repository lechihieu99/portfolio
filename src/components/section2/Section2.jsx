import React from "react";
import { ConfigProvider, Descriptions, Divider, Timeline } from 'antd';

import CvEng from '../../asset/file/CVEng.pdf'
import CvViet from '../../asset/file/CVViet.pdf'
import CvEngVer from '../../asset/file/CVEngNew.pdf'
import CvVietVer from '../../asset/file/CVVietNew.pdf'

import './style.css'
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
const Section2 = ({ animate }) => {
    const { t } = useTranslation()

    const items = [
        {
            key: '1',
            label: t('section2.items.key1.label'),
            children: t('section2.items.key1.children'),
        },
        {
            key: '2',
            label: t('section2.items.key2.label'),
            children: t('section2.items.key2.children'),
        },
        {
            key: '3',
            label: t('section2.items.key3.label'),
            children: '0339042674',
        },
        {
            key: '4',
            label: t('section2.items.key4.label'),
            children: t('section2.items.key4.children'),
        },
        {
            key: '5',
            label: t('section2.items.key5.label'),
            children: t('section2.items.key5.children'),
        },
        {
            key: '6',
            label: t('section2.items.key6.label'),
            children: t('section2.items.key6.children'),
        },
        {
            key: '7',
            label: t('section2.items.key7.label'),
            children: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

                    <a href={CvEngVer} download>CV - English - Lê Chí Hiếu - Basic</a>
                    <a href={CvVietVer} download>CV - Vietnam - Lê Chí Hiếu - Basic</a>
                    <a href={CvEng} download>CV - English - Lê Chí Hiếu</a>
                    <a href={CvViet} download>CV - Vietnam - Lê Chí Hiếu</a>

                </div>
            ),
        },
        {
            key: '8',
            label: t('section2.items.key8.label'),
            children: 'Front-end Developer Fresher (ReactJS)',
        },
    ];
    return (
        <div className={`${animate ? "activeSection2" : "notActiveSection2"}`} id="about" style={{ width: '100%', paddingTop: 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 1s ease-in-out' }}>
            <div className="divStyle" style={{ width: '100%', border: '1px solid rgba(255, 255, 255, 0.422)', borderRadius: '10px', padding: '32px', backgroundColor: 'rgba(0, 0, 0, 0.345)', backdropFilter: 'blur(20px)' }}>

                <Descriptions contentStyle={{ color: '#eeeeee' }} labelStyle={{ color: '#bdbdbd' }} title={(<div style={{ color: '#EEEEEE' }}>{t('section2.title')}</div>)} items={items} />

                <div style={{ lineHeight: 1.5, textAlign: 'left' }}>
                    {t('section2.text')}
                </div>
                <div style={{ textAlign: 'left', paddingTop: 24, paddingLeft: 32, color: '#eeeeee' }}>
                    <div style={{ color: '#eeeeee', lineHeight: 1.5, paddingBottom: 12 }}>{t('section2.timeline.title')}</div>
                    <Timeline
                        pending={(<div style={{ color: '#eeeeee' }}>{t('section2.pending')}</div>)}
                        reverse={false}
                        items={[
                            {
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>{t('section2.timeline.key1.line1')}</b></span>
                                        <span>{t('section2.timeline.key1.line2')}</span>
                                    </div>
                                ),
                            },
                            {
                                color: 'green',
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>{t('section2.timeline.key2.line1')}</b></span>
                                        <span>{t('section2.timeline.key2.line2')}</span>
                                    </div>
                                ),
                            },
                            {
                                color: 'green',
                                children: (
                                    <div style={{ display: 'flex', flexDirection: 'column', color: '#eeeeee' }}>
                                        <span><b>{t('section2.timeline.key3.line1')}</b></span>
                                        <span>{t('section2.timeline.key3.line2')}</span>
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