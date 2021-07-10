import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';

const CustomAllDevices = ({ index, item, deleteDevices }) => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Card.Header>
            <CustomSubHeader
              message={`${item.category.name}`}
            ></CustomSubHeader>{' '}
          </Card.Header>
          <Card.Meta>{item.color}</Card.Meta>
          <Card.Description>{`partNumber ${item.partNumber}`}</Card.Description>
          <Card.Content extra>
            <Button onClick={() => deleteDevices(item.id)} inverted color="red">
              Excluir
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

CustomAllDevices.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomAllDevices;
