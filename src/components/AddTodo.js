// components 完全不需要知道 redux 的任何東西
// 他只負責接受 props 去執行
export default function AddTodo({ addTodo }) {
  return (
    <button
      onClick={() => {
        // dispatch(addTodo(Math.random()));
        addTodo(Math.random());
      }}
    >
      addTodo
    </button>
  );
}
