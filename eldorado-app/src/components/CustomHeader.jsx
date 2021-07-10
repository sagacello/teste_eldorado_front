import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Icon } from 'semantic-ui-react';

const CustomHeader = ({ message }) => (
  <Container style={ { margin: '30px 0' } }>
    <Header textAlign="center" color="orange" as='h1' icon>
    <Icon name='settings' />
    {message}
  </Header>
  </Container>
);

CustomHeader.propTypes = {
  message: PropTypes.string.isRequired,

};

export default CustomHeader;
