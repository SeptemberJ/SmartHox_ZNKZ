import React, { Component } from 'react';
import {Jumbotron , Button} from "react-bootstrap";
import Carousels from '../../component/carousel/carousel.jsx';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Carousels/>
        <div class="PaddingLR_20">
        	<Jumbotron>
			  <h3>物联网一站式纵向服务</h3>
			  <p>Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。
			  </p>
			  <p>
			    <Button bsStyle="primary">Learn more</Button>
			  </p>
			</Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
