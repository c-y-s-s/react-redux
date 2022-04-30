// redux 提供的 api
import { combineReducers } from "redux";
import todos from "./todos";
import users from "./users";

// 原本寫法 todos,users 只是 todos:todos,users:users 的簡寫
// 它主要是代表 todos 要用哪個 reducers 去負責
// export default combineReducers({
//   todos,
//   users,
// });

// ! 最後寫法可把前面的名字改成自己所要的
export default combineReducers({
  todoState:todos,
  users: users,
  
});


// {
//     todos:{
//         todos:[]
//     },
//     users:{
//         users:[]
//     }
// }