import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice } from './TodoSliceReducer';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import {  todoRemaning } from '../../redux/selectors';
export default function TodoList() {
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const todoList = useSelector(todoRemaning)
  function handleInputChange(e) {
    setName(e.target.value)
  }
  function handleSelectChange(value) {
    setPriority(value)
  }
  const dispatch = useDispatch();
  function handleAddClick() {
    dispatch(todoSlice.actions.addTodo({
      id: uuid(),
      name,
      priority,
      competed: false

    }))

  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => {
          return <Todo id={todo.id} key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={handleInputChange} />
          <Select value={priority} onChange={handleSelectChange} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
