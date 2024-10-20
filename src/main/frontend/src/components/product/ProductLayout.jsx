import React, { lazy, useEffect, useState } from "react";
import { Outlet, Link, Routes, Route, useLocation } from "react-router-dom";

import Main from "../../Main";
import { Nav, Button, Tab, Tabs } from "react-bootstrap";

import { IoMdDownload } from "react-icons/io";

const ProductForm = lazy(() => import("./ProductForm"));
const ProductList = lazy(() => import("./ProductList"));
const ProductExcelForm = lazy(() => import("./ProductExcelForm"));
const Not = lazy(() => import("../Not"));

const ProductLayout = () => {
  const path = useLocation();

  useEffect(() => {
    showDownloadBtn(path.pathname.includes("/excel"));
  }, [path]);

  const [isVisible, setIsVisible] = useState(false);

  const showDownloadBtn = (flag) => {
    setIsVisible(flag);
  };

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
        {isVisible && (
          <Nav.Item id="download">
            <Button variant="outline-success" size="sm">
              <IoMdDownload />
            </Button>
          </Nav.Item>
        )}
      </Nav>
      <Routes>
        <Route path="form" element={<ProductForm />} />
        <Route path="list" element={<ProductList />} />
        <Route path="excel" element={<ProductExcelForm />} />
        <Route path="*" element={<Not />} />
      </Routes>
      <Outlet />
    </Main>
  );
};

export default ProductLayout;
