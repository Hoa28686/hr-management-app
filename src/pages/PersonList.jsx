import { useEffect } from "react";
import PersonCard from "../Components/PersonCard/PersonCard";
import axios from "axios";
const PersonList = ({ employeeData, setEmployeeData }) => {
  
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
