import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
import { employees } from "./data/employeesData";

function App() {
  const [employeeData, setEmployeeData] = useState(employees);
  const addNewEmployee = (newEmployee) => {
    setEmployeeData((prev) => [...prev, newEmployee]);
  };

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
