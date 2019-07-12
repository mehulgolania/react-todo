import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import AddTodo from './add-todo';

class TodoList extends React.Component {
  state = {
    items : [
      { title: 'buy milk', status: false },
      { title: 'buy milk', status: false },
    ]
  }

  render() {
    return(
      <>
        <h5 className="text-primary mt-5 mb-3">Todo List</h5>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            <div>Text</div> 
            <div><Badge pill variant="success">Edit</Badge> <Badge pill variant="danger">Delete</Badge></div>
          </ListGroup.Item>
        </ListGroup>

        <AddTodo />
      </>
    );
  }
}

export default TodoList;