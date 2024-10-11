import React, { lazy } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Main from "../../../Main";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const CategoryForm = lazy(() => import("./CategoryForm"));
const CategoryList = lazy(() => import("./CategoryList"));
const Not = lazy(() => import("../../Not"));

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
        <Route path="form" element={<CategoryForm />} />
        <Route path="list" element={<CategoryList />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default PlatformLayout;
