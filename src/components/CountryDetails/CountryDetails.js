import React from 'react';
import Olympics from '../../util/Olympics';
import '../../css/App.css';

class CountryDetails extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {

      countryDetails: {
        'name': '-',
        'numberMedals': '-',
        'bestSummer': '-',
        'bestYear': '-',
        'bestWinter': '-',
        'bestDiscipline': '-',
        'gdp': '-',
        'population': '-',
        'bestSport': '-',
        'bestEvent': '-',
        'mostMedalsAthlete': '-',
        'femaleMedalists': '-',
        'maleMedalists': '-'
      }
    };
  }*/

  /*componentDidMount() {
    Olympics.search(this.state.countryDetails.name).then(countryDetails => {
      if(Object.keys(countryDetails).length) {
        this.setState({countryDetails: countryDetails});
      }
    });
  }*/

  render() {
    return (
      <div>
      <h2 className="subheader">{this.props.details.name}</h2>
      <table id="country-detail-table">
        <tbody>
        <tr>
          <td className="table-descriptor">GROSS DOMESTIC PRODUCT</td>
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
