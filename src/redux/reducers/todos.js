import { ADD_TODO,DELETE_TODO } from "../actionType";

let todoId = 0;

const initialState = {
  todos: [],
};

// 創建 Reducer
export default function todosReducer(state = initialState, action) {
  console.log(`action type`, action.type);

  // 當 type 很多的時候並不適合使用 if...else
  // 用 switch loop 會比較好
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, { id: todoId++, name: action.payload.name }],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    }
    default: {
      return state;
    }
  }
}