import React, { useState } from 'react';
import { Card, Button, Form, Dropdown, Container, Row, Col } from 'react-bootstrap';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'not completed' });
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleAddTodo = () => {
    setTodos([...todos, { ...newTodo }]);
    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    const todoToEdit = todos[index];
    setNewTodo({
      name: todoToEdit.name,
      description: todoToEdit.description,
      status: todoToEdit.status,
    });
  };

  const handleUpdateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = { ...newTodo };
    setTodos(updatedTodos);
    setEditingIndex(null);
    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === 'all') {
      return true;
    } else {
      return todo.status === filterStatus;
    }
  });

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group controlId="formTodoName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task name"
            name="name"
            value={newTodo.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTodoDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </Form>

      <hr />

      <Dropdown className="mb-3">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Filter Status: {filterStatus}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilterStatus('all')}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilterStatus('completed')}>Completed</Dropdown.Item>
          <Dropdown.Item onClick={() => setFilterStatus('not completed')}>Not Completed</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {filteredTodos.map((todo, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{todo.name}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Card.Text>Status: {todo.status}</Card.Text>
            <Button variant="info" onClick={() => handleEditTodo(index)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDeleteTodo(index)} className="ml-2">
              Delete
            </Button>
            <Dropdown className="ml-2" onSelect={(eventKey) => handleStatusChange(index, eventKey)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Change Status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="completed">Completed</Dropdown.Item>
                <Dropdown.Item eventKey="not completed">Not Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TodoApp;

