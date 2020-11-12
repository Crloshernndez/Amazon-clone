export const addToBasket = (payload) => ({
  type: "ADD_TO_BASKET",
  item: payload,
});

export const removeFromBasket = (payload) => ({
  type: "REMOVE_FROM_BASKET",
  id: payload,
});

export const setUser = (payload) => ({
  type: "SET_USER",
  user: payload,
});
