import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {sidebar} from '../sidebar/sidebar';



export class Header extends React.Component{
  constructor() {
  super();
  
  this.state = {
  leftOpen: [1]
  }
  this.addSidebar=this.addSidebar.bind(this);
  
  }
  
  toggleSidebar = (event) => {
  let key = `${event.currentTarget.parentNode.id}Open`;
  this.setState({ [key]: !this.state[key] });
  }
  rendeSidebar(){
  return this.state.leftOpen.map(()=>{
    return <sidebar/>
  });
  }
  addSidebar(){
 const leftOpen = this.state.leftOpen;
 leftOpen.push(1);
  
  this.setState({
  leftOpen
  });
  }
  
  render(){
 // let leftOpen = this.state.leftOpen ? 'open' : 'closed';
  
  return(
  <nav className='navbar navbar-dark navbar-expand-lg'>
  <div >
  <button onClick={this.addSidebar()}><i class="fa fa-bars" aria-hidden="true"></i></button>
  <div  >
  {this.rendeSidebar()}
  </div>
  </div>
  <div className='container'>
  <Link className='navbar-brand' to='/rentals'>BookWithMe</Link>
  <form className='form-inline my-2 my-lg-0'>
  <input className='form-control mr-sm-2 bwm-search' type='search' placeholder='Try "New York" ' aria-label='Search'></input>
  <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' type='submit'>Search</button>
  </form>
  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
  <span className='navbar-toggler-icon'></span>
  </button>
  <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
  <div className='navbar-nav ml-auto'>
  <a className='nav-item nav-link active' href=''>Login <span className='sr-only'>(current)</span></a>
  <a className='nav-item nav-link' href=''>Register</a>
  </div>
  </div>
  </div>
  </nav>
  )
  }
  }
  
