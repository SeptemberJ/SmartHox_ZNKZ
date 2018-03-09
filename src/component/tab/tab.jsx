import React, { Component } from 'react';
import {Clearfix , Grid , Row , Col , Image , Jumbotron , Button , PageHeader , Glyphicon , Pager} from "react-bootstrap";
import './tab.css';

class Tab extends Component {
  constructor(props) {
      super(props);
      this.state = {
          CurTab: 0
      }
  }
  ChangeTab(Idx) {
    this.setState({
        CurTab: Idx
    })
  }
  render() {
    return (
      <div className="Tab">
        <Row className="show-grid">

          <Col xs={12} md={3}>
            <Row className="show-grid">
              <Col className={this.state.CurTab == 0?"PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_DarkBlue": "PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_Block"} xs={4} md={12} onClick={()=>this.ChangeTab(0)}>
                <Image className="MarginC" src="img/SmartHox_Icon_global.png" responsive />
                <h4>物联基础套件</h4>
              </Col>
              <Col className={this.state.CurTab == 1?"PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_DarkBlue": "PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_Block"} xs={4} md={12} onClick={()=>this.ChangeTab(1)}>
                <Image className="MarginC" src="img/SmartHox_Icon_react.png" responsive />
                <h4>物联数据存储</h4>
              </Col>
              <Col className={this.state.CurTab == 2?"PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_DarkBlue": "PaddingT_10 PaddingB_10 CursorPoint TextAlign_C Color_White Bg_Block"} xs={4} md={12} onClick={()=>this.ChangeTab(2)}>
                <Image className="MarginC" src="img/SmartHox_Icon_circleci.png" responsive />
                <h4>物联安全套件</h4>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={9}>
            <Row className="show-grid PaddingLR_20">
              {(()=> {
                  if (this.state.CurTab == 0) {
                      return <Col xs={12} md={12}>
                                <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />物联基础套件</h3>
                                <p>以物管理为核心的开发模型致力于成为云端描述真实世界的再载体，提供设备管理，数据接入，协议解析等基础功能，更方便对接时序数据库，物可视等产品服务。</p>
                                <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />相关产品</h3>
                                <Image className="MarginC" src="img/SmartHox_TabImg1.png" responsive />
                                <Button  className="MarginC MarginT_40" bsStyle="primary">立即申请</Button>
                              </Col>
                  }
                  if (this.state.CurTab == 1) {
                      return <Col xs={12} md={12}>
                                <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />物联数据存储</h3>
                                <p>以物管理为核心的开发模型致力于成为云端描述真实世界的再载体，提供设备管理，数据接入，协议解析等基础功能，更方便对接时序数据库，物可视等产品服务。</p>
                                <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />相关产品</h3>
                                <Image className="MarginC" src="img/SmartHox_TabImg1.png" responsive />
                                <Button  className="MarginC MarginT_40" bsStyle="primary">立即申请</Button>
                              </Col>
                  }
                  return <Col xs={12} md={12}>
                            <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />物联安全套件</h3>
                            <p>以物管理为核心的开发模型致力于成为云端描述真实世界的再载体，提供设备管理，数据接入，协议解析等基础功能，更方便对接时序数据库，物可视等产品服务。</p>
                            <h3><Glyphicon className="Color_DarkBlue" glyph="glyphicon glyphicon-triangle-right" />相关产品</h3>
                            <Image className="MarginC" src="img/SmartHox_TabImg1.png" responsive />
                            <Button  className="MarginC MarginT_40" bsStyle="primary">立即申请</Button>
                          </Col>
              })()}
              
              
              
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tab;
