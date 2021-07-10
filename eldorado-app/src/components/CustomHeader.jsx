import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container } from 'semantic-ui-react';

const CustomHeader = ({ message }) => (
  <Container style={ { margin: '30px 0' } }>
    <Header as="h1" data-testid="top-title" color="red" textAlign="center">
      {message}
    </Header>
  </Container>
);

CustomHeader.propTypes = {
  message: PropTypes.string.isRequired,

};

export default CustomHeader;
