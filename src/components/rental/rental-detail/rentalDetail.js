import React from 'react';
import {connect} from 'react-redux';
import * as action from '../../../action'  ;

 class RentalDetail extends React.Component{

    componentWillMount(){
        const rentalId = this.props.match.params.id;
        this.props.dispatch(action.fetchRentalsById(rentalId));
    }
    render(){
        const rental = this.props.rental;
        
        if (rental._id) {
          return (
            <section id='rentalDetails'>
  <div className='upper-section'>
    <div className='row'>
      <div className='col-md-6'>
        <img src={rental.image} alt=''></img>
      </div>
      <div className='col-md-6'>
        <img src={rental.image} alt=''></img>
      </div>
    </div>
  </div>

  <div className='details-section'>
    <div className='row'>
      <div className='col-md-8'>
        <div className='rental'>
          <h2 className={`rental-type ${rental.category}`}>{rental.shared} {rental.category}</h2>
          <h1 className='rental-title'>{rental.title}</h1>
          <h2 className='rental-city'>{rental.city}</h2>
          <div className='rental-room-info'>
            <span><i className='fa fa-building'></i>{rental.bedrooms} bedrooms</span>
            <span><i className='fa fa-user'></i> {rental.bedrooms + 4} guests</span>
            <span><i className='fa fa-bed'></i> {rental.bedrooms + 2} beds</span>
          </div>
          <p className='rental-description'>
            {rental.description}
          </p>
          <hr></hr>
          <div className='rental-assets'>
            <h3 className='title'>Assets</h3>
            <div className='row'>
              <div className='col-md-6'>
                <span><i className='fa fa-asterisk'></i> Cooling</span>
                <span><i className='fa fa-thermometer'></i> Heating</span>
                <span><i className='fa fa-location-arrow'></i> Iron</span>
              </div>
              <div className='col-md-6'>
                <span><i className='fa fa-desktop'></i> Working area</span>
                <span><i className='fa fa-cube'></i> Washing machine</span>
                <span><i className='fa fa-cube'></i> Dishwasher</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-4'> BOOKING</div>
    </div>
  </div>
</section>)
        } else {
          return (
            <h1> Loading... </h1>
            )
        }
      }
    
    
}
function mapStateToProps(state) {
    return{
        rental:state.rental.data  
    }
    
}

export default connect(mapStateToProps)(RentalDetail)