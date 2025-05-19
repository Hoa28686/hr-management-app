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
        {employeeData.map((em) => (
          <PersonCard key={em.id} {...em} setEmployeeData={setEmployeeData} />
        ))}
      </div>
    </>
  );
};

export default PersonList;
