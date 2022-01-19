export const productReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedCart = state.data.map((item) => {
      if (item.id === action.payload) {
        item.quantity = item.quantity + 1;
        return { ...item };
      }
      return item;
    });
    return { ...state, data: updatedCart };
  }

  return state;
};
