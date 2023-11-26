import { useEffect, useState } from "react";
import "./Header.css";

export function Header() {
  const [theme, setTheme] = useState(() => {
    let selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme !== null) {
      return selectedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("selectedTheme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("selectedTheme", "light");
    }
  };

  useEffect(() => {
    if (theme === "dark")
      document.querySelector("html").setAttribute("data-theme", "dark");
    else document.querySelector("html").setAttribute("data-theme", "light");
  }, [theme]);

  return (
    <>
      <div className="Header">
        <a
          className="Logo"
          aria-label="Emilio Blacksmith's Portfolio Website"
          href="./"
        ></a>
        <label htmlFor="darkMode-toggle" className="darkmode-label">
          dark mode toggle
        </label>
        <input
          className="darkModeToggle"
          type="checkbox"
          id="darkMode-toggle"
          onChange={handleDarkMode}
          defaultChecked={theme === "dark"}
        ></input>
      </div>
    </>
  );
}
