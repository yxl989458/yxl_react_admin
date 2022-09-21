import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../views/login";
import Layout from "../views/layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
