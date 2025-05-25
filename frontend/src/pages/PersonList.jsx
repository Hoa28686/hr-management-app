import PersonCard from "../components/PersonCard/PersonCard";
import ScrollToTop from "react-scroll-to-top";
import styles from "../components/PersonCard/PersonCard.module.css";
const PersonList = ({ employeeData, handleInfoChange, error, loading }) => {
  return (
    <>
      <h1>Employee List</h1>
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
      <ScrollToTop />
    </>
  );
};

export default PersonList;
