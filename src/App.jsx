import React, { Component } from 'react';
import TopMenu from './component/nav/nav.jsx';


class App extends Component {
  changeMenu(e) {
    //alert('clicked ' )
      console.log(e)
  }
  render() {
    return (
      <div className="App">
        <TopMenu/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
