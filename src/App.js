import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./redux/selectors";
import { addTodo } from "./redux/actions";
import AddTodo from "./containers/AddTodo";
import { deleteTodo } from "./redux/actions";
function App() {
  // 取出 store 裡面全部的 store
  // 但通常不會取出全部的東西
  // const state = useSelector((state)=>state)
  // console.log(state)

  // 各別取出需要的 store state
  // const todos = useSelector((store) => store.todoState.todos);
  // console.log(todos)

  // !再更進化的版本
  // redux -> 再建立 selectors.js
  const todos = useSelector(selectTodos);
  console.log(todos);
  // 取出 dispatch
  // const dispatch = useDispatch();
  const dispatch = useDispatch()
  return (
    <div>
      {/* <button
        onClick={() => {
          dispatch(addTodo(Math.random()));
        }}
      >
        add todo
      </button> */}
      <AddTodo />
      <ul>
        {todos.map((todo) => (
          <li>
            {todo.id}
            {todo.name}
            <button onClick={()=>{
              dispatch(deleteTodo(todo.div));
            }}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
