import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './flights.css'

class FlightDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReturnTrip: true,
      bookingText: 'Book this flight',
      disabled:false
    }
    this.updateSeatsAvailable = this.updateSeatsAvailable.bind(this);
  }

  updateSeatsAvailable(event) {
    this.setState({bookingText: 'Booked',disabled:true});
    this.props.flight.ticketavailable  = this.props.flight.ticketavailable - 1 ;
    this.props.updateSeatsAvailable({
      flights: this.props.flight,
      searchstring: this.props.searchstring

    });
    event.preventDefault();
  }


  render() {
    let flight = this.props.flight;
    flight.depart_time = moment(flight.depart_date).format("hh:mm A");
    flight.arrive_time = moment(flight.arrive_date).format("hh:mm A");

    let returnTrip = flight.return_trip;
    returnTrip.depart_time = moment(returnTrip.depart_date).format("hh:mm A");
    returnTrip.arrive_time = moment(returnTrip.arrive_date).format("hh:mm A");    

    return (
      <div className="flight" ref="flightRef">
        <div className="flightinfo__details">
         Watch out this space for more information
      </div>     
      
      </div>    
    );
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
    updateSeatsAvailable: (data) => dispatch({ state: data, type: "updateseats" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetails);
