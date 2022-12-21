import React from "react";

export default function Navbar({ isDark, toggleTheme, MoonIcon, SunIcon }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="z-50  fixed w-full dark:bg-DarkElements shadow-md p-5 flex justify-between bg-LightBackground">
      <h2 className="font-bold dark:text-White">Where in the world?</h2>
      <div className="flex">
        {isDark ? (
          <MoonIcon className="-mr-1 ml-2 h-5 w-5 text-White" />
        ) : (
          <SunIcon className="-mr-1 ml-2 h-5 w-5" />
        )}
        <button className="ml-3 dark:text-White" onClick={toggleTheme}>
          {" "}
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
