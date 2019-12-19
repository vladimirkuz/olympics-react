import React from 'react';
import './App.css';
import Olympics from '../../util/Olympics';
import CountryDetails from '../CountryDetails/CountryDetails';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    countryDetails: {}
  }
  this.searchDatabase = this.searchDatabase.bind(this);
}

//updates businesses state with yelp object
searchDatabase(country) {
    try{
      Olympics.search(country).then(details => {
      this.setState({countryDetails: details})
    })
    }catch(e){
      console.log(e);
    }
};

render() {
  return (
    <div className="App">
    <h1><a href='https://www.vladcancode.com'>vladcancode.com</a></h1>
    <SearchBar searchDatabase={this.searchDatabase}/>
    <CountryDetails details={this.state.countryDetails}/>
    </div>
  );
}

}

export default App;
