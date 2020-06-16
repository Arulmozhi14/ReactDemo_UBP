import React, { Component } from 'react';
import Table from '../src/Table'
import LoanDetails from '../src/EmiLoanDetails'
import Date from '../src/date'

class App extends Component {
  render () {
    return (
      <div>
        <header>Expleo header</header>
        <body>
          <div><LoanDetails></LoanDetails></div>
          <div><Table></Table></div>
          
        </body>
      </div>
    );
  }
}

export default App;
