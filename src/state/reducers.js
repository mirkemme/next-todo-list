export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED":
      return state.map((item) =>
        item.id === action.payload
          ? { id: item.id, todo: item.todo, completed: !item.completed }
          : item
      );
  }
};
