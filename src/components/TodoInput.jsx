import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const TodoInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 32px 24px 10px 24px;

  input {
    width: 238px;
    height: 48px;
    border-radius: 30px;
    background: #e0f6ff;
    border: none;
    padding: 0 18px;
    font-size: 15px;
    font-weight: 500;
    max-length: 15;
  }

  .add-btn {
    width: 80px;
    height: 48px;

    border-radius: 30px;
    background: #1d5ffa;
    border: none;

    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: #1d5aea;
    }
  }

  .priority-btn-wrapper {
    width: 80px;
    height: 48px;
    background: #fd2062;
    border-radius: 30px;
    &:hover {
      background: #ee2d66;
    }
  }

  .priority-btn {
    width: 80px;
    height: 48px;

    background: transparent;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border-radius: 30px;
    cursor: pointer;

    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    letter-spacing: -2px;
  }
`;

const TodoInput = ({ onCreate }) => {
  const todoInput = useRef();

  const [state, setState] = useState({
    //기본 상태
    content: '',
    priority: '⚡️⚡️⚡️',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.content.trim().length < 1) {
      todoInput.current.focus();
      return;
    }
    onCreate(state.content, state.priority);
    setState({
      content: '',
      priority: '⚡️⚡️⚡️',
    });
  };

  return (
    <TodoInputBlock>
      <input
        ref={todoInput}
        name='content'
        type='text'
        placeholder='오늘은 어떤 할 일이 있나요?'
        maxLength='25'
        value={state.content}
        onChange={handleChangeState}
      />
      <button className='add-btn' onClick={handleSubmit}>
        추가
      </button>
      <div className='priority-btn-wrapper'>
        <select
          className='priority-btn'
          name='priority'
          value={state.priority}
          onChange={handleChangeState}
        >
          <option value={'⚡️⚡️⚡️'}>⚡️⚡️⚡️</option>
          <option value={'⚡️⚡️'}>⚡️⚡️</option>
          <option value={'⚡️'}>⚡️</option>
          <option value={''}>없음</option>
        </select>
      </div>
    </TodoInputBlock>
  );
};

export default TodoInput;
