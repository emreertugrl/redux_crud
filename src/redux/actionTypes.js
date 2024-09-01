// Projede kullanılan aksiyon tipleri bileşen içerisinde string şeklinde
// tanımlandığında dikkat dağınıklığınında sonucu , tespit edilmesi zor hatalar meydana gelebiliyor.

const actionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  //... diğer aksiyon tiplerini tanımla
};

export default actionTypes;
// ikinci yöntem
// export const ADD = "ADD";
// export const DELETE = "DELETE";
// export const UPDATE = "UPDATE";
