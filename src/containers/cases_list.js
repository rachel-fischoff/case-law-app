import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'; 

class CasesList extends Component {

  renderCases () {
    return _.map(this.props.cases.results, c => {
      return(
        <td key={c.id}>
          <p>{c.name}</p>
        </td>
    )
  })
  }

  render() {
    console.log(this.props.cases.results)
   
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CaseName</th>
          </tr>
        </thead>
        <tbody>
          <tr>{this.renderCases()} </tr>
          </tbody>
        
      </table>
    );
  }
}

function mapStateToProps({cases}) {
  return { cases};
}

export default connect(mapStateToProps)(CasesList);
