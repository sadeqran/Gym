import React from "react";
import GymIndex from "../todo/Gym";

const FeetIndex = ({ cont }) => {
  const taskItemss = [
    {
      id: 1,
      title: "اسکات پا",
      done: false,
    },
    {
      id: 2,
      title: "پرس پا",
      done: false,
    },
    {
      id: 3,
      title: "هاگ پا دستگاه",
      done: false,
    },
    {
      id: 4,
      title: "جلو پا",
      done: false,
    },
    {
      id: 5,
      title: "خیاطه",
      done: false,
    },
    {
      id: 6,
      title: "پشت پا",
      done: false,
    },
    {
      id: 7,
      title: "فیله",
      done: false,
    },
    {
      id: 8,
      title: "ساق پا",
      done: false,
    },
    {
      id: 9,
      title: "خط V",
      done: false,
    },
  ];

  return <GymIndex taskItemss={taskItemss} cont={cont} />;
};

export default FeetIndex;
