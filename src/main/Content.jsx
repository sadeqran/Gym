import React from "react";
import { Route, Routes } from "react-router-dom";
import Chest from "../Movment/Chest";
import Leg from "../Movment/Leg";
import Arm from "../Movment/Arm";

const Content = ({ cont }) => {
  return (
    <Routes>
      <Route path="/chest" element={<Chest cont={cont} />} />
      <Route path="/arm" element={<Arm cont={cont} />} />
      <Route path="/leg" element={<Leg cont={cont} />} />
    </Routes>
  );
};

export default Content;
