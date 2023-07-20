export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { id: todo.id, content: todo.content, completed: !todo.completed }
            : todo
        ),
      };
    case "ADD_NEW_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return state.todos.filter((todo) => todo.id !== action.payload);
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
