import PersonCard from "../../components/PersonCard/PersonCard";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUpCircle } from "react-icons/fi";

import styles from "../../components/PersonCard/PersonCard.module.css";
import { useState } from "react";
const PersonList = ({ employeeData, handleInfoChange, error, loading }) => {
  const [searchValue, setsearchValue] = useState("");

  return (
    <>
      <h1>Employee List</h1>
      {/* <input type="text"  placeholder="Search..."/> */}
      {/* filter by department or location */}
      <div className={styles.personList}>
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
      <ScrollToTop>
        <FiArrowUpCircle />
      </ScrollToTop>
    </>
  );
};

export default PersonList;
