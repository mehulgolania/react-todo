import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import AddTodo from './add-todo';

class TodoList extends React.Component {
  constructor() {
    super()
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  state = {
    items : [
      { title: 'buy milk', status: true },
      { title: 'buy bread', status: false },
      { title: 'buy butter', status: true },
    ]
  }

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

  editTodoHandler = () => {
    alert('Edit Todo')
  }

  deleteHandler(event) {
    const itemIndex = event.target.getAttribute('deleteindex');
    const itemList = this.state.items;
    itemList.splice(itemIndex, 1);
    this.setState({
      items: itemList
    })
  }

  completeTodoHandler = () => {

  }

  render() {
    const items = this.state.items;

    return(
      <>
        <h5 className="text-primary mt-5 mb-3">Todo List</h5>
        <ListGroup>
          { 
            items && items.map((item, index) => (
              <ListGroup.Item 
                className="d-flex justify-content-between text-capitalize" 
                key={index}
                index={index}
              >
                <div><span className={item.status ? 'completed' : 'pending'}>{item.title}</span></div>
                <div>
                  { item.status ? <Badge pill variant="danger" className="span-btn" deleteindex={index} onClick={this.deleteHandler}>Delete</Badge> : 
                    <>
                      <Badge pill variant="success" className="mr-2 span-btn" onClick={this.editTodoHandler}>Edit</Badge> 
                      <Badge pill variant="info" className="span-btn">done</Badge>
                    </>
                  } 
                  
                </div>
              </ListGroup.Item>
            ))
          }
        </ListGroup>

        <AddTodo 
          addTodo={this.addTodoHandler}
        />
      </>
    );
  }
}

export default TodoList;