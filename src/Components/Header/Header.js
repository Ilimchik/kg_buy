import "./Header.css";
import { useState } from "react";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Burger from "../Burger/Burger";
import Drawer from "../Drawer/Drawer"



export default function HeaderSection() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }



  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Burger callback={toggleDrawer} />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <Menu />
          <Search />
          <div className="buttons flex">
            <Auth />
            <CartLink />
          </div>
        </div>
      </div>
    </header>
  )

}