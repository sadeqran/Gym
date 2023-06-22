import React from "react";
import GymIndex from "../todo/Gym";

const ChestIndex = ({ cont }) => {
  const taskItemss = [
    {
      id: 1,
      title: "پرس سینه",
      done: false,
    },
    {
      id: 2,
      title: "بالا سینه هالتر",
      done: false,
    },
    {
      id: 3,
      title: "قفسه سینه",
      done: false,
    },
    {
      id: 4,
      title: "جلو بازو سیم کش",
      done: false,
    },
    {
      id: 5,
      title: "پشت بازو سیم کش",
      done: false,
    },
    {
      id: 6,
      title: "جلو بازو لاری",
      done: false,
    },
    {
      id: 7,
      title: "بارفیکس",
      done: false,
    },
  ];

  return <GymIndex taskItemss={taskItemss} cont={cont} />;
};

export default ChestIndex;
