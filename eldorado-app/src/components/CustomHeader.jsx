import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container } from 'semantic-ui-react';

const CustomHeader = ({ message }) => (
  <Container >
    <Header as="h4" data-testid="top-title" color="orange" textAlign="center">
      {message}
    </Header>
    
  </Container>
);

CustomHeader.propTypes = {
  message: PropTypes.string.isRequired,

};

export default CustomHeader;
