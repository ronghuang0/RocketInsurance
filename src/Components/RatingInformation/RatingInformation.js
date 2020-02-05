import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import styles from './RatingInformation.css';

export default class RatingInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
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
      <Form className={styles.form} onSubmit={handleNext}>
        <Header as='h2'>
          Enter your information to see a quote:
        </Header>
        <br />
        <Form.Input size='large' label='First Name' type='text' name='firstName' value={firstName} onChange={handleChange} />
        <Form.Input size='large' label='Last Name' type='text' name='lastName' value={lastName} onChange={handleChange} />
        <Form.Input size='large' label='Street Address' type='text' name='address-line1' placeholder='Street and number' value={line1} onChange={handleChange} />
        <Form.Input size='large' type='text' name='address-line2' placeholder='Apartment, suite, unit, building, floor' value={line2} onChange={handleChange} />
        <Form.Input size='large' label='City' type='text' name='address-city' value={city} onChange={handleChange} />
        <Form.Input size='large' label='State' type='text' name='address-region' value={region} onChange={handleChange} />
        <Form.Input size='large' label='Zip Code' type='text' name='address-postal' value={postal} onChange={handleChange} />
        <br />
        <Button.Group size='large' fluid>
          <Button labelPosition='left' icon='left chevron' content='Back' disabled />
          <Button
            type='submit'
            labelPosition='right'
            icon='right chevron'
            content='Next'
            disabled={
              !firstName || !lastName || !line1 || !city || !region || !postal
            }
            loading={loading}
          />
        </Button.Group>
        <br />
      </Form>
    );
  }
}
