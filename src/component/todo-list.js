import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import AddTodo from './add-todo';
import EditTodo from './edit-todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteHandler = this.deleteHandler.bind(this);
    this.showModal = React.createRef();
  }

  state = {
    items : [
      { title: 'buy milk', status: true },
      { title: 'buy bread', status: false },
      { title: 'buy butter', status: true },
    ],
    show: false
  }

  // STATUS
  // true = Todo completed.
  // false = Need to be complete.

  addTodoHandler = (newItem) => {
    let newTodoItem = {
      title: newItem,
      status: false
    }
    this.setState({
      ...this.state,
      items: this.state.items.concat(newTodoItem)
    });
  }

  deleteHandler(event) {
    const itemIndex = event.target.getAttribute('index');
    let itemList = this.state.items;
    itemList.splice(itemIndex, 1);
    this.setState({
      items: itemList
    });
  }

  completeTodoHandler = (event) => {
    const itemIndex = event.target.getAttribute('index');
    let todo = this.state.items[itemIndex];
    if (todo.status === false){
      todo.status = true;
    }
    let updatedTodo = this.state.items;
    this.setState({
      items: updatedTodo
    })
    console.log(updatedTodo);
  }

  handleModal = () => {
    this.showModal.current.handleShow();
  }

  render() {
    const items = this.state.items;

    return(
      <>
        <h5 className="text-primary mt-5 mb-3">Todo List</h5>
        <ListGroup>
          { 
            (items.length > 0) ? items.map((item, index) => (
                <ListGroup.Item 
                  className="d-flex justify-content-between text-capitalize" 
                  key={index}
                  index={index}
                >
                  <div><span className={item.status ? 'completed' : 'pending'}>{item.title}</span></div>
                  <div>
                    <Badge pill variant="success" className="mr-2 span-btn" index={index} onClick={this.handleModal}>Edit</Badge> 
                    <Badge pill variant="info" className="mr-2 span-btn" index={index} onClick={this.completeTodoHandler}>{item.status ? 'Completed' : 'Mark Done'}</Badge>
                    <Badge pill variant="danger" className="span-btn" index={index} onClick={this.deleteHandler}>Delete</Badge>
                  </div>
                </ListGroup.Item>
              )) : <><ListGroup.Item className='text-capitalize'>List is empty...</ListGroup.Item></>
          }
        </ListGroup>

        <AddTodo 
          addTodo={this.addTodoHandler}
        />

        <EditTodo 
          ref={this.showModal}
        />
      </>
    );
  }
}

export default TodoList;