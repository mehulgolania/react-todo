import React from 'react';
import { Button, Modal, Form } from  'react-bootstrap';

class EditTodo extends React.Component {
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
        newItem: null
      })
    }
    else {
      alert("Please enter something.");
    }
  }

  render() {
    return(
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo Item</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.submitHandler}>
              <Form.Control type="text" onChange={this.changeHandler} />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={this.submitHandler}>Update</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EditTodo;