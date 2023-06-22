import React from "react";
import GymIndex from "../todo/Gym";

const ArmIndex = ({ cont }) => {
  const taskItemss = [
    {
      id: 1,
      title: "جلو بازو هالتر",
      done: false,
    },
    {
      id: 2,
      title: "پشت بازو تک دمبل",
      done: false,
    },
    {
      id: 3,
      title: "زیر بغل از جلو",
      done: false,
    },
    {
      id: 4,
      title: "زیر بغل قایقی",
      done: false,
    },
    {
      id: 5,
      title: "سرشانه از جلو",
      done: false,
    },
    {
      id: 6,
      title: "سرشانه از پشت",
      done: false,
    },
    {
      id: 7,
      title: "صلیب - نشر از جانب ",
      done: false,
    },
    {
      id: 8,
      title: "کول",
      done: false,
    },
  ];

  return <GymIndex taskItemss={taskItemss} cont={cont} />;
};

export default ArmIndex;
