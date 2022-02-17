import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function ThemeToggle({ switchTheme, theme }) {
  return (
    <div className="toggleWrap" title="Toggle theme" onClick={switchTheme}>
      {theme === "dark" ? (
        <BsFillSunFill className="themeIcon" />
      ) : (
        <BsFillMoonFill className="themeIcon" />
      )}
    </div>
  );
}
