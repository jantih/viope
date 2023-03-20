// 9.1 Use MUI Tooltip component to show 'Delete todo' tooltip in your todo list app Delete button. See the image below.

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Tooltip, TextField, Stack, AppBar, Toolbar, Typography } from '@mui/material';

export default function Todolist() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
    <div className="todo">
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center">
        <TextField
          variant="standard"
          label="Description"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        <TextField
          variant="standard"
          label="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <Button
          variant="outlined"
          onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <table>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td>
                  <Tooltip title="Delete todo">
                    <IconButton size="small" color="error" onClick={() => deleteTodo(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
    </>
  );
}