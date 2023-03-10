// Ch7.1
/*
Task 1.) Modify the todogrid app that we implemened using the ag-grid component. 
As a default, you can change the order of the grid columns by dragging these. You can try that feature in your own app. 
We want to disable that feature in our app. 
Find the correct props from the ag-grid documentation (https://www.ag-grid.com/javascript-grid-column-properties/) and disable columns dragging.

Task 2.) You can enable row animation in the ag-grid that adds row animation to sorting and filtering. 
Find the correct props from the ag-grid documentation and enable the row animation feature.*/

import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default function TodoGrid() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  const defaultColDef = {
    suppressMovable: true,
    sortable: true,
  }

  const columnDefs = [
    {field: 'description'},
    {field: 'date'},
    {field: 'status'},
  ];

  return (
    <div>
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <div className="ag-theme-material" style={{ height: 600, width: 600, margin: 'auto' }}>
        <AgGridReact
           rowData={todos}
           defaultColDef={defaultColDef}
           columnDefs={columnDefs}
           animateRows={true}
           >
        </AgGridReact>
      </div>
    </div>
  );
}