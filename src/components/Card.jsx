import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteTodo, updateTodo } from "../redux/actions";

const Card = ({ todo }) => {
  // modal için state tutulur
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  // dispatch tanımlanır
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz ?")) return;
    // silinecek olan elemanın id'sini gönderme
    dispatch(deleteTodo(todo.id));
  };

  // tamamlaya basınca is_done değerini tersine çevireceğiz
  const handleStatus = () => {
    // güncel nesneyi oluştur
    const updatedTodo = { ...todo, is_done: !todo.is_done };
    //-todoya güncellemeyi haber vermek
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <div className="border shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.createdAt}</p>

      <button
        onClick={() => setIsOpen(true)}
        className=" text-light bg-primary btn"
      >
        Düzenle
      </button>
      <button onClick={handleStatus} className="btn text-light bg-success mx-3">
        {todo.is_done ? "Geri al" : "Tamamla"}
      </button>
      <button onClick={handleDelete} className="btn  text-light bg-danger">
        Sil
      </button>
      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default Card;
