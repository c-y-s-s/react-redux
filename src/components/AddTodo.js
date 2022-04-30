import { useState } from "react";

// components 完全不需要知道 redux 的任何東西
// 他只負責接受 props 去執行
export default function AddTodo({ addTodo }) {
  const [value , setValue] = useState('')
  return (
    <>
    <input value={value} onChange={e=>{
      setValue(e.target.value)
    }}></input>
      <button
        onClick={() => {
          // dispatch(addTodo(Math.random()));
          addTodo(value);
          setValue('')
        }}
      >
        addTodo
      </button>
    </>
  );
}
