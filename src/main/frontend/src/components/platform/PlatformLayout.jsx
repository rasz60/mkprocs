import React, { lazy } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Main from "../../Main";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const PlatformForm = lazy(() => import("./PlatformForm"));
const PlatformList = lazy(() => import("./PlatformList"));
const Not = lazy(() => import("../Not"));

const PlatformLayout = () => {
  return (
    <Main title="" description="">
      <Nav variant="tabs" defaultActiveKey="list" className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="list">
            <Link to="list">List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="form">
            <Link to="form">Form</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="form" element={<PlatformForm />} />
        <Route path="list" element={<PlatformList />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default PlatformLayout;
