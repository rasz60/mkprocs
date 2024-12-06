import React, { lazy, useEffect, useState } from "react";
import { Outlet, Routes, Route, Link, useLocation } from "react-router-dom";
import { Tabs, Tab, Grid2, Box } from "@mui/material";
import { WarehouseRounded } from "@mui/icons-material";
import Main from "../../Main";

const FactoryForm = lazy(() => import("./FactoryForm"));
const FactoryList = lazy(() => import("./FactoryList"));
const FactoryExcelForm = lazy(() => import("./FactoryExcelForm"));
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
        <Route path="form" element={<FactoryForm />} />
        <Route path="list" element={<FactoryList />} />
        <Route path="excel" element={<FactoryExcelForm />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default PlatformLayout;
