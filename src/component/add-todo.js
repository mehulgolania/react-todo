import React from 'react';
import { Button, Modal, Form } from  'react-bootstrap';

class AddItem extends React.Component {
  state = {
    show: false,
    newItem: null,
  };

  handleShow = () => {
    this.setState({ 
      ...this.state, 
      show: true 
    });
  }

  handleClose = () => {
    this.setState({ 
      ...this.state, 
      show: false 
    });
  }

  changeHandler = (event) => {
    this.setState({
      ...this.state,
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
      // this.setState({
      //   ...this.state,
      //   newItem: null,
      //   show: false
      // })
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
              <Form.Control type="text" placeholder="Enter item detail needs to be done." onChange={this.changeHandler} />
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

export default AddItem;