export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});
