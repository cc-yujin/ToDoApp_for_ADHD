import React from 'react';
import styled from 'styled-components';
import { randomQuotes } from '../data/quotes';

const TodoHeadBlock = styled.div`
  padding-top: 35px;
  padding-left: 38px;

  h1 {
    font-size: 40px;
    font-weight: 800;
    color: #1d85ff;
    margin: 0 0 17px 0;
  }

  h2 {
    font-size: 25px;
    color: #393939;
    font-weight: 700;
    margin: 0 0 7px 0;
  }

  .total-count {
    color: #60cb38;
  }

  .success-count {
    color: #fb419f;
  }

  .cheering-random {
    font-size: 15px;
    color: #323232;
    font-weight: 400;
  }
`;

const TodoHead = ({ todoList }) => {
  const doneCount = todoList.filter((it) => it.done === true);

  const randomIdx = Math.floor(Math.random() * randomQuotes.length);
  let randomCheering = randomQuotes[randomIdx].quote;

  return (
    <TodoHeadBlock>
      <h1 className='title'>오늘 할 일 📝</h1>
      <h2 className='todo-count'>
        <span className='total-count'>{todoList.length}</span>개 중{' '}
        <span className='success-count'>{doneCount.length}</span>개 완료!
      </h2>
      <div className='cheering-random'>{randomCheering}</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
