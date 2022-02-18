import MainHeader from "./main-header";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("./nav"));

import { useState, useEffect } from "react";
import ThemeToggle from "../utils/themeToggle";
import useLocalStorage from "use-local-storage";

function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState("");
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "light" : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    const defaultDark = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    setDefaultTheme(defaultDark);
    const dayLightHour = new Date().getHours();

    if (dayLightHour <= 7 || dayLightHour >= 19) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

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
