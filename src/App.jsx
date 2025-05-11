<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import axios from "axios";
=======
import { useState } from "react";
>>>>>>> Stashed changes
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
<<<<<<< Updated upstream
// import { employees } from "./data/employeesData";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

=======
import { employees } from "./data/employeesData";

function App() {
  const [employeeData, setEmployeeData] = useState(employees);
>>>>>>> Stashed changes
  const addNewEmployee = (newEmployee) => {
    setEmployeeData((prev) => [...prev, newEmployee]);
  };

<<<<<<< Updated upstream
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployeeData(res.data))
      .catch((e) => console.error("Axios error: ", e.message));
  }, []);

=======
>>>>>>> Stashed changes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: (
            <PersonList
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
            />
          ),
        },
        {
          path: "/add-employee",
          element: <AddEmployee onAddEmployee={addNewEmployee} />,
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
