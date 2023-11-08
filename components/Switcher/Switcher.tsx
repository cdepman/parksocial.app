import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../hooks/useDarkMode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false,
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{
          marginBottom: "2rem",
          position: "absolute",
          right: 15,
          top: 15,
        }}
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
}
