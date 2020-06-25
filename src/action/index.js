import axios from 'axios';
import {FETCH_RENTALS_SUCCESS,FETCH_RENTAL_BY_ID_SUCCESS,FETCH_RENTALS_INIT,FETCH_RENTAL_BY_ID_INIT} from './type';



const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}


const fetchRentalsInit = () => {
  return {
    type: FETCH_RENTALS_INIT
  }
}
const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
}


export const fetchRentals = ()=>{

  return dispatch =>{
    axios.get('/api/v1/rentals')
    .then(res=> res.data)
      .then(rentals=> dispatch(fetchRentalsSuccess(rentals)));
  }
}



export const fetchRentalsById = (rentalId)=>{

 return dispatch=>{
  dispatch(fetchRentalByIdInit());

  axios.get(`/api/v1/rentals/${rentalId}`)
  .then(res=>res.data)
  .then(rental=>dispatch(fetchRentalByIdSuccess(rental)));
  }

  
  
}

