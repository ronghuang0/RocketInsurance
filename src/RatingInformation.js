/* eslint-disable */

import React, { Component } from 'react';

export default class RatingInformation extends Component {
  render() {
    const { handleNext, handleChange, firstName, lastName, address } = this.props;
    const { line1, line2, city, region, postal } = address;
    return (
      <form onSubmit={handleNext}>
        <label>
          First Name:
          <input type='text' name='firstName' value={firstName} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Last Name:
          <input type='text' value={lastName}/>
        </label>
        <br />
        <label>
          Line 1:
          <input type='text' value={line1}/>
        </label>
        <br />
        <label>
          Line 2:
          <input type='text' value={line2}/>
        </label>
        <br />
        <label>
          City:
          <input type='text' value={city}/>
        </label>
        <br />
        <label>
          Region:
          <input type='text' value={region}/>
        </label>
        <br />
        <label>
          Postal:
          <input type='text' value={postal}/>
        </label>
        <br />
        <input type='submit' value='Next'/>
      </form>
    )
  }
}
