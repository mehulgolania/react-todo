import React from 'react';
import { Button, Modal, Form } from  'react-bootstrap';

class TodoModal extends React.Component {
  state = {
    show: false,
    todoItem: "",
    currentIndex: undefined,
  };

  editHandleShow = (currentItem, itemIndex) => {
    this.setState({
      show: true,
      todoItem: currentItem,
      currentIndex: itemIndex
    });
  }

  handleShow = () => {
    this.setState({ 
      show: true 
    });
  }

  handleClose = () => {
    this.setState({
      todoItem: "", 
      show: false 
    });
    this.props.handleEditable();
  }

  addHandler = (event) => {
    event.preventDefault();
    
    if (this.state.todoItem !== "") {
      const newTodoItem = this.state.todoItem;
      this.props.addTodo(newTodoItem);

      this.setState({
        todoItem: "",
        show: false,
      });
    }
    else {
      alert("Field Should not be empty");
    }
  }

  updateHandler = (event) => {
    event.preventDefault();

    if(this.state.todoItem){
      const updatedTodoItem = this.state.todoItem;
      const currentIndex = this.state.currentIndex;
      this.props.updatedItem(updatedTodoItem, currentIndex);
      this.setState({
        todoItem: "",
        show: false,
      });
    }
    else {
      alert("Field Should not be empty");
    }
  }

  changeHandler = (event) => {
    this.setState({
      todoItem: event.target.value
    });
  }

  render() {
    const isEditable = this.props.editable;
  
    return(
      <>
      {!isEditable ?
        <div className="text-center mt-5">
           <Button variant="primary" onClick={this.handleShow}>Add Item</Button>
        </div>
      : ''}

        <Modal show={this.state.show} onHide={this.handleClose} autoFocus={true}>
          <Modal.Header closeButton>
            <Modal.Title>{!isEditable ? 'Add Todo Item' : 'Edit Todo Item'}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={!isEditable ? this.addHandler : this.updateHandler}>
                <Form.Control 
                  type="text" 
                  placeholder="Enter item detail needs to be done." 
                  className="text-capitalize"
                  value={this.state.todoItem}
                  onChange={this.changeHandler}
                  autoFocus={true}
                />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button 
              type="submit" 
              variant="primary" 
              onClick={!isEditable ? this.addHandler : this.updateHandler}
            >
              {!isEditable ? 'Add' : 'Update'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TodoModal;