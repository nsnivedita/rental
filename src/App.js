import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import {Header} from './components/shared/header/header';
import {sidebar} from './components/shared/sidebar/sidebar';
import RentalList from './components/rental/rental-list/rentalList';
import RentalDetail from './components/rental/rental-detail/rentalDetail'

import './App.css';

class App extends Component {
  render(){
    const store = require('./reducer').init();
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Header />
         <div className='container'>
          <Route exact path='/' render={() =>  <Redirect to='/rentals' /> }/>
          <Route exact path='/rentals' component={RentalList   } />
          <Route exact path='/rentals/:id' component={RentalDetail  }/>
        </div>
      </div>
      </BrowserRouter>
   </Provider>
  );
  }
}

export default App;
