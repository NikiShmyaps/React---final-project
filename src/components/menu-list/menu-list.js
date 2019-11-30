import React, { Component } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import WithRestoService from "../hoc";
import { menuLoaded, menuRequsted, menuError, addToCart } from "../../actions/";
import Spinner from "../spinner";
import Error from "../error";

import "./menu-list.scss";

class MenuList extends Component {
  componentDidMount() {
    const { RestoService, menuRequsted, menuItems, menuLoaded, menuError } = this.props;
    if (!menuItems.length) {
      menuRequsted();
      RestoService.getMenuItems()
        .then(res => menuLoaded(res))
        .catch(menuError);
    }
  }
  render() {
    const { menuItems, loading, error, addToCart } = this.props;
    if (error) {
      return <Error />;
    }
    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="menu__list">
        {menuItems.map(menuItem => (
          <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={() => addToCart(menuItem.id)}/>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({menu, loading, error}) => {
  return {
    menuItems: menu,
    loading,
    error
  };
};

const mapDispatchToProps = {
  menuLoaded,
  menuRequsted,
  menuError,
  addToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));