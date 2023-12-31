import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1; // 차지할 수 있는 영역을 꽉 채움
  margin: 24px;
  padding: 20px;
  border-radius: 10px;
  background: #f2f2f2;
  overflow: hidden scroll;
`;

const TodoList = ({
  todoList,
  onRemove,
  onEdit,
  onChecked,
  onCreateDetail,
  onRemoveDetail,
  onCheckDetail,
}) => {
  return (
    <TodoListBlock>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo} // 모든 props 전달
          todoList={todoList}
          onRemove={onRemove}
          onEdit={onEdit}
          onChecked={onChecked}
          onCreateDetail={onCreateDetail}
          onRemoveDetail={onRemoveDetail}
          onCheckDetail={onCheckDetail}
        />
      ))}
    </TodoListBlock>
  );
};

TodoList.defaultProps = {
  TodoList: [],
};

export default TodoList;
