import actionTypes from "../actionTypes";

/*
action tanımları bileşen içerisinde çok fazla kod tekrarına ve kod kalabalığına sebep olabiliyor.
*/
export const addTodo = (payload) => {
  return { type: actionTypes.ADD, payload };
};
export const deleteTodo = (payload) => {
  return { type: actionTypes.DELETE, payload };
};
export const updateTodo = (payload) => {
  return { type: actionTypes.UPDATE, payload };
};
