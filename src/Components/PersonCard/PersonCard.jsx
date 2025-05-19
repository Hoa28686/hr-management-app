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
  setEmployeeData,
}) => {
  const [Editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  const prevInfo = { salary, location, department, skills };
  const [newInfo, setNewInfo] = useState(prevInfo);

  // object shorthand when key name = value's variable name

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formatedValue = value.toLowerCase();

    formatedValue =
      name === "salary"
        ? parseFloat(parseFloat(formatedValue).toFixed(2))
        : name == "skills"
        ? formatedValue.split(",").map((skill) => skill.trim())
        : formatedValue;
    setNewInfo((prev) => ({ ...prev, [name]: formatedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:3001/employees/${id}`, newInfo)
      .then((res) => {
        setEmployeeData((prev) =>
          prev.map((em) => (em.id === id ? res.data : em))
        );
        setMessage("Employee information updated successfuly!");
      })
      .catch((e) => console.error("Axios error: ", e.message));
    setEditing(false);
  };

  // need to: npm install lodash
  const isSaveDisabled = newInfo === "" || _.isEqual(newInfo, prevInfo);

  const now = new Date();
  const date = new Date(startDate);
  const difference = (now - date) / (1000 * 60 * 60 * 24 * 365);
  const workingYear =
    difference >= 1 ? Math.floor(difference) : difference.toFixed(1);
  // console.log(workingYear);

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
      <p>Position: {title}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Favorite animal: {animalIcon}</p>
      <p>Since: {startDate}</p>
      {Editing ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Salary: €</label>
            <input
              type="number"
              step="any"
              name="salary"
              value={newInfo.salary}
              onChange={handleChange}
            />
            <br />
            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={newInfo.location}
              onChange={handleChange}
            />
            <br />
            <label>Department: </label>
            <input
              type="text"
              name="department"
              value={newInfo.department}
              onChange={handleChange}
            />
            <br />
            <label>Skills: </label>
            <input
              type="text"
              name="skills"
              value={newInfo.skills}
              onChange={handleChange}
            />
            <p>
              (Enter skills in comma-seperated string,e.g., "Leadership,
              Communication")
            </p>
            {message && <p class="message">{message}</p>}
            <button type="submit" disabled={isSaveDisabled}>
              Save
            </button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </form>
        </div>
      ) : (
        <div>
          <p>Salary: €{salary}/month</p>
          <p>Location: {location}</p>
          <p>Department: {department}</p>
          <p>Skills: {skills && skills.join(", ")}</p>
          {[5, 10, 15].includes(workingYear) && (
            <p className="schedule recognition">
              🎉 Schedule recognition meeting.
            </p>
          )}
          {workingYear <= 0.5 && (
            <p className="schedule probation">🔔 Schedule probation review.</p>
          )}
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
export default PersonCard;
