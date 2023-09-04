import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
//  border: 1px solid black;
 font-family: Inter;

 padding-top: 35px;
 padding-left: 38px;

 h1 {
  font-size: 40px;
  font-weight: 800;
  color: #1D85FF;
  margin: 0 0 17px 0;
 }

 h2 {
  font-size: 25px;
  color: #393939;
  font-weight: 700;
  margin: 0 0 7px 0;
 }

 .total-count {
  color: #60CB38;
 }

 .success-count {
  color: #FB419F;
 }

 .cheering-random {
  font-size: 15px;
  color: #323232;
  font-weight: 400;
 }
`;

const TodoHead = ({todoList}) => {

  const doneCount = todoList.filter((it) => it.done === true);

  return (
    <TodoHeadBlock>
      <h1 className='title'>오늘 할 일 📝</h1>
      <h2 className='todo-count'>
        <span className='total-count'>{todoList.length}</span>개 중{' '}
        <span className='success-count'>{doneCount.length}</span>개 완료!
      </h2>
      <div className='cheering-random'>
        잘 하고 있어요! 나머지도 하나씩 해볼까요?
      </div>
    </TodoHeadBlock>
  );
};

export default TodoHead;


// total-count 받아오기
// success-count 받아오기
// cheering-random 받아오기