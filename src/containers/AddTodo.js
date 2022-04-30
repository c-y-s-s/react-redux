
// 引用 connect
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import AddTodo from "../components/AddTodo";


// 用來拿 store 的 function
const mapStateToProps =(store)=>{
    console.log("sssss",store)
    return {
        todos:store.todoState.todos,
    }
}

// const mapDispatchToProps = dispatch =>{
//     console.log("ddddd",dispatch)
//     return {
//         addTodo:(payload)=>{
//             dispatch(addTodo(payload))
//         }
//     }
// }
// ! 改良寫法
const mapDispatchToProps = {
    addTodo,
}



// connect 會回傳一個 function

// 第一個參數會給我 redux 整個 store 再回傳自己要的props
// 放入指定的 function 就會傳整個 store 進去了

// const connectTostore = connect(mapStateToProps, mapDispatchToProps);
// // 把 AddTodo 放進來這個 function
// const ConnectedAddTodo = connectTostore(AddTodo);
// // export 就可以跟 redux 串接起來
// export default ConnectedAddTodo
// // smart component , container

// !上面三行可以簡化成這一行
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)