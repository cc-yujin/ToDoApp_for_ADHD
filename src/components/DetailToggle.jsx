import React from 'react';
import styled from 'styled-components';
import DetailInput from './DetailInput'
import DetailItem from './DetailItem'

const DetailToggleBlock = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 391px;
  height: 155px;
  border-radius: 10px;
  background: #dcdcdc;
`;


const DetailToggle = ({onCreateDetail, onRemoveDetail, onCheckDetail , id, todoList, detailTodo}) => {
  
  return (
    <DetailToggleBlock>
      <DetailInput onCreateDetail={onCreateDetail} todoList={todoList} id={id}/>
      {detailTodo.map((todo) => (
        <DetailItem
          key={todo.id} 
          id={id}
          todoList={todoList}
          detailTodo={detailTodo}
          onCreateDetail={onCreateDetail}
          onRemoveDetail={onRemoveDetail}
          onCheckDetail={onCheckDetail}
          />))}
    </DetailToggleBlock>
  );
};

export default DetailToggle;
