import React, { Component } from 'react';
import RatingInformation from './Components/RatingInformation/RatingInformation';
import ErrorModal from './Components/ErrorModal/ErrorModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: '0',
      loading: false,
      firstName: '',
      lastName: '',
      address: {
        line1: '',
        line2: '',
        city: '',
        region: '',
        postal: '',
      },
      // deductibleOptions: [],
      // asteroidCollisionOptions: [],
      // deductibleSelection: undefined,
      // asteroidCollisionSelection: undefined
    };
  }

  handleNext = async () => {
    const {
      firstName,
      lastName,
      address,
    } = this.state;

    const {
      line1,
      line2,
      city,
      region,
      postal,
    } = address;

    const req = {
      first_name: firstName,
      last_name: lastName,
      address: {
        line_1: line1,
        line_2: line2,
        city,
        region,
        postal,
      },
    };
    this.setState({ loading: true });
    try {
      const resp = await fetch('https://fed-challenge-api.sure.now.sh/api/v1/quotes', {
        method: 'post',
        body: JSON.stringify(req),
      });
      if (!resp.ok) {
        throw resp;
      }
      const json = await resp.json();
    } catch (error) {
      try {
        const body = await error.json();
        // Here is already the payload from API
        console.log(body);
        this.setState({
          error: body.errors.address.postal,
        });
      } catch (e) {
        console.log("Error parsing promise");
        console.log(error);
        this.setState({
          error: 'error',
        });
      }
    }
    this.setState({ loading: false });
  }

  handleBack = () => {

  }

  resetError = () => {
    this.setState({
      error: '',
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address')) {
      const addressDetail = name.slice(7).toLowerCase();
      this.setState((state) => (
        {
          address: {
            ...state.address,
            [addressDetail]: value,
          },
        }
      ));
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const {
      currentStep,
      firstName,
      lastName,
      address,
      loading,
      error,
    } = this.state;
    return (
      <>
        { currentStep === '0'
          && (
            <RatingInformation
              loading={loading}
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              firstName={firstName}
              lastName={lastName}
              address={address}
            />
          )}
        { /* currentStep === 1 && <QuoteOverview handleChange = {handleChange}/> */ }
        { error
          && <ErrorModal open={!!error} resetError={this.resetError} />}
      </>
    );
  }
}

export default App;
