import React from "react";
import { BsFillSunFill } from "react-icons/bs";

export default function ThemeToggle() {
  return (
    <div className="toggleWrap" title="Toggle theme">
      <BsFillSunFill className="themeIcon" />
    </div>
  );
}
