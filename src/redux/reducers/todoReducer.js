import { toast } from "react-toastify";
import { v4 } from "uuid";
import actionTypes from "../actionTypes";
toast;

/*
-	State’in nasıl değişeceğine karar verir.
-	Reducer normal bir fonksiyondur ve 2 parametre alır.
-	State: reducer’da tutulan verinin son durumu
-	Action: state’in nasıl değişmesi gerektiğini söyleyen nesne
-	Not-1: reducer fonksiyonunda return edilen veri state’in son hali olur.
-	Not-2: useReducerdan farklı olarak initialState’i state parametresine varsayılan değer olarak atarız.
*/
const initialState = {
  todos: [],
};
const todoReducer = (state = initialState, action) => {
  // console.log(action);
  // action type'ına göre state'in nasıl değişeceğine karar verilir.
  switch (action.type) {
    case actionTypes.ADD:
      // - todo nesnesi oluştur
      const newTodo = {
        id: v4(),
        text: action.payload,
        is_done: false,
        createdAt: new Date().toLocaleDateString(),
      };
      // nesneyi diziye ekle
      const added = state.todos.concat(newTodo);

      toast.success("Todo oluşturuldu");
      // state'i güncelle

      return { todos: added };
    // delete aksiyonu tetiklenirse
    case actionTypes.DELETE:
      // silinecek olan elemanın id'sini alma
      const deleteID = action.payload;
      // state'den silme işlemi
      const filtered = state.todos.filter((todo) => todo.id !== deleteID);
      toast.error("Todo Silindi");

      // state'i güncelleme
      return { todos: filtered };

    // UPDATE aksiyonu tetiklenirse dizideki eski elemanın yerine günceli koymak
    case actionTypes.UPDATE:
      const updated = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      toast.info("Todo Güncellendi");

      return { todos: updated };

    default:
      return state;
  }
};

export default todoReducer;
