import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js'
import EvenAndOdd from './components/Topics/EvenAndOdd.js'
import FilterObject from './components/Topics/FilterObject.js'
import FilterString from './components/Topics/FilterString.js'
import Palindrome from './components/Topics/Palindrome.js'
import Sum from './components/Topics/Sum.js'




class App extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )

  }
}

export default App;
