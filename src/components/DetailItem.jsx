import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {
  MdDone,
  MdDelete,
} from 'react-icons/md';

const DetailItemBlock = styled.div`
  border: 1px solid pink;
  display: flex;
  align-items: center;
  width: 315px;
  height: 49px;
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
  border: solid 1px red;
  width: 100%;
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

const DetailItem = ({ detailTodo, onCheckDetail, onRemoveDetail, id, detailId,detailContent }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    onCheckDetail(id, detailId);
  }

  const handleRemove = () => {
    onRemoveDetail(id, detailId);
  }

  return(
  <DetailItemBlock>
    <CheckCircle onClick={handleChecked}>
    {isChecked ? (
            <>
              <MdDone />
            </>
          ) : (
            <></>
          )}
    </CheckCircle>
    <Text>{detailContent}</Text>
    <Remove onClick={handleRemove}>
      <MdDelete />
    </Remove>
  </DetailItemBlock>

)};

export default DetailItem;
