const initialState = {
  menu: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: payload.map(item => ({...item, count: 0})),
        loading: false
      };
    case "MENU_REQUSTED":
      return {
        ...state,
        loading: true
      };
    case "MENU_ERROR":
      return {
        ...state,
        error: true
      };
    case "ITEM_ADD_TO_CART":
      return {
        ...state,
        menu: state.menu.map(item => {
          if(item.id === payload) {
            return {...item, count: item.count +1}
          }
          return item;
        })
      };
    case "ITEM_DEL_FROM_CART":
      return {
        ...state,
        menu: state.menu.map(item => {
          if(item.id === payload) {
            return { ...item, count: item.count-1}
          }
          return item;
        })
      }
    default:
      return state;
  }
};

export default reducer;