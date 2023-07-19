export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload
          ? { id: todo.id, content: todo.content, completed: !todo.completed }
          : todo
      );
    case "ADD_NEW_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
