import React from 'react'
import Button from '@components/Button'
import { useTodos } from '../../hooks/useTodos';

const Home = () => {
  const { todos } = useTodos();
  return (
    <div>
      Home
      <Button />
      <ul>
        {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home