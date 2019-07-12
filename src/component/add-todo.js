import React from 'react';
import { Button, Modal, Form } from  'react-bootstrap';

class AddItem extends React.Component {
  state = {
    show: false
  };

  handleShow = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  render() {
    return(
      <>
        <div className="text-center mt-5">
          <Button variant="primary" onClick={this.handleShow}>Add Items</Button>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Todo Item</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Control type="text" placeholder="Enter item detail needs to be done." />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddItem;