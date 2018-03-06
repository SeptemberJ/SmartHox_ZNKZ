import React, { Component } from 'react';
import {Image , Navbar , Nav , NavItem , NavDropdown , MenuItem , Button} from "react-bootstrap";
import './nav.css';
// import Logo from "img/logo.png";

class TopMenu extends Component {
  changeMenu(e) {
    //alert('clicked inverse' )
      console.log(e)
  }
  render() {
    return (
      <div className="Navbar">
        <Navbar  fixedTop collapseOnSelect onSelect={(e)=>this.changeMenu(e)}>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src="img/logo.png" responsive />
              
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={'首页'} href="#">
                首页
              </NavItem>
              <NavItem eventKey={'互联网应用场景'} href="#">
                互联网应用场景
              </NavItem>
              <NavItem eventKey={'产品与服务'} href="#">
                产品与服务
              </NavItem>
              <NavItem eventKey={'关于我们'} href="#">
                关于我们
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <Button bsStyle="warning" bsSize="small">Hox SaaS平台</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopMenu;
