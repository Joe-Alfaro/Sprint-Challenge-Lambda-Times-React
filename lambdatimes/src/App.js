import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

import {tabData} from './data.js'
import {cardData} from './data.js'
import {carouselData} from './data.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tabData: [],
      cardData: [],
      carouselData: []
    };
  };

  componentDidMount(){
    this.setState({
      tabData: tabData,
      cardData: cardData,
      carouselData: carouselData
    }); 
  }

  render(){
    return (
     <div className="App">
       <TopBar />
       <Header />
       <Content tabData={this.state.tabData}/>
     </div>
    )
  };
}

export default App;
