import { useState } from "react";
import { animalToEmoji } from "../../data/animalToEmoji.js";
import styles from "./PersonCard.module.css";
import _ from "lodash";

const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  handleInfoChange,

}) => {
  const [Editing, setEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  // object shorthand when key name = value's variable name
  const prevInfo = { salary, location, department, skills };
  const [newInfo, setNewInfo] = useState(prevInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formatedValue = value.toLowerCase();

    formatedValue =
      name === "salary"
        ? parseFloat(parseFloat(formatedValue).toFixed(2))
        : formatedValue;

    setNewInfo((prev) => ({ ...prev, [name]: formatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newInfo.salary ||
      !newInfo.location ||
      !newInfo.department ||
      !newInfo.skills
    ) {
      alert("All fields are required.");
      return;
    }

    if (!Array.isArray(newInfo.skills)) {
      newInfo.skills = newInfo.skills.split(",").map((skill) => skill.trim());
    }

    handleInfoChange(id, newInfo);
    setEditing(false);
    setSaveMessage("Saved successfully!");
    setTimeout(() => setSaveMessage(""), 1500);
  };

  // need to: npm install lodash
  const isSaveDisabled = newInfo === "" || _.isEqual(newInfo, prevInfo);

  const handleCancel = () => {
    setNewInfo(prevInfo);
    setEditing(false);
  };

  // message for recognition or probation
  const now = new Date();
  const then = new Date(startDate);
  const difference = (now - then) / (1000 * 60 * 60 * 24 * 365);
  const workingYear =
    difference >= 1 ? Math.floor(difference) : difference.toFixed(1);

  // animal icon
  let animalIcon = "";
  if (animal) {
    const animalLower = animal.toLowerCase();
    animalIcon = animalToEmoji[animalLower]
      ? animalToEmoji[animalLower]
      : animal;
  }


  return (
    <div className={styles["person-card"]}>
      <p>
        <span className={styles.name}>{name}</span>
      </p>
      <p>
        Position: <span className={styles.span}>{title}</span>
      </p>
      <p>
        Phone: <span className={styles.span}>{phone}</span>
      </p>
      <p className={styles.email}>
        Email: <span className={styles.span}>{email}</span>
      </p>
      <p>
        Favorite animal: <span className={styles.span}>{animalIcon}</span>
      </p>
      <p>
        Since: <span className={styles.span}>{startDate}</span>
      </p>
      {Editing ? (
        <div>
          <form onSubmit={handleSubmit} className={styles.editInfo}>
            <div className={styles.row}>
              <label>Salary: €</label>
              <input
                type="number"
                step="any"
                name="salary"
                value={newInfo.salary}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={newInfo.location}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <label>Department: </label>
              <input
                type="text"
                name="department"
                value={newInfo.department}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.row}>
              <label>Skills: </label>
              <textarea
                type="text"
                name="skills"
                value={newInfo.skills}
                onChange={handleChange}
                className={styles.textArea}
              ></textarea>
            </div>
            <p style={{ color: "grey", textTransform: "none" }}>
              (Enter skills in comma-seperated string, e.g., "leadership,
              communication")
            </p>
            <div className={styles["personCard-footer"]}>
              <button
                type="submit"
                disabled={isSaveDisabled}
                className={`
                  ${styles.button} + ${isSaveDisabled ? styles.disabled : ""}`}
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className={styles.button}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p>
            Salary: <span className={styles.span}>€{salary}/month</span>
          </p>
          <p>
            Location: <span className={styles.span}>{location}</span>
          </p>
          <p>
            Department: <span className={styles.span}>{department}</span>
          </p>
          <p>
            Skills:{" "}
            <span className={styles.span}>{skills && skills.join(", ")}</span>
          </p>

          {[5, 10, 15].includes(workingYear) && (
            <p className={`${styles.schedule} ${styles.recognition}`}>
              🎉 Schedule recognition meeting.
            </p>
          )}
          {workingYear <= 0.5 && (
            <p className={`${styles.schedule} ${styles.probation}`}>
              🔔 Schedule probation review.
            </p>
          )}

          <div className={styles["personCard-footer"]}>
            <button onClick={() => setEditing(true)} className={styles.button}>
              Edit
            </button>
            {saveMessage && <p className={styles.success}>{saveMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonCard;
