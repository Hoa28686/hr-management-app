import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
// import { employees } from "./data/employeesData";
import axios from "axios";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://react-hr-app.onrender.com/employees")
      .then((res) => setEmployeeData(res.data))
      .catch((e) => console.error("Axios error: ", e.message));
  }, []);

  const handleInfoChange = (id, newInfo) => {
    axios
      .patch(`https://react-hr-app.onrender.com/employees/${id}`, newInfo)
      .then((res) => {
        setEmployeeData((prev) =>
          prev.map((em) => (em.id === id ? res.data : em))
        );
        setMessage("Employee information updated successfuly!");
      })
      .catch((e) => console.error("Axios error: ", e.message));
  };
  const addNewEmployee = (newEmployee) => {
    setEmployeeData((prev) => [...prev, newEmployee]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/about" element={<About />} />
          <Route
            index
            element={
              <PersonList
                employeeData={employeeData}
                handleInfoChange={handleInfoChange}
                message={message}
                // onToggleChange={handleToggleField}
                // onPriceChange={handlePriceChange}
              />
            }
          />
          {/* <Route path="/books/:id" element={<BookDetail />} /> */}
          <Route
            path="/add-employee"
            element={<AddEmployee onAddEmployee={addNewEmployee} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
