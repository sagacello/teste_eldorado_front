import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

function CustomModalDevice({
  formData: { color, partNumber, categoryId },
  onHandleSubmit,
  onInputChange,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeOnDimmerClick={false}
      closeIcon
      open={open}
      trigger={<Button fluid={true}> Create Device </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Create new device" />
      <Modal.Content>
        <Form size="large">
          <Form.Input
            fluid
            icon="hand point right outline"
            iconPosition="left"
            placeholder="partNumber"
            name="partNumber"
            value={partNumber}
            onChange={(e) => onInputChange(e)}
          />
           <Form.Input
            fluid
            icon="hand point right outline"
            iconPosition="left"
            placeholder="color"
            name="color"
            value={color}
            onChange={(e) => onInputChange(e)}
          />
           <Form.Input
            fluid
            icon="hand point right outline"
            iconPosition="left"
            placeholder="categoryId"
            name="categoryId"
            value={categoryId}
            onChange={(e) => onInputChange(e)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          onClick={() => {
            setOpen(false);
            onHandleSubmit();
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CustomModalDevice;
