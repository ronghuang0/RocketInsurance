import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import RatingInformation from './Components/RatingInformation/RatingInformation';
import QuoteOverview from './Components/QuoteOverview/QuoteOverview';
import ErrorModal from './Components/ErrorModal/ErrorModal';
import getQuote from './requests';
import styles from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 'RatingInformation',
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
      premium: undefined,
      deductible: {
        title: '',
        description: '',
        values: [],
        selection: undefined,
      },
      asteroidCollision: {
        title: '',
        description: '',
        values: [],
        selection: undefined,
      },
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

    this.setState({ loading: true });
    try {
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
      const resp = await getQuote(req);
      if (!resp.ok) {
        throw resp;
      }
      const { quote } = await resp.json();
      const { premium } = quote;
      const { deductible } = quote.variable_options;
      deductible.selection = quote.variable_selections.deductible;
      const asteroidCollision = quote.variable_options.asteroid_collision;
      asteroidCollision.selection = quote.variable_selections.asteroid_collision;
      this.setState({
        currentStep: 'QuoteOverview',
        premium,
        deductible,
        asteroidCollision,
      });
    } catch (error) {
      try {
        const body = await error.json();
        const errorMap = {
          invalid_postal_code: 'Invalid Zip Code',
        };
        this.setState({
          error: errorMap[body.errors.address.postal],
        });
      } catch (e) {
        this.setState({
          error: 'Error',
        });
      }
    }
    this.setState({ loading: false });
  }

  handleBack = (e) => {
    e.preventDefault();
    this.setState({
      currentStep: 'RatingInformation',
    });
  }

  resetError = () => {
    this.setState({
      error: '',
    });
  }

  handleChange = (e, { name, value }) => {
    if (name.includes('-')) {
      const stateSections = name.split('-');
      this.setState((state) => (
        {
          [stateSections[0]]: {
            ...state[stateSections[0]],
            [stateSections[1]]: value,
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
      deductible,
      asteroidCollision,
      premium,
    } = this.state;

    return (
      <>
        <Header id={styles.header} as='h1'>
          <Image src='/assets/rocket.png' />
          Rocket Insurance
        </Header>
        { currentStep === 'RatingInformation'
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
        { currentStep === 'QuoteOverview'
          && (
          <QuoteOverview
            deductible={deductible}
            asteroidCollision={asteroidCollision}
            premium={premium}
            handleChange={this.handleChange}
            handleBack={this.handleBack}
          />
          )}
        { error
          && <ErrorModal open={!!error} resetError={this.resetError} message={error} />}
      </>
    );
  }
}
