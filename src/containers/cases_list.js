import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'; 

class CasesList extends Component {

  // renderCases(caseData) {
  //   const name = caseData.results[0].name_abbreviation;
  //   const caseList = caseData.results.map(item => item.name_abbreviation);
  //   // const humidities = cityData.list.map (weather => weather.main.humidity);
  //   // const pressures = cityData.list.map(weather => weather.main.pressure);
  //   console.log(this.props.cases.results)


  //   return (
  //     <tr key={caseData.results[0].id}>
  //       <td>{name}</td>
  //       <td> {caseList} </td>
  //     </tr>
  //   );
  // }
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
          <tr>{this.renderCases} </tr>
          <td> </td>
          </tbody>
        
      </table>
    );
  }
}

function mapStateToProps({cases}) {
  return { cases};
}

export default connect(mapStateToProps)(CasesList);
