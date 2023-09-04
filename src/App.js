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
      detailTodo:[],
    };
    console.log(newItem);
    dataId.current += 1;
    setData([...data, newItem]); // 원래 data에 newItem을 추가한다.
  };
  console.log(data);

  const onCreateDetail = (targetId, detailContent) => {
    const newDetailItem = {
      id: dataIdDetail.current,
      detailContent,
      done: false,
    };
    console.log(newDetailItem);
    dataIdDetail.current += 1;
    console.log(targetId);

    const 수정할객체 = data.find((it) => it.id === targetId);
    console.log(`수정할객체 : ${JSON.stringify(수정할객체)}`);
    수정할객체.detailTodo.push(newDetailItem);

    setData([...data]);
  }

  const onRemove = (targetId) => {
    console.log(`onRemove ${targetId}`);
    const newTodoList = data.filter((it) => it.id !== targetId);
    console.log(newTodoList);
    setData(newTodoList);
  };

  const onRemoveDetail = (targetId) => {
    console.log('세부 항목 삭제');
    // const newDetailList = data.detailTodo.filter((it) => it.id !== targetId);
    // setData(newDetailList);
  }

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
  }

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
        >
        </TodoList>
      </Template>
    </>
  );
};

export default App;
