import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const DetailInputBlock = styled.div`
  // border: 1px solid brown;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;

  input {
    width: 220px;
    height: 19px;
    font-size: 13px;
    flex-direction: column;
    justify-content: center;
    margin-right: 9px;
    padding-left: 5px;
    border: none;
    border-bottom: solid 1px white;
    background: transparent;
    color: black;
    outline: none;
  }

  button {
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

    width: 20px;
    height: 20px;
    background: #4980ff;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 100px;
    cursor: pointer;
    padding:0;
  }
`;

const DetailInput = ({ onCreateDetail, id, todoList}) => {
  const detailInput = useRef();

  const [state, setState] = useState({
    detailContent: '',
  });

  const handleChangeState = (e) => {
    setState({
      detailContent: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.detailContent.trim().length < 1) {
      detailInput.current.focus();
      return;
    }
    onCreateDetail(id, state.detailContent);
    setState({ detailContent: '' });
  };

  return (
    <DetailInputBlock>
      <input
        ref={detailInput}
        name='detailContent'
        type='text'
        placeholder='더 작게 쪼개보세요!'
        maxLength={20}
        value={state.detailContent}
        onChange={handleChangeState}
      />
      <button onClick={handleSubmit}>
        <MdAdd />
      </button>
    </DetailInputBlock>
  );
};

export default DetailInput;
