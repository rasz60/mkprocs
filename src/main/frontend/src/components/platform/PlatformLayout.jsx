import React, { lazy, useState, useEffect } from "react";
import { Outlet, Routes, Route, useLocation, Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import Main from "../../Main";
const PlatformForm = lazy(() => import("./PlatformForm"));
const PlatformList = lazy(() => import("./PlatformList"));
const PlatformExcelForm = lazy(() => import("./PlatformExcelForm"));
const Not = lazy(() => import("../Not"));

const PlatformLayout = () => {
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
        <Tab component={Link} to="form" label="Form" value="1" />
        <Tab component={Link} to="excel" label="Excel" value="2" />
      </Tabs>

      <Routes>
        <Route path="form" element={<PlatformForm />} />
        <Route path="list" element={<PlatformList />} />
        <Route path="excel" element={<PlatformExcelForm />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default PlatformLayout;
