import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styles from './RatingInformation.css';

export default class RatingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      currentStep,
      loading,
      handleNext,
      handleChange,
      firstName,
      lastName,
      address,
    } = this.props;


    const {
      line1,
      line2,
      city,
      region,
      postal,
    } = address;
    return (
      <div>
        <Form className={styles.form} onSubmit={handleNext}>
          <Form.Input size='large' label='First Name' type='text' name='firstName' value={firstName} onChange={handleChange} />
          <Form.Input size='large' label='Last Name' type='text' name='lastName' value={lastName} onChange={handleChange} />
          <Form.Input size='large' label='Street Address' type='text' name='addressLine1' placeholder='Apartment, suite, unit, building, floor, etc.' value={line1} onChange={handleChange} />
          <Form.Input size='large' type='text' name='addressLine2' placeholder='Street and number, P.O. box, c/o.' value={line2} onChange={handleChange} />
          <Form.Input size='large' label='City' type='text' name='addressCity' value={city} onChange={handleChange} />
          <Form.Input size='large' label='State' type='text' name='addressRegion' value={region} onChange={handleChange} />
          <Form.Input size='large' label='Zip Code' type='text' name='addressPostal' value={postal} onChange={handleChange} />
          <br />
          <Button.Group size='large' fluid>
            <Button labelPosition='left' icon='left chevron' content='Back' disabled />
            <Button
              type='submit'
              labelPosition='right'
              icon='right chevron'
              content='Next'
              disabled={
                !firstName || !lastName || !line1 || !line2 || !city || !region || !postal
              }
              loading={loading}
            />
          </Button.Group>
          <br />
        </Form>
      </div>
    );
  }
}
