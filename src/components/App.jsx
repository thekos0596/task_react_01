import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";

import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
