import { useState } from "react";
import { animalToEmoji } from "../../data/animalToEmoji.js";
import "./PersonCard.css";
import axios from "axios";
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

  // object shorthand when key name = value's variable name
  const prevInfo = { salary, location, department, skills };
  const [newInfo, setNewInfo] = useState(prevInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formatedValue = value.toLowerCase();

    formatedValue =
      name === "email"
        ? value
        : name === "salary"
        ? parseFloat(parseFloat(formatedValue).toFixed(2))
        : formatedValue;

    setNewInfo((prev) => ({ ...prev, [name]: formatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Array.isArray(newInfo.skills)) {
      newInfo.skills = newInfo.skills.split(",").map((skill) => skill.trim());
    }
    handleInfoChange(id, newInfo);
    setEditing(false);
  };

  // need to: npm install lodash
  const isSaveDisabled = newInfo === "" || _.isEqual(newInfo, prevInfo);

  const handleCancel = () => {
    setNewInfo(prevInfo);
    setEditing(false);
  };

  // schedule meeting or review
  const now = new Date();
  const date = new Date(startDate);
  const difference = (now - date) / (1000 * 60 * 60 * 24 * 365);
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
    <div className="person-card">
      <p>
        <span className="name">{name}</span>
      </p>
      <p>
        Position: <span>{title}</span>
      </p>
      <p>
        Phone: <span>{phone}</span>
      </p>
      <p className="email">
        Email: <span>{email}</span>
      </p>
      <p>
        Favorite animal: <span>{animalIcon}</span>
      </p>
      <p>
        Since: <span>{startDate}</span>
      </p>
      {Editing ? (
        <div>
          <form onSubmit={handleSubmit} className="editInfo">
            <div className="row">
              <label>Salary: €</label>
              <input
                type="number"
                step="any"
                name="salary"
                value={newInfo.salary}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={newInfo.location}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label>Department: </label>
              <input
                type="text"
                name="department"
                value={newInfo.department}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label>Skills: </label>
              <textarea
                type="text"
                name="skills"
                value={newInfo.skills}
                onChange={handleChange}
              ></textarea>
            </div>
            <p style={{ color: "grey", textTransform: "none" }}>
              (Enter skills in comma-seperated string, e.g., "leadership,
              communication")
            </p>
            <div className="personCard-footer">
              <button
                type="submit"
                disabled={isSaveDisabled}
                className={isSaveDisabled ? "disabled" : ""}
              >
                Save
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p>
            Salary: <span>€{salary}/month</span>
          </p>
          <p>
            Location: <span>{location}</span>
          </p>
          <p>
            Department: <span>{department}</span>
          </p>
          <p>
            Skills: <span>{skills && skills.join(", ")}</span>
          </p>

          {[5, 10, 15].includes(workingYear) && (
            <p className="schedule recognition">
              🎉 Schedule recognition meeting.
            </p>
          )}
          {workingYear <= 0.5 && (
            <p className="schedule probation">🔔 Schedule probation review.</p>
          )}
          <div className="personCard-footer">
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonCard;
