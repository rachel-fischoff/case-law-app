import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import CasesList from '../containers/cases_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CasesList />
      </div>
    );
  }
}
