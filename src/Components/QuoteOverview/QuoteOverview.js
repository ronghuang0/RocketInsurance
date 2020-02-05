import React from 'react';
import {
  Form,
  Dropdown,
  Button,
  Statistic,
  Label,
} from 'semantic-ui-react';
import optionsBuilder from '../../utils';
import styles from './QuoteOverview.css';

const QuoteOverview = ({
  premium,
  deductible,
  asteroidCollision,
  handleChange,
  handleBack,
}) => {
  const deductibleOptions = optionsBuilder(deductible.values);
  const asteroidCollisionOptions = optionsBuilder(asteroidCollision.values);

  return (
    <Form className={styles.form}>
      <Statistic className={styles.statistic} size='tiny'>
        <Statistic.Label>Premium</Statistic.Label>
        <Statistic.Value>{premium}</Statistic.Value>
      </Statistic>
      <Form.Field>
        <label>{deductible.title}</label>
        <Dropdown
          name='deductible-selection'
          defaultValue={deductible.selection}
          fluid
          selection
          options={deductibleOptions}
          onChange={handleChange}
        />
        <Label.Detail>{deductible.description}</Label.Detail>
      </Form.Field>
      <br />
      <Form.Field>
        <label>{asteroidCollision.title}</label>
        <Dropdown
          name='asteroidCollision-selection'
          defaultValue={asteroidCollision.selection}
          fluid
          selection
          options={asteroidCollisionOptions}
          onChange={handleChange}
        />
        <Label.Detail>{asteroidCollision.description}</Label.Detail>
      </Form.Field>
      <br />
      <Button.Group size='large' fluid>
        <Button labelPosition='left' icon='left chevron' content='Back' onClick={handleBack} />
        <Button
          labelPosition='right'
          icon='right chevron'
          content='Next'
          disabled
        />
      </Button.Group>
    </Form>
  );
};

export default QuoteOverview;
