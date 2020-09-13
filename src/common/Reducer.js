export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((ammount, item) => item.price + ammount, 0);

export const reducer = (state, action) => {
  console.log("----> " + state + "---" + action.type);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("cant remove teh product");
      }
      return { ...state, basket: newBasket };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      break;
  }
};
