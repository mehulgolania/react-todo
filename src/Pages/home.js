import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from '../component/todo-list';

function Home() {
  return(
    <>
      <Container>
        <TodoList />
      </Container>
    </>
  );
}

export default Home;
