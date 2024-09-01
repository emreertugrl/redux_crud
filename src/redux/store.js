/*
* -	Redux kütüphanesinden “createStore” metodu import edilir.
* -	Tutulacak olan verilere göre reducerlar oluşturulur.
* -	Oluşturulan reducerlar “combineReducers” ile birşeştirilir.
* -	Store’a birleştirilen reducerlar tanıtılır.

 */

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";
// birden fazla reducer varsa bunları birleştiririz.
const rootReducer = combineReducers({ userReducer, todoReducer });
// store oluşturma
const store = createStore(rootReducer);
// const store = createStore(todoReducer); tek reducer varsa direk verilir.
// projeye tanıtmak için export edilir.
export default store;
