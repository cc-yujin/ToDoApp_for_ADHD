import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdOutlineRemove } from 'react-icons/md';

const DetailItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 40px;
  margin-bottom: 5px;
  padding: 0;
`;

const CheckCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 7px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  color: white;
  font-size: 17px;
  background: #f5f5f5;
  cursor: pointer;
  ${(props) =>
    props.detailDone &&
    css`
      border: 1px solid #6793fc;
      background: #1d5ffa;
    `}
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 0 13px;
  width: 313px;
  height: 28px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(209, 209, 209, 0.1);
  font-size: 13px;
  flex: 1;
  ${(props) =>
    props.detailDone &&
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 7px;

  width: 21px;
  height: 21px;
  background: #ffac2f;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
`;

const DetailItem = ({
  id,
  detailId,
  detailContent,
  detailDone,
  onCheckDetail,
  onRemoveDetail,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    onCheckDetail(id, detailId);
  };

  const handleRemove = () => {
    onRemoveDetail(id, detailId);
  };

  return (
    <DetailItemBlock>
      <CheckCircle onClick={handleChecked} detailDone={detailDone}>
        {isChecked ? (
          <>
            <MdDone />
          </>
        ) : (
          <></>
        )}
      </CheckCircle>
      <Text detailDone={detailDone}>{detailContent}</Text>
      <Remove onClick={handleRemove}>
        <MdOutlineRemove />
      </Remove>
    </DetailItemBlock>
  );
};

export default DetailItem;
