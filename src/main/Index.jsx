import React, { useState } from "react";
import "animate.css";
import Content from "./Content";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";

const Index = () => {
  const [cont, setCont] = useState("");
  const [name, setName] = useState("button");

  const handleClick = () => {
    setName("button pink");
    setCont("pink");
  };
  return (
    <BrowserRouter>
      <div className="d-flex justify-content-center top-250">
        <Button
          targetpath="/chest"
          title="Chest"
          name={name}
          handleClick={handleClick}
        />

        <Button
          targetpath="/leg"
          title="Legs"
          name={name}
          handleClick={handleClick}
        />

        <Button
          targetpath="/arm"
          title="Arms"
          name={name}
          handleClick={handleClick}
        />
      </div>

      <Content cont={cont} />
    </BrowserRouter>
  );
};

export default Index;
