import React, { lazy } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Main from "../../Main";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const OrderList = lazy(() => import("./OrderList"));
const OrderForm = lazy(() => import("./OrderForm"));
const Not = lazy(() => import("../Not"));

const OrderLayout = () => {
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
        <Route path="form" element={<OrderForm />} />
        <Route path="list" element={<OrderList />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default OrderLayout;
