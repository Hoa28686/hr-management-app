import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About/About";
import PersonList from "./pages/PersonList/PersonList";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import useAxios from "./hooks/useAxios";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const { get, patch, error, loading } = useAxios();
  const apiUrl = "https://react-hr-app.onrender.com/employees";

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      setEmployeeData(await get(apiUrl));
    };
    fetchData(apiUrl);
  }, []);
  console.log(error, loading);
  const handleInfoChange = async (id, newInfo) => {
    const updatedInfo = await patch(apiUrl, id, newInfo);
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
                error={error}
                loading={loading}
              />
            }
          />
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
