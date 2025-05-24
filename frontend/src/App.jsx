import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";
// import { employees } from "./data/employeesData";
import axios from "axios";
import useAxios from "./hooks/useAxios";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const { get, patch, error, loading, data } = useAxios();
  const apiUrl = "https://react-hr-app.onrender.com/employees";
  useEffect(() => {
    const fetchData = async (apirurl) => {
      setEmployeeData(await get(apiUrl));
    };
    fetchData(apiUrl);
  }, []);

  const handleInfoChange = async (id, newInfo) => {
    const updatedInfo = patch(apiUrl, id, newInfo);
    setEmployeeData((prev) =>
      prev.map((em) => (em.id === id ? updatedInfo : em))
    );
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
                // onToggleChange={handleToggleField}
                // onPriceChange={handlePriceChange}
              />
            }
          />
          {/* <Route path="/books/:id" element={<BookDetail />} /> */}
          <Route
            path="/add-employee"
            element={
              <AddEmployee onAddEmployee={addNewEmployee} apiUrl={apiUrl} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
