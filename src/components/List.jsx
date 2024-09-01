import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  // useSelector()
  // store'daki verilere abone olmamızı sağlar
  // bir fonksiyon alır ve o fonksiyona parametre olarak gönderir
  const { todos } = useSelector((store) => store.todoReducer);
  // console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Card todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
