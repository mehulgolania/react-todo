import React from 'react';
import { Button, Modal, Form } from  'react-bootstrap';

class TodoModal extends React.Component {
  state = {
    show: false,
    newItem: null,
  };

  handleShow = () => {
    this.setState({ 
      show: true 
    });
  }

  handleClose = () => {
    this.setState({ 
      show: false 
    });
  }

  changeHandler = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }

  submitHandler = (event) => {
    if (this.state.newItem) {
      event.preventDefault();
      const newTodoItem = this.state.newItem;
      this.props.addTodo(newTodoItem);
      this.setState({
        ...this.state,
        show: false,
      });
    }
    else {
      alert("Please enter something.");
    }
  }

  render() {
    return(
      <>
        <div className="text-center mt-5">
          <Button variant="primary" onClick={this.handleShow}>Add Item</Button>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Todo Item</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.submitHandler}>
              <Form.Control className="text-capitalize" type="text" placeholder="Enter item detail needs to be done." onChange={this.changeHandler} required />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={this.submitHandler}>Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TodoModal;