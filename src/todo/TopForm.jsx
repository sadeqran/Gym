import React, { useContext, useState } from "react";
import { taskContext } from "./taskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetTask = (e) => {
    setTask(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskItems([
      ...taskItems,
      { id: Math.random(), title: task, done: false },
    ]);
    setTask("");
  };

  return (
    <div>
      <h4 className="text-center text-info">به برنامه باشگاهی خوش آمدید</h4>
      <form action="" onSubmit={handleAddTask}>
        <div className="form-group d-flex">
          <input
            type="text"
            placeholder="حرکت دلخواه خود را اضافه کنید..."
            className="form-control"
            value={task}
            onChange={handleSetTask}
            autoFocus
          />

          <button type="submit" className="btn btn-success me-2">
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopForm;
