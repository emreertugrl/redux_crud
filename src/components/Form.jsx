import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTodo } from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();
    if (!text) return toast.warn("Lütfen içeriği belirleyiniz.");
    // reducer'a yeni todo ekleme
    dispatch(addTodo(text));
    // formu sıfırla
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        type="text"
        placeholder="örn: Typescript projesi yap"
      />
      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default Form;
