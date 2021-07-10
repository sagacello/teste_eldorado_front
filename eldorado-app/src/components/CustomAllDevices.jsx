import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Divider } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';

const CustomAllDevices = ({ item, deleteDevices }) => {
  return (
    <Card.Group >
      <Card style={{ padding: '10px', backgroundColor: 'rgb(230, 230, 230)' }} >
        <Card.Content style={{ padding: '1px' }}>
          <Card.Header >
            <CustomSubHeader 
              message={`${item.category.name}`}
            ></CustomSubHeader>{' '}
            <Divider />
          </Card.Header>
          <Card.Meta style={{ padding: '4px' }}>{item.color}</Card.Meta>
          <Card.Description style={{ padding: '4px' }}>{`partNumber ${item.partNumber}`}</Card.Description>
          <Card.Content extra>
          <Divider />
            <Button style={{ padding: '10px' }} onClick={() => deleteDevices(item.id)} inverted color="red">
              Excluir
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

CustomAllDevices.propTypes = {
  item: PropTypes.object.isRequired,
  deleteDevices: PropTypes.func.isRequired,
};

export default CustomAllDevices;
