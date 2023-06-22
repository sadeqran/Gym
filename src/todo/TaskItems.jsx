import React, { useContext } from "react";
import { taskContext } from "./taskContext";

const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleDone = (id) => {
    const index = taskItems.findIndex((t) => t.id === id);
    let taskDone = [...taskItems];
    taskDone[index].done = !taskDone[index].done;
    setTaskItems(taskDone);
  };

  const handleDelete = (id) => {
    let newTask = taskItems.filter((t) => t.id !== id);
    setTaskItems(newTask);
  };

  if (taskItems.length) {
    return (
      <ul className="list-group m-0 p-0 mt-2">
        {taskItems.map((t) => (
          <li
            key={t.id}
            className={`list-group-item d-flex justify-content-between 
    ${t.done ? "list-group-item-success" : ""}`}
          >
            {t.title}

            <span>
              <i
                className={`me-3 pointer transition_200 text_hover_shadow ${
                  t.done
                    ? "fas fa-times text-warning"
                    : "fas fa-check text-success"
                }`}
                onClick={() => handleDone(t.id)}
              ></i>

              <i
                className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                onClick={() => handleDelete(t.id)}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h4 className="text-center text-danger mt-4">هیچ کاری ثبت نشده...!</h4>
    );
  }
};

export default TaskItems;
