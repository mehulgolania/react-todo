import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import AddTodo from './add-todo';

class TodoList extends React.Component {
  state = {
    items : [
      { title: 'buy milk', status: false },
      { title: 'buy bread', status: true },
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
  
  }

  completeTodoHandler = () => {

  }


  render() {
    return(
      <>
        <h5 className="text-primary mt-5 mb-3">Todo List</h5>
        <ListGroup>
          { this.state.items &&
            this.state.items.map((item, index) => (
              <ListGroup.Item 
                className="d-flex justify-content-between text-capitalize" 
                key={index}
                index={index}
              >
                <div><span className={item.status ? 'completed' : 'pending'}>{item.title}</span></div>
                <div>
                  { item.status ? <Badge pill variant="danger" className="span-btn">Delete</Badge> : 
                    <>
                      <Badge pill variant="success" className="mr-2 span-btn">Edit</Badge> 
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
          editTodo={this.editTodoHandler}
        />
      </>
    );
  }
}

export default TodoList;