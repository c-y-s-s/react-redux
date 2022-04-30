import { ADD_USER } from "../actionType";

const initialState = {
  users: [],
};

// 創建 Reducer
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, { name: action.payload.name }],
      };
    }

    default: {
      return state;
    }
  }
}
