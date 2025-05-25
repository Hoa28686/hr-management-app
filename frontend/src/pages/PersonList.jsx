import { useEffect, useState } from "react";
import PersonCard from "../components/PersonCard/PersonCard";
import axios from "axios";

const PersonList = ({ employeeData, handleInfoChange, error, loading }) => {
  return (
    <>
      <h1>Employee List</h1>
      <div className="list">
        {employeeData.map((em) => (
          <PersonCard
            key={em.id}
            {...em}
            handleInfoChange={handleInfoChange}
            error={error}
            loading={loading}
          />
        ))}
      </div>
    </>
  );
};

export default PersonList;
