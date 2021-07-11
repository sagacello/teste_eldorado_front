import React from 'react';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

function CustomModalCategory({
  formData: { name },
  onHandleSubmit,
  onInputChange,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeOnDimmerClick={false}
      closeIcon
      open={open}
      trigger={<Button fluid={true}> Create Category </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Create new category" />
      <Modal.Content>
        <Form size="large">
          <Form.Input
            fluid
            icon="hand point right outline"
            iconPosition="left"
            placeholder="category"
            name="name"
            value={name}
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

export default CustomModalCategory;
