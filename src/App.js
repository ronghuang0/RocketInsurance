/* eslint-disable */

import React, { Component } from 'react';
import RatingInformation from './RatingInformation';

class App extends Component {
  state = {
    currentStep: 0,
    firstName: '',
    lastName: '',
    address: '',
    deductibleOptions: [],
    asteroidCollisionOptions: [],
    deductibleSelection: undefined,
    asteroidCollisionSelection: undefined
  }

  handleNext = () => {

  }

  handleBack = () => {

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if(name.includes('address')) {
      const addressDetail = name.slice(7);
      this.setState((state)=>{
        return {
          address: {
            ...state.address,
            [addressDetail]: value
          }
        }
      })
    } else {
      console.log('hi', name, value)
      this.setState( {
        [name]: value
      })
    }
  }

  render() {
    const { currentStep, firstName, lastName, address } = this.state;
    return (
      <>
        { currentStep === 0 && <RatingInformation handleChange = {this.handleChange} firstName={firstName} lastName={lastName} address={address}/> }
        { /*currentStep === 1 && <QuoteOverview handleChange = {handleChange}/>*/ }
      </>
    );
  }
}

export default App;
