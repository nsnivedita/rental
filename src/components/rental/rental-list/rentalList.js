import React from 'react';
import {RentalCard} from './rentalCard';
import {connect} from 'react-redux';
import * as action from '../../../action'  ;

class RentalList extends React.Component{
    renderRental(){
        return this.props.rentals.map((rental, index)=>{
            
            console.log(rental);
          return(  <RentalCard key={index} colNum="col-md-3 col-xs-6" rental={rental} />)
        });
    }

    render(){
        return(
            <section id='rentalListing'>
            <h1 className='page-title'>Your Home All Around the World</h1>
            <div className='row'>
             {this.renderRental()}
            </div>
          </section>
        )

    }

    componentWillMount(){
        this.props.dispatch(action.fetchRentals());
    }
}

function mapStateToProps(state){
    return{
        rentals:state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalList)