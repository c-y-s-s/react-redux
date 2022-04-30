import {  useDispatch } from "react-redux";
import { addTodo } from "./redux/actions";

export default function AddTodo() {
  // 取出 dispatch
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addTodo(Math.random()));
      }}
    >
      addTodo
    </button>
  );
}
