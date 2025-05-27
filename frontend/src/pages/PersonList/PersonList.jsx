import PersonCard from "../../components/PersonCard/PersonCard";

import styles from "./PersonList.module.css";
import { useState } from "react";
const PersonList = ({ employeeData, handleInfoChange, error, loading }) => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandle = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredEmployees = employeeData.filter((em) => {
    const search = searchValue.toLowerCase();
    const matchSearch = em.name.includes(search) || em.title.includes(search);
    return matchSearch;
  });

  if (loading) return <h1>Loading . . .</h1>;
  if (error) return <h1 className={styles.error}>Error: {error.message}</h1>;

  return (
    <>
      <h1>Employee List</h1>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchText}
          placeholder="Search by name or title"
          value={searchValue}
          onChange={searchHandle}
        />
      </div>

      <div className={styles.personList}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((em) => (
            <PersonCard
              key={em.id}
              {...em}
              handleInfoChange={handleInfoChange}
            />
          ))
        ) : (
          <p>No matching employees found. Try another search.</p>
        )}
      </div>
    </>
  );
};

export default PersonList;
