import MainHeader from "./main-header";
import Nav from "./nav";
import { useState } from "react";
import ThemeToggle from "../utils/themeToggle";

function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="rootWrapper" data-theme="light">
      <ThemeToggle />
      <Nav handleMenu={handleMenu} menuOpen={menuOpen} />
      <div className="container">
        <MainHeader handleMenu={handleMenu} />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
