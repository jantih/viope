// 9.1 Use MUI Tooltip component to show 'Delete todo' tooltip in your todo list app Delete button. See the image below.
// 9.2 Add save icon to the Add button of your todo list app. See the image below. You can find the following example from the MUI documentation (Buttons with icon and label).
// 9.3 Use MUI DataGrid component instead of HTML table in your todolist app from the previous exercise (see the screenshot at the end).

import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { TextField, Stack, AppBar, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


export default function Todolist() {
  const [todo, setTodo] = useState({ id: '', description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, id: new Date().toString(), [event.target.name]: event.target.value });
  }
  const addTodo = () => {
    setTodos([...todos, todo]);
  }
  const columns = [
    {field: 'description', headerName: 'Description', flex: 1},
    {field: 'date', headerName: 'Date', minWidth: 20},
  ];
  const rows = todos.map((row) => ({
    id: row.id,
    description: row.description,
    date: row.date,
  }));

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
          variant="outlined" startIcon={<SaveIcon />}
          onClick={addTodo}>
          Add
        </Button>
      </Stack>
      <div style={{height: 400, width: '100%'}}>
      <DataGrid rows={rows} columns={columns} getRowId={(rows) => rows.id}/>
      </div>
    </div>
    </>
  );
}