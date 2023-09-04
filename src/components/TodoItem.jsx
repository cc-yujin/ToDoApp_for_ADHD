import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  MdDone,
  MdDelete,
  MdFormatListBulleted,
  MdModeEdit,
} from 'react-icons/md';
import DetailToggle from './DetailToggle';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  height: 49px;
  padding: 0 17px;
  margin: 11px 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(209, 209, 209, 0.1);
`;

const CheckCircle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 22px;
  height: 22px;

  margin-right: 9px;
  border-radius: 16px;
  border: 2px solid #ced4da;
  color: white;
  font-size: 20px;
  background: #f5f5f5;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #6793fc;
      background: #1d5ffa;
    `}
`;

const Text = styled.div`
  // border: solid 1px red;
  font-size: 15px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: #767676;
      text-decoration: line-through;
    `}

  input {
    font-size: 16px;
    width: 90%;
    border: none;
    color: #195004;
    border-bottom: 1px solid #d1d3d2;
    &:focus {
      outline: none;
    }
  }
`;

const Priority = styled.div`
  font-size: 12px;
  letter-spacing: -2.7px;

  select {
    font-size: 11px;
    text-align: center;
    letter-spacing: -2px;
    border: 1px solid #d1d3d2;
    border-radius: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 5px;
    &:focus {
      outline: none;
    }
  }
`;

const Edit = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  font-size: 20px;
  color: #fff;
  margin-left: 7px;
  border-radius: 5px;
  background: #79e252;
  &:hover {
    background-color: #70d44b;
  }
`;

const DetailToggleBtn = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  font-size: 18px;
  color: #fff;
  margin: 0 6px;
  border-radius: 5px;
  background: #5584f1;
  &:hover {
    background-color: #4e75d1;
  }
`;

const Remove = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  font-size: 20px;
  color: #fff;
  background: #ffac2f;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #ef9f28;
  }
`;

const TodoItem = ({
  onRemove,
  onEdit,
  onChecked,
  onCreateDetail,
  onRemoveDetail,
  onCheckDetail,
  id,
  content,
  done,
  priority,
  detailTodo,
  todoList,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [localContent, setLocalContent] = useState(content);
  const [localPriority, setLocalPriority] = useState(priority);

  const localContentInput = useRef(null);

  const handleRemove = () => {
    onRemove(id);
  };

  const handleEdit = () => {
    if (localContent.trim().length < 1) {
      localContentInput.current.focus();
      return;
    } else {
      setIsEdit(!isEdit);
    }
    onEdit(id, localContent, localPriority);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
    onChecked(id);
  };

  const handleDetailToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <TodoItemBlock>
        <CheckCircle onClick={handleChecked} done={done}>
          {isChecked ? (
            <>
              <MdDone />
            </>
          ) : (
            <></>
          )}
        </CheckCircle>
        <Text >
          {isEdit ? (
            <>
              <input
                ref={localContentInput}
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              />
            </>
          ) : (
            <>{localContent}</>
          )}
        </Text>

        <Priority>
          {isEdit ? (
            <>
              <select
                value={localPriority}
                onChange={(e) => setLocalPriority(e.target.value)}
              >
                <option value={'⚡️⚡️⚡️'}>⚡️⚡️⚡️</option>
                <option value={'⚡️⚡️'}>⚡️⚡️</option>
                <option value={'⚡️'}>⚡️</option>
                <option value={''}>없음</option>
              </select>
            </>
          ) : (
            <>{localPriority}</>
          )}
        </Priority>
        <Edit onClick={handleEdit}>
          <MdModeEdit />
        </Edit>
        <DetailToggleBtn onClick={handleDetailToggle}>
          <MdFormatListBulleted />
        </DetailToggleBtn>
        <Remove onClick={handleRemove}>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
      {toggle === true && (
        <DetailToggle
          todoList={todoList} // 루트 데이터
          id={id}
          detailTodo={detailTodo} // 각 아이템의 detailTodo 배열 data
          onCreateDetail={onCreateDetail}
          onRemoveDetail={onRemoveDetail}
          onCheckDetail={onCheckDetail}
        />
      )}
    </>
  );
};

export default TodoItem;
