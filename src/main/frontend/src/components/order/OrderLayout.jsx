import React, { lazy } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Main from "../../Main";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const OrderList = lazy(() => import("./OrderList"));
const OrderForm = lazy(() => import("./OrderForm"));
const OrderExcelForm = lazy(() => import("./OrderExcelForm"));
const Not = lazy(() => import("../Not"));

const OrderLayout = () => {
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
        <Nav.Item>
          <Nav.Link eventKey="excel">
            <Link to="excel">bulk</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="form" element={<OrderForm />} />
        <Route path="list" element={<OrderList />} />
        <Route path="excel" element={<OrderExcelForm />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default OrderLayout;
