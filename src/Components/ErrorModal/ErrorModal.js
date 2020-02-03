import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const ErrorModal = ({ open, resetError }) => (
  <Modal size='medium' open={open} onClose={resetError}>
    <Modal.Header>Something Went Wrong</Modal.Header>
    <Modal.Content>
      <p>Invalid Postal Code</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        positive
        icon='checkmark'
        labelPosition='right'
        content='Okay'
        onClick={resetError}
      />
    </Modal.Actions>
  </Modal>
);


export default ErrorModal;
