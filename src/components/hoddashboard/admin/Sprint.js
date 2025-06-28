import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./Sprint.css";
import TopNav from "../TopNav";
import moment from "moment"; // Add this for easier date manipulation
import EditTask from "./EditTask";

const Sprint = () => {
  const { activities } = useParams();
  const decodedActivities = decodeURIComponent(activities);
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    completed: [],
  });
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [taskId, setTaskId] = useState(null);
  console.log("Editing Task:", editingTask);
  console.log("Show Modal:", showModal);

  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken");
      const response = await axios.get(
        `${apiUrl}/api/tasks?activity=${encodeURIComponent(decodedActivities)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Initialize tasksByStatus with expected statuses
      const tasksByStatus = {
        todo: [],
        inProgress: [],
        completed: [],
      };

      // Check if response.data.tasks exists and is an array
      if (Array.isArray(response.data.tasks)) {
        response.data.tasks.forEach((task) => {
          const status = task.status || "todo"; // Default to 'todo' if no status
          const isArchived = task.archived; // Assuming there's an archived flag

          // Filter out archived or completed tasks
          if (isArchived) {
            return; // Skip archived or completed tasks
          }

          if (tasksByStatus.hasOwnProperty(status)) {
            tasksByStatus[status].push({
              ...task,
              formattedDate: formatDate(task.day),
            });
          } else {
            console.warn(`Unexpected task status: ${status}`, task);
          }
        });
      } else {
        console.error(
          "Invalid response format: tasks is not an array",
          response.data
        );
      }

      setTasks(tasksByStatus);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [decodedActivities]);

  const formatDate = (isoDate) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(isoDate).toLocaleString("en-US", options);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (newTaskTitle.trim()) {
      const newTask = {
        title: newTaskTitle,
        day: new Date().toISOString(),
        activities: decodedActivities,
        status: "todo", // Set default status to 'todo'
      };

      try {
        const token = localStorage.getItem("jwtToken");
        const response = await axios.post(`${apiUrl}/api/save-task`, newTask, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 201 || response.status === 200) {
          const savedTask = response.data.task; // Use the backend's task object
          setTasks((prevTasks) => ({
            ...prevTasks,
            todo: [
              ...prevTasks.todo,
              {
                ...savedTask,
                formattedDate: formatDate(savedTask.day),
              },
            ],
          }));
          setNewTaskTitle(""); // Clear task input after adding
        } else {
          console.error("Failed to add task:", response);
        }
      } catch (error) {
        if (error.response) {
          console.error("Backend error response:", error.response.data);
        } else {
          console.error("Error adding task:", error);
        }
      }
    }
  };

  const onDragEnd = async (result) => {
    const { source, destination } = result;

    // Check if the task was dropped outside a column
    if (!destination) return;

    // Check if the task was dropped in the same column and position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Clone the current state to avoid direct mutation
    const updatedTasks = { ...tasks };

    // Get the source and destination arrays
    const sourceTasks = Array.from(updatedTasks[source.droppableId]);
    const destinationTasks = Array.from(updatedTasks[destination.droppableId]);

    // Remove the task from the source array
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // Update the task's status locally
    movedTask.status = destination.droppableId;

    // Add the task to the destination array
    destinationTasks.splice(destination.index, 0, movedTask);

    // Update the tasks object locally
    updatedTasks[source.droppableId] = sourceTasks;
    updatedTasks[destination.droppableId] = destinationTasks;

    // Set the updated state
    setTasks(updatedTasks);

    // API call to update task status in the backend
    try {
      const token = localStorage.getItem("jwtToken"); // Retrieve the token
      const response = await axios.put(
        `${apiUrl}/api/update-task-status/${movedTask._id}`, // Backend API endpoint
        { status: movedTask.status }, // Send the updated status
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add authorization header
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Task status updated successfully on the backend");
        // Re-fetch tasks to sync frontend and backend
        fetchTasks(); // Use your existing fetchTasks function here
      } else {
        console.error("Failed to update task status:", response);
      }
    } catch (error) {
      console.error("Error updating task status:", error);
      // Optional: Revert the local state if the API call fails
      const revertedTasks = { ...tasks };
      revertedTasks[source.droppableId] = sourceTasks;
      revertedTasks[destination.droppableId] = destinationTasks.filter(
        (task) => task._id !== movedTask._id
      );
      revertedTasks[source.droppableId].splice(source.index, 0, movedTask);
      setTasks(revertedTasks);
    }

    console.log("Updated Tasks:", updatedTasks);
    console.log("Completed Tasks:", updatedTasks.completed);
  };

  const updateTableData = async () => {};

  return (
    <body>
      <div className="main-wrapper">
        {/*}  <SideNav />*/}
        <TopNav />
        <div
          className="page-wrapper"
          style={{ marginBottom: "100px", width: "100%", margin: "auto" }}
        >
          <div className="content">
            <div className="sprint-container">
              <h2 className="sprint-title">Sprint Board for {activities}</h2>
              <p className="sprint-description">
                Break down your activities between columns to manage your
                progress.
              </p>

              {loading ? (
                <p>Loading tasks...</p>
              ) : (
                <DragDropContext onDragEnd={onDragEnd}>
                  <div className="columns-container">
                    {["todo", "inProgress", "completed"].map((status) => (
                      <Droppable key={status} droppableId={status}>
                        {(provided) => (
                          <div
                            className="column"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <h3>{status === "todo" ? "To-Do" : status}</h3>

                            {Array.isArray(tasks[status]) &&
                            tasks[status].length > 0 ? (
                              tasks[status].map((task, index) => {
                                // Ensure the task has a valid _id
                                if (!task || !task._id) {
                                  console.error("Task is missing '_id':", task);
                                  return null; // Skip invalid task
                                }

                                return (
                                  <Draggable
                                    key={task._id}
                                    draggableId={task._id.toString()}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <div
                                        className="task"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                      >
                                        <div className="task-content">
                                          <h4>{task.title}</h4>
                                          <p>
                                            {new Date(
                                              task.day
                                            ).toLocaleDateString()}
                                          </p>
                                        </div>

                                        <FaEdit
                                          style={{ color: "#28a745" }}
                                          onClick={(e) => {
                                            e.stopPropagation(); // Prevent drag-and-drop interference
                                            setEditingTask(task); // Set the task for editing
                                            setShowModal(true); // Show the modal
                                          }}
                                        />
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })
                            ) : (
                              <p></p>
                            )}

                            {status === "todo" && (
                              <div className="task-input-card">
                                <textarea
                                  type="text"
                                  placeholder="Enter task title..."
                                  value={newTaskTitle}
                                  onChange={(e) =>
                                    setNewTaskTitle(e.target.value)
                                  }
                                  className="task-input"
                                />
                                <button
                                  onClick={handleAddTask}
                                  className="add-task-btn"
                                >
                                  Add Task
                                </button>
                              </div>
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    ))}
                  </div>
                </DragDropContext>
              )}
            </div>
          </div>

          {showModal && (
            <EditTask
              showModal={showModal}
              setShowModal={setShowModal}
              editingTask={editingTask}
              updateTableData={fetchTasks}
            />
          )}
        </div>
      </div>
    </body>
  );
};

export default Sprint;
