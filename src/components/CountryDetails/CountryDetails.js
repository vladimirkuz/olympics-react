import React from 'react';
import '../../css/App.css';
import Olympics from '../../util/Olympics';


class CountryDetails extends React.Component {

  subHeader() {
    if (this.props.details === undefined){
      return 'Server down';
    }else if (this.props.details.population === '-') {
      return 'Not valid country name'
    }else{
      return this.props.details.name;
    }
  }

  render() {
    return (
      <div>
      <h2 className="subheader">{this.subHeader()}</h2>
      <table id="country-detail-table">
        <tbody>
        <tr>
          <td className="table-descriptor">GDP/CAPITA</td>
          <td className="table-descriptor"># OF GOLD MEDALS</td>
          <td className="table-descriptor">POPULATION</td>
        </tr>
        <tr>
          <td className="table-value">{this.props.details.gdp}</td>
          <td className="table-value">{this.props.details.numberMedals}</td>
          <td className="table-value">{this.props.details.population}</td>
        </tr>
        <tr>
          <td className="table-descriptor">MOST WINS AT A SUMMER EVENT</td>
          <td className="table-descriptor">BEST OLYMPIC YEAR</td>
          <td className="table-descriptor">MOST WINS AT A WINTER EVENT</td>
        </tr>
        <tr>
          <td className="table-value">{this.props.details.bestSummer}</td>
          <td className="table-value">{this.props.details.bestYear}</td>
          <td className="table-value">{this.props.details.bestWinter}</td>
        </tr>
        <tr>
          <td className="table-descriptor">NUMBER OF MALE MEDALISTS</td>
          <td className="table-descriptor">MOST MEDALS BY A SINGLE ATHLETE</td>
          <td className="table-descriptor">NUMBER OF FEMALE MEDALISTS</td>
        </tr>
        <tr>
          <td className="table-value">{this.props.details.maleMedalists}</td>
          <td className="table-value">{this.props.details.mostMedalsAthlete}</td>
          <td className="table-value">{this.props.details.femaleMedalists}</td>
        </tr>
        <tr>
          <td className="table-descriptor">MOST MEDALED SPORT</td>
          <td className="table-descriptor">MOST MEDALED DISCIPLINE</td>
          <td className="table-descriptor">MOST MEDALED EVENT</td>
        </tr>
        <tr>
          <td className="table-value">{this.props.details.bestSport}</td>
          <td className="table-value">{this.props.details.bestDiscipline}</td>
          <td className="table-value">{this.props.details.bestEvent}</td>
        </tr>
        </tbody>
      </table>
      </div>
    );
  };
}

export default CountryDetails;
