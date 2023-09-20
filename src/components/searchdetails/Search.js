import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';

import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      returnTrip: true,
      departureDate: moment(),
      returnDate: moment().add(1, 'day'),
      passengers: 1,
      price: {
        min: 0,
        max: 10000,
      },
      cities:["DELHI","PUNE","GOA","JAIPUR","MUMBAI"],
      passenger:["1","2","3","4","5","6","7","8","9","10"]
    }
  }

  handleSearch(event) {
    this.props.handleSearch({
      flights: this.props.flights,
      searchstring: {
        returnTrip: this.state.returnTrip,
        originCity: this.originCity.value,
        destinationCity: this.destinationCity.value,
        departureDate: this.state.departureDate,
        returnDate: this.state.returnDate,
        passengers: this.passengers.value,
        price: this.state.price
      }
    });
    event.preventDefault();
  }

  handleTrip(tab) {
    let returnTrip = (tab === 1) ? false : true;
    this.setState({ returnTrip });
  }

  changeDepartureDate(departureDate) {
    this.setState({ departureDate: moment(departureDate._d) });
  }

  changeReturnDate(returnDate) {
    this.setState({ returnDate: moment(returnDate._d) });
  }


  render() {

    return (
      <div className="search__box">
      <div class="column">
        <img src="/assets/gallery1.jpg" alt="Nature" />
      </div>
      <div class="column">
      <img src="/assets/gallery2.jpg" alt="Nature" />
      </div>
      <div class="column">
      <img src="/assets/gallery3.jpg" alt="Nature" />
      </div>
      <div class="column">  
      <img src="/assets/gallery4.jpg" alt="Nature" />
      </div>
    </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    flights: state.flights,
    searchstring: state.searchstring
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (data) => dispatch({ state: data, type: "all" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);