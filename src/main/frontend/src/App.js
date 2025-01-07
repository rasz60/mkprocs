import React, { Suspense, lazy, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { handleChng, ListItem, loader } from "../src/assets/js/common";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./components/Home"));
const ModuleForm = lazy(() => import("./components/modules/ModuleForm"));
const ProcessForm = lazy(() => import("./components/processes/ProcessForm"));
const PlatformLayout = lazy(() =>
  import("./components/platform/PlatformLayout")
);
const FactoryLayout = lazy(() => import("./components/factory/FactoryLayout"));
const ProductLayout = lazy(() => import("./components/product/ProductLayout"));
const CategoryLayout = lazy(() =>
  import("./components/product/category/CategoryLayout")
);
const OrderLayout = lazy(() => import("./components/order/OrderLayout"));
const Not = lazy(() => import("./components/Not"));

export const Ctx = createContext();

const App = () => {
  const contextMethods = { handleChng, ListItem, loader };

  return (
    <Ctx.Provider value={contextMethods}>
      <BrowserRouter>
        <Suspense fallback={<Main />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/processes/form" element={<ProcessForm />} />
            <Route path="/admin/modules/form" element={<ModuleForm />} />
            <Route path="/admin/orders/*" element={<OrderLayout />} />
            <Route path="/admin/product/*" element={<ProductLayout />} />
            <Route path="/admin/factory/*" element={<FactoryLayout />} />
            <Route path="/admin/platform/*" element={<PlatformLayout />} />
            <Route
              path="/admin/product/category/*"
              element={<CategoryLayout />}
            />
            <Route path="/*" element={<Not />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Ctx.Provider>
  );
};

export default App;
