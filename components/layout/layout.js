import MainHeader from "./main-header";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("./nav"));
import { useEffect, useState } from "react";
import ThemeToggle from "../utils/themeToggle";

function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  let defaultTheme = "light";
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    const daylight = new Date().getHours();
    if (daylight <= 7 || daylight >= 19) {
      setTheme("dark");
    }
  }, [setTheme]);

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="rootWrapper" data-theme={theme}>
      <ThemeToggle theme={theme} switchTheme={switchTheme} />
      <Nav handleMenu={handleMenu} menuOpen={menuOpen} />
      <div className="container">
        <MainHeader handleMenu={handleMenu} />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
