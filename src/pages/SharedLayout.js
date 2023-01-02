import { FaBars, FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "../utils/context";
import { Outlet } from "react-router-dom";
import React from "react";

const SharedLayout = () => {
  const {
    state: { direction },
    dispatch,
  } = useGlobalContext();

  return (
    <>
      <main style={{ direction }}>
        <button
          id="forHamberger"
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          className="sidebar-toggle"
        >
          <FaBars />
        </button>
        <button
          id="forTranslation"
          onClick={() => dispatch({ type: "TOGGLE_DIRECTION" })}
          className="language-toggle"
        >
          <FaLanguage />
        </button>
      </main>
      <Outlet />
    </>
  );
};

export default SharedLayout;
