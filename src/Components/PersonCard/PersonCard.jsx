import { animalToEmoji } from "../../data/animalToEmoji.js";
import "./PersonCard.css";

const PersonCard = ({
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
}) => {
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
      <p>Salary: ${salary}/month</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Favorite animal: {animalIcon}</p>
      <p>Since: {startDate}</p>
      <p>Location: {location}</p>
      <p>Department: {department}</p>
      <p>Skills: {skills && skills.join(", ")}</p>

      {[5, 10, 15].includes(workingYear) && (
        <p>🎉 Schedule recognition meeting.</p>
      )}
      {workingYear <= 0.5 && <p>🔔 Schedule probation review.</p>}
    </div>
  );
};
export default PersonCard;
