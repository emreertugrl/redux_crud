import { useDispatch } from "react-redux";
import { useRef } from "react";
import { updateTodo } from "../redux/actions";

const Modal = ({ todo, close }) => {
  // dispatch kurulumu
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleSave = () => {
    // inputtaki değere eriş
    const newText = inputRef.current.value.trim();
    // boş ise durdur
    if (!newText) return;
    // -todo nesnesini güncelle
    const updated = { ...todo, text: newText };
    // reducer'a todonun güncellenmesi gerektiğini haber vereceğiz.
    // dispatch({ type: actionTypes.UPDATE, payload: updated });
    dispatch(updateTodo(updated));
    // güncellenince modalı kapatır
    close();
  };
  return (
    <div className="modal d-block text-black w-100 h-100 bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Güncelle</h5>
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <label className="form-label my-2" htmlFor="text">
              Yeni Başlık
            </label>
            <input
              ref={inputRef}
              id="text"
              className="form-control shadow"
              type="text"
              defaultValue={todo.text}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Vazgeç
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="btn btn-primary"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
