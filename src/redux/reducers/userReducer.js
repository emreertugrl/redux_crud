const initialState = {
  user: null,
  token: null,
};
const userReducer = (state = initialState, action) => {
  // action type'ına göre state'in nasıl değişeceğine karar verilir.
  switch (action.type) {
    case "LOGIN":
      return state;

    case "REGISTER":
      return state;

    case "LOGOUT":
      return state;

    default:
      return state;
  }
};

export default userReducer;
