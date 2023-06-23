import React, { useState } from "react";
import "animate.css";
import Content from "./Content";
import Button from "./Button";

const Index = () => {
  const [cont, setCont] = useState("");
  const [name, setName] = useState("button");

  const handleClick = () => {
    setName("button up");
    setCont("up");
  };
  return (
    <>
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
    </>
  );
};

export default Index;
