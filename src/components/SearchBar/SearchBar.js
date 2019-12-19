import React from 'react';
import '../../css/App.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {country: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      country: event.target.value
    });
  }

  handleSubmit(event) {
    if (this.state.country){
    this.props.searchDatabase(this.state.country);
  }

    event.preventDefault();
  }

  render() {

    return (
        <div id="search">
          <form onSubmit={this.handleSubmit}>
            <div id="country-search">
              <input type="text" id="country-search-input" placeholder="Search for a country" onChange={this.handleChange} />
            </div>
            <input type="submit" value="SEARCH" id="country-search-button" />
          </form>
        </div>
    );
  }
};

export default SearchBar;
