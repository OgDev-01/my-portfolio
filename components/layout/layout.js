import MainHeader from "./main-header";
import Nav from "./nav";
import { useState } from "react";
import ThemeToggle from "../utils/themeToggle";
import useLocalStorage from "use-local-storage";


function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const defaultDark = "dark";
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const dayLightHour = new Date().getHours();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleDaylightSwitch = () => {
    if (dayLightHour <= 7 || dayLightHour >= 19) {
      setTheme(defaultDark);
    } else {
      setTheme("light");
    }
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
        <main theme={theme} >{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
