import logo from './logo.svg';
import './App.css';
import { Button, Col, Layout, Row, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import MenuComponents from './components/menu/Menu';
import Section1 from './components/section1/Section1';
import { useEffect, useState } from 'react';
import Background from './components/background/Background';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'black',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0f1115',
  overflow: 'hidden'
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#000000',
};
function App() {
  const [current, setCurrent] = useState('home');
  const [section2, setSection2] = useState(false)
  const [section3, setSection3] = useState(false)
  const [section4, setSection4] = useState(false)
  const [section5, setSection5] = useState(false)

  const [animateSection2, setAnimateSection2] = useState(false)
  const [animateSection3, setAnimateSection3] = useState(false)

  const [animateSection4, setAnimateSection4] = useState({
    animate1: false,
    animate2: false,
    animate3: false
  })
  const [animateSection5, setAnimateSection5] = useState({
    animate1: false,
    animate2: false
  })


  useEffect(() => {
    window.addEventListener('scroll', () => {
      const height = window.innerHeight
      const home = document.getElementById('home')
      const about = document.getElementById('about')
      const project = document.getElementById('project')
      const skill = document.getElementById('skill')
      const contact = document.getElementById('contact')

      elementInViewport2(home) && setCurrent('home')
      elementInViewport2(about) && setCurrent('about')
      elementInViewport2(skill) && setCurrent('skill')
      elementInViewport2(contact) && setCurrent('contact')
      elementInViewport2(project) && setCurrent('project')

      if (about.getBoundingClientRect().top - window.scrollY < height / 2 && about.getBoundingClientRect().top - window.scrollY > 0) {
        setSection2(true)
      }
      if (project.getBoundingClientRect().top < height / 2 + 100) {
        setSection3(true)
      }
      if (skill.getBoundingClientRect().top < height / 2 + 100) {
        setSection4(true)
      }
      if (contact.getBoundingClientRect().top < height / 2 + 100) {
        setSection5(true)
      }
    })

  }, [])

  useEffect(() => {
    if (section2) {
      setAnimateSection2(true)
    }
  }, [section2])

  useEffect(() => {
    if (section3) {
      setAnimateSection3(true)
    }
  }, [section3])

  useEffect(() => {
    if (section4) {
      setAnimateSection4({ animate1: true, animate2: false, animate3: false })

      setTimeout(() => {
        setAnimateSection4({ animate1: true, animate2: true, animate3: false })
      }, 500)

      setTimeout(() => {
        setAnimateSection4({ animate1: true, animate2: true, animate3: true })
      }, 1000)
    }
  }, [section4])

  useEffect(() => {
    if (section5) {
      setAnimateSection5({ animate1: true, animate2: false })

      setTimeout(() => {
        setAnimateSection5({ animate1: true, animate2: true })
      }, 500)
    }
  }, [section5])

  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight / 2) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset + 200 &&
      (left + width) > window.pageXOffset
    );
  }

  return (
    <>
      <Background />
      <div className="App-header" style={{ width: '100%' }}>


        <Layout>
          <Header style={headerStyle}>
            <MenuComponents current={current} setCurrent={setCurrent} />
          </Header>
          <Content style={contentStyle}>
            <Row>
              <Col span={window.innerWidth < 600 ? 1 : 2}></Col>
              <Col span={window.innerWidth < 600 ? 22 : 20}>
                <Section1 setCurrent={setCurrent} />
                <Section2 animate={animateSection2} />
                <Section3 animate={animateSection3} />
                <Section4 animate={animateSection4} />
                <Section5 animate={animateSection5} />
              </Col>
              <Col span={window.innerWidth < 600 ? 1 : 2}></Col>
            </Row>

          </Content>
          <Footer style={footerStyle}>Thank you for your visit</Footer>
        </Layout>
      </div>
    </>
    //   </div>
    // </div>
  );
}

export default App;
