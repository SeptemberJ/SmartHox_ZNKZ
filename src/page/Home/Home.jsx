import React, { Component } from 'react';
import {Clearfix , Grid , Row , Col , Image , Jumbotron , Button , PageHeader} from "react-bootstrap";
import Carousels from '../../component/carousel/carousel.jsx';
import Tab from '../../component/tab/tab.jsx';
import './Home.css';

  const dummySentences = [];

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousels/>

        <div className="PaddingLR_40">
        	<Jumbotron>
    			  <h3 className="Bold">物联网一站式纵向服务</h3>
    			  <p>Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。
    			  </p>
    			</Jumbotron>
          
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <Image src="img/SmartHox_Home_Icon1.png" responsive />
              <h4 className="Bold">构建设备</h4>
              <p>物联网 (IoT) 始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。</p>
            </Col>
            <Col sm={6} md={3}>
              <Image src="img/SmartHox_Home_Icon2.png" responsive />
              <h4 className="Bold">控制您的设备</h4>
              <p>部署控制、监控和管理您的设备的 IoT 解决方案，从而允许您捕获实时数据。</p>
            </Col>
            <Clearfix visibleSmBlock></Clearfix>
            <Col sm={6} md={3}>
              <Image src="img/SmartHox_Home_Icon3.png" responsive />
              <h4 className="Bold">分析数据</h4>
              <p>利用您收集的数据并应用高级分析以揭示新业务见解。</p>
            </Col>
            <Col sm={6} md={3}>
              <Image src="img/SmartHox_Home_Icon4.png" responsive />
              <h4 className="Bold">针对见解采取措施</h4>
              <p>通过功能强大的应用程序将见解转变为行动，从而创造新的收入和业务机会。</p>
            </Col>
          </Row>
          
        </div>

        <div className="Padding_40 Bg_DarkBlue">
          <h2 className="PaddingB_40 Color_White TextAlign_C">为何选择 Smart Hox IoT？</h2>
          <Row className="show-grid" className="Bg_LightBlue">
            <Col sm={6} md={6}>
              <Row className="show-grid">
                <Col md={12} className="Bg_DarkBlue PaddingT_10 PaddingB_10">
                  <h3 className="Color_White">Hox 方案优势</h3>
                </Col>
                <Col md={12} className="Bg_Blue PaddingT_10 PaddingB_10">
                  <h4>快速完成智能化，快速量产</h4>
                  <p>全标准化对接产品智能化</p>
                </Col>
                <Col md={12} className="Bg_LightBlue PaddingT_10 PaddingB_10">
                  <h4>一站式服务，成本低</h4>
                  <p>全标准化解决方案，专业保姆贴心服务</p>
                </Col>
                <Col md={12} className="Bg_Blue PaddingT_10 PaddingB_10">
                  <h4>多品牌软件灵活开发</h4>
                  <p>多品牌同时开发自动完成，周期短客户体验度高</p>
                </Col>
                <Col md={12} className="Bg_LightBlue PaddingT_10 PaddingB_10">
                  <h4>兼容主流智能终端、云平台</h4>
                  <p>支持跨品类联动、轻松接入第三方平台（Amazon Echo、Google Home、天猫精灵、小白公子、微信、Apple Siai）</p>
                </Col>
              </Row>
            </Col>
            <Col sm={6} md={6}>
              <Row className="show-grid">
                <Col md={12} className="Bg_DarkBlue PaddingT_10 PaddingB_10">
                  <h3 className="Color_White">企业传统难题</h3>
                </Col>
                <Col md={12} className="Bg_Blue PaddingT_10 PaddingB_10">
                  <h4>开发周期长</h4>
                  <p>起步难、环节多、需求急</p>
                </Col>
                <Col md={12} className="Bg_LightBlue PaddingT_10 PaddingB_10">
                  <h4>难度大、成本高</h4>
                  <p>多方合作、责任不清，独立开发、成本高</p>
                </Col>
                <Col md={12} className="Bg_Blue PaddingT_10 PaddingB_10">
                  <h4>软件OEM不灵活</h4>
                  <p>效率低、需求杂、时间成本高</p>
                </Col>
                <Col md={12} className="Bg_LightBlue PaddingT_10 PaddingB_10">
                  <h4>功能单一无法扩展</h4>
                  <p>场景封闭、趣味性低、竞争力弱</p>
                </Col>
              </Row>
            </Col>
            
           
          </Row>
        </div>

        <div className="PaddingLR_40">
          <h2 className="PaddingT_40 PaddingB_40 TextAlign_C">Smart Hox 提供智能化改造产品与服务</h2>
          <Tab/>
        </div>
      </div>
    );
  }
}

export default Home;
