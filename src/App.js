import React from 'react';
import { useState, useRef } from 'react';
import { createGlobalStyle } from 'styled-components';

import Template from './components/Template';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
// import DetailToggle from './components/DetailToggle';
// import DetailInput from './components/DetailInput';
// import DetailItem from './components/DetailItem';
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
  // console.log(data);

  const onCreateDetail = (targetId, detailContent) => {
    const newDetailItem = {
      detailId: dataIdDetail.current,
      detailContent,
      done: false,
    };
    console.log(newDetailItem);
    dataIdDetail.current += 1;
    console.log(targetId);

    const targetList = data.find((it) => it.id === targetId);
    targetList.detailTodo.push(newDetailItem);
    setData([...data]);
    console.log(`targetList : ${JSON.stringify(targetList)}`);
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

    //const updatedData = data.map((it) =>
    //  it.id === targetId
    //    ? { ...it, detailTodo: it.detailTodo.filter((detail) => detail.detailId !== targetDetailId) }
    //    : it
    // );
    // setData(updatedData);
  };

  const onEdit = (targetId, newContent, newPriority) => {
    setData(
      data.map((it) =>
        it.id === targetId
          ? { ...it, content: newContent, priority: newPriority }
          : it
      )
    );
    console.log(data);
  };

  const onChecked = (targetId) => {
    setData(
      data.map((it) => (it.id === targetId ? { ...it, done: !it.done } : it))
    );
    console.log(data);
  };

  // 잘 작동하면 아래 삭제하고 onChecked로 쓰기.
  const onCheckDetail = (targetId) => {
    console.log(data);
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
