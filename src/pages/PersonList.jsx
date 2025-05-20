import { useEffect, useState } from "react";
import PersonCard from "../Components/PersonCard/PersonCard";
import axios from "axios";

const PersonList = ({ employeeData, handleInfoChange }) => {
  return (
    <>
      <h1>Employee List</h1>
      <div className="list">
        {employeeData.map((em) => (
          <PersonCard
            key={em.id}
            {...em}
            handleInfoChange={handleInfoChange}
            message={message}
          />
        ))}
      </div>
    </>
  );
};

export default PersonList;
