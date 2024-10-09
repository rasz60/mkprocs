import React, { lazy } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Main from "../../Main";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const FactoryForm = lazy(() => import("./FactoryForm"));
const FactoryList = lazy(() => import("./FactoryList"));
const Not = lazy(() => import("../Not"));

const PlatformLayout = () => {
  return (
    <Main title="" description="">
      <Nav variant="tabs" defaultActiveKey="list" className="mb-4">
        <Nav.Item>
          <Nav.Link>
            <Link to="list">List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="form">Form</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="form" element={<FactoryForm />} />
        <Route path="list" element={<FactoryList />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default PlatformLayout;
