import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import TablePage from "pages/TablePage";

import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </>
  );
};
