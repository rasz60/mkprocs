import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./components/Home"));
const ModuleForm = lazy(() => import("./components/modules/ModuleForm"));
const ProcessForm = lazy(() => import("./components/processes/ProcessForm"));
const PlatformLayout = lazy(() =>
  import("./components/platform/PlatformLayout")
);
const Not = lazy(() => import("./components/Not"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules/form" element={<ModuleForm />} />
          <Route path="/processes/form" element={<ProcessForm />} />
          <Route path="/admin/platform/*" element={<PlatformLayout />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
