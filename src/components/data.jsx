// 데이터 기본 폼
const newItem1 = {
  content,
  priority,
  done: false,
  id: dataId.current,
  detailTodo:[],
}

// 빈 배열을 값을 둘 수 있는가? ㅇㅇ
// 세부항복 배열에 객체가 정상적으로 추가되는가?
// 세부항목 객체를 삭제할 수 있는가? 

const newItem = {
  content,
  priority,
  done: false,
  id: dataId.current,
  detailTodo:[{
    detailId: dataIdDetail.current,
    content:'',
    done:false,
  },]
}

// 투두 추가했을 때 데이터 변화
const newItemExample = {
  content: '연습하기',
  priority: '⚡️',
  done: false,
  id: 0,
  detailContent:[],
}

// 세부항목 추가했을 때 데이터 변화 
// 말이 추가지 기존 데이터를 수정(?)하는 거인듯???

const newItemExample2 = {
  content: '연습하기',
  priority: '⚡️',
  done: false,
  id: 0,
  detailContent:[{
    detailId: 100,
    content:'컴퓨터 키기',
    done:false,
  },]
}