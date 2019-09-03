import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import TodoModal from './todo-modal';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.deleteHandler = this.deleteHandler.bind(this);
    this.showModal = React.createRef();
  }

  state = {
    items : [
      { title: 'buy milk', completed: true },
      { title: 'buy bread', completed: false },
      { title: 'buy butter', completed: true },
    ],
    show: false,
    editable: false
  }

  addTodoHandler = (newItem) => {
    let newTodoItem = {
      title: newItem,
      completed: false
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
    if (todo.completed === false){
      todo.completed = true;
    }
    let updatedTodo = this.state.items;
    this.setState({
      items: updatedTodo
    });
  }

  handleModal = () => {
    this.setState({
      editable: true
    });
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
                  <div><span className={item.completed ? 'completed' : 'pending'}>{item.title}</span></div>
                  <div>
                    {!item.completed ? <Badge pill variant="success" className="mr-2 span-btn" index={index} onClick={this.handleModal}>Edit</Badge> : ''}

                    {
                      !item.completed ? <Badge pill variant="info" className="mr-2 span-btn" index={index} onClick={this.completeTodoHandler}>{item.completed ? 'Completed' : 'Mark Completed'}</Badge>
                      : <Badge pill variant="info" className="mr-2" index={index}>{item.completed ? 'Completed' : 'Mark Completed'}</Badge> 
                    }
                    
                    <Badge pill variant="danger" className="span-btn" index={index} onClick={this.deleteHandler}>Delete</Badge>
                  </div>
                </ListGroup.Item>
              ))  : <>
                      <ListGroup.Item className='text-capitalize'>List is empty...</ListGroup.Item>
                    </>
          }
        </ListGroup>

        <TodoModal 
          addTodo={this.addTodoHandler}
          ref={this.showModal}
        />
      </>
    );
  }
}

export default TodoList;