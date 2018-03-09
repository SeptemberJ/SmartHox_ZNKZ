import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import './carousel.css';


class Carousels extends Component {
  render() {
    return (
        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <img alt="900x500" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="900x500" src="img/SmartHox_banner.png" />
              <Carousel.Caption>
                <h3>123Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img alt="900x500" src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
}

export default Carousels;
