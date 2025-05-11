import { useEffect, useState } from "react";
import PersonCard from "../Components/PersonCard/PersonCard";
import axios from "axios";

const PersonList = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployeeData(res.data))
      .catch((e) => console.error("Axios error: ", e.message));
  }, []);
  return (
    <>
      <h1>Employee List</h1>
      <div className="list">
        {employeeData.map((e) => (
          <PersonCard key={e.id} {...e} />
        ))}
      </div>
    </>
  );
};

export default PersonList;
