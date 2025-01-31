import React, { lazy, useEffect, useState } from "react";
import { Outlet, Link, Routes, Route, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import Main from "../../../Main";

const ColorList = lazy(() => import("./ColorList"));
const Not = lazy(() => import("../../Not"));

const ColorLayout = () => {
  const [tab, setTab] = useState("0");
  const location = useLocation();

  useEffect(() => {
    setTabs();
  });

  const setTabs = () => {
    let path = location.pathname.split("/");
    let pathnm = path[path.length - 1];
    let ntab = pathnm === "list" ? "0" : pathnm === "form" ? "1" : "2";
    setTab(ntab);
  };

  const tabChng = (evt, newValue) => {
    setTab(newValue);
  };

  return (
    <Main title="" description="">
      <Tabs value={tab} onChange={tabChng} className="mb-4">
        <Tab component={Link} to="list" label="List" value="0" />
      </Tabs>

      <Routes>
        <Route path="list" element={<ColorList />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default ColorLayout;
