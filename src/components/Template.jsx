import React from 'react';
import styled from 'styled-components';
// import TodoInput from './TodoInput';
// import TodoList from './TodoList';

const TodoTemplateBlock = styled.div`
  width: 496px;
  height: 812px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 76px;
  margin-bottom: 32px;

  background-color: #FFFFFF;
  border-radius: 30px;
  box-shadow: 4px 5px 17px 11px rgba(198, 198, 198, 0.15);
`;

const Template = ({children}) => {
  return (
    <TodoTemplateBlock>{children}</TodoTemplateBlock>
  );
};

export default Template;
