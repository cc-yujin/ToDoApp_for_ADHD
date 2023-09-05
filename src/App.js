import React from 'react';
import { useState, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #EAF1F4;
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
  }
`;

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0); // id를 만드는 변수
  const dataIdDetail = useRef(100); // 세부항목 id를 만드는 변수

  const onCreate = (content, priority) => {
    const newItem = {
      id: dataId.current,
      content,
      priority,
      done: false,
      detailTodo: [],
    };
    console.log(newItem);
    dataId.current += 1;
    setData([...data, newItem]); // 원래 data에 newItem을 추가한다.
  };

  const onCreateDetail = (targetId, detailContent) => {
    const newDetailItem = {
      detailId: dataIdDetail.current,
      detailContent,
      detailDone: false,
    };
    dataIdDetail.current += 1;

    const targetList = data.find((it) => it.id === targetId);
    targetList.detailTodo.push(newDetailItem);
    setData([...data]);
  };

  const onRemove = (targetId) => {
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  };

  const onRemoveDetail = (targetId, targetDetailId) => {
    const targetList = data.find((it) => it.id === targetId);
    const newDetailList = targetList.detailTodo.filter(
      (it) => it.detailId !== targetDetailId
    );
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, detailTodo: newDetailList } : it
      )
    );
  };

  const onEdit = (targetId, newContent, newPriority) => {
    setData(
      data.map((it) =>
        it.id === targetId
          ? { ...it, content: newContent, priority: newPriority }
          : it
      )
    );
  };

  const onChecked = (targetId) => {
    setData(
      data.map((it) => (it.id === targetId ? { ...it, done: !it.done } : it))
    );
  };

  const onCheckDetail = (targetId, targetDetailId) => {
    const targetList = data.find((it) => it.id === targetId);
    const newDetailList = targetList.detailTodo.map((it) =>
      it.detailId === targetDetailId
        ? { ...it, detailDone: !it.detailDone }
        : it
    );

    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, detailTodo: newDetailList } : it
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHead todoList={data} />
        <TodoInput onCreate={onCreate} />
        <TodoList
          onEdit={onEdit}
          onRemove={onRemove}
          onChecked={onChecked}
          onCreateDetail={onCreateDetail}
          onRemoveDetail={onRemoveDetail}
          onCheckDetail={onCheckDetail}
          todoList={data}
        ></TodoList>
      </Template>
    </>
  );
};

export default App;
