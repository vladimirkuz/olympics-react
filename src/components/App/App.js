import React from 'react';
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

    <h1 id='banner'><a href='https://www.vladcancode.com'>vladcancode.com</a></h1>

    <div className="logo">
    <div className="img-container">
    <img src={require('./logo.png')} alt='logo'/>
    </div>
    <h1 id='title'>Gold Medal Count</h1>
    </div>

    <div className="container">
    <SearchBar searchDatabase={this.searchDatabase}/>
    <CountryDetails details={this.state.countryDetails}/>
    </div>

    </div>
  );
}

}

export default App;
