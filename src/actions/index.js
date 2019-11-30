const menuLoaded = newMenu => {
  return {
    type: "MENU_LOADED",
    payload: newMenu
  };
};

const menuRequsted = () => {
  return {
    type: "MENU_REQUSTED"
  };
};

const menuError = () => {
  return {
    type: "MENU_ERROR"
  };
};

const addToCart = id => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id
  };
};

const deleteFromCart = id => {
  return {
    type: "ITEM_DEL_FROM_CART",
    payload: id
    
  };
};

export { menuLoaded, menuRequsted, menuError, addToCart, deleteFromCart };