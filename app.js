import React, { Component } from 'react';
import {JournalList}  from './journals/journal_list';

export default class App extends Component {
  render() {
    console.log(JournalList)
    return (
      <div className='app'>
        <h1>React, Props, and State Deep Dive</h1>
        <JournalList heading="List 1" />
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
